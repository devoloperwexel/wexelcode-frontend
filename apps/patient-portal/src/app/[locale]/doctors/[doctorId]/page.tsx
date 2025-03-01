import DoctorPageContent from './page-content';

interface DoctorPageProps {
  doctorId: string;
}

export default function DoctorPage({ doctorId }: DoctorPageProps) {
  return <DoctorPageContent />;
}
