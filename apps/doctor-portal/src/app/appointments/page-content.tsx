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
import { dateTimeFormat } from '@wexelcode/utils';
import { useRouter } from 'next/navigation';
import { useSession } from 'next-auth/react';

import Routes from '../../constants/routes';

export default function AppointmentsPageContent() {
  const { data: userData } = useSession();

  const router = useRouter();

  const queryParams = useQueryParams();

  const { data: appointmentsResponse } = useGetAllAppointments({
    page: queryParams.getInt('page') || 1,
    limit: queryParams.getInt('limit') || 10,
    physioUserId: userData?.user.id,
    includes: ['patient-user'],
  });

  return (
    <div className="flex flex-col justify-start space-y-2 h-full">
      <div className="flex items-center justify-between">
        <div className="w-1/2">
          <Input placeholder="Search" />
        </div>
        <div className="w-1/4">
          <DropdownSelector
            options={[
              {
                label: 'All',
                value: 'all',
              },
              {
                label: 'Upcoming',
                value: 'upcoming',
              },
              {
                label: 'Past',
                value: 'past',
              },
            ]}
            value="all"
            onChange={(value) => console.log(value)}
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
              header: 'Patient',

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
              header: 'Date ',
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
              header: 'Time ',
              cell: ({ row }) => {
                const data = row.original;
                return (
                  <Text>{dateTimeFormat(data.appointmentTime, 'HH:mm')}</Text>
                );
              },
            },
            {
              accessorKey: 'actions',
              header: 'Actions',
              cell: ({ row }) => {
                return (
                  <div className="flex items-center space-x-2">
                    <Text>Actions</Text>
                  </div>
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
