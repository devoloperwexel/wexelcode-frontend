'use client';

import { logo } from '@wexelcode/assets';
import { LocalSwitcher } from '@wexelcode/components';
import { useGetTotalUserCredits } from '@wexelcode/hooks';
import Image from 'next/image';
import { useSession } from 'next-auth/react';

import Locales from '../../constants/locales';
import { Link, usePathname } from '../../i18n/routing';
import { UserMenu } from '../user-menu';
import Navigation from './navigation';

export function Header() {
  const pathname = usePathname();
  const hideLayout = /^\/appointments\/[0-9a-fA-F-]+\/video-call$/.test(
    pathname
  );
  const { data } = useSession(); // or from session
  const userId = data?.user?.id;
  const { data: creditData, isLoading } = useGetTotalUserCredits({ userId });
  if (hideLayout) {
    return <></>;
  }
  return (
    <nav className="bg-white shadow-sm py-4 sticky top-0 z-50">
      <div className="container mx-auto px-4 md:px-6 flex justify-between items-center">
        <div className="flex items-center">
          <Link href={'/'}>
            <Image
              src={logo}
              alt="Wexelcode Logo"
              className="h-12 w-auto"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </Link>
        </div>

        <Navigation />

        <div className="flex items-center space-x-4">
          <LocalSwitcher locales={Locales} />

          <UserMenu
            totalCredits={creditData?.totalCredits}
            isLoadingCredit={isLoading}
          />
        </div>
      </div>
    </nav>
  );
}
