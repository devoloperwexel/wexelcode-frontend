import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from '@wexelcode/components';
import { useTranslations } from 'next-intl';

import {
  AccountDetailsTab,
  ProfessionalDetailsTab,
} from '../../components/settings';

export default function SettingsPageContent() {
  const t = useTranslations('settings.settingsPage.tabs');
  return (
    <div className="container max-w-4xl mx-auto ">
      <Tabs defaultValue="account">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="account">{t('account.title')}</TabsTrigger>
          <TabsTrigger value="professional">
            {t('professional.title')}
          </TabsTrigger>
        </TabsList>

        <TabsContent value="account">
          <AccountDetailsTab />
        </TabsContent>

        <TabsContent value="professional">
          <ProfessionalDetailsTab />
        </TabsContent>
      </Tabs>
    </div>
  );
}
