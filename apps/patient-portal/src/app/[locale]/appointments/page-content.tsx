'use client';

import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from '@wexelcode/components';
import { CalendarIcon, ClockIcon } from 'lucide-react';

import { AppointmentListView } from '../../../components/appointments/appointment-list-view';

export default function AppointmentsPageContent() {
  const now = new Date().toString();
  return (
    <Tabs defaultValue="upcoming">
      <TabsList className="grid w-full grid-cols-2">
        <TabsTrigger value="upcoming">
          <CalendarIcon className="w-5 h-5 mr-2" />
          Upcoming
        </TabsTrigger>
        <TabsTrigger value="history">
          <ClockIcon className="w-5 h-5 mr-2" />
          History
        </TabsTrigger>
      </TabsList>
      <TabsContent value="upcoming">
        <AppointmentListView startDate={now} />
      </TabsContent>
      <TabsContent value="history">
        <AppointmentListView endDate={now} />
      </TabsContent>
    </Tabs>
  );
}
