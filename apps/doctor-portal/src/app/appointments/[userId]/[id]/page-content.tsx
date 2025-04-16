'use client';

import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from '@wexelcode/components';
import { useGetPatientByUserId } from '@wexelcode/hooks';
import { useTranslations } from 'next-intl';

import {
  AppointmentOverviewTab,
  AppointmentScreeningTab,
  AppointmentTreatmentTab,
} from '../../../../components/appointments';
import { BreadcrumbPage } from '../../../../components/navigation';
import Routes from '../../../../constants/routes';

interface AppointmentDetailsPageProps {
  userId: string;
  id: string;
}

export default function AppointmentDetailPageContent({
  userId,
  id,
}: AppointmentDetailsPageProps) {
  const t = useTranslations('appointments.detailsPage');

  const { data: patientResponse } = useGetPatientByUserId(userId);

  return (
    <BreadcrumbPage
      breadcrumbs={[
        {
          labelKey: 'appointments',
          path: Routes.appointments,
        },
        {
          label: patientResponse?.user.firstName,
        },
      ]}
      className="container max-w-4xl mx-auto flex flex-col justify-start space-y-2 h-full"
    >
      <Tabs defaultValue="overview">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="overview">{t('overview')}</TabsTrigger>
          <TabsTrigger value="screen">{t('screening')}</TabsTrigger>
          <TabsTrigger value="treatment">{t('treatment')}</TabsTrigger>
        </TabsList>

        <TabsContent value="overview">
          <AppointmentOverviewTab appointmentId={id} patientId={userId} />
        </TabsContent>

        <TabsContent value="screen">
          <AppointmentScreeningTab appointmentId={id} patientId={userId} />
        </TabsContent>

        <TabsContent value="treatment">
          <AppointmentTreatmentTab appointmentId={id} patientId={userId} />
        </TabsContent>
      </Tabs>
    </BreadcrumbPage>
  );
}
