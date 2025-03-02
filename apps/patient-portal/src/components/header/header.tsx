'use client';

import { LocalSwitcher } from '@wexelcode/components';
import Link from 'next/link';

import Locales from '../../constants/locales';
import { UserMenu } from '../user-menu';
import Navigation from './navigation';

export function Header() {
  return (
    <header className="bg-primary text-white px-6 py-3 flex items-center justify-between sticky top-0 z-50">
      <Link href="/" className="text-xl text-white font-bold">
        Logo
      </Link>

      <Navigation />

      <div className="flex items-center space-x-4">
        <LocalSwitcher locales={Locales} />

        <UserMenu />
      </div>
    </header>
  );
}
