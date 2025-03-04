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
import {
  BadgeCheck,
  Bell,
  ChevronsUpDown,
  CreditCard,
  LogOut,
  Sparkles,
} from 'lucide-react';
import { signIn, signOut, useSession } from 'next-auth/react';

export function UserMenu() {
  const { data, status } = useSession();

  const handleSinIn = async () => {
    await signIn('keycloak', { redirectTo: window.location.href });
  };

  const handleSinOut = async () => {
    await signOut({ redirect: false });
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

  if (status === 'unauthenticated')
    return (
      <Button className="bg-white text-black" onClick={handleSinIn}>
        Sign in
      </Button>
    );

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button className="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground">
          <UserAvatar
            name={data?.user.firstName ?? ''}
            profileUrl={data?.user.firstName}
          />
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
        <DropdownMenuGroup>
          <DropdownMenuItem>
            <Sparkles />
            Upgrade to Pro
          </DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuItem>
            <BadgeCheck />
            Account
          </DropdownMenuItem>
          <DropdownMenuItem>
            <CreditCard />
            Billing
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Bell />
            Notifications
          </DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuItem onClick={handleSinOut}>
          <LogOut />
          Log out
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
