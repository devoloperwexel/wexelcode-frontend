import { Pagination } from '@wexelcode/components';
import { useGetAppointmentsByUserId, useQueryParams } from '@wexelcode/hooks';
import { useSession } from 'next-auth/react';

import AppointmentListItem from './appointment-list-item';
import { AppointmentListLoadingSkeleton } from './loading-skeleton';

interface AppointmentListViewProps {
  startDate?: string;
  endDate?: string;
}

export function AppointmentListView({
  startDate,
  endDate,
}: AppointmentListViewProps) {
  const { data: userData } = useSession();

  const queryParams = useQueryParams();

  const { data: response, isLoading } = useGetAppointmentsByUserId({
    page: queryParams.getInt('page') || 1,
    limit: queryParams.getInt('limit') || 10,
    userId: userData?.user?.id,
    startDate,
    endDate,
    includes: ['physio-user'],
  });

  if (isLoading) {
    return <AppointmentListLoadingSkeleton />;
  }

  return (
    <div className="flex flex-col justify-between space-y-4 h-full">
      <div className="space-y-4">
        {response?.results?.map((appointment) => (
          <AppointmentListItem key={appointment.id} appointment={appointment} />
        ))}
      </div>
      <Pagination totalPages={response?.totalPages || 0} />
    </div>
  );
}
