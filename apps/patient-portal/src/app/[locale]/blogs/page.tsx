import Routes from 'apps/patient-portal/src/constants/routes';
import { redirect } from 'apps/patient-portal/src/i18n/routing';
import { getLocale } from 'next-intl/server';

export default async function BlogPage() {
  const locale = await getLocale();
  redirect({ href: `${Routes.home}/#blog`, locale });
}
