'use client';

import { useCallback, useEffect, useMemo, useState } from 'react';

import { TimeSlotToggle } from './time-slot-toggle';
import {
  useGetDoctorByUserId,
  useSavePhysioUnavailability,
  useGetPhysioUnavailabilities,
  useDeletePhysioUnavailability,
} from '@wexelcode/hooks';
import { useSession } from 'next-auth/react';
import AvailabilityLoadingSkeleton from './availability-loading-skeleton';

type TimeSlot = {
  time: [string, string];
  available: boolean;
  disabled: boolean;
  unavailableId?: string;
};

const APPOINTMENT_TIME = 30;
const AVAILABLE_TIME_SLOT: TimeSlot[] = [
  {
    time: ['06:00', '06:30'],
    available: true,
    disabled: false,
  },
  {
    time: ['07:00', '07:30'],
    available: true,
    disabled: false,
  },
  {
    time: ['08:00', '08:30'],
    available: true,
    disabled: false,
  },
  {
    time: ['09:00', '09:30'],
    available: true,
    disabled: false,
  },
  {
    time: ['10:00', '10:30'],
    available: true,
    disabled: false,
  },
  {
    time: ['11:00', '11:30'],
    available: true,
    disabled: false,
  },
  {
    time: ['12:00', '12:30'],
    available: true,
    disabled: false,
  },
  {
    time: ['13:00', '13:30'],
    available: true,
    disabled: false,
  },
  {
    time: ['14:00', '14:30'],
    available: true,
    disabled: false,
  },
  {
    time: ['15:00', '15:30'],
    available: true,
    disabled: false,
  },
  {
    time: ['16:00', '16:30'],
    available: true,
    disabled: false,
  },
  {
    time: ['17:00', '17:30'],
    available: true,
    disabled: false,
  },
  {
    time: ['18:00', '18:30'],
    available: true,
    disabled: false,
  },
  {
    time: ['19:00', '19:30'],
    available: true,
    disabled: false,
  },
  {
    time: ['20:00', '20:30'],
    available: true,
    disabled: false,
  },
  {
    time: ['21:00', '21:30'],
    available: true,
    disabled: false,
  },
  {
    time: ['22:00', '22:30'],
    available: true,
    disabled: false,
  },
  {
    time: ['22:30', '23:00'],
    available: true,
    disabled: false,
  },
];

const toDateTime = (date: string, time: string) =>
  new Date(`${date}T${time}:00`);

export function AvailabilityDetailsTab() {
  const { data: userData } = useSession();
  const [selectedDate, setSelectedDate] = useState<string>(
    new Date().toLocaleDateString('sv-SE')
  );

  const { data: doctorResponse, isLoading: isLoadingPhysio } =
    useGetDoctorByUserId(userData?.user.id);
  const { data: unavailabilityResponse, isLoading: isLoadingUnavailability } =
    useGetPhysioUnavailabilities(
      {
        physioId: doctorResponse?.data?.id || '',
        startTime: selectedDate,
        page: 1,
        limit: 20,
      },
      !!doctorResponse?.data?.id && !!selectedDate && !isLoadingPhysio
    );
  const { mutateAsync: saveUnavailability, isPending: isCreating } =
    useSavePhysioUnavailability();
  const { mutateAsync: deleteUnavailability, isPending: isDeleting } =
    useDeletePhysioUnavailability();

  const [availableSlots, setAvailableSlots] = useState(AVAILABLE_TIME_SLOT);

  const localAppointments = useMemo(() => {
    return (
      unavailabilityResponse?.results.map((unavailability) => {
        const start = new Date(unavailability.startTime);
        const end = new Date(start.getTime() + APPOINTMENT_TIME * 60 * 1000);
        return { unavailableId: unavailability.id, start, end };
      }) ?? []
    );
  }, [unavailabilityResponse]);

  useEffect(() => {
    const slots = AVAILABLE_TIME_SLOT.map((slot) => {
      const [startStr, endStr] = slot.time;

      const start = toDateTime(selectedDate, startStr);
      const end = toDateTime(selectedDate, endStr);
      const today = new Date();

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
        unavailableId: found?.unavailableId,
      };
    });

    setAvailableSlots(slots);
  }, [localAppointments, selectedDate]);

  const handleToggle = useCallback(
    async (slotKey: string) => {
      const index = availableSlots.findIndex(
        (slot) => `${slot.time[0]}-${slot.time[1]}` === slotKey
      );
      if (index === -1 || !doctorResponse?.data?.id) return;

      const currentSlot = availableSlots[index];
      const physioId = doctorResponse.data.id;

      if (currentSlot.unavailableId) {
        await deleteUnavailability({ id: currentSlot.unavailableId, physioId });

        setAvailableSlots((prev) => {
          const newSlots = [...prev];
          newSlots[index] = {
            ...newSlots[index],
            available: true,
            unavailableId: undefined,
          };
          return newSlots;
        });
      } else {
        const startTime = toDateTime(
          selectedDate,
          currentSlot.time[0]
        ).toISOString();
        const endTime = toDateTime(
          selectedDate,
          currentSlot.time[1]
        ).toISOString();

        const result = await saveUnavailability({
          physioId,
          startTime,
          endTime,
        });

        setAvailableSlots((prev) => {
          const newSlots = [...prev];
          newSlots[index] = {
            ...newSlots[index],
            available: false,
            unavailableId: result?.id,
          };
          return newSlots;
        });
      }
    },
    [
      availableSlots,
      doctorResponse,
      selectedDate,
      deleteUnavailability,
      saveUnavailability,
    ]
  );

  return (
    <div className="bg-card rounded-lg shadow-md overflow-hidden">
      <div className="p-4 border-b">
        <input
          type="date"
          value={selectedDate}
          min={new Date().toLocaleDateString('sv-SE')}
          onChange={(e) => setSelectedDate(e.target.value)}
          className="w-full p-2 rounded-md bg-secondary text-secondary-foreground"
        />
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
                  onToggle={() => handleToggle(slotKey)}
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
