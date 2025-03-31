'use client';

import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from '@wexelcode/components';
import { dateTimeSubtract } from '@wexelcode/utils';
import { CalendarIcon, ClockIcon } from 'lucide-react';
import { useTranslations } from 'next-intl';

import { AppointmentListView } from '../../../components/appointments/appointment-list-view';

export default function AppointmentsPageContent() {
  const t = useTranslations('appointments.AppointmentsPage');

  const now = dateTimeSubtract(new Date(), 30, 'minutes').toString();

  return (
    <Tabs defaultValue="upcoming" className="container max-w-3xl mx-auto">
      <TabsList className="grid w-full grid-cols-2">
        <TabsTrigger value="upcoming">
          <CalendarIcon className="w-5 h-5 mr-2" />
          {t('upcoming')}
        </TabsTrigger>
        <TabsTrigger value="history">
          <ClockIcon className="w-5 h-5 mr-2" />
          {t('history')}
        </TabsTrigger>
      </TabsList>
      <TabsContent value="upcoming" className="py-2 h-[90%]">
        <AppointmentListView startDate={now} />
      </TabsContent>
      <TabsContent value="history" className="py-2 h-[90%]">
        <AppointmentListView endDate={now} />
      </TabsContent>
    </Tabs>
  );
}
