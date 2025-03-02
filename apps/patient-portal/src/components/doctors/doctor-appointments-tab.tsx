import { Button, DatePicker, Label, ScrollArea } from '@wexelcode/components';
import { useGetDoctorAvailability } from '@wexelcode/hooks';
import { useTranslations } from 'next-intl';
import { useState } from 'react';

import { AppointmentsLoadingSkeleton } from '.';

interface DoctorAppointmentsTabProps {
  doctorId: string;
  initialDate: Date;
}

export function DoctorAppointmentsTab({
  doctorId,
  initialDate,
}: DoctorAppointmentsTabProps) {
  const t = useTranslations('doctors.doctorPage');

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

  return (
    <div className="space-y-4">
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

      <ScrollArea className="h-[600px]">
        <div className="grid grid-cols-3 gap-4">
          {isLoading ? (
            <AppointmentsLoadingSkeleton />
          ) : (
            response?.data.timeSlots.map((timeSlot, index) => (
              <div
                key={index}
                className={`flex justify-center border p-2 hover:bg-border rounded-md cursor-pointer ${
                  timeSlot.time[0] === selectedTimeSlot ? 'bg-border' : ''
                }`}
                onClick={() => handleTimeSlotClick(timeSlot.time[0])}
              >
                <p>
                  {timeSlot.time[0]} -{timeSlot.time[1]}
                </p>
              </div>
            ))
          )}
        </div>
      </ScrollArea>

      <Button className="w-full" disabled={!selectedTimeSlot}>
        {t('bookAppointment')}
      </Button>
    </div>
  );
}
