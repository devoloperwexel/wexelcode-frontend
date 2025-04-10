import PatientDetailsPageContent from './page-content';

interface PatientDetailsPageProps {
  params: Promise<{
    userId: string;
  }>;
}

export default async function PatientDetailsPage({
  params,
}: PatientDetailsPageProps) {
  const { userId } = await params;

  return <PatientDetailsPageContent userId={userId} />;
}
