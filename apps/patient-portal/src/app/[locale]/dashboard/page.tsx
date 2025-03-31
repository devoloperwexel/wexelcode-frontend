import { ProtectedVisible } from '../../../components/common';
import {
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
        </div>
      </ProtectedVisible>
    </div>
  );
}
