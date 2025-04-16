'use client';

import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from '@wexelcode/components';
import { useGetPatientByUserId } from '@wexelcode/hooks';
import { useTranslations } from 'next-intl';

import { BreadcrumbPage } from '../../../components/navigation';
import {
  PatientAppointmentsTab,
  PatientOverviewTab,
  PatientScreeningTab,
} from '../../../components/patients';
import Routes from '../../../constants/routes';

interface PatientDetailsPageContentProps {
  userId: string;
}

export default function PatientDetailsPageContent({
  userId,
}: PatientDetailsPageContentProps) {
  const t = useTranslations('patients.detailsPage');

  const { data: patientResponse } = useGetPatientByUserId(userId);

  return (
    <BreadcrumbPage
      breadcrumbs={[
        {
          labelKey: 'patients',
          path: Routes.patients,
        },
        {
          label:
            `${patientResponse?.user.firstName} ${patientResponse?.user.lastName}`.toUpperCase(),
        },
      ]}
      className="container max-w-4xl mx-auto flex flex-col justify-start space-y-2 h-full"
    >
      <Tabs defaultValue="overview">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="overview">{t('tabs.overview.title')}</TabsTrigger>
          <TabsTrigger value="screen">{t('tabs.screening.title')}</TabsTrigger>
          <TabsTrigger value="appointments">
            {t('tabs.appointments.title')}
          </TabsTrigger>
        </TabsList>

        <TabsContent value="overview">
          <PatientOverviewTab patientId={userId} />
        </TabsContent>

        <TabsContent value="screen">
          <PatientScreeningTab patientId={userId} />
        </TabsContent>

        <TabsContent value="appointments">
          <PatientAppointmentsTab patientId={userId} />
        </TabsContent>
      </Tabs>
    </BreadcrumbPage>
  );
}
