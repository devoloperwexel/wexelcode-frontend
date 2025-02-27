import { DashboardLayout } from '@wexelcode/layouts';
import { ThemeProvider } from '@wexelcode/theme';

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
    <ThemeProvider>
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
    </ThemeProvider>
  );
}
