import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from '@wexelcode/components';
import { useTranslations } from 'next-intl';

import { BreadcrumbPage } from '../../components/navigation';
import {
  AccountDetailsTab,
  ProfessionalDetailsTab,
} from '../../components/settings';
import { AvailabilityDetailsTab } from '../../components/settings/availability-details-tab';

export default function SettingsPageContent() {
  const t = useTranslations('settings.settingsPage.tabs');

  return (
    <BreadcrumbPage
      breadcrumbs={[
        {
          labelKey: 'settings',
        },
      ]}
      className="container max-w-4xl mx-auto "
    >
      <Tabs defaultValue="account">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="account">{t('account.title')}</TabsTrigger>
          <TabsTrigger value="professional">
            {t('professional.title')}
          </TabsTrigger>
          <TabsTrigger value="availability">Availability</TabsTrigger>
        </TabsList>

        <TabsContent value="account">
          <AccountDetailsTab />
        </TabsContent>

        <TabsContent value="professional">
          <ProfessionalDetailsTab />
        </TabsContent>
        <TabsContent value="availability">
          <AvailabilityDetailsTab />
        </TabsContent>
      </Tabs>
    </BreadcrumbPage>
  );
}
