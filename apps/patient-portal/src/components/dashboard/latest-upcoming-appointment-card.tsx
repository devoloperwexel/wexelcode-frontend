import {
  Button,
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  Text,
  UserAvatar,
} from '@wexelcode/components';
import { useGetAppointmentsByUserId } from '@wexelcode/hooks';
import { dateTimeFormat } from '@wexelcode/utils';
import { CalendarIcon, CalendarX2, ClockIcon, VideoIcon } from 'lucide-react';
import { useSession } from 'next-auth/react';
import { useTranslations } from 'next-intl';

import Routes from '../../constants/routes';
import { Link } from '../../i18n/routing';
import { NoDataBanner } from '../common';
import { LoadingAppointmentCard } from './loading';

export function LatestUpcomingAppointmentCard() {
  const t = useTranslations('dashboard.latestUpcomingAppointmentCard');

  const { data: userData } = useSession();

  const { data: response, isLoading } = useGetAppointmentsByUserId({
    userId: userData?.user?.id,
    limit: 1,
    page: 1,
    includes: ['physio-user'],
    sortBy: 'appointmentTime:asc',
  });

  const getStatusColor = () => {
    switch (appointment?.status) {
      case 'CONFIRMED':
        return 'bg-green-100 text-green-800';
      case 'PENDING':
        return 'bg-yellow-100 text-yellow-800';
      case 'CANCELLED':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-green-100 text-green-800';
    }
  };

  if (isLoading) {
    return <LoadingAppointmentCard />;
  }

  if (!response || response?.totalResults === 0) {
    return (
      <Card className="flex flex-col">
        <CardHeader>{t('title')}</CardHeader>
        <CardContent className="flex flex-grow items-center justify-center">
          <NoDataBanner
            message={t('noDataFound')}
            icon={<CalendarX2 size={36} className="text-primary" />}
          />
        </CardContent>
        <CardFooter className="w-full">
          <Link href={`${Routes.doctors}`} className="w-full">
            <Button className="w-full">{t('bookAppointment')}</Button>
          </Link>
        </CardFooter>
      </Card>
    );
  }

  const appointment = response?.results[0];

  return (
    <Card>
      <CardHeader>{t('title')}</CardHeader>

      <CardContent className="space-y-4">
        <div className="flex space-x-4 ">
          <UserAvatar
            className="w-16 h-16"
            name={`${appointment?.physioUser?.firstName} ${appointment?.physioUser?.lastName}`}
            profileUrl={appointment?.physioUser?.profilePictureUrl}
          />
          <div className="flex flex-col justify-evenly">
            <Text variant="h3" weight="semibold">
              {appointment?.physioUser?.firstName}{' '}
              {appointment?.physioUser?.lastName}
            </Text>
            <Text variant="muted">{t('physio')}</Text>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div className="flex items-center">
            <CalendarIcon className="w-5 h-5 text-primary mr-3" />
            <div>
              <Text variant="muted">{t('date')}</Text>
              <Text weight="semibold">
                {appointment?.appointmentTime &&
                  dateTimeFormat(appointment?.appointmentTime, 'MMM DD, YYYY')}
              </Text>
            </div>
          </div>

          <div className="flex items-center">
            <ClockIcon className="w-5 h-5 text-primary mr-3" />
            <div>
              <Text variant="muted">{t('time')}</Text>
              <Text weight="semibold">
                {appointment?.appointmentTime &&
                  dateTimeFormat(appointment?.appointmentTime, 'hh:mm A')}{' '}
                (30 {t('minutes')})
              </Text>
            </div>
          </div>
          <div className="flex items-center">
            <VideoIcon className="w-5 h-5 text-primary mr-3" />
            <div>
              <Text variant="muted">{t('type')}</Text>
              <Text weight="semibold">{t('video')}</Text>
            </div>
          </div>

          <div className="flex items-center">
            <div>
              <Text variant="muted">{t('status')}</Text>
              <span
                className={`inline-block px-3 py-1 rounded-full text-xs font-medium ${getStatusColor()}`}
              >
                {appointment?.status}
              </span>
            </div>
          </div>
        </div>
      </CardContent>

      <CardFooter className="w-full">
        <Link
          href={`/appointments/${response?.results[0].id}`}
          className="w-full"
        >
          <Button
            className="w-full"
            onClick={() => {
              console.log('Join video call');
            }}
          >
            <VideoIcon className="w-4 h-4 mr-2" />
            {t('joinVideoCall')}
          </Button>
        </Link>
      </CardFooter>
    </Card>
  );
}
