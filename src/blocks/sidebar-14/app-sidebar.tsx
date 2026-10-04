import * as React from "react";

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
  SidebarRail,
} from "@/components/ui/sidebar";

// This is sample data.
const data = {
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
    {
      title: "Bantuan",
      url: "#",
      items: [
        {
          title: "Kontak Kantor Regional",
          url: "#",
        },
      ],
    },
  ],
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar {...props}>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Daftar Isi</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {data.navMain.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <a href={item.url} className="font-medium">
                      {item.title}
                    </a>
                  </SidebarMenuButton>
                  {item.items?.length ? (
                    <SidebarMenuSub>
                      {item.items.map((item) => (
                        <SidebarMenuSubItem key={item.title}>
                          <SidebarMenuSubButton asChild isActive={item.isActive}>
                            <a href={item.url}>{item.title}</a>
                          </SidebarMenuSubButton>
                        </SidebarMenuSubItem>
                      ))}
                    </SidebarMenuSub>
                  ) : null}
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarRail />
    </Sidebar>
  );
}
