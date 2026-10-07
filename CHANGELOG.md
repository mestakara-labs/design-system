# Changelog

Semua perubahan penting pada `@mestakara/ui` dicatat di sini.
Format mengikuti [Keep a Changelog](https://keepachangelog.com/id-ID/1.1.0/) dan versi
mengikuti [Semantic Versioning](https://semver.org/lang/id/).

## [Unreleased]

### Diubah

- **Ukuran komponen mengikuti shadcn/ui.** Kontrol (Button, Toggle, Input, Select, Native Select,
  Input Group, Combobox) kini setinggi 36px (Small 32px, Large 40px) dengan ikon 16px. Checkbox/Radio
  16px, Switch 36×20px, Tabs 36px, Card padding 24px, Sidebar 256px dengan item 32px, Avatar
  24/32/40px, Calendar 32px, dan lainnya — rincian ada di DESIGN.md §5.
- **Tipografi komponen berbasis ukuran M (14px)**, seperti shadcn/ui. Teks isian kini Body/M
  (sebelumnya Body/L), tombol semua ukuran Label/M, judul Dialog H3, judul Card/Sheet/Drawer
  Label/L, teks bantuan & error Body/M. Daftar lengkap di halaman Fondasi → Tipografi.
- Gaya scrollbar tipis yang memakai token warna design system.

### Ditambahkan

- Gaya teks `typo-field`: Body/M, tetapi 16px di ponsel agar iOS Safari tidak memperbesar halaman
  saat kolom isian disentuh.

## [0.1.0] - 2026-10-04

Rilis pertama.

### Ditambahkan

- Token desain dari DESIGN.md: palet, token semantik, tipografi (`typo-*`), radius, dan elevasi.
- 62 komponen berbasis shadcn/ui:
  - **Form & Input**: Button, Button Group, Calendar, Checkbox, Combobox, Field, Form, Input,
    Input Group, Input OTP, Label, Native Select, Radio Group, Select, Slider, Switch, Textarea,
    Toggle, Toggle Group (+ pola Date Picker).
  - **Tampilan Data**: Alert, Aspect Ratio, Avatar, Badge, Card, Carousel, Chart, Empty, Item, Kbd,
    Progress, Separator, Skeleton, Spinner, Table (+ pola Data Table dan Typography).
  - **Overlay**: Alert Dialog, Command, Context Menu, Dialog, Drawer, Dropdown Menu, Hover Card,
    Menubar, Popover, Sheet, Sonner, Tooltip.
  - **Navigasi & Layout**: Accordion, Breadcrumb, Collapsible, Direction, Navigation Menu,
    Pagination, Resizable, Scroll Area, Sidebar, Tabs.
  - **Chat & Percakapan**: Attachment, Bubble, Marker, Message, Message Scroller, Questionnaire.
- Hook `useIsMobile`.
- Situs dokumentasi dua bahasa (Indonesia/English) dengan pencarian Ctrl+K, contoh kode, dan
  matriks semua state.
- Paket npm: ESM, satu file per komponen, file tipe `.d.ts`, `"use client"` untuk Next.js,
  dan `@mestakara/ui/styles.css`.
- Situs dokumentasi berstruktur seperti ui.shadcn.com: landing page di `/`, halaman Blocks di
  `/blocks`, dan seluruh dokumentasi di bawah `/docs`. URL lama dialihkan otomatis.
- Navbar baru (Beranda · Dokumentasi · Komponen · Blocks) dengan menu ponsel.
- 27 block siap salin dari shadcn/ui dengan konten Agrowisata: `dashboard-01`, `sidebar-01`…`16`,
  `login-01`…`05`, `signup-01`…`05`. Setiap block punya preview iframe, kode per file, dan pilihan
  ukuran layar.
- Landing page berisi etalase 12 kartu building block dan pratinjau block unggulan.
- `SidebarMenuButton`: `tooltip` juga menerima objek props `TooltipContent` (seperti shadcn).
- Token `--sidebar-item-active-text` dan utilitas `sidebar-light` untuk sidebar di atas panel putih.
