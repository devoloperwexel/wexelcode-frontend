'use client';

import {
  Button,
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
  Skeleton,
  UserAvatar,
} from '@wexelcode/components';
import { ChevronsUpDown, LogOut } from 'lucide-react';
import { signOut, useSession } from 'next-auth/react';
import { useTranslations } from 'next-intl';

import Routes from '../../constants/routes';
import { MyAvatar } from '../common';

export function UserMenu() {
  const t = useTranslations('userMenu');

  const { data, status } = useSession();

  const handleSinOut = async () => {
    await signOut({ redirectTo: Routes.home });
  };

  if (status === 'loading')
    return (
      <div className="flex space-x-2 items-center">
        <Skeleton className="h-8 w-8 rounded-lg" />
        <div className="flex flex-col space-y-1">
          <Skeleton className="h-2 w-[150px]" />
          <Skeleton className="h-2 w-[100px]" />
        </div>
      </div>
    );

  if (status === 'authenticated')
    return (
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant={'ghost'}>
            <MyAvatar />
            <div className="grid flex-1 text-left text-sm leading-tight">
              <span className="truncate font-semibold">{`${data?.user.firstName} ${data?.user.lastName}`}</span>
              <span className="truncate text-xs">{data?.user.email}</span>
            </div>
            <ChevronsUpDown className="ml-auto size-4" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent
          className="w-[--radix-dropdown-menu-trigger-width] min-w-56 rounded-lg"
          side={'bottom'}
          align="end"
          sideOffset={4}
        >
          <DropdownMenuLabel className="p-0 font-normal">
            <div className="flex items-center gap-2 px-1 py-1.5 text-left text-sm">
              <UserAvatar
                name={data?.user.firstName ?? ''}
                profileUrl={data?.user.profilePictureUrl}
              />
              <div className="grid flex-1 text-left text-sm leading-tight">
                <span className="truncate font-semibold">{`${data?.user.firstName}`}</span>
                <span className="truncate text-xs">{data?.user.email}</span>
              </div>
            </div>
          </DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuSeparator />
          <DropdownMenuGroup>
            {/* <Link href={Routes.profile.index}>
            <DropdownMenuItem>
              <Cog />
              {t('settings')}
            </DropdownMenuItem>
          </Link> */}
          </DropdownMenuGroup>
          <DropdownMenuSeparator />
          <DropdownMenuItem onClick={handleSinOut}>
            <LogOut />
            {t('logout')}
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    );

  return null;
}
