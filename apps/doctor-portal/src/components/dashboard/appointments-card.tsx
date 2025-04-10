'use client';

import { Text } from '@wexelcode/components';
import { useGetAllAppointments } from '@wexelcode/hooks';
import { dateTimeSet } from '@wexelcode/utils';
import { CalendarIcon } from 'lucide-react';
import { useSession } from 'next-auth/react';
import { useTranslations } from 'next-intl';

const now = new Date();

export function AppointmentsCard() {
  const t = useTranslations('dashboard.appointmentsCard');

  const { data: userData } = useSession();

  const startDate = dateTimeSet(now, {
    hour: 0,
    minute: 0,
    second: 0,
  }).toISOString();

  const endDate = dateTimeSet(now, {
    hour: 23,
    minute: 59,
    second: 59,
  }).toISOString();

  const { data: appointmentsResponse } = useGetAllAppointments({
    page: 1,
    limit: 10,
    physioUserId: userData?.user.id,
    includes: ['patient-user'],
    startDate,
    endDate,
  });

  return (
    <div className="flex flex-col bg-white shadow-md rounded-lg p-4 space-y-4">
      <div className="flex justify-between items-center">
        <Text variant="h4">{t('title')}</Text>
        <div className="flex items-center justify-center w-10 h-10 bg-border rounded-full">
          <CalendarIcon />
        </div>
      </div>
      <Text variant="h3" weight="bold">
        {appointmentsResponse?.totalResults}
      </Text>
    </div>
  );
}
