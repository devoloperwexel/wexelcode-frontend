'use client';

import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
  SidebarGroup,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
  Text,
} from '@wexelcode/components';
import { DashboardNavigationItem } from '@wexelcode/types';
import { cn } from '@wexelcode/utils';
import { ChevronRight } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

interface NavigationMenuProps {
  items: DashboardNavigationItem[];
}

export default function NavigationMenu({ items }: NavigationMenuProps) {
  const path = usePathname();

  const isActive = (url: string) => path === url || path.startsWith(url + '/');

  return (
    <SidebarGroup>
      <SidebarMenu className="space-y-2">
        {items.map((item) => (
          <Collapsible
            key={item.title}
            asChild
            defaultOpen={item.isActive}
            className="group/collapsible"
          >
            {item.items ? (
              <SidebarMenuItem>
                <CollapsibleTrigger asChild>
                  <SidebarMenuButton tooltip={item.title}>
                    {item.icon && item.icon}
                    <Text variant="large">{item.title}</Text>
                    <ChevronRight className="ml-auto transition-transform duration-200 group-data-[state=open]/collapsible:rotate-90" />
                  </SidebarMenuButton>
                </CollapsibleTrigger>
                <CollapsibleContent>
                  <SidebarMenuSub>
                    {item.items?.map((subItem) => (
                      <SidebarMenuSubItem key={subItem.title}>
                        <SidebarMenuSubButton asChild>
                          <Link href={subItem.url}>
                            <span>{subItem.title}</span>
                          </Link>
                        </SidebarMenuSubButton>
                      </SidebarMenuSubItem>
                    ))}
                  </SidebarMenuSub>
                </CollapsibleContent>
              </SidebarMenuItem>
            ) : (
              <SidebarMenuItem className="group/collapsible">
                <SidebarMenuButton
                  asChild
                  isActive={isActive(item.url)}
                  className={cn(isActive(item.url) && 'bg-primary/20')}
                >
                  <Link href={item.url}>
                    {item.icon && item.icon}
                    <Text variant="large">{item.title}</Text>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
            )}
          </Collapsible>
        ))}
      </SidebarMenu>
    </SidebarGroup>
  );
}
