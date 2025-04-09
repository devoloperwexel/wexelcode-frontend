import { GetAppointmentById } from '@wexelcode/api';
import { auth } from '@wexelcode/auth';
import { notFound } from 'next/navigation';

import AppointmentSuccessPageContent from './page-content';

interface AppointmentSuccessPageProps {
  params: Promise<{
    id: string;
  }>;
}

export default async function AppointmentSuccessPage({
  params,
}: AppointmentSuccessPageProps) {
  const [paramsData, session] = await Promise.all([params, auth()]);
  const { id } = paramsData;

  try {
    const appointment = await GetAppointmentById({
      userId: session?.user?.id,
      appointmentId: id,
    });

    if (appointment?.status !== 'SUCCESS') {
      notFound();
    }

    return <AppointmentSuccessPageContent />;
  } catch (_error) {
    notFound();
  }
}
