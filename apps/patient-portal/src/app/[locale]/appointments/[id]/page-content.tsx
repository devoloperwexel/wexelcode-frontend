import {
  AppointmentInfoCard,
  DoctorInfoCard,
  MedicalScreeningInfoCard,
} from '../../../../components/appointments';

interface AppointmentDetailsPageProps {
  id: string;
}

export default function AppointmentDetailsPageContent({
  id,
}: AppointmentDetailsPageProps) {
  return (
    <div className="flex flex-col space-y-4">
      <DoctorInfoCard />
      <AppointmentInfoCard />
      <MedicalScreeningInfoCard />
    </div>
  );
}
