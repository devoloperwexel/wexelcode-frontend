import { Button } from '@wexelcode/components';
import { Appointment } from '@wexelcode/types';
import { dateTimeDiff, dateTimeFormat } from '@wexelcode/utils';
import { CalendarIcon, ClockIcon, VideoIcon } from 'lucide-react';
import { useLocale, useTranslations } from 'next-intl';

import Routes from '../../constants/routes';
import { Link } from '../../i18n/routing';
import { PhysioAvatar } from '../common';

interface AppointmentListItemProps {
  appointment: Appointment;
}
export default function AppointmentListItem({
  appointment,
}: AppointmentListItemProps) {
  const t = useTranslations('appointments.appointmentCard');
  const language = useLocale()
  const isUpcoming = dateTimeDiff(appointment.appointmentTime, new Date()) > 0;

  const allowJoinBefore = 5 * 60 * 1000; // 5 minutes
  const isJoinable =
    dateTimeDiff(appointment.appointmentTime, new Date()) < allowJoinBefore;

  return (
    <Link href={`${Routes.appointments}/${appointment.id}`}>
      <div className="flex items-center py-2 px-4 bg-white border shadow-sm rounded-lg">
        <div className="flex-shrink-0">
          <PhysioAvatar
            className="w-16 h-16"
            physioUser={appointment.physioUser}
          />
        </div>
        <div className="ml-4 flex-grow">
          <div className="flex justify-between items-center mb-3">
            <div>
              <h3 className="font-medium text-gray-900">
                {appointment.physioUser?.firstName}{' '}
                {appointment.physioUser?.lastName}
              </h3>
              {/* TODO: Change this to the actual profession */}
              <p className="text-sm text-gray-500">Physio</p>
            </div>
            {isUpcoming &&
              (isJoinable ? (
                <Link
                  href={`${Routes.appointments}/${appointment.id}/video-call`}
                >
                  <Button disabled={!isJoinable}>
                    <VideoIcon className="w-4 h-4 mr-2" />
                    {t('joinVideoCall')}
                  </Button>
                </Link>
              ) : (
                <Button disabled>
                  <VideoIcon className="w-4 h-4 mr-2" />
                  {t('joinVideoCall')}
                </Button>
              ))}
          </div>
          <div className="grid grid-cols-2 sm:w-[320px]">
            <div className="flex items-center text-sm text-gray-700">
              <CalendarIcon className="w-4 h-4 mr-1 text-gray-400 flex-shrink-0" />
              <span>
                {dateTimeFormat(appointment.appointmentTime, 'Do MMMM, yyyy', language)}
              </span>
            </div>
            <div className="flex items-center text-sm text-gray-700">
              <ClockIcon className="w-4 h-4 mr-1 text-gray-400 flex-shrink-0" />
              <span>
                {dateTimeFormat(appointment.appointmentTime, 'HH:mm')}
              </span>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}
