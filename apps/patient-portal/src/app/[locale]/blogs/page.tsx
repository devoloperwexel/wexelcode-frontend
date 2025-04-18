import { getLocale } from 'next-intl/server';

import Routes from '../../../constants/routes';
import { redirect } from '../../../i18n/routing';

export default async function BlogPage() {
  const locale = await getLocale();
  redirect({ href: `${Routes.home}/#blog`, locale });
}
