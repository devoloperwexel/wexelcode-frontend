export interface NavigationItem {
  title: string;
  url: string;
  icon?: React.ReactNode;
  isActive?: boolean;
  items?: Array<NavigationItem>;
}

export type RouteItem = Record<string, NavigationItem>;

const myRoutes: RouteItem = {
 home: {
    title: "Home",
    url: "/home",
 }
};

const current = myRoutes.