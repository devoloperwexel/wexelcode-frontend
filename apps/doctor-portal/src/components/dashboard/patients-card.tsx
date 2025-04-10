'use client';

import { Text } from '@wexelcode/components';
import { useGetAllPatients } from '@wexelcode/hooks';
import { UsersIcon } from 'lucide-react';
import { useSession } from 'next-auth/react';
import { useTranslations } from 'next-intl';

export function PatientsCard() {
  const t = useTranslations('dashboard.patientsCard');

  const { data: userData } = useSession();

  const { data: patientsResponse } = useGetAllPatients({
    page: 1,
    limit: 1,
    physioUserId: userData?.user.id,
  });

  return (
    <div className="flex flex-col bg-white shadow-md rounded-lg p-4 space-y-4">
      <div className="flex justify-between items-center">
        <Text variant="h4">{t('title')}</Text>
        <div className="flex items-center justify-center w-10 h-10 bg-border rounded-full">
          <UsersIcon />
        </div>
      </div>
      <Text variant="h3" weight="bold">
        {patientsResponse?.totalResults}
      </Text>
    </div>
  );
}
