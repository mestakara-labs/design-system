"use client";

import * as React from "react";
import { ArchiveX, Trees, File, Inbox, Send, Trash2 } from "lucide-react";

import { NavUser } from "./nav-user";
import { Label } from "@/components/ui/label";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarHeader,
  SidebarInput,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "@/components/ui/sidebar";
import { Switch } from "@/components/ui/switch";

// This is sample data
const data = {
  user: {
    name: "Rina Sari",
    email: "rina@agrowisata.id",
    avatar: "/avatars/shadcn.jpg",
  },
  navMain: [
    {
      title: "Kotak Masuk",
      url: "#",
      icon: Inbox,
      isActive: true,
    },
    {
      title: "Draf",
      url: "#",
      icon: File,
      isActive: false,
    },
    {
      title: "Terkirim",
      url: "#",
      icon: Send,
      isActive: false,
    },
    {
      title: "Spam",
      url: "#",
      icon: ArchiveX,
      isActive: false,
    },
    {
      title: "Sampah",
      url: "#",
      icon: Trash2,
      isActive: false,
    },
  ],
  mails: [
    {
      name: "Dewi Lestari",
      email: "dewi@sekolahcerdas.sch.id",
      subject: "Rombongan Sekolah 120 Siswa",
      date: "09.34",
      teaser:
        "Selamat pagi, kami ingin memesan paket edukasi teh untuk 120 siswa.\nApakah tanggal 18 Oktober masih tersedia?",
    },
    {
      name: "Budi Santoso",
      email: "budi@gmail.com",
      subject: "Re: Jadwal Ulang Tiket",
      date: "Kemarin",
      teaser:
        "Terima kasih, tiket sudah berhasil dipindah ke hari Minggu.\nSampai jumpa di Gunung Mas!",
    },
    {
      name: "Sari Wulandari",
      email: "sari@ptmajujaya.co.id",
      subject: "Gathering Perusahaan",
      date: "2 hari lalu",
      teaser:
        "Kami merencanakan gathering untuk 60 karyawan bulan depan.\nBisa dikirimkan penawaran paket makan siang dan aula?",
    },
    {
      name: "Andi Pratama",
      email: "andi.pratama@gmail.com",
      subject: "Re: Pengembalian Dana",
      date: "2 hari lalu",
      teaser: "Dana sudah masuk ke rekening saya.\nTerima kasih atas bantuannya yang cepat.",
    },
    {
      name: "Rina Kusuma",
      email: "rina.kusuma@travelnusantara.id",
      subject: "Kerja Sama Agen Perjalanan",
      date: "1 minggu lalu",
      teaser:
        "Kami tertarik memasukkan Tea Walk ke paket tur Bandung–Bogor.\nKapan kita bisa bertemu untuk membahas harga khusus?",
    },
    {
      name: "Hendra Wijaya",
      email: "hendra@gmail.com",
      subject: "Re: Barang Tertinggal",
      date: "1 minggu lalu",
      teaser:
        "Topi saya tertinggal di area piknik hari Sabtu.\nApakah ada petugas yang menemukannya?",
    },
    {
      name: "Maya Anggraini",
      email: "maya@komunitasfoto.id",
      subject: "Izin Sesi Foto Pagi",
      date: "1 minggu lalu",
      teaser:
        "Komunitas kami ingin memotret matahari terbit di kebun teh.\nApakah boleh masuk sebelum jam buka?",
    },
    {
      name: "Rudi Hartono",
      email: "rudi.hartono@regional2.id",
      subject: "Laporan Kunjungan September",
      date: "2 minggu lalu",
      teaser:
        "Mohon kirimkan rekap kunjungan dan pendapatan September.\nBatas pengiriman hari Jumat.",
    },
    {
      name: "Lina Marlina",
      email: "lina@gmail.com",
      subject: "Re: Akses Kursi Roda",
      date: "2 minggu lalu",
      teaser:
        "Terima kasih atas informasinya tentang jalur ramah kursi roda.\nKami akan datang bersama orang tua kami.",
    },
    {
      name: "Fajar Nugroho",
      email: "fajar@kafeteh.id",
      subject: "Menu Baru Kafe",
      date: "3 minggu lalu",
      teaser:
        "Contoh menu baru teh susu dan pisang goreng sudah siap dicicipi.\nMohon masukan sebelum dicetak.",
    },
  ],
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  // Note: I'm using state to show active item.
  // IRL you should use the url/router.
  const [activeItem, setActiveItem] = React.useState(data.navMain[0]);
  const [mails, setMails] = React.useState(data.mails);
  const { setOpen } = useSidebar();

  return (
    <Sidebar
      collapsible="icon"
      className="overflow-hidden *:data-[slot=sidebar-inner]:flex-row"
      {...props}
    >
      {/* This is the first sidebar */}
      {/* We disable collapsible and adjust width to icon. */}
      {/* This will make the sidebar appear as icons. */}
      <Sidebar collapsible="none" className="w-[calc(var(--sidebar-width-icon)+1px)]! border-r">
        <SidebarHeader>
          <SidebarMenu>
            <SidebarMenuItem>
              <SidebarMenuButton size="lg" asChild className="md:h-8 md:p-0">
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
          <SidebarGroup>
            <SidebarGroupContent className="px-1.5 md:px-0">
              <SidebarMenu>
                {data.navMain.map((item) => (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton
                      tooltip={{
                        children: item.title,
                        hidden: false,
                      }}
                      onClick={() => {
                        setActiveItem(item);
                        const mail = data.mails.sort(() => Math.random() - 0.5);
                        setMails(mail.slice(0, Math.max(5, Math.floor(Math.random() * 10) + 1)));
                        setOpen(true);
                      }}
                      isActive={activeItem?.title === item.title}
                      className="px-2.5 md:px-2"
                    >
                      <item.icon />
                      <span>{item.title}</span>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        </SidebarContent>
        <SidebarFooter>
          <NavUser user={data.user} />
        </SidebarFooter>
      </Sidebar>

      {/* This is the second sidebar */}
      {/* We disable collapsible and let it fill remaining space */}
      <Sidebar collapsible="none" className="hidden flex-1 md:flex">
        <SidebarHeader className="gap-3.5 border-b p-4">
          <div className="flex w-full items-center justify-between">
            <div className="typo-label-l text-sidebar-fg">{activeItem?.title}</div>
            <Label className="text-sidebar-fg">
              <span className="typo-body-m">Belum dibaca</span>
              <Switch className="shadow-none" />
            </Label>
          </div>
          <SidebarInput placeholder="Ketik untuk mencari…" />
        </SidebarHeader>
        <SidebarContent>
          <SidebarGroup className="px-0">
            <SidebarGroupContent>
              {mails.map((mail) => (
                <a
                  href="/kotak-masuk"
                  key={mail.email}
                  className="flex flex-col items-start gap-2 border-b p-4 typo-body-m whitespace-nowrap last:border-b-0 hover:bg-sidebar-hover hover:text-sidebar-fg"
                >
                  <div className="flex w-full items-center gap-2">
                    <span>{mail.name}</span>{" "}
                    <span className="ml-auto typo-body-s">{mail.date}</span>
                  </div>
                  <span className="font-medium">{mail.subject}</span>
                  <span className="line-clamp-2 w-[260px] typo-body-s whitespace-break-spaces">
                    {mail.teaser}
                  </span>
                </a>
              ))}
            </SidebarGroupContent>
          </SidebarGroup>
        </SidebarContent>
      </Sidebar>
    </Sidebar>
  );
}
