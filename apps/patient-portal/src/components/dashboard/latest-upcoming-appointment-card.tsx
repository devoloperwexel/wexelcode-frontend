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
import { CalendarIcon, ClockIcon, VideoIcon } from 'lucide-react';
import { useSession } from 'next-auth/react';
import { useTranslations } from 'next-intl';

import { Link } from '../../i18n/routing';
import { LoadingAppointmentCard } from './loading';

export function LatestUpcomingAppointmentCard() {
  const t = useTranslations('dashboard.latestUpcomingAppointmentCard');

  const { data: userData } = useSession();

  const { data: response, isLoading } = useGetAppointmentsByUserId({
    userId: userData?.user?.id,
    limit: 1,
    page: 1,
    includes: ['physio-user'],
    // sortBy: 'updatedAt',
    // sortOrder: 'desc',
  });

  if (isLoading) {
    return <LoadingAppointmentCard />;
  }

  if (response?.totalResult === 0) {
    return (
      <Card>
        <CardHeader>{t('title')}</CardHeader>
        <CardContent className="flex items-center justify-center">
          No upcoming appointments
        </CardContent>
      </Card>
    );
  }

  return (
    <Card>
      <CardHeader>{t('title')}</CardHeader>

      <CardContent className="space-y-4">
        <div className="flex space-x-4 ">
          <UserAvatar
            className="w-16 h-16"
            name={`${response?.results[0].physioUser?.firstName} ${response?.results[0].physioUser?.lastName}`}
            profileUrl={response?.results[0].physioUser?.profilePictureUrl}
          />
          <div className="flex flex-col justify-evenly">
            <Text variant="h3" weight="semibold">
              {response?.results[0].physioUser?.firstName}{' '}
              {response?.results[0].physioUser?.lastName}
            </Text>
            <Text variant="muted">Cardiologist</Text>
          </div>
        </div>

        <div className="flex items-center text-sm text-gray-700">
          <CalendarIcon className="w-4 h-4 mr-1 text-primary flex-shrink-0" />
          <span>
            {response?.results[0].appointmentTime &&
              dateTimeFormat(
                response?.results[0].appointmentTime,
                'MMM DD, YYYY'
              )}
          </span>
        </div>

        <div className="flex items-center text-sm text-gray-700">
          <ClockIcon className="w-4 h-4 mr-1 text-primary flex-shrink-0" />
          <span>
            {response?.results[0].appointmentTime &&
              dateTimeFormat(response?.results[0].appointmentTime, 'hh:mm A')}
          </span>
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
            Join Call
          </Button>
        </Link>
      </CardFooter>
    </Card>
  );
}
