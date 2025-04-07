import AppointmentDetailPageContent from './page-content';

interface AppointmentDetailPageProps {
  params: Promise<{
    userId: string;
    id: string;
  }>;
}

export default async function AppointmentDetailPage({
  params,
}: AppointmentDetailPageProps) {
  const { userId, id } = await params;
  // TODO: SSR Fetch
  return <AppointmentDetailPageContent id={id} userId={userId} />;
}
