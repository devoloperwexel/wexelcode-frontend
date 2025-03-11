import { Card, CardContent, CardHeader, Text } from '@wexelcode/components';
import { Appointment, Doctor } from '@wexelcode/types';
import { CalendarIcon, ClockIcon, VideoIcon } from 'lucide-react';

interface AppointmentInfoCardProps {
  appointment?: Appointment; // TODO: remove optional
}

export function AppointmentInfoCard({ appointment }: AppointmentInfoCardProps) {
  const getStatusColor = (status: string) => {
    switch (status.toLowerCase()) {
      case 'confirmed':
        return 'bg-green-100 text-green-800';
      case 'pending':
        return 'bg-yellow-100 text-yellow-800';
      case 'cancelled':
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
              <Text weight="semibold">Monday, June 10, 2023</Text>
            </div>
          </div>
          <div className="flex items-center">
            <ClockIcon className="w-5 h-5 text-blue-600 mr-3" />
            <div>
              <Text variant="muted">Time</Text>
              <Text weight="semibold">10:30 AM (30 minutes)</Text>
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
                className={`inline-block px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(
                  'pending'
                )}`}
              >
                Pending
              </span>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
