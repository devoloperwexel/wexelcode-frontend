import '@wexelcode/theme';

import { AuthProvider } from '@wexelcode/auth';
import { QueryProvider } from '@wexelcode/react-query';
import { notFound } from 'next/navigation';
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import NextTopLoader from 'nextjs-toploader';

import MainLayout from '../../layouts/main-layout';
import { ProfileCompleteProvider } from '../../providers';
import { routing } from './../../i18n/routing';

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
          <NextTopLoader
            color="#A51008"
            speed={300}
            showForHashAnchor={false}
            showSpinner={false}
          />
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
