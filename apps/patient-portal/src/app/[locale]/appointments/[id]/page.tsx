import AppointmentDetailsPageContent from './page-content';

interface AppointmentDetailsPageProps {
  params: Promise<{
    id: string;
  }>;
}

export default async function AppointmentDetailsPage({
  params,
}: AppointmentDetailsPageProps) {
  const { id } = await params;

  return <AppointmentDetailsPageContent id={id} />;
}
