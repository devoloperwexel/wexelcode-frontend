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

export default function Navigation() {
  const t = useTranslations('navigation');

  return (
    <NavigationMenu>
      <NavigationMenuList>
        {Object.entries(Routes).map(([key, route]) => {
          return (
            <NavigationMenuItem key={key}>
              <Link className={navigationMenuTriggerStyle()} href={route.url}>
                {t(key)}
              </Link>
            </NavigationMenuItem>
          );
        })}
      </NavigationMenuList>
    </NavigationMenu>
  );
}
