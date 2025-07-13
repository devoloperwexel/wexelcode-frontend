'use client';

import { Button } from '@wexelcode/components';
import { useUpdateAppointment } from '@wexelcode/hooks';
import { Appointment } from '@wexelcode/types';
import { dateTimeDiff } from '@wexelcode/utils';
import { useSession } from 'next-auth/react';

import {
  AppointmentInfoCard,
  DoctorInfoCard,
  MedicalScreeningInfoCard,
} from '../../../../components/appointments';
import AppointmentVideoCallCard from '../../../../components/appointments/appointment-video-call-card';
import Routes from '../../../../constants/routes';
import { useRouter } from '../../../../i18n/routing';

interface AppointmentDetailsPageProps {
  id: string;
  appointment: Appointment;
}

export default function AppointmentDetailsPageContent({
  id,
  appointment,
}: AppointmentDetailsPageProps) {
  const { data } = useSession();
  const { mutateAsync: createAppointment, isPending } = useUpdateAppointment();
  const { push } = useRouter();
  //
  const now = new Date();
  const thirtyMinutesAgo = new Date(now.getTime() - 30 * 60 * 1000);
  const isUpcoming =
    dateTimeDiff(appointment.appointmentTime, thirtyMinutesAgo) > 0;

  const handleBookingConfirm = async () => {
    const response = await createAppointment({
      userId: data!.user.id,
      appointmentId: id,
      status: 'SUCCESS',
    });

    if (response?.id) {
      push(`${Routes.appointments}/${response?.id}`);
    }
  };

  return (
    <div className="max-w-6xl mx-auto py-4">
      <div className="grid grid-cols-3 gap-6">
        <div className="col-span-2  flex flex-col space-y-4">
          {appointment?.physioUser && (
            <DoctorInfoCard user={appointment.physioUser} />
          )}

          {appointment && <AppointmentInfoCard appointment={appointment} />}

          {appointment?.status === 'SUCCESS' && (
            <MedicalScreeningInfoCard appointmentId={appointment.id} />
          )}
        </div>

        <div className="col-span-1">
          <div className="sticky top-6">
            {data?.user && appointment?.status === 'PENDING' ? (
              <div>
                <MedicalScreeningInfoCard appointmentId={undefined} />
                <div className=" pt-8 flex flex-row justify-center mb-20">
                  <Button
                    className=" w-full"
                    onClick={handleBookingConfirm}
                    disabled={isPending}
                    loading={isPending}
                  >
                    Booking Confirm
                  </Button>
                </div>
              </div>
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
