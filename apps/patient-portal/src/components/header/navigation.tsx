'use client';

import { useTranslations } from 'next-intl';

import Routes from '../../constants/routes';
import { Link } from '../../i18n/routing';
import { ProtectedVisible } from '../common';

export default function Navigation() {
  const t = useTranslations('navigation');

  return (
    <div className="space-x-8">
      <Link
        href={Routes.home}
        className="text-gray-700 hover:text-primary font-medium"
      >
        {t('home')}
      </Link>
      <ProtectedVisible>
        <Link
          href={Routes.dashboard}
          className="text-gray-700 hover:text-primary font-medium"
        >
          {t('dashboard')}
        </Link>
      </ProtectedVisible>
      <Link
        href={Routes.doctors}
        className="text-gray-700 hover:text-primary font-medium"
      >
        {t('doctors')}
      </Link>
      <ProtectedVisible>
        <Link
          href={Routes.appointments}
          className="text-gray-700 hover:text-primary font-medium"
        >
          {t('appointments')}
        </Link>
      </ProtectedVisible>
      <Link
        href={Routes.blog}
        className="text-gray-700 hover:text-primary font-medium"
      >
        {t('blog')}
      </Link>
      <Link
        href={Routes.contact}
        className="text-gray-700 hover:text-primary font-medium"
      >
        {t('contact')}
      </Link>
    </div>
  );
}
