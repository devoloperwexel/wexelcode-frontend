'use client';

import { Button, DataTable, Text, UserAvatar } from '@wexelcode/components';
import { useGetAllAppointments } from '@wexelcode/hooks';
import { dateTimeFormat, dateTimeSet } from '@wexelcode/utils';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useSession } from 'next-auth/react';
import { useLocale, useTranslations } from 'next-intl';

import Routes from '../../constants/routes';
import { AppointmentStatusBadge } from '../appointments';

const now = new Date();

export function AppointmentsTable() {
  const t = useTranslations('dashboard.appointmentsTable');
  const tAppointments = useTranslations('appointments');
  const language = useLocale()

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

  const router = useRouter();

  const { data: appointmentsResponse } = useGetAllAppointments({
    page: 1,
    limit: 10,
    physioUserId: userData?.user.id,
    includes: ['patient-user'],
    sortBy: 'appointmentTime:desc',
    startDate,
    endDate,
  });

  return (
    <div className="flex flex-col  bg-white shadow-md rounded-lg p-4 space-y-4">
      <Text variant="h4">{t('title')}</Text>

      <DataTable
        data={appointmentsResponse?.results || []}
        onRowClick={(row) => {
          const { id, patientUserId } = row;
          router.push(`${Routes.appointments}/${patientUserId}/${id}`);
        }}
        columns={[
          {
            accessorKey: 'id',
            header: tAppointments('table.header.patient'),
            cell: ({ row }) => {
              const data = row.original.patientUser;
              return (
                <div className="flex items-center space-x-2">
                  <UserAvatar name={data?.firstName} className="w-10 h-10" />
                  <Text className="capitalize">{`${data?.firstName} ${data?.lastName}`}</Text>
                </div>
              );
            },
          },
          {
            accessorKey: 'date',
            header: tAppointments('table.header.date'),
            cell: ({ row }) => {
              const data = row.original;
              return (
                <Text>
                  {dateTimeFormat(data.appointmentTime, 'Do MMMM, yyyy', language)}
                </Text>
              );
            },
          },
          {
            accessorKey: 'Time',
            header: tAppointments('table.header.time'),
            cell: ({ row }) => {
              const data = row.original;
              return (
                <Text>{dateTimeFormat(data.appointmentTime, 'HH:mm')}</Text>
              );
            },
          },
          {
            accessorKey: 'status',
            header: tAppointments('table.header.status'),
            cell: ({ row }) => {
              const data = row.original;
              return <AppointmentStatusBadge datetime={data.appointmentTime} />;
            },
          },
        ]}
      />

      <Link href={Routes.appointments} className="w-full">
        <Button variant="link" className="w-full">
          {t('viewAll')}
        </Button>
      </Link>
    </div>
  );
}
