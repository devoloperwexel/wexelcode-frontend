'use client';

import { GetAnswersSummary, GetUserTotalCredits } from '@wexelcode/api';
import {
  Button,
  DatePicker,
  Dialog,
  Label,
  ScrollArea,
} from '@wexelcode/components';
import {
  useCreateAppointment,
  useGetPhysioAvailabilityCheck,
} from '@wexelcode/hooks';
import { Doctor } from '@wexelcode/types';
import { dateTimeFormat, dateTimeSet } from '@wexelcode/utils';
import { CalendarPlus } from 'lucide-react';
import { signIn, useSession } from 'next-auth/react';
import { useLocale, useTranslations } from 'next-intl';
import { useCallback, useEffect, useMemo, useState } from 'react';

import { useScreeningDialogStore } from '../../app/store';
import Routes from '../../constants/routes';
import { useRouter } from '../../i18n/routing';
import { QuestionnaireDialog } from '../questions';
import AppointmentsLoadingSkeleton from './appointments-loading-skeleton';
import { APPOINTMENT_TIME, AVAILABLE_TIME_SLOT } from './constant';
import ScreeningRequiredDialog from './screening-required-dialog';
import TimeSlotGuideItem from './time-slot-guide-item';
import TimeSlotSelector from './time-slot-selector';

interface DoctorAppointmentsTabProps {
  doctor: Doctor;
  initialDate: Date;
}

const isToday = (date: Date) => {
  const now = new Date();
  return (
    date.getFullYear() === now.getFullYear() &&
    date.getMonth() === now.getMonth() &&
    date.getDate() === now.getDate()
  );
};

const isMorning = () => {
  const now = new Date();
  return now.getHours() < 14;
};

