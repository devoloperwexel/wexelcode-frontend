'use client';

import {
  DataTable,
  DropdownSelector,
  Input,
  Pagination,
  Text,
  UserAvatar,
} from '@wexelcode/components';
import { useGetAllAppointments, useQueryParams } from '@wexelcode/hooks';
import { dateTimeFormat, dateTimeSubtract } from '@wexelcode/utils';
import { useRouter } from 'next/navigation';
import { useSession } from 'next-auth/react';
import { useTranslations } from 'next-intl';

import { AppointmentStatusBadge } from '../../components/appointments';
import Routes from '../../constants/routes';

const now = dateTimeSubtract(new Date(), 30, 'minutes').toISOString();

export default function AppointmentsPageContent() {
  const t = useTranslations('appointments');

  const { data: userData } = useSession();

  const router = useRouter();

  const queryParams = useQueryParams();

  const { data: appointmentsResponse } = useGetAllAppointments({
    page: queryParams.getInt('page') || 1,
    limit: queryParams.getInt('limit') || 10,
    physioUserId: userData?.user.id,
    includes: ['patient-user'],
    startDate: queryParams.getString('status') === 'upcoming' ? now : undefined,
    endDate: queryParams.getString('status') === 'past' ? now : undefined,
    sortBy: 'appointmentTime:desc',
  });

  return (
    <div className="flex flex-col justify-start space-y-2 h-full">
      <div className="flex items-center justify-between">
        <div className="w-1/2">
          <Input placeholder="Search" />
        </div>
        <div className="w-1/4">
          <DropdownSelector
            options={['all', 'upcoming', 'past'].map((opt) => ({
              label: t(`status.${opt}`),
              value: opt,
            }))}
            value={queryParams.getString('status') || 'all'}
            onChange={(value) => queryParams.set('status', value)}
          />
        </div>
      </div>
      <div className="flex-grow">
        <DataTable
          data={appointmentsResponse?.results || []}
          onRowClick={(row) => {
            const { id, patientUserId } = row;
            router.push(`${Routes.appointments}/${patientUserId}/${id}`);
          }}
          columns={[
            {
              accessorKey: 'id',
              header: t('table.header.patient'),
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
              header: t('table.header.date'),
              cell: ({ row }) => {
                const data = row.original;
                return (
                  <Text>
                    {dateTimeFormat(data.appointmentTime, 'Do MMMM, yyyy')}
                  </Text>
                );
              },
            },
            {
              accessorKey: 'Time',
              header: t('table.header.time'),
              cell: ({ row }) => {
                const data = row.original;
                return (
                  <Text>{dateTimeFormat(data.appointmentTime, 'HH:mm')}</Text>
                );
              },
            },
            {
              accessorKey: 'status',
              header: t('table.header.status'),
              cell: ({ row }) => {
                const data = row.original;
                return (
                  <AppointmentStatusBadge datetime={data.appointmentTime} />
                );
              },
            },
          ]}
        />
      </div>

      <Pagination totalPages={appointmentsResponse?.totalPages || 0} />
    </div>
  );
}
