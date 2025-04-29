import { QueryClient } from '@tanstack/react-query';
import { GetAnswersSummary, GetAppointmentById } from '@wexelcode/api';
import { auth } from '@wexelcode/auth';
import { QueryKeys } from '@wexelcode/constants';
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

  await Promise.all([
    queryClient.prefetchQuery({
      queryKey: [QueryKeys.appointments, appointmentId, userId],
      queryFn: async () =>
        GetAppointmentById({
          appointmentId,
          userId,
          includes: ['physio-user'],
        }),
    }),
    queryClient.prefetchQuery({
      queryKey: [QueryKeys.answersSummary, appointmentId, userId],
      queryFn: async () =>
        GetAnswersSummary({
          userId,
          appointmentId,
        }),
    }),
  ]);

  const answersSummary = queryClient.getQueryData([
    QueryKeys.answersSummary,
    appointmentId,
    userId,
  ]) as Awaited<ReturnType<typeof GetAnswersSummary>>;

  // Check if the appointment exists in the cache
  const appointment = queryClient.getQueryData([
    QueryKeys.appointments,
    appointmentId,
    userId,
  ]) as Awaited<ReturnType<typeof GetAppointmentById>>;

  if (!appointment) {
    notFound();
  }

  return (
    <AppointmentDetailsPageContent
      id={appointmentId}
      appointment={appointment}
      answersSummaryPercentage={answersSummary?.completedPercentage || 0}
    />
  );
}
