"use client";

import * as React from "react";
import {
  Mountain,
  BookOpen,
  Ticket,
  Trees,
  Frame,
  Leaf,
  Map,
  PieChart,
  Settings2,
  LayoutDashboard,
} from "lucide-react";

import { NavMain } from "./nav-main";
import { NavProjects } from "./nav-projects";
import { NavUser } from "./nav-user";
import { TeamSwitcher } from "./team-switcher";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
} from "@/components/ui/sidebar";

// This is sample data.
const data = {
  user: {
    name: "Rina Sari",
    email: "rina@agrowisata.id",
    avatar: "/avatars/shadcn.jpg",
  },
  teams: [
    {
      name: "Gunung Mas",
      logo: Leaf,
      plan: "Unit Bogor",
    },
    {
      name: "Rancabali",
      logo: Mountain,
      plan: "Unit Bandung",
    },
    {
      name: "Malabar",
      logo: Trees,
      plan: "Unit Bandung",
    },
  ],
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
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <TeamSwitcher teams={data.teams} />
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
        <NavProjects projects={data.projects} />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  );
}
