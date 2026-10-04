"use client";

import * as React from "react";
import {
  Mountain,
  Blocks,
  Calendar,
  Trees,
  Home,
  Inbox,
  MessageCircleQuestion,
  Search,
  Settings2,
  Sparkles,
  Trash2,
} from "lucide-react";

import { NavFavorites } from "./nav-favorites";
import { NavMain } from "./nav-main";
import { NavSecondary } from "./nav-secondary";
import { NavWorkspaces } from "./nav-workspaces";
import { TeamSwitcher } from "./team-switcher";
import { Sidebar, SidebarContent, SidebarHeader, SidebarRail } from "@/components/ui/sidebar";

// This is sample data.
const data = {
  teams: [
    {
      name: "Gunung Mas",
      logo: Trees,
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
      title: "Cari",
      url: "#",
      icon: Search,
    },
    {
      title: "Tanya AI",
      url: "#",
      icon: Sparkles,
    },
    {
      title: "Beranda",
      url: "#",
      icon: Home,
      isActive: true,
    },
    {
      title: "Kotak Masuk",
      url: "#",
      icon: Inbox,
      badge: "10",
    },
  ],
  navSecondary: [
    {
      title: "Kalender",
      url: "#",
      icon: Calendar,
    },
    {
      title: "Pengaturan",
      url: "#",
      icon: Settings2,
    },
    {
      title: "Templat",
      url: "#",
      icon: Blocks,
    },
    {
      title: "Sampah",
      url: "#",
      icon: Trash2,
    },
    {
      title: "Bantuan",
      url: "#",
      icon: MessageCircleQuestion,
    },
  ],
  favorites: [
    {
      name: "Jadwal Operasional & Tugas Petugas",
      url: "#",
      emoji: "📊",
    },
    {
      name: "Resep Menu Kafe & Rencana Belanja",
      url: "#",
      emoji: "🍳",
    },
    {
      name: "Jalur Trekking & Tingkat Kesulitan",
      url: "#",
      emoji: "💪",
    },
    {
      name: "Catatan Sejarah Perkebunan",
      url: "#",
      emoji: "📚",
    },
    {
      name: "Perawatan Tanaman Teh Berkelanjutan",
      url: "#",
      emoji: "🌱",
    },
    {
      name: "Materi Pemandu Berbahasa Asing",
      url: "#",
      emoji: "🗣️",
    },
    {
      name: "Renovasi Kafe & Anggaran",
      url: "#",
      emoji: "🏠",
    },
    {
      name: "Laporan Keuangan Unit",
      url: "#",
      emoji: "💰",
    },
    {
      name: "Ulasan Pengunjung Terpilih",
      url: "#",
      emoji: "🎬",
    },
    {
      name: "Target Kunjungan Harian",
      url: "#",
      emoji: "✅",
    },
  ],
  workspaces: [
    {
      name: "Operasional Unit",
      emoji: "🏠",
      pages: [
        {
          name: "Laporan Harian Petugas",
          url: "#",
          emoji: "📔",
        },
        {
          name: "Kesehatan & Keselamatan Kerja",
          url: "#",
          emoji: "🍏",
        },
        {
          name: "Pelatihan Pelayanan",
          url: "#",
          emoji: "🌟",
        },
      ],
    },
    {
      name: "Pengembangan Petugas",
      emoji: "💼",
      pages: [
        {
          name: "Jenjang Karier Pemandu",
          url: "#",
          emoji: "🎯",
        },
        {
          name: "Catatan Pelatihan",
          url: "#",
          emoji: "🧠",
        },
        {
          name: "Kontak Mitra & Agen Perjalanan",
          url: "#",
          emoji: "🤝",
        },
      ],
    },
    {
      name: "Promosi & Konten",
      emoji: "🎨",
      pages: [
        {
          name: "Ide Konten Media Sosial",
          url: "#",
          emoji: "✍️",
        },
        {
          name: "Materi Desain Brosur",
          url: "#",
          emoji: "🖼️",
        },
        {
          name: "Jadwal Pertunjukan Seni",
          url: "#",
          emoji: "🎵",
        },
      ],
    },
    {
      name: "Fasilitas & Perawatan",
      emoji: "🏡",
      pages: [
        {
          name: "Anggaran Fasilitas",
          url: "#",
          emoji: "💰",
        },
        {
          name: "Jadwal Perawatan Fasilitas",
          url: "#",
          emoji: "🔧",
        },
        {
          name: "Kalender Acara Unit",
          url: "#",
          emoji: "📅",
        },
      ],
    },
    {
      name: "Paket & Rute Wisata",
      emoji: "🧳",
      pages: [
        {
          name: "Rencana Rute Tur",
          url: "#",
          emoji: "🗺️",
        },
        {
          name: "Ide Destinasi Baru",
          url: "#",
          emoji: "🌎",
        },
        {
          name: "Galeri Foto Kunjungan",
          url: "#",
          emoji: "📸",
        },
      ],
    },
  ],
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar className="border-r-0" {...props}>
      <SidebarHeader>
        <TeamSwitcher teams={data.teams} />
        <NavMain items={data.navMain} />
      </SidebarHeader>
      <SidebarContent>
        <NavFavorites favorites={data.favorites} />
        <NavWorkspaces workspaces={data.workspaces} />
        <NavSecondary items={data.navSecondary} className="mt-auto" />
      </SidebarContent>
      <SidebarRail />
    </Sidebar>
  );
}
