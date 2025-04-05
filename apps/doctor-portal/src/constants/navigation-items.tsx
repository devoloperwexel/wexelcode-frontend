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
    items: [
      {
        title: 'Upcoming',
        url: '/appointments/upcoming',
        icon: <CalendarCheck />,
      },
      {
        title: 'Past',
        url: '/appointments/past',
        icon: <CalendarCheck />,
      },
    ],
  },
];

export default DashboardNavigationItems;
