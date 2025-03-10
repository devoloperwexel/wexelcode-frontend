import { Button, DatePicker, Label, ScrollArea } from '@wexelcode/components';
import { useGetDoctorAvailability } from '@wexelcode/hooks';
import { CalendarPlus } from 'lucide-react';
import { useTranslations } from 'next-intl';
import { useState } from 'react';

import Routes from '../../constants/routes';
import { useRouter } from '../../i18n/routing';
import AppointmentsLoadingSkeleton from './appointments-loading-skeleton';
import TimeSlotGuideItem from './time-slot-guide-item';
import TimeSlotSelector from './time-slot-selector';

interface DoctorAppointmentsTabProps {
  doctorId: string;
  initialDate: Date;
}

export function DoctorAppointmentsTab({
  doctorId,
  initialDate,
}: DoctorAppointmentsTabProps) {
  const t = useTranslations('doctors.doctorPage');

  const { push } = useRouter();

  const [date, setDate] = useState<Date>(initialDate);
  const [selectedTimeSlot, setSelectedTimeSlot] = useState<
    string | undefined
  >();

  const { data: response, isLoading } = useGetDoctorAvailability({
    id: doctorId,
    date: date.toISOString(),
  });

  const handleTimeSlotClick = (timeSlot: string) => {
    setSelectedTimeSlot(timeSlot);
  };

  const handleOnBookAppointment = () => {
    push(Routes.appointments);
  };

  return (
    <div className="flex flex-col space-y-4">
      <div className="flex items-center space-x-2 py-2 border-b">
        <Label>{t('appointmentDate')}</Label>
        <div className="w-1/4">
          <DatePicker
            initialDate={initialDate}
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
        disabled={!selectedTimeSlot}
        onClick={handleOnBookAppointment}
      >
        <CalendarPlus /> {t('bookAppointment')}
      </Button>
    </div>
  );
}
