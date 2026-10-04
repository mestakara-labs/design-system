import * as React from "react";
import { ChevronRight } from "lucide-react";

import { SearchForm } from "./search-form";
import { VersionSwitcher } from "./version-switcher";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
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
      <SidebarHeader>
        <VersionSwitcher versions={data.versions} defaultVersion={data.versions[0]} />
        <SearchForm />
      </SidebarHeader>
      <SidebarContent className="gap-0">
        {/* We create a collapsible SidebarGroup for each parent. */}
        {data.navMain.map((item) => (
          <Collapsible
            key={item.title}
            title={item.title}
            defaultOpen
            className="group/collapsible"
          >
            <SidebarGroup>
              <SidebarGroupLabel
                asChild
                className="group/label text-sidebar-fg hover:bg-sidebar-hover hover:text-sidebar-fg"
              >
                <CollapsibleTrigger>
                  {item.title}{" "}
                  <ChevronRight className="ml-auto transition-transform group-data-[state=open]/collapsible:rotate-90" />
                </CollapsibleTrigger>
              </SidebarGroupLabel>
              <CollapsibleContent>
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
              </CollapsibleContent>
            </SidebarGroup>
          </Collapsible>
        ))}
      </SidebarContent>
      <SidebarRail />
    </Sidebar>
  );
}
