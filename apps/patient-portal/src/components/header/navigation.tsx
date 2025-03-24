'use client';

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from '@wexelcode/components';
import { useTranslations } from 'next-intl';

import Routes from '../../constants/routes';
import { Link } from '../../i18n/routing';
import { ProtectedVisible } from '../common';

export default function Navigation() {
  const t = useTranslations('navigation');

  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <Link className={navigationMenuTriggerStyle()} href={Routes.home}>
            {t('home')}
          </Link>
          <Link className={navigationMenuTriggerStyle()} href={Routes.doctors}>
            {t('doctors')}
          </Link>
          <ProtectedVisible>
            <Link
              className={navigationMenuTriggerStyle()}
              href={Routes.appointments}
            >
              {t('appointments')}
            </Link>
          </ProtectedVisible>
          <Link className={navigationMenuTriggerStyle()} href={Routes.blog}>
            {t('blog')}
          </Link>
          <Link className={navigationMenuTriggerStyle()} href={Routes.about}>
            {t('about')}
          </Link>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}
