"use client";

import * as React from "react";
import {
  ArrowDown,
  ArrowUp,
  Bell,
  Copy,
  CornerUpLeft,
  CornerUpRight,
  FileText,
  Leaf,
  LineChart,
  Link,
  MoreHorizontal,
  Settings2,
  Star,
  Trash,
  Trash2,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";

const data = [
  [
    {
      label: "Atur Halaman",
      icon: Settings2,
    },
    {
      label: "Jadikan wiki",
      icon: FileText,
    },
  ],
  [
    {
      label: "Salin Tautan",
      icon: Link,
    },
    {
      label: "Duplikat",
      icon: Copy,
    },
    {
      label: "Pindahkan ke",
      icon: CornerUpRight,
    },
    {
      label: "Pindahkan ke Sampah",
      icon: Trash2,
    },
  ],
  [
    {
      label: "Urungkan",
      icon: CornerUpLeft,
    },
    {
      label: "Lihat analitik",
      icon: LineChart,
    },
    {
      label: "Riwayat Versi",
      icon: Leaf,
    },
    {
      label: "Tampilkan halaman terhapus",
      icon: Trash,
    },
    {
      label: "Notifikasi",
      icon: Bell,
    },
  ],
  [
    {
      label: "Impor",
      icon: ArrowUp,
    },
    {
      label: "Ekspor",
      icon: ArrowDown,
    },
  ],
];

export function NavActions() {
  // Open on first view, to show what the menu contains.
  const [isOpen, setIsOpen] = React.useState(true);

  return (
    <div className="flex items-center gap-2 typo-body-m">
      <div className="hidden font-medium text-fg-secondary md:inline-block">Diubah 8 Okt</div>
      <Button variant="ghost" size="icon-sm" className="h-7 w-7">
        <Star />
      </Button>
      <Popover open={isOpen} onOpenChange={setIsOpen}>
        <PopoverTrigger asChild>
          <Button variant="ghost" size="icon-sm" className="h-7 w-7 data-[state=open]:bg-subtle">
            <MoreHorizontal />
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-56 overflow-hidden rounded-md p-0" align="end">
          {/* sidebar-light: light sidebar colors, because this menu sits on a white popover. */}
          <Sidebar collapsible="none" className="bg-transparent sidebar-light">
            <SidebarContent>
              {data.map((group, index) => (
                <SidebarGroup key={index} className="border-b last:border-none">
                  <SidebarGroupContent className="gap-0">
                    <SidebarMenu>
                      {group.map((item, index) => (
                        <SidebarMenuItem key={index}>
                          <SidebarMenuButton>
                            <item.icon /> <span>{item.label}</span>
                          </SidebarMenuButton>
                        </SidebarMenuItem>
                      ))}
                    </SidebarMenu>
                  </SidebarGroupContent>
                </SidebarGroup>
              ))}
            </SidebarContent>
          </Sidebar>
        </PopoverContent>
      </Popover>
    </div>
  );
}
