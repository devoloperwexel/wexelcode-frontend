import {
  LocalLink,
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from '@wexelcode/components';

import Routes from '../../constants/routes';

export default function Navigation() {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        {Object.entries(Routes).map(([key, route]) => {
          return (
            <NavigationMenuItem key={key}>
              <LocalLink href={route.url}>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  {route.title}
                </NavigationMenuLink>
              </LocalLink>
            </NavigationMenuItem>
          );
        })}
      </NavigationMenuList>
    </NavigationMenu>
  );
}
