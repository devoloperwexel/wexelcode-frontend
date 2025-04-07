import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from '@wexelcode/components';

import {
  AppointmentOverviewTab,
  AppointmentPatientTab,
  AppointmentScreeningTab,
} from '../../../../components/appointments';

interface AppointmentDetailsPageProps {
  userId: string;
  id: string;
}

export default function AppointmentDetailPageContent({
  userId,
  id,
}: AppointmentDetailsPageProps) {
  return (
    <div className="flex flex-col justify-start space-y-2 h-full">
      <Tabs defaultValue="overview">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="patient">Patient</TabsTrigger>
          <TabsTrigger value="screen">Screening</TabsTrigger>
        </TabsList>

        <TabsContent value="overview">
          <AppointmentOverviewTab id={id} userId={userId} />
        </TabsContent>

        <TabsContent value="patient">
          <AppointmentPatientTab userId={userId} />
        </TabsContent>

        <TabsContent value="screen">
          <AppointmentScreeningTab userId={userId} id={id} />
        </TabsContent>
      </Tabs>
    </div>
  );
}
