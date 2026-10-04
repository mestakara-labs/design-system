"use client";

import { CirclePlus, type LucideIcon, Mail } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";

export function NavMain({
  items,
}: {
  items: {
    title: string;
    url: string;
    icon?: LucideIcon;
  }[];
}) {
  return (
    <SidebarGroup>
      <SidebarGroupContent className="flex flex-col gap-2">
        <SidebarMenu>
          <SidebarMenuItem className="flex items-center gap-2">
            <SidebarMenuButton
              tooltip="Buat Cepat"
              className="text-primary-foreground hover:text-primary-foreground active:text-primary-foreground min-w-8 bg-primary duration-200 ease-linear hover:bg-primary/90 active:bg-primary/90"
            >
              <CirclePlus />
              <span>Buat Cepat</span>
            </SidebarMenuButton>
            <Button
              size="icon-sm"
              className="size-8 border-sidebar-fg-muted bg-transparent text-sidebar-fg group-data-[collapsible=icon]:opacity-0 hover:bg-sidebar-hover"
              variant="outline"
            >
              <Mail />
              <span className="sr-only">Kotak Masuk</span>
            </Button>
          </SidebarMenuItem>
        </SidebarMenu>
        <SidebarMenu>
          {items.map((item) => (
            <SidebarMenuItem key={item.title}>
              <SidebarMenuButton tooltip={item.title}>
                {item.icon && <item.icon />}
                <span>{item.title}</span>
              </SidebarMenuButton>
            </SidebarMenuItem>
          ))}
        </SidebarMenu>
      </SidebarGroupContent>
    </SidebarGroup>
  );
}
