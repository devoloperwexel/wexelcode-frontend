'use client';

import {
  AppointmentsCard,
  AppointmentsTable,
  NextAppointmentCard,
  PatientsCard,
} from '../components/dashboard';

export default function IndexPageContent() {
  return (
    <div className="grid grid-cols-3 gap-8 px-8 pt-6">
      <AppointmentsCard />
      <PatientsCard />
      <NextAppointmentCard />
      <div className="col-span-3">
        <AppointmentsTable />
      </div>
    </div>
  );
}
