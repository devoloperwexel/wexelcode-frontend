'use client';

import * as React from 'react';

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarRail,
} from '@wexelcode/components';
import { NavMain } from './nav-main';

import { logo } from '@wexelcode/assets';
import Image from 'next/image';
import { NavigationItem } from '@wexelcode/types';

interface AppSidebarProps extends React.ComponentProps<typeof Sidebar> {
  navigationItems: NavigationItem[];
}

export function AppSidebar({ navigationItems, ...rest }: AppSidebarProps) {
  return (
    <Sidebar collapsible="icon" {...rest}>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton size="lg" asChild>
              <a href="/">
                <div className="flex aspect-square size-8 items-center justify-center rounded-lg bg-sidebar-primary text-sidebar-primary-foreground">
                  <Image src={logo} alt="Logo" width={40} />
                </div>
                <div className="flex flex-col gap-0.5 leading-none">
                  <span className="font-semibold uppercase">Wexelcode</span>
                  <span className="">Doctor Portal</span>
                </div>
              </a>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={navigationItems} />
      </SidebarContent>
      <SidebarFooter>{/* <NavUser user={data.user} /> */}</SidebarFooter>
      <SidebarRail />
    </Sidebar>
  );
}
