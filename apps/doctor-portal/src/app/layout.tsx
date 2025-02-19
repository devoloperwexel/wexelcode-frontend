import { DashboardLayout } from '@wexelcode/layouts';
import '@wexelcode/theme';
import { MainNavigationItems } from '../constants';
import { UserMenu } from '../components/user-menu';

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
