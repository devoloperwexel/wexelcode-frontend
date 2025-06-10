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
import { useState } from 'react';

import { useScreeningDialogStore } from '../../app/store';
import Routes from '../../constants/routes';
import { useRouter } from '../../i18n/routing';
import { QuestionnaireDialog } from '../questions';
import AppointmentsLoadingSkeleton from './appointments-loading-skeleton';
import ScreeningRequiredDialog from './screening-required-dialog';
import TimeSlotGuideItem from './time-slot-guide-item';
import TimeSlotSelector from './time-slot-selector';

const AVAILABLE_TIME_SLOT = [
  { time: ['06:00', '06:30'], available: true },
  { time: ['07:00', '07:30'], available: true },
  { time: ['08:00', '08:30'], available: true },
  { time: ['09:00', '09:30'], available: true },
  { time: ['10:00', '10:30'], available: true },
  { time: ['11:00', '11:30'], available: true },
  { time: ['12:00', '12:30'], available: true },
  { time: ['13:00', '13:30'], available: true },
  { time: ['14:00', '14:30'], available: true },
  { time: ['15:00', '15:30'], available: true },
  { time: ['16:00', '16:30'], available: true },
  { time: ['17:00', '17:30'], available: true },
  { time: ['18:00', '18:30'], available: true },
  { time: ['19:00', '19:30'], available: true },
  { time: ['20:00', '20:30'], available: true },
  { time: ['21:00', '21:30'], available: true },
  { time: ['22:00', '22:30'], available: true },
];

const APPOINTMENT_TIME = 30;

interface DoctorAppointmentsTabProps {
  doctor: Doctor;
  initialDate: Date;
}

export function DoctorAppointmentsTab({
  doctor,
  initialDate,
}: DoctorAppointmentsTabProps) {
  const t = useTranslations('doctors.doctorPage');
  const locale = useLocale();
  const { status, data } = useSession();
  const [isBookingProgress, setBookingProgress] = useState(false);

  const { push } = useRouter();

  const markUnavailableSlots = (appointments: Date[], dateStr: string) => {
    // Convert appointments to local time ranges
    const localAppointments = appointments.map((iso) => {
      const start = new Date(iso);
      const end = new Date(start.getTime() + APPOINTMENT_TIME * 60 * 1000); // add appointment duration
      return { start, end };
    });
    console.log(localAppointments);

    return AVAILABLE_TIME_SLOT.map((slot) => {
      const [startStr, endStr] = slot.time;

      const start = new Date(`${dateStr}T${startStr}:00`);
      const end = new Date(`${dateStr}T${endStr}:00`);
      if (start < new Date()) {
        return {
          ...slot,
          available: false,
        };
      }
      const isOverlapping = localAppointments.some((app) => {
        return app.start < end && app.end > start;
      });

      return {
        ...slot,
        available: !isOverlapping,
      };
    });
  };

  const [date, setDate] = useState<Date>(initialDate);
  const [isOpenScreeningRequired, setOpenScreeningRequired] = useState(false);
  const [selectedTimeSlot, setSelectedTimeSlot] = useState<
    string | undefined
  >();

  const { data: response, isLoading } = useGetPhysioAvailabilityCheck({
    id: doctor.id,
    date: date.toDateString(),
  });

  const { mutateAsync: createAppointment } = useCreateAppointment();
  const { isOpen, openDialog } = useScreeningDialogStore();

  const handleTimeSlotClick = (timeSlot: string) => {
    setSelectedTimeSlot(timeSlot);
  };
  const userId = data?.user.id;

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
  const now = new Date();
  const sixMonthsLater = new Date(now);
  sixMonthsLater.setMonth(sixMonthsLater.getMonth() + 6);

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
