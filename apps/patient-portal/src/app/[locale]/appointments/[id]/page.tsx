import { QueryClient } from '@tanstack/react-query';
import { GetAppointmentById } from '@wexelcode/api';
import { auth } from '@wexelcode/auth';
import { QueryKeys } from '@wexelcode/constants';
import { Appointment } from '@wexelcode/types';
import { notFound } from 'next/navigation';

import AppointmentDetailsPageContent from './page-content';

interface AppointmentDetailsPageProps {
  params: Promise<{
    id: string;
  }>;
}

export default async function AppointmentDetailsPage({
  params,
}: AppointmentDetailsPageProps) {
  const { id: appointmentId } = await params;
  const session = await auth();
  const queryClient = new QueryClient();
  const userId = session?.user?.id;

  await queryClient.prefetchQuery({
    queryKey: [QueryKeys.appointments, appointmentId, userId],
    queryFn: async () =>
      GetAppointmentById({
        appointmentId,
        userId,
        includes: ['physio-user'],
      }),
  });

  const appointment = queryClient.getQueryData([
    QueryKeys.appointments,
    appointmentId,
    userId,
  ]);

  if (!appointment) {
    notFound();
  }

  return (
    <AppointmentDetailsPageContent
      id={appointmentId}
      appointment={appointment as Appointment}
    />
  );
}
