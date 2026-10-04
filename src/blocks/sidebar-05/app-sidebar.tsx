import * as React from "react";
import { Leaf, Minus, Plus } from "lucide-react";

import { SearchForm } from "./search-form";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarHeader,
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
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton size="lg" asChild>
              <a href="/">
                <div className="flex aspect-square size-8 items-center justify-center rounded-md bg-primary text-fg-on-brand">
                  <Leaf className="size-4" />
                </div>
                <div className="flex flex-col gap-0.5 leading-none">
                  <span className="font-medium">Panduan Unit</span>
                  <span className="">v1.0.0</span>
                </div>
              </a>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
        <SearchForm />
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarMenu>
            {data.navMain.map((item, index) => (
              <Collapsible key={item.title} defaultOpen={index === 1} className="group/collapsible">
                <SidebarMenuItem>
                  <CollapsibleTrigger asChild>
                    <SidebarMenuButton>
                      {item.title}{" "}
                      <Plus className="ml-auto group-data-[state=open]/collapsible:hidden" />
                      <Minus className="ml-auto group-data-[state=closed]/collapsible:hidden" />
                    </SidebarMenuButton>
                  </CollapsibleTrigger>
                  {item.items?.length ? (
                    <CollapsibleContent>
                      <SidebarMenuSub>
                        {item.items.map((item) => (
                          <SidebarMenuSubItem key={item.title}>
                            <SidebarMenuSubButton asChild isActive={item.isActive}>
                              <a href={item.url}>{item.title}</a>
                            </SidebarMenuSubButton>
                          </SidebarMenuSubItem>
                        ))}
                      </SidebarMenuSub>
                    </CollapsibleContent>
                  ) : null}
                </SidebarMenuItem>
              </Collapsible>
            ))}
          </SidebarMenu>
        </SidebarGroup>
      </SidebarContent>
      <SidebarRail />
    </Sidebar>
  );
}
