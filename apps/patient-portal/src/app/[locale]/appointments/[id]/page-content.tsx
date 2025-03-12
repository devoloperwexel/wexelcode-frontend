'use client';

import { useGetAppointmentById } from '@wexelcode/hooks';
import { useSession } from 'next-auth/react';

import {
  AppointmentInfoCard,
  DoctorInfoCard,
  MedicalScreeningInfoCard,
} from '../../../../components/appointments';

interface AppointmentDetailsPageProps {
  id: string;
}

export default function AppointmentDetailsPageContent({
  id,
}: AppointmentDetailsPageProps) {
  const { data } = useSession();

  const { data: appointment } = useGetAppointmentById({
    userId: data?.user?.id,
    appointmentId: id,
    includes: ['physio-user'],
  });

  return (
    <div className="flex flex-col space-y-4">
      {appointment?.physioUser && (
        <DoctorInfoCard user={appointment.physioUser} />
      )}

      {appointment && <AppointmentInfoCard appointment={appointment} />}

      <MedicalScreeningInfoCard />
    </div>
  );
}
