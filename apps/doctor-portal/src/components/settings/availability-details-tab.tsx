'use client';

import { DatePicker } from '@wexelcode/components';
import {
  useDeletePhysioUnavailability,
  useGetDoctorByUserId,
  useGetPhysioUnavailabilities,
  useSavePhysioUnavailability,
} from '@wexelcode/hooks';
import { useSession } from 'next-auth/react';
import { useLocale } from 'next-intl';
import { useCallback, useEffect, useMemo, useState } from 'react';

import AvailabilityLoadingSkeleton from './availability-loading-skeleton';
import { TimeSlotToggle } from './time-slot-toggle';
import { APPOINTMENT_TIME, AVAILABLE_TIME_SLOT } from './constants';

type TimeSlot = {
  time: [string, string];
  available: boolean;
  disabled: boolean;
  unavailableIds?: string[];
};

const toDateTime = (date: string, time: string) =>
  new Date(`${date}T${time}:00`);

function getLocalISODate(date: Date): string {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0'); // months are 0-indexed
  const day = String(date.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
}

function getDatesBetween(
  startDate: Date | string,
  endDate: Date | string
): string[] {
  const dates: string[] = [];

  const start = new Date(startDate);
  const end = new Date(endDate);

  // Loop through each day
  while (start <= end) {
    dates.push(getLocalISODate(start));
    start.setDate(start.getDate() + 1);
  }

  return dates;
}

export function AvailabilityDetailsTab() {
  const local = useLocale();
  const { data: userData } = useSession();
  const [selectedFromDate, setSelectedFromDate] = useState<string>(
    new Date().toLocaleDateString('sv-SE')
  );

  const [selectedToDate, setSelectedToDate] = useState<string>(
    new Date().toLocaleDateString('sv-SE')
  );

  const { data: doctorResponse, isLoading: isLoadingPhysio } =
    useGetDoctorByUserId(userData?.user.id);
  const {
    data: unavailabilityResponse,
    isLoading: isLoadingUnavailability,
    refetch,
  } = useGetPhysioUnavailabilities(
    {
      physioId: doctorResponse?.data?.id || '',
      startDateRange: `${selectedFromDate}:${selectedToDate}`,
      page: 1,
      limit: 100,
    },
    false
  );
  const { mutateAsync: saveUnavailability, isPending: isCreating } =
    useSavePhysioUnavailability();
  const { mutateAsync: deleteUnavailability, isPending: isDeleting } =
    useDeletePhysioUnavailability();

  const [availableSlots, setAvailableSlots] = useState<TimeSlot[]>(
    AVAILABLE_TIME_SLOT as TimeSlot[]
  );

  const localAppointments = useMemo(() => {
    return (
      unavailabilityResponse?.results.map((unavailability) => {
        const start = new Date(unavailability.startTime);
        const end = new Date(start.getTime() + APPOINTMENT_TIME * 60 * 1000);
        return { unavailableIds: unavailability.id, start, end };
      }) ?? []
    );
  }, [unavailabilityResponse]);

  useEffect(() => {
    refetch();
  }, [doctorResponse?.data?.id, selectedFromDate, selectedToDate]);

  useEffect(() => {
    const slots = (AVAILABLE_TIME_SLOT as TimeSlot[]).map((slot) => {
      const [startStr, endStr] = slot.time;

      const start = toDateTime(selectedFromDate, startStr);
      const today = new Date();

      if (selectedFromDate === selectedToDate) {
        const end = toDateTime(selectedFromDate, endStr);
        if (start < today) {
          slot.disabled = true;
        } else {
          slot.disabled = false;
        }
        const found = localAppointments?.find((app) => {
          return app.start < end && app.end > start;
        });

        const isOverlapping = Boolean(found);

        return {
          ...slot,
          available: !isOverlapping,
          unavailableIds: found && [found.unavailableIds],
        };
      } else {
        slot.disabled = false;
        const dates = getDatesBetween(selectedFromDate, selectedToDate).map(
          (date) => ({
            startDate: toDateTime(date, startStr),
            endDate: toDateTime(date, endStr),
          })
        );

        const foundUnbailableList: string[] = [];

        dates.forEach((date) => {
          const found = localAppointments?.find((app) => {
            return app.start < date.endDate && app.end > date.startDate;
          });
          if (found) {
            foundUnbailableList.push(found.unavailableIds);
          }
        });

        return {
          ...slot,
          available:
            foundUnbailableList.length !==
            (start < today ? dates.length - 1 : dates.length),
          unavailableIds: foundUnbailableList,
        };
      }
    });

    setAvailableSlots(slots);
  }, [localAppointments, selectedFromDate]);

  const handleToggle = useCallback(
    async (slotKey: string, isActive: boolean) => {
      const index = availableSlots.findIndex(
        (slot) => `${slot.time[0]}-${slot.time[1]}` === slotKey
      );
      if (index === -1 || !doctorResponse?.data?.id) return;

      const currentSlot = availableSlots[index];
      const physioId = doctorResponse.data.id;
      const dates = getDatesBetween(selectedFromDate, selectedToDate);

      if (currentSlot.unavailableIds && !isActive) {
        setAvailableSlots((prev) => {
          const newSlots = [...prev];
          newSlots[index] = {
            ...newSlots[index],
            available: true,
            unavailableIds: undefined,
          };
          return newSlots;
        });
        currentSlot.unavailableIds.forEach((unavailableIds) => {
          deleteUnavailability({ id: unavailableIds, physioId });
        });
      } else {
        setAvailableSlots((prev) => {
          const newSlots = [...prev];
          newSlots[index] = {
            ...newSlots[index],
            available: false,
          };
          return newSlots;
        });
        const dates = getDatesBetween(selectedFromDate, selectedToDate).map(
          (date) => ({
            startDate: toDateTime(date, currentSlot.time[0]).toISOString(),
            endDate: toDateTime(date, currentSlot.time[1]).toISOString(),
          })
        );

        dates.forEach(async (date) => {
          const startTime = date.startDate;
          const endTime = date.endDate;
          if (new Date(startTime) < new Date()) return;

          const result = await saveUnavailability({
            physioId,
            startTime,
            endTime,
          });
          setAvailableSlots((prev) => {
            const newSlots = [...prev];
            newSlots[index] = {
              ...newSlots[index],
              unavailableIds: newSlots[index].unavailableIds
                ? [...newSlots[index].unavailableIds, result!.id]
                : [result!.id],
            };
            return newSlots;
          });
        });
      }
    },
    [
      availableSlots,
      doctorResponse,
      selectedFromDate,
      deleteUnavailability,
      saveUnavailability,
    ]
  );
  const selectedFromDateObj = useMemo(
    () => new Date(selectedFromDate),
    [selectedFromDate]
  );
  const selectedToDateObj = useMemo(
    () => new Date(selectedToDate),
    [selectedToDate]
  );
  const selectedToDateAfterWeekObj = useMemo(
    () => new Date(selectedToDate),
    [selectedToDate]
  );
  selectedToDateAfterWeekObj.setDate(selectedFromDateObj.getDate() + 7);

  return (
    <div className="bg-card rounded-lg shadow-md overflow-hidden">
      <div className="p-4 border-b w-full flex justify-start mt-2">
        <div className=" w-fit flex flex-row gap-12">
          <div className=" text-[13px]">
            <p className=" mb-1">From Date:</p>
            <DatePicker
              local={local}
              initialDate={selectedFromDateObj}
              startDate={new Date()}
              onSelect={(e) => {
                setSelectedFromDate(e!.toLocaleDateString('sv-SE'));
                setSelectedToDate(e!.toLocaleDateString('sv-SE'));
              }}
            />
          </div>
          <div className=" text-[13px]">
            <p className=" mb-1">To Date:</p>
            <DatePicker
              local={local}
              initialDate={selectedToDateObj}
              toDate={selectedToDateAfterWeekObj}
              startDate={selectedFromDateObj}
              onSelect={(e) =>
                setSelectedToDate(e!.toLocaleDateString('sv-SE'))
              }
            />
          </div>
        </div>
      </div>
      {isLoadingUnavailability || isLoadingPhysio ? (
        <div className="p-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 md:gap-3">
          <AvailabilityLoadingSkeleton />
        </div>
      ) : (
        <>
          <div className="p-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 md:gap-3">
            {availableSlots.map(({ time, disabled, available }) => {
              const slotKey = `${time[0]}-${time[1]}`;
              return (
                <TimeSlotToggle
                  key={slotKey}
                  startTime={time[0]}
                  endTime={time[1]}
                  isAvailable={available}
                  onToggle={() => handleToggle(slotKey, available)}
                  disabled={disabled}
                  loading={isCreating || isDeleting}
                />
              );
            })}
          </div>
          <div className="bg-muted p-4 border-t">
            <div className="flex items-center justify-between">
              <span className="text-sm text-muted-foreground">
                {
                  Object.values(availableSlots).filter((e) => e.available)
                    .length
                }{' '}
                of {availableSlots.length} slots available
              </span>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
