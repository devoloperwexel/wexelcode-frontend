'use client';

import {
  LocalLink,
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from '@wexelcode/components';
import { useTranslations } from 'next-intl';

import Routes from '../../constants/routes';

export default function Navigation() {
  const t = useTranslations('navigation');

  return (
    <NavigationMenu>
      <NavigationMenuList>
        {Object.entries(Routes).map(([key, route]) => {
          return (
            <NavigationMenuItem key={key}>
              <LocalLink
                className={navigationMenuTriggerStyle()}
                href={route.url}
              >
                {t(key)}
              </LocalLink>
            </NavigationMenuItem>
          );
        })}
      </NavigationMenuList>
    </NavigationMenu>
  );
}
