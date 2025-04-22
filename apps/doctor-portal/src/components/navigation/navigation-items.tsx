import { DashboardNavigationItem } from '@wexelcode/types';
import { CalendarCheck, Home, Users2 } from 'lucide-react';

import Routes from '../../constants/routes';

export const DashboardNavigationItems: DashboardNavigationItem[] = [
  {
    title: 'home',
    url: Routes.home,
    icon: <Home />,
  },
  {
    title: 'appointments',
    url: Routes.appointments,
    icon: <CalendarCheck />,
  },
  {
    title: 'patients',
    url: Routes.patients,
    icon: <Users2 />,
  },
];