export function DoctorAppointmentsTab({
  doctor,
  initialDate,
}: DoctorAppointmentsTabProps) {
  const t = useTranslations('doctors.doctorPage');
  const locale = useLocale();
  const { status, data } = useSession();
  const [isBookingProgress, setBookingProgress] = useState(false);
  const [date, setDate] = useState<Date>(initialDate);
  const [isMorningTimes, setIsMorningTimes] = useState(
    isToday(date) ? isMorning() : true
  );
  const [isOpenScreeningRequired, setOpenScreeningRequired] = useState(false);
  const [selectedTimeSlot, setSelectedTimeSlot] = useState<
    string | undefined
  >();
  const userId = data?.user.id;
  //
  const { push } = useRouter();
  useEffect(() => {
    setIsMorningTimes(isToday(date) ? isMorning() : true);
  }, [date]);
  // Memoized constants
  const now = useMemo(() => new Date(), []);
  const sixMonthsLater = useMemo(() => {
    const future = new Date(now);
    future.setMonth(future.getMonth() + 6);
    return future;
  }, [now]);
  // Mark unavailable time slots based on appointments and current time
  const markUnavailableSlots = useCallback(
    (appointments: Date[], dateStr: string) => {
      const localAppointments = appointments.map((iso) => {
        const start = new Date(iso);
        const end = new Date(start.getTime() + APPOINTMENT_TIME * 60 * 1000);
        return { start, end };
      });

      const availableSlotWindow = isMorningTimes
        ? AVAILABLE_TIME_SLOT.slice(0, 14)
        : AVAILABLE_TIME_SLOT.slice(14);

      return availableSlotWindow.map((slot) => {
        const [startStr, endStr] = slot.time;
        const start = new Date(`${dateStr}T${startStr}:00`);
        const end = new Date(`${dateStr}T${endStr}:00`);

        if (start < now) {
          return {
            ...slot,
            available: false,
          };
        }

        const isOverlapping = localAppointments.some(
          (app) => app.start < end && app.end > start
        );

        return {
          ...slot,
          available: isOverlapping,
        };
      });
    },
    [isMorningTimes, now]
  );

  const { data: response, isLoading } = useGetPhysioAvailabilityCheck({
    id: doctor.id,
    date: date.toDateString(),
  });

  const { mutateAsync: createAppointment } = useCreateAppointment();
  const { isOpen, openDialog } = useScreeningDialogStore();

  const handleTimeSlotClick = (timeSlot: string) => {
    setSelectedTimeSlot(timeSlot);
  };

  const handleScreeningRequiredCancel = () => setOpenScreeningRequired(false);
  const handleScreeningRequiredComplete = () => {
    setOpenScreeningRequired(false);
    openDialog();
  };

  const handleOnBookAppointment = async () => {
    setBookingProgress(true);
    if (status !== 'authenticated') {
      await signIn('keycloak', { redirectTo: window.location.href });
      return;
    }
    //
    const credits = (await GetUserTotalCredits({ userId })) as Awaited<
      ReturnType<typeof GetUserTotalCredits>
    >;
    if (!credits?.totalCredits) {
      push(Routes.packages);
      return;
    }
    //
    const answerSummary = (await GetAnswersSummary({ userId })) as Awaited<
      ReturnType<typeof GetAnswersSummary>
    >;

    if (
      !answerSummary?.completedPercentage ||
      answerSummary?.completedPercentage < 100
    ) {
      setBookingProgress(false);
      setOpenScreeningRequired(true);
    } else {
      if (!selectedTimeSlot) return;

      const [h, m] = selectedTimeSlot.split(':');

      const appointmentTime = dateTimeSet(date, {
        hour: parseInt(h),
        minute: parseInt(m),
      });

      const response = await createAppointment({
        userId: data?.user.id,
        physioUserId: doctor.userId,
        notes: '',
        appointmentTime: appointmentTime.toISOString(),
      });

      push(`${Routes.appointments}/${response?.id}`);
      setBookingProgress(false);
    }
  };

  const handleMorningTimes = () => setIsMorningTimes((prev) => !prev);

  return (
    <div className="flex flex-col space-y-4">
      <div className="flex items-center space-x-2 py-2 border-b">
        <Dialog open={isOpen}>
          <QuestionnaireDialog />
        </Dialog>
        {isOpenScreeningRequired && (
          <ScreeningRequiredDialog
            onCancel={handleScreeningRequiredCancel}
            onCompleteScreening={handleScreeningRequiredComplete}
          />
        )}
        <Label>{t('appointmentDate')}</Label>
        <div className="w-1/4">
          <DatePicker
            initialDate={initialDate}
            local={locale}
            startDate={new Date()}
            toDate={sixMonthsLater}
            onSelect={(date) => {
              if (!date) return;
              setDate(date);
            }}
          />
        </div>
      </div>

      <div className="flex space-x-4">
        <TimeSlotGuideItem title={t('selected')} status="selected" />
        <TimeSlotGuideItem title={t('available')} status="available" />
        <TimeSlotGuideItem title={t('unavailable')} status="unavailable" />
      </div>

      <ScrollArea className="flex-grow">
        <div className="grid grid-cols-2 gap-4">
          {isLoading || !response?.data?.availabilityTimes ? (
            <AppointmentsLoadingSkeleton />
          ) : (
            markUnavailableSlots(
              response?.data.availabilityTimes,
              dateTimeFormat(date, 'YYYY-MM-DD')
            ).map((timeSlot, index) => (
              <TimeSlotSelector
                key={index}
                start={timeSlot.time[0]}
                end={timeSlot.time[1]}
                available={timeSlot.available}
                isSelected={selectedTimeSlot === timeSlot.time[0]}
                onSelect={handleTimeSlotClick}
              />
            ))
          )}
        </div>
      </ScrollArea>
      <div className=" flex justify-end items-end space-x-2 pb-4">
        <label className="inline-flex items-center cursor-pointer">
          <input
            type="checkbox"
            className="sr-only peer"
            checked={isMorningTimes}
            onChange={handleMorningTimes}
            disabled={isToday(date) ? !isMorning() : false}
          />
          <div
            className={`relative w-11 h-6 bg-primary rounded-full dark:bg-primary peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-red-500 dark:peer-checked:bg-red-500 cursor-${
              isToday(date) && !isMorning() ? 'not-allowed' : 'pointer'
            }`}
          ></div>
          <span className="ms-3 text-md font-semibold text-gray-900">
            {isMorningTimes ? t('morningSlots') : t('eveningSlots')}
          </span>
        </label>
      </div>
      <Button
        className="w-full mt-auto"
        disabled={!selectedTimeSlot || isBookingProgress}
        loading={isBookingProgress}
        onClick={handleOnBookAppointment}
      >
        <CalendarPlus /> {t('bookAppointment')}
      </Button>
    </div>
  );
}
