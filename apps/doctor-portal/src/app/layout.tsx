import '@wexelcode/theme';

import { DashboardLayout } from '@wexelcode/layouts';

import { UserMenu } from '../components/user-menu';
import { MainNavigationItems } from '../constants';

export const metadata = {
  title: 'Wexelcode',
  description: 'Wexelcode Doctor Portal',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <DashboardLayout
          navigationItems={MainNavigationItems}
          userMenu={<UserMenu />}
        >
          {children}
        </DashboardLayout>
      </body>
    </html>
  );
}
