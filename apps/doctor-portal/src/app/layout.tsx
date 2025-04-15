import { AuthProvider } from '@wexelcode/auth';
import { DashboardLayout } from '@wexelcode/layouts';
import { QueryProvider } from '@wexelcode/react-query';
import { ThemeProvider } from '@wexelcode/theme';
import { NextIntlClientProvider } from 'next-intl';
import { getLocale, getMessages } from 'next-intl/server';
import NextTopLoader from 'nextjs-toploader';

import { LanguageSwitch } from '../components/intl';
import { DashboardNavigationItems } from '../components/navigation';
import { UserMenu } from '../components/user-menu';
import Languages from '../constants/languages';

export const metadata = {
  title: 'Wexelcode - Physio',
  description: 'Wexelcode Physio Portal',
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [locale, messages] = await Promise.all([getLocale(), getMessages()]);

  return (
    <AuthProvider>
      <ThemeProvider>
        <html lang={locale}>
          <body>
            <NextTopLoader
              color="#A51008"
              speed={300}
              showForHashAnchor={false}
              showSpinner={false}
            />
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
