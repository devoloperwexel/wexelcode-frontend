'use client';

import { useTranslations } from 'next-intl';

import Routes from '../../constants/routes';
import { Link, usePathname } from '../../i18n/routing';
import { ProtectedVisible } from '../common';

export default function Navigation() {
  const t = useTranslations('navigation');
  const pathname = usePathname();
  return (
    <div className="space-x-8">
      <Link
        href={Routes.pricing}
        className={`text-${
          pathname.endsWith(Routes.pricing) ? 'primary' : 'gray-700'
        } hover:text-primary font-medium`}
      >
        {t('pricing')}
      </Link>
      <ProtectedVisible>
        <Link
          href={Routes.dashboard}
          className={`text-${
            pathname.includes(Routes.dashboard) ? 'primary' : 'gray-700'
          } hover:text-primary font-medium`}
        >
          {t('dashboard')}
        </Link>
      </ProtectedVisible>
      <Link
        href={Routes.doctors}
        className={`text-${
          pathname.includes(Routes.doctors) ? 'primary' : 'gray-700'
        } hover:text-primary font-medium`}
      >
        {t('doctors')}
      </Link>
      <ProtectedVisible>
        <Link
          href={Routes.appointments}
          className={`text-${
            pathname.includes(Routes.appointments) ? 'primary' : 'gray-700'
          } hover:text-primary font-medium`}
        >
          {t('appointments')}
        </Link>
      </ProtectedVisible>
      <Link
        href={`${Routes.home}/#blog`}
        className="text-gray-700 hover:text-primary font-medium"
      >
        {t('blog')}
      </Link>
      <Link
        href={`${Routes.about}`}
        className={`text-${
          pathname.includes(Routes.about) ? 'primary' : 'gray-700'
        } hover:text-primary font-medium`}
      >
        {t('about')}
      </Link>
      <Link
        href={Routes.contact}
        className={`text-${
          pathname.includes(Routes.contact) ? 'primary' : 'gray-700'
        } hover:text-primary font-medium`}
      >
        {t('contact')}
      </Link>
    </div>
  );
}
