import { calenderIcon } from '@wexelcode/assets';
import {
  Button,
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  Text,
} from '@wexelcode/components';
import { useGetAppointmentsByUserId } from '@wexelcode/hooks';
import { dateTimeFormat } from '@wexelcode/utils';
import { CalendarIcon, ClockIcon, VideoIcon } from 'lucide-react';
import Image from 'next/image';
import { useSession } from 'next-auth/react';
import { useTranslations } from 'next-intl';

import Routes from '../../constants/routes';
import { Link } from '../../i18n/routing';
import { NoDataBanner, PhysioAvatar } from '../common';
import { LoadingAppointmentCard } from './loading';

interface LatestUpcomingAppointmentCardProps {
  now: Date;
}

export function LatestUpcomingAppointmentCard({
  now,
}: LatestUpcomingAppointmentCardProps) {
  const t = useTranslations('dashboard.latestUpcomingAppointmentCard');

  const { data: userData } = useSession();

  const { data: response, isLoading } = useGetAppointmentsByUserId({
    userId: userData?.user?.id,
    limit: 1,
    page: 1,
    includes: ['physio-user'],
    sortBy: 'appointmentTime:desc',
    startDate: now.toISOString(),
  });

  const getStatusColor = () => {
    switch (appointment?.status) {
      case 'SUCCESS':
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
      <Card className="flex flex-col justify-between">
        <CardHeader>{t('title')}</CardHeader>
        <CardContent className="flex items-center justify-center">
          <NoDataBanner
            message={t('noDataFound')}
            icon={<Image src={calenderIcon} alt="No data" className="w-32" />}
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
    <Card className="flex flex-col">
      <CardHeader>{t('title')}</CardHeader>

      <CardContent className="flex flex-col flex-grow space-y-4">
        <div className="flex space-x-4 ">
          <PhysioAvatar
            className="w-16 h-16"
            physioUser={appointment?.physioUser}
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
                  dateTimeFormat(appointment?.appointmentTime, 'Do MMMM, yyyy')}
              </Text>
            </div>
          </div>

          <div className="flex items-center">
            <ClockIcon className="w-5 h-5 text-primary mr-3" />
            <div>
              <Text variant="muted">{t('time')}</Text>
              <Text weight="semibold">
                {appointment?.appointmentTime &&
                  dateTimeFormat(appointment?.appointmentTime, 'HH:MM')}{' '}
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
