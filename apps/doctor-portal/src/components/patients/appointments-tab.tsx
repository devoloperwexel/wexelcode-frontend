'use client';

import { DataTable, DropdownSelector, Pagination } from '@wexelcode/components';
import { useGetAppointmentsByUserId, useQueryParams } from '@wexelcode/hooks';
import { dateTimeFormat, dateTimeSubtract } from '@wexelcode/utils';
import { useRouter } from 'next/navigation';
import { useSession } from 'next-auth/react';
import { useTranslations } from 'next-intl';

import { AppointmentStatusBadge } from '../appointments';

interface PatientAppointmentsTabProps {
  patientId: string;
}
const now = dateTimeSubtract(new Date(), 30, 'minutes').toISOString();

export function PatientAppointmentsTab({
  patientId,
}: PatientAppointmentsTabProps) {
  const t = useTranslations('patients.detailsPage.tabs.appointments');
  const { data: userData } = useSession();

  const router = useRouter();

  const queryParams = useQueryParams();

  const { data: appointmentsResponse } = useGetAppointmentsByUserId({
    userId: patientId,
    physioUserId: userData?.user.id,
    page: queryParams.getInt('page') || 1,
    limit: queryParams.getInt('limit') || 10,
    startDate: queryParams.getString('status') === 'upcoming' ? now : undefined,
    endDate: queryParams.getString('status') === 'past' ? now : undefined,
  });

  return (
    <div className="flex flex-col justify-start space-y-2 h-full">
      <div className="flex items-center justify-end">
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
          data={appointmentsResponse?.results ?? []}
          columns={[
            {
              accessorKey: 'time',
              header: t('table.columns.time'),
              cell: ({ row }) => {
                const data = row.original;

                return dateTimeFormat(data.appointmentTime, 'hh:mm a');
              },
            },
            {
              accessorKey: 'date',
              header: t('table.columns.date'),
              cell: ({ row }) => {
                const data = row.original;

                return dateTimeFormat(data.appointmentTime, 'Do MMMM, yyyy');
              },
            },
            {
              accessorKey: 'status',
              header: t('table.columns.status'),
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
