import { DashboardNavigationItem } from '@wexelcode/types';
import { CalendarCheck, Home } from 'lucide-react';

const DashboardNavigationItems: DashboardNavigationItem[] = [
  {
    title: 'Home',
    url: '/',
    icon: <Home />,
  },
  {
    title: 'Appointments',
    url: '/appointments',
    icon: <CalendarCheck />,
  },
];

export default DashboardNavigationItems;
