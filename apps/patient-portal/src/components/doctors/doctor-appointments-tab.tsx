'use client';

import { Button, DatePicker, Label, ScrollArea } from '@wexelcode/components';
import {
  useCreateAppointment,
  useGetDoctorAvailability,
} from '@wexelcode/hooks';
import { Doctor } from '@wexelcode/types';
import { dateTimeDiff, dateTimeFormat, dateTimeSet } from '@wexelcode/utils';
import { CalendarPlus } from 'lucide-react';
import { signIn, useSession } from 'next-auth/react';
import { useLocale, useTranslations } from 'next-intl';
import { useState } from 'react';

import Routes from '../../constants/routes';
import { useRouter } from '../../i18n/routing';
import AppointmentsLoadingSkeleton from './appointments-loading-skeleton';
import TimeSlotGuideItem from './time-slot-guide-item';
import TimeSlotSelector from './time-slot-selector';

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

  const { push } = useRouter();

  const [date, setDate] = useState<Date>(initialDate);
  const [selectedTimeSlot, setSelectedTimeSlot] = useState<
    string | undefined
  >();

  const { data: response, isLoading } = useGetDoctorAvailability({
    id: doctor.id,
    date: date.toISOString(),
  });

  const { mutateAsync: createAppointment } = useCreateAppointment();

  const handleTimeSlotClick = (timeSlot: string) => {
    setSelectedTimeSlot(timeSlot);
  };

  const checkAvailability = (timeSlot: string) => {
    const timeSlotDate = `${dateTimeFormat(date, 'yyyy-MM-DD')} ${timeSlot}`;
    return dateTimeDiff(timeSlotDate, new Date()) > 0;
  };

  const handleOnBookAppointment = async () => {
    if (status !== 'authenticated') {
      await signIn('keycloak', { redirectTo: window.location.href });
      return;
    }

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
  };

  return (
    <div className="flex flex-col space-y-4">
      <div className="flex items-center space-x-2 py-2 border-b">
        <Label>{t('appointmentDate')}</Label>
        <div className="w-1/4">
          <DatePicker
            initialDate={initialDate}
            local={locale}
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
          {isLoading ? (
            <AppointmentsLoadingSkeleton />
          ) : (
            response?.data.timeSlots.map((timeSlot, index) => (
              <TimeSlotSelector
                key={index}
                start={timeSlot.time[0]}
                end={timeSlot.time[1]}
                available={
                  timeSlot.available && checkAvailability(timeSlot.time[0])
                }
                isSelected={selectedTimeSlot === timeSlot.time[0]}
                onSelect={handleTimeSlotClick}
              />
            ))
          )}
        </div>
      </ScrollArea>

      <Button
        className="w-full mt-auto"
        disabled={!selectedTimeSlot}
        onClick={handleOnBookAppointment}
      >
        <CalendarPlus /> {t('bookAppointment')}
      </Button>
    </div>
  );
}
