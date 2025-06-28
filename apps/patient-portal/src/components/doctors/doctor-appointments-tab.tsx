'use client';

import { GetAnswersSummary } from '@wexelcode/api';
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
import ScreeningRequiredDialog from './screening-required-dialog';
import TimeSlotGuideItem from './time-slot-guide-item';
import TimeSlotSelector from './time-slot-selector';
import { APPOINTMENT_TIME, AVAILABLE_TIME_SLOT } from './constant';

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
  return (
    now.getHours() < 11 || (now.getHours() === 11 && now.getMinutes() < 30)
  );
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
        ? AVAILABLE_TIME_SLOT.slice(0, 24)
        : AVAILABLE_TIME_SLOT.slice(24);

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
          available: !isOverlapping,
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
        <div className="grid grid-cols-3 gap-4">
          {isLoading || !response?.data?.unavailabilityTimes ? (
            <AppointmentsLoadingSkeleton />
          ) : (
            markUnavailableSlots(
              response?.data.unavailabilityTimes,
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
      <div className=" flex justify-between items-end space-x-2 pb-4">
        <Button
          className="w-24 h-8 mt-auto bg-white bottom-1 border-2 border-primary text-primary hover:text-white"
          disabled={isMorningTimes || (isToday(date) ? !isMorning() : false)}
          onClick={handleMorningTimes}
        >
          {'Previous'}
        </Button>
        <Button
          className="w-24 h-8 mt-auto bg-white bottom-1 border-2 border-primary text-primary hover:text-white"
          disabled={!isMorningTimes}
          onClick={handleMorningTimes}
        >
          {'Next'}
        </Button>
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
