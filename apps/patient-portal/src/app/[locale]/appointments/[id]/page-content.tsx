'use client';

import { Appointment } from '@wexelcode/types';
import { dateTimeDiff } from '@wexelcode/utils';
import { useSession } from 'next-auth/react';

import {
  AppointmentInfoCard,
  DoctorInfoCard,
  MedicalScreeningInfoCard,
} from '../../../../components/appointments';
import AppointmentVideoCallCard from '../../../../components/appointments/appointment-video-call-card';
import { CheckoutCard } from '../../../../components/checkout';

interface AppointmentDetailsPageProps {
  id: string;
  appointment: Appointment;
}

export default function AppointmentDetailsPageContent({
  id,
  appointment,
}: AppointmentDetailsPageProps) {
  const { data } = useSession();
  const now = new Date();
  const thirtyMinutesAgo = new Date(now.getTime() - 30 * 60 * 1000);
  const isUpcoming =
    dateTimeDiff(appointment.appointmentTime, thirtyMinutesAgo) > 0;

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
            {data?.user && appointment?.status === 'PENDING' ? (
              <CheckoutCard
                amount={20}
                appointmentId={id}
                userId={data?.user.id}
              />
            ) : (
              appointment?.status === 'SUCCESS' &&
              isUpcoming && (
                <AppointmentVideoCallCard
                  appointmentId={appointment.id}
                  appointmentTime={appointment.appointmentTime}
                />
              )
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
