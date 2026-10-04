import * as React from "react";

import { SearchForm } from "./search-form";
import { VersionSwitcher } from "./version-switcher";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarRail,
} from "@/components/ui/sidebar";

// This is sample data.
const data = {
  versions: ["1.0.1", "1.1.0-alpha", "2.0.0-beta1"],
  navMain: [
    {
      title: "Memulai",
      url: "#",
      items: [
        {
          title: "Pengenalan Sistem",
          url: "#",
        },
        {
          title: "Struktur Unit",
          url: "#",
        },
      ],
    },
    {
      title: "Operasional Harian",
      url: "#",
      items: [
        {
          title: "Jadwal Kunjungan",
          url: "#",
        },
        {
          title: "Penjualan Tiket",
          url: "#",
          isActive: true,
        },
        {
          title: "Pemesanan Rombongan",
          url: "#",
        },
        {
          title: "Kuota Harian",
          url: "#",
        },
        {
          title: "Paket Wisata",
          url: "#",
        },
        {
          title: "Promo & Diskon",
          url: "#",
        },
        {
          title: "Pengaturan Harga",
          url: "#",
        },
        {
          title: "Pemeriksaan Tiket",
          url: "#",
        },
        {
          title: "Akses Petugas",
          url: "#",
        },
        {
          title: "Penutupan Kas",
          url: "#",
        },
        {
          title: "Pembaruan Data",
          url: "#",
        },
        {
          title: "Contoh Laporan",
          url: "#",
        },
      ],
    },
    {
      title: "Laporan",
      url: "#",
      items: [
        {
          title: "Laporan Harian",
          url: "#",
        },
        {
          title: "Laporan Bulanan",
          url: "#",
        },
        {
          title: "Pendapatan per Unit",
          url: "#",
        },
        {
          title: "Ekspor ke Excel",
          url: "#",
        },
        {
          title: "Rekap Pengunjung",
          url: "#",
        },
        {
          title: "Audit Transaksi",
          url: "#",
        },
      ],
    },
    {
      title: "Fasilitas",
      url: "#",
      items: [
        {
          title: "Aksesibilitas",
          url: "#",
        },
        {
          title: "Perawatan Rutin",
          url: "#",
        },
        {
          title: "Kebersihan Area",
          url: "#",
        },
        {
          title: "Area Parkir",
          url: "#",
        },
        {
          title: "Keamanan",
          url: "#",
        },
      ],
    },
  ],
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar {...props}>
      <SidebarHeader>
        <VersionSwitcher versions={data.versions} defaultVersion={data.versions[0]} />
        <SearchForm />
      </SidebarHeader>
      <SidebarContent>
        {/* We create a SidebarGroup for each parent. */}
        {data.navMain.map((item) => (
          <SidebarGroup key={item.title}>
            <SidebarGroupLabel>{item.title}</SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                {item.items.map((item) => (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton asChild isActive={item.isActive}>
                      <a href={item.url}>{item.title}</a>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        ))}
      </SidebarContent>
      <SidebarRail />
    </Sidebar>
  );
}
