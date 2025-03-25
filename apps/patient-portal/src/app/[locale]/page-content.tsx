'use client';

import { ProtectedVisible } from '../../components/common';
import {
  LatestUpcomingAppointmentCard,
  ScreeningResultCard,
} from '../../components/dashboard';

export default function IndexPageContent() {
  return (
    <ProtectedVisible>
      <div className="grid grid-cols-2 gap-4">
        <ScreeningResultCard />
        <LatestUpcomingAppointmentCard />
      </div>
    </ProtectedVisible>
  );
}
