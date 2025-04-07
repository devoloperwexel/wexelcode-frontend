export interface DashboardNavigationItem {
  title: string;
  url: string;
  icon?: React.ReactNode;
  isActive?: boolean;
  items?: Array<DashboardNavigationItem>;
}
