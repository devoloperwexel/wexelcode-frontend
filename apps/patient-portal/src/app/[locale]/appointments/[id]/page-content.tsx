'use client';

import { useGetAppointmentById } from '@wexelcode/hooks';
import { useSession } from 'next-auth/react';

import {
  AppointmentInfoCard,
  DoctorInfoCard,
  MedicalScreeningInfoCard,
} from '../../../../components/appointments';
import { CheckoutCard } from '../../../../components/checkout';

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
    <div className="max-w-6xl mx-auto py-4">
      <div className="grid grid-cols-3 gap-6">
        <div className="col-span-2  flex flex-col space-y-4">
          {appointment?.physioUser && (
            <DoctorInfoCard user={appointment.physioUser} />
          )}

          {appointment && <AppointmentInfoCard appointment={appointment} />}

          <MedicalScreeningInfoCard
            appointmentId={
              appointment?.status === 'SUCCESS' ? appointment.id : undefined
            }
          />
        </div>

        <div className="col-span-1">
          <div className="sticky top-6">
            {data?.user && appointment?.status === 'PENDING' && (
              <CheckoutCard
                amount={20}
                appointmentId={id}
                userId={data?.user.id}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
