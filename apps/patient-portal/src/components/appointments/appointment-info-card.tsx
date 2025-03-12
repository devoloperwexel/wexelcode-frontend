import { Card, CardContent, CardHeader, Text } from '@wexelcode/components';
import { Appointment } from '@wexelcode/types';
import { dateTimeFormat } from '@wexelcode/utils';
import { CalendarIcon, ClockIcon, VideoIcon } from 'lucide-react';

interface AppointmentInfoCardProps {
  appointment: Appointment;
}

export function AppointmentInfoCard({ appointment }: AppointmentInfoCardProps) {
  const getStatusColor = () => {
    switch (appointment.status) {
      case 'CONFIRMED':
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
      <CardHeader>Appointment Details</CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="flex items-center">
            <CalendarIcon className="w-5 h-5 text-blue-600 mr-3" />
            <div>
              <Text variant="muted">Date</Text>
              <Text weight="semibold">
                {dateTimeFormat(appointment.appointmentTime, 'MMM DD, YYYY')}
              </Text>
            </div>
          </div>
          <div className="flex items-center">
            <ClockIcon className="w-5 h-5 text-blue-600 mr-3" />
            <div>
              <Text variant="muted">Time</Text>
              <Text weight="semibold">
                {dateTimeFormat(appointment.appointmentTime, 'hh:mm A')} (30
                minutes)
              </Text>
            </div>
          </div>
          <div className="flex items-center">
            <VideoIcon className="w-5 h-5 text-blue-600 mr-3" />
            <div>
              <Text variant="muted">Appointment Type</Text>
              <Text weight="semibold">Video Consultation</Text>
            </div>
          </div>
          <div className="flex items-center">
            <div>
              <Text variant="muted">Status</Text>
              <span
                className={`inline-block px-3 py-1 rounded-full text-xs font-medium ${getStatusColor()}`}
              >
                {appointment.status}
              </span>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
