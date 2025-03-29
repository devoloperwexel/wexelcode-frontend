'use client';

import { LocalSwitcher } from '@wexelcode/components';
import Link from 'next/link';

import Locales from '../../constants/locales';
import { UserMenu } from '../user-menu';
import Navigation from './navigation';

export function Header() {
  return (
    <nav className="bg-white shadow-sm py-4 sticky top-0 z-50">
      <div className="container mx-auto px-4 md:px-6 flex justify-between items-center">
        <div className="flex items-center">
          <span className="text-xl font-bold text-primary">Wexelcode</span>
        </div>

        <Navigation />

        <div className="flex items-center space-x-4">
          <LocalSwitcher locales={Locales} />

          <UserMenu />
        </div>
      </div>
    </nav>
  );
}
