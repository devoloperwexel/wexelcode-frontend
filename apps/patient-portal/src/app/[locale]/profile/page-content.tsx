'use client';

import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from '@wexelcode/components';
import { useTranslations } from 'next-intl';

import {
  MedicalDetailsTab,
  PersonalDetailsTab,
} from '../../../components/details';

export default function ProfilePageContent() {
  const t = useTranslations('profile');

  return (
    <Tabs defaultValue="personal">
      <TabsList className="grid w-full grid-cols-2">
        <TabsTrigger value="personal">{t('personal')}</TabsTrigger>
        <TabsTrigger value="medical">{t('medical')}</TabsTrigger>
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
