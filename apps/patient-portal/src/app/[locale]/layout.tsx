import '@wexelcode/theme';

import { AuthProvider } from '@wexelcode/auth';
import { QueryProvider } from '@wexelcode/react-query';
import { notFound } from 'next/navigation';
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import NextTopLoader from 'nextjs-toploader';
import { ToastContainer } from 'react-toastify';

import MainLayout from '../../layouts/main-layout';
import { ProfileCompleteProvider } from '../../providers';
import { routing } from './../../i18n/routing';
import Script from 'next/script';

export const metadata = {
  title: 'WexelCode',
  description:
    'Professional physiotherapy services tailored to your needs. Get personalized treatment plans and expert care from certified physiotherapists.',
};

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  // Ensure `params` is awaited before accessing its properties
  const { locale } = await params;

  // Ensure that the incoming `locale` is valid
  if (!routing.locales.includes(locale as any)) {
    notFound();
  }

  // Fetch translations/messages
  const messages = await getMessages();

  return (
    <AuthProvider>
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
          <ToastContainer theme="colored" />
          <QueryProvider>
            <NextIntlClientProvider messages={messages}>
              <ProfileCompleteProvider>
                <MainLayout>{children}</MainLayout>
              </ProfileCompleteProvider>
            </NextIntlClientProvider>
          </QueryProvider>
        </body>
      </html>
    </AuthProvider>
  );
}
