'use client';

import { logo } from '@wexelcode/assets';
import {
  Separator,
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarInset,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarProvider,
  SidebarRail,
  SidebarTrigger,
} from '@wexelcode/components';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { PropsWithChildren } from 'react';

import NavigationMenu from './components/navigation-menu';

interface DashboardLayoutProps
  extends React.ComponentProps<typeof NavigationMenu> {
  breadcrumbsComponent?: React.ReactNode;
  actionComponent: React.ReactNode;
}

export function DashboardLayout({
  children,
  breadcrumbsComponent,
  actionComponent,
  items,
  ...rest
}: PropsWithChildren<DashboardLayoutProps>) {
  const pathname = usePathname();
  const hideLayout =
    /^\/appointments\/[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}\/[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}\/video-call$/.test(
      pathname
    );

  if (hideLayout) {
    // return zoom video component
    return <div>{children}</div>;
  }
  return (
    <SidebarProvider>
      <Sidebar collapsible="icon" {...rest}>
        <SidebarHeader>
          <SidebarMenu>
            <SidebarMenuItem>
              <SidebarMenuButton size="lg" asChild className=" mb-4 h-16">
                <Link href="/">
                  <Image
                    src={logo}
                    alt="Wexelcode Physio"
                    className="h-18 w-30 mb-4"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarHeader>
        <SidebarContent>
          <NavigationMenu items={items} />
        </SidebarContent>
        <SidebarFooter>{/* <NavUser user={data.user} /> */}</SidebarFooter>
        <SidebarRail />
      </Sidebar>
      <SidebarInset>
        <header className="flex h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-[[data-collapsible=icon]]/sidebar-wrapper:h-12 border-b">
          <div className="flex items-center gap-2 px-4">
            <SidebarTrigger className="-ml-1" />
            <Separator orientation="vertical" className="mr-2 h-4" />
            {breadcrumbsComponent}
          </div>

          {actionComponent}
        </header>
        <div className="flex flex-1 flex-col gap-4 p-4">{children}</div>
      </SidebarInset>
    </SidebarProvider>
  );
}
