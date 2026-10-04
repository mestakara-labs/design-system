# Changelog

Semua perubahan penting pada `@mestakara/ui` dicatat di sini.
Format mengikuti [Keep a Changelog](https://keepachangelog.com/id-ID/1.1.0/) dan versi
mengikuti [Semantic Versioning](https://semver.org/lang/id/).

## [Unreleased]

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
