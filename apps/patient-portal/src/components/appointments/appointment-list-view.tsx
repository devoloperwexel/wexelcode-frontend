import { calenderIcon } from '@wexelcode/assets';
import { Button, Pagination } from '@wexelcode/components';
import { useGetAppointmentsByUserId, useQueryParams } from '@wexelcode/hooks';
import Image from 'next/image';
import { useSession } from 'next-auth/react';
import { useTranslations } from 'next-intl';

import Routes from '../../constants/routes';
import { Link } from '../../i18n/routing';
import { NoDataBanner } from '../common';
import AppointmentListItem from './appointment-list-item';
import { AppointmentListLoadingSkeleton } from './loading-skeleton';

interface AppointmentListViewProps {
  startDate?: string;
  endDate?: string;
  sort?: 'asc' | 'desc';
}

export function AppointmentListView({
  startDate,
  endDate,
  sort = 'asc',
}: AppointmentListViewProps) {
  const t = useTranslations('appointments.appointmentsPage');
  const { data: userData, status: sessionStatus } = useSession();
  const queryParams = useQueryParams();
  //
  const timezone =
    userData?.user?.timeZone ||
    Intl.DateTimeFormat().resolvedOptions().timeZone;

  const { data: response, isLoading } = useGetAppointmentsByUserId({
    page: queryParams.getInt('page') || 1,
    limit: queryParams.getInt('limit') || 8,
    userId: userData?.user?.id,
    startDate,
    endDate,
    timezone,
    includes: ['physio-user'],
    sortBy: `appointmentTime:${sort}`,
  });

  return (
    <div className="flex flex-col space-y-4 h-fill">
      {(isLoading || sessionStatus === 'loading') && (
        <div className="flex-grow">
          <AppointmentListLoadingSkeleton />
        </div>
      )}

      <NoDataBanner
        className="flex-grow"
        visible={response?.totalResults === 0}
        message={t('noDataFound')}
        icon={<Image src={calenderIcon} alt="No data" className="w-32" />}
        footer={
          <Link href={`${Routes.doctors}`} className="btn btn-primary">
            <Button>{t('createAppointment')}</Button>
          </Link>
        }
      />

      <div className="flex-grow flex flex-col space-y-4">
        {sessionStatus !== 'loading' &&
          response?.results?.map((appointment) => (
            <AppointmentListItem
              key={appointment.id}
              appointment={appointment}
              timezone={timezone}
            />
          ))}
      </div>

      <Pagination totalPages={response?.totalPages || 0} />
    </div>
  );
}
