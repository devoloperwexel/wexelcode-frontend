export interface NavigationItem {
  title: string;
  url: string;
  //icon?: React.ReactNode;
  isActive?: boolean;
  items?: Array<NavigationItem>;
}
