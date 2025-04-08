import { auth } from '@wexelcode/auth';
import AppointmentSuccessPageContent from './page-content';
import { GetAppointmentById } from '@wexelcode/api';
import { notFound } from 'next/navigation';

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
