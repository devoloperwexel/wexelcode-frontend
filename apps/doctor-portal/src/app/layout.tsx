import { AuthProvider } from '@wexelcode/auth';
import { DashboardLayout } from '@wexelcode/layouts';
import { QueryProvider } from '@wexelcode/react-query';
import { ThemeProvider } from '@wexelcode/theme';
import { NextIntlClientProvider } from 'next-intl';
import { getLocale, getMessages } from 'next-intl/server';

import { LanguageSwitch } from '../components/intl';
import { UserMenu } from '../components/user-menu';
import Languages from '../constants/languages';
import DashboardNavigationItems from '../constants/navigation-items';

export const metadata = {
  title: 'Wexelcode',
  description: 'Wexelcode Doctor Portal',
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const locale = await getLocale();

  const messages = await getMessages();

  return (
    <AuthProvider>
      <ThemeProvider>
        <html lang={locale}>
          <body>
            <QueryProvider>
              <NextIntlClientProvider messages={messages}>
                <DashboardLayout
                  items={DashboardNavigationItems}
                  actionComponent={
                    <div className="ml-auto flex items-center gap-2 px-4">
                      <LanguageSwitch languages={Languages} />
                      <UserMenu />
                    </div>
                  }
                >
                  {children}
                </DashboardLayout>
              </NextIntlClientProvider>
            </QueryProvider>
          </body>
        </html>
      </ThemeProvider>
    </AuthProvider>
  );
}
