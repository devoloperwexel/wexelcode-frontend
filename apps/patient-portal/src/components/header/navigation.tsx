import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from '@wexelcode/components';
import Link from 'next/link';

import Routes from '../../constants/routes';

export default function Navigation() {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        {Object.entries(Routes).map(([key, route]) => {
          return (
            <NavigationMenuItem key={key}>
              <Link href={route.url}>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  {route.title}
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
          );
        })}
      </NavigationMenuList>
    </NavigationMenu>
  );
}
