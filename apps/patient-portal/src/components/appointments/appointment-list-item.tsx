import { Button, UserAvatar } from '@wexelcode/components';
import { Appointment } from '@wexelcode/types';
import { dateTimeDiff, dateTimeFormat } from '@wexelcode/utils';
import { CalendarIcon, ClockIcon, VideoIcon } from 'lucide-react';

import Routes from '../../constants/routes';
import { Link } from '../../i18n/routing';

interface AppointmentListItemProps {
  appointment: Appointment;
}
export default function AppointmentListItem({
  appointment,
}: AppointmentListItemProps) {
  const isUpcoming = dateTimeDiff(appointment.appointmentTime, new Date()) > 0;

  const allowJoinBefore = 15 * 60 * 1000; // 15 minutes
  const isJoinable =
    dateTimeDiff(appointment.appointmentTime, new Date()) < allowJoinBefore;

  return (
    <Link href={`${Routes.appointments}/${appointment.id}`}>
      <div className="flex items-center py-2 px-4 bg-white border shadow-sm rounded-lg">
        <div className="flex-shrink-0">
          <UserAvatar
            className="w-16 h-16"
            name={`${appointment.physioUser?.firstName} ${appointment.physioUser?.lastName}`}
            profileUrl={appointment.physioUser?.profilePictureUrl}
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
            {isUpcoming && (
              <Button
                disabled={!isJoinable}
                onClick={() => {
                  if (isJoinable) {
                    console.log('Join video call');
                  }
                }}
              >
                <VideoIcon className="w-4 h-4 mr-2" />
                Join Call
              </Button>
            )}
          </div>
          <div className="grid grid-cols-2 sm:w-[320px]">
            <div className="flex items-center text-sm text-gray-700">
              <CalendarIcon className="w-4 h-4 mr-1 text-gray-400 flex-shrink-0" />
              <span>
                {dateTimeFormat(appointment.appointmentTime, 'Do MMMM, yyyy')}
              </span>
            </div>
            <div className="flex items-center text-sm text-gray-700">
              <ClockIcon className="w-4 h-4 mr-1 text-gray-400 flex-shrink-0" />
              <span>{dateTimeFormat(appointment.appointmentTime, 'H:HH')}</span>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}
