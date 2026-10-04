"use client";

import * as React from "react";
import {
  Camera,
  ChartColumn,
  CircleHelp,
  ClipboardList,
  Database,
  FileText,
  FileType,
  Folder,
  LayoutDashboard,
  Leaf,
  ListChecks,
  Search,
  Settings,
  Users,
} from "lucide-react";

import { NavDocuments } from "./nav-documents";
import { NavMain } from "./nav-main";
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
    },
    {
      title: "Kunjungan",
      url: "#",
      icon: ListChecks,
    },
    {
      title: "Analitik",
      url: "#",
      icon: ChartColumn,
    },
    {
      title: "Proyek",
      url: "#",
      icon: Folder,
    },
    {
      title: "Petugas",
      url: "#",
      icon: Users,
    },
  ],
  navClouds: [
    {
      title: "Dokumentasi",
      icon: Camera,
      isActive: true,
      url: "#",
      items: [
        {
          title: "Proposal Aktif",
          url: "#",
        },
        {
          title: "Arsip",
          url: "#",
        },
      ],
    },
    {
      title: "Proposal",
      icon: FileText,
      url: "#",
      items: [
        {
          title: "Proposal Aktif",
          url: "#",
        },
        {
          title: "Arsip",
          url: "#",
        },
      ],
    },
    {
      title: "Materi Promosi",
      icon: FileText,
      url: "#",
      items: [
        {
          title: "Proposal Aktif",
          url: "#",
        },
        {
          title: "Arsip",
          url: "#",
        },
      ],
    },
  ],
  navSecondary: [
    {
      title: "Pengaturan",
      url: "#",
      icon: Settings,
    },
    {
      title: "Bantuan",
      url: "#",
      icon: CircleHelp,
    },
    {
      title: "Cari",
      url: "#",
      icon: Search,
    },
  ],
  documents: [
    {
      name: "Pustaka Data",
      url: "#",
      icon: Database,
    },
    {
      name: "Laporan",
      url: "#",
      icon: ClipboardList,
    },
    {
      name: "Asisten Dokumen",
      url: "#",
      icon: FileType,
    },
  ],
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="offcanvas" {...props}>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton asChild className="data-[slot=sidebar-menu-button]:p-1.5!">
              <a href="/">
                <Leaf className="size-5!" />
                <span className="typo-label-l">Gunung Mas</span>
              </a>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
        <NavDocuments items={data.documents} />
        <NavSecondary items={data.navSecondary} className="mt-auto" />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
    </Sidebar>
  );
}
