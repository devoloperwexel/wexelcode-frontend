'use client';

import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from '@wexelcode/components';
import { useTranslations } from 'next-intl';

import {
  PatientAppointmentsTab,
  PatientOverviewTab,
  PatientScreeningTab,
} from '../../../components/patients';

interface PatientDetailsPageContentProps {
  userId: string;
}

export default function PatientDetailsPageContent({
  userId,
}: PatientDetailsPageContentProps) {
  const t = useTranslations('patients.detailsPage');

  return (
    <div className="flex flex-col justify-start space-y-2 h-full">
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
    </div>
  );
}
