"use client";

import * as React from "react";
import {
  BookOpen,
  Ticket,
  Trees,
  Frame,
  LifeBuoy,
  Map,
  PieChart,
  Send,
  Settings2,
  LayoutDashboard,
} from "lucide-react";

import { NavMain } from "./nav-main";
import { NavProjects } from "./nav-projects";
import { NavSecondary } from "./nav-secondary";
import { NavUser } from "./nav-user";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";

const data = {
  user: {
    name: "Rina Sari",
    email: "rina@agrowisata.id",
    avatar: "/avatars/shadcn.jpg",
  },
  navMain: [
    {
      title: "Dasbor",
      url: "#",
      icon: LayoutDashboard,
      isActive: true,
      items: [
        {
          title: "Ringkasan",
          url: "#",
        },
        {
          title: "Pengunjung",
          url: "#",
        },
        {
          title: "Pendapatan",
          url: "#",
        },
      ],
    },
    {
      title: "Tiket",
      url: "#",
      icon: Ticket,
      items: [
        {
          title: "Tiket Masuk",
          url: "#",
        },
        {
          title: "Tiket Terusan",
          url: "#",
        },
        {
          title: "Tiket Rombongan",
          url: "#",
        },
      ],
    },
    {
      title: "Paket Wisata",
      url: "#",
      icon: BookOpen,
      items: [
        {
          title: "Tea Walk",
          url: "#",
        },
        {
          title: "Paket Keluarga",
          url: "#",
        },
        {
          title: "Rombongan Sekolah",
          url: "#",
        },
        {
          title: "Edukasi Teh",
          url: "#",
        },
      ],
    },
    {
      title: "Pengaturan",
      url: "#",
      icon: Settings2,
      items: [
        {
          title: "Umum",
          url: "#",
        },
        {
          title: "Petugas",
          url: "#",
        },
        {
          title: "Tagihan",
          url: "#",
        },
        {
          title: "Kuota",
          url: "#",
        },
      ],
    },
  ],
  navSecondary: [
    {
      title: "Bantuan",
      url: "#",
      icon: LifeBuoy,
    },
    {
      title: "Masukan",
      url: "#",
      icon: Send,
    },
  ],
  projects: [
    {
      name: "Festival Panen Teh",
      url: "#",
      icon: Frame,
    },
    {
      name: "Promo Akhir Tahun",
      url: "#",
      icon: PieChart,
    },
    {
      name: "Renovasi Kafe",
      url: "#",
      icon: Map,
    },
  ],
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar variant="inset" {...props}>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton size="lg" asChild>
              <a href="/">
                <div className="flex aspect-square size-8 items-center justify-center rounded-md bg-primary text-fg-on-brand">
                  <Trees className="size-4" />
                </div>
                <div className="grid flex-1 text-left typo-body-m">
                  <span className="truncate font-medium">Gunung Mas</span>
                  <span className="truncate typo-body-s">Unit Bogor</span>
                </div>
              </a>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
        <NavProjects projects={data.projects} />
        <NavSecondary items={data.navSecondary} className="mt-auto" />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
    </Sidebar>
  );
}
