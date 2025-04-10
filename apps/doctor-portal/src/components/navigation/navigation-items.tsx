import { DashboardNavigationItem } from '@wexelcode/types';
import { CalendarCheck, Home, Users2 } from 'lucide-react';

import Routes from '../../constants/routes';

export const DashboardNavigationItems: DashboardNavigationItem[] = [
  {
    title: 'Home',
    url: Routes.home,
    icon: <Home />,
  },
  {
    title: 'Appointments',
    url: Routes.appointments,
    icon: <CalendarCheck />,
  },
  {
    title: 'Patients',
    url: Routes.patients,
    icon: <Users2 />,
  },
];
