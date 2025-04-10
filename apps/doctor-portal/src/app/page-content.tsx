'use client';

import {
  AppointmentsCard,
  AppointmentsTable,
  PatientsCard,
} from '../components/dashboard';

export default function IndexPageContent() {
  return (
    <div className="grid grid-cols-3 gap-8">
      <AppointmentsCard />
      <PatientsCard />
      <div className="col-span-3">
        <AppointmentsTable />
      </div>
    </div>
  );
}
