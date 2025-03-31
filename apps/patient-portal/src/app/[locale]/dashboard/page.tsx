import { ProtectedVisible } from '../../../components/common';
import {
  AppointmentCalenderCard,
  LatestUpcomingAppointmentCard,
  ScreeningResultCard,
} from '../../../components/dashboard';

export default function Dashboard() {
  return (
    <div className="max-w-6xl mx-auto h-fill py-4 ">
      <ProtectedVisible>
        <div className="grid grid-cols-2 gap-4">
          <ScreeningResultCard />
          <LatestUpcomingAppointmentCard now={new Date()} />
          <div className="col-span-2">
            <AppointmentCalenderCard />
          </div>
        </div>
      </ProtectedVisible>
    </div>
  );
}
