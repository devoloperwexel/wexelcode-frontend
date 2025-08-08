import { AuthProvider } from '@wexelcode/auth';
import { DashboardLayout } from '@wexelcode/layouts';
import { QueryProvider } from '@wexelcode/react-query';
import { ThemeProvider } from '@wexelcode/theme';
import { NextIntlClientProvider } from 'next-intl';
import { getLocale, getMessages } from 'next-intl/server';
import NextTopLoader from 'nextjs-toploader';

import { LanguageSwitch } from '../components/intl';
import {
  BreadcrumbNavigator,
  DashboardNavigationItems,
} from '../components/navigation';
import { UserMenu } from '../components/user-menu';
import Languages from '../constants/languages';
import Script from 'next/script';

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
            {/* Microsoft Clarity Script */}
            <Script id="clarity-script" strategy="afterInteractive">
              {`
            (function(c,l,a,r,i,t,y){
              c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
              t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
              y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
            })(window, document, "clarity", "script", "sqhil021m9");
          `}
            </Script>
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
                  breadcrumbsComponent={<BreadcrumbNavigator />}
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
