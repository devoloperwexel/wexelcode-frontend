import { Card, CardContent, CardHeader, Text } from '@wexelcode/components';
import { Appointment } from '@wexelcode/types';
import { dateTimeFormat } from '@wexelcode/utils';
import { CalendarIcon, ClockIcon, VideoIcon } from 'lucide-react';
import { useSession } from 'next-auth/react';
import { useLocale, useTranslations } from 'next-intl';

interface AppointmentInfoCardProps {
  appointment: Appointment;
  timezone: string;
}

export function AppointmentInfoCard({
  appointment,
  timezone,
}: AppointmentInfoCardProps) {
  const t = useTranslations('appointments.appointmentCard');
  const language = useLocale();

  const getStatusColor = () => {
    switch (appointment.status) {
      case 'SUCCESS':
        return 'bg-green-100 text-green-800';
      case 'PENDING':
        return 'bg-yellow-100 text-yellow-800';
      case 'CANCELLED':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <Card>
      <CardHeader>{t('title')}</CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="flex items-center">
            <CalendarIcon className="w-5 h-5 text-primary mr-3" />
            <div>
              <Text variant="muted">{t('date')}</Text>
              <Text weight="semibold">
                {dateTimeFormat(
                  appointment.appointmentTime,
                  'Do MMMM, yyyy',
                  language,
                  timezone
                )}
              </Text>
            </div>
          </div>
          <div className="flex items-center">
            <ClockIcon className="w-5 h-5 text-primary mr-3" />
            <div>
              <Text variant="muted">{t('time')}</Text>
              <Text weight="semibold">
                {dateTimeFormat(
                  appointment.appointmentTime,
                  'HH:mm',
                  'en',
                  timezone
                )}{' '}
                (30 {t('minutes')}) |{' '}
                <span className=" text-xs text-gray-500">
                  {timezone} {t('timezone')}
                </span>
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
                {t(appointment.status.toLocaleLowerCase())}
              </span>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
