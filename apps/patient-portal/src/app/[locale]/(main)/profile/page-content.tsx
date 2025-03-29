'use client';

import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from '@wexelcode/components';

import {
  MedicalDetailsTab,
  PersonalDetailsTab,
} from '../../../components/details';

export default function ProfilePageContent() {
  return (
    <Tabs defaultValue="personal">
      <TabsList className="grid w-full grid-cols-2">
        <TabsTrigger value="personal">Personal</TabsTrigger>
        <TabsTrigger value="medical">Medical</TabsTrigger>
      </TabsList>

      <TabsContent value="personal">
        <PersonalDetailsTab />
      </TabsContent>

      <TabsContent value="medical">
        <MedicalDetailsTab />
      </TabsContent>
    </Tabs>
  );
}
