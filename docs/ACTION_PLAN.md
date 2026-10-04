# Action Plan — Mestakara Design System

Dokumen ini adalah rencana kerja yang sudah disetujui. Gunakan sebagai acuan saat
mengembangkan atau mereview proyek ini.

## 1. Tujuan

Satu proyek yang berisi:

1. **Library komponen** `@mestakara/ui` — seluruh komponen shadcn/ui yang sudah diberi gaya
   sesuai design system "Agrowisata Regional 2", siap dipakai aplikasi React, Next.js, atau
   framework berbasis React lainnya.
2. **Situs dokumentasi** — mirip https://ui.shadcn.com — untuk melihat semua komponen, semua
   state-nya, contoh kode, dan cara instalasi.

Prinsip kode: **sangat mudah dipahami, sangat mudah dibaca, sangat mudah diubah manual.**

## 2. Keputusan

| Topik              | Keputusan                                                                                  |
| ------------------ | ------------------------------------------------------------------------------------------ |
| Stack              | Vite + React 19 + TypeScript + React Router + Tailwind CSS v4 + Radix UI                   |
| `cn()`             | Paket npm [`cn`](https://www.npmjs.com/package/cn) (versi dikunci), tanpa file utils lokal |
| Linter             | ESLint (flat config)                                                                       |
| Format kode        | Prettier + `prettier-plugin-tailwindcss`                                                   |
| Distribusi         | Paket npm `@mestakara/ui` di registry privat (URL registry belum ditentukan → placeholder) |
| Tema               | Mode terang. Struktur token siap untuk dark mode di kemudian hari                          |
| Komponen           | Seluruh komponen shadcn/ui. Komponen khusus Mestakara menyusul                             |
| Acuan desain       | `asset/markdown/DESIGN.md` (turunan file Figma "Agrowisata Regional 2 — Design System")    |
| Bahasa dokumentasi | Dua bahasa (ID/EN) dengan pemilih bahasa, memakai `i18next` + `react-i18next`              |
| Bahasa kode        | Nama file, props, dan komentar kode dalam bahasa Inggris                                   |

## 3. Struktur Folder

```
mestakara-design-system/
├── README.md · CONTRIBUTING.md · CHANGELOG.md
├── docs/ACTION_PLAN.md          ← dokumen ini
├── package.json · tsconfig*.json · .npmrc.example
├── eslint.config.js · .prettierrc · .prettierignore
├── vite.config.ts               ← situs dokumentasi
├── vite.lib.config.ts           ← build paket @mestakara/ui
└── src/
    ├── styles/                  primitives.css · semantic.css · theme.css · index.css
    ├── components/ui/           1 komponen = 1 file
    ├── index.ts                 daftar export library
    └── docs/                    situs dokumentasi (tidak ikut ke paket npm)
        ├── i18n/                config.ts · languages.ts · locales/<bahasa>/*.json
        ├── registry.ts          satu daftar semua komponen
        ├── layout/              Header, Sidebar, TableOfContents
        ├── blocks/              PageHeader, ComponentPreview, CodeBlock, PropsTable, …
        ├── pages/               introduction, installation, foundations/*, components/*
        └── examples/<komponen>/ 1 contoh = 1 file
```

## 4. Token Desain

Tiga lapis: `primitives.css` (warna mentah) → `semantic.css` (arti/pemakaian) →
`theme.css` (nama variabel shadcn + kelas Tailwind).

Tipografi memakai kelas `typo-*` (contoh: `typo-h1`, `typo-body-m`, `typo-overline`) agar tidak
bentrok dengan kelas warna `text-*` saat digabung oleh `cn()`.

## 5. Daftar Komponen

| Kelompok                       | Komponen                                                                                                                                                                                               |
| ------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| A. Form & Input                | Button, Button Group, Input, Input Group, Input OTP, Textarea, Label, Field, Form, Checkbox, Radio Group, Switch, Select, Native Select, Combobox, Slider, Toggle, Toggle Group, Calendar, Date Picker |
| B. Tampilan Data               | Badge, Avatar, Card, Alert, Separator, Skeleton, Spinner, Progress, Kbd, Empty, Item, Typography, Aspect Ratio, Table, Data Table, Chart, Carousel                                                     |
| C. Overlay                     | Dialog, Alert Dialog, Sheet, Drawer, Popover, Hover Card, Tooltip, Dropdown Menu, Context Menu, Menubar, Command, Sonner                                                                               |
| D. Navigasi & Layout           | Tabs, Accordion, Collapsible, Breadcrumb, Pagination, Navigation Menu, Sidebar, Scroll Area, Resizable                                                                                                 |
| E. Khusus Mestakara (menyusul) | Chip, Top App Bar, Bottom Navigation, Destination Card, Menu Item, E-Ticket, Stat Card                                                                                                                 |

## 6. Isi Halaman Komponen

1. Judul & deskripsi
2. Preview (tab Preview / Code)
3. Instalasi
4. Penggunaan
5. Contoh semua varian & state
6. State matrix (default, hover, focus, pressed, disabled)
7. API Reference (tabel props)

## 7. Tahapan

| Tahap | Pekerjaan                                                                         |
| ----- | --------------------------------------------------------------------------------- |
| 1     | Scaffold proyek, ESLint, Prettier, Tailwind, font                                 |
| 2     | Token desain + halaman Foundations                                                |
| 3     | Kerangka dokumentasi (layout, sidebar, routing, i18n, pencarian) + halaman Button |
| 4     | **Checkpoint review** Button & halaman dokumentasinya                             |
| 5     | Komponen kelompok A–D                                                             |
| 6     | Build library + uji `npm pack` di proyek Next.js & Vite sementara                 |
| 7     | README, CONTRIBUTING, halaman Installation                                        |

Setiap tahap diverifikasi dengan `typecheck`, `lint`, `format:check`, `i18n:check`, `build`,
dan pengecekan visual di browser.

## 8. Progres

| Tahap | Status     | Catatan                                                                                                            |
| ----- | ---------- | ------------------------------------------------------------------------------------------------------------------ |
| 1     | ✅ Selesai | Vite 8, React 19, TypeScript 6, Tailwind 4, ESLint 9, Prettier 3                                                   |
| 2     | ✅ Selesai | Token di `src/styles/`. Tipografi dipisah ke file sendiri: `typography.css`                                        |
| 3     | ✅ Selesai | Layout, sidebar, routing, i18n (ID/EN), daftar isi, halaman Foundations & Button                                   |
| 4     | ✅ Selesai | Button direview; hover tombol Accent diubah ke pilihan A (lebih gelap + efek mengecil)                             |
| 5A    | ✅ Selesai | 20 halaman Form & Input (+ Separator & Popover sebagai dependensi)                                                 |
| 5B    | ✅ Selesai | 17 halaman Tampilan Data (termasuk pola Data Table & Typography)                                                   |
| 5C    | ✅ Selesai | 12 halaman Overlay + pencarian Ctrl+K, menu mobile dengan Sheet, error boundary halaman                            |
| 5D    | ✅ Selesai | 9 halaman Navigasi & Layout; Preview/Kode di docs kini memakai Tabs sendiri                                        |
| 5E    | ✅ Selesai | 7 komponen chat baru dari shadcn (Attachment, Bubble, Marker, Message, Message Scroller, Questionnaire, Direction) |
| 6     | ✅ Selesai | Paket npm (`dist/`), diuji dengan `npm pack` di aplikasi Vite 8 dan Next.js 16                                     |
| 7     | ✅ Selesai | README, CONTRIBUTING, CHANGELOG, `.npmrc.example`, halaman Instalasi final                                         |

Penyesuaian dari rencana awal:

- **Gaya field form bersama** ada di `src/lib/control-styles.ts` (dipakai Input, Textarea, Select,
  Native Select, Input Group, Combobox). Ubah sekali, semua ikut.
- **Separator dan Popover** dibuat lebih awal karena dipakai oleh Button Group dan Date Picker.
- **Kalender** default berbahasa Indonesia (minggu dimulai Senin).
- **Token teks status** (`text-fg-success/warning/danger/info`) ditambahkan karena warna status asli
  kurang kontras untuk teks kecil di atas latar mudanya (WCAG AA).
- **@tanstack/react-table dikunci ke v8** untuk pola Data Table (v9 memakai API yang berbeda total).
- **Teks bawaan komponen** (label screen reader seperti "Memuat", "Slide berikutnya") berbahasa
  Indonesia dan bisa diganti lewat props.
- **react-hook-form** adalah peer dependency opsional (hanya perlu bila memakai `Form`).

- **Pencarian `Ctrl+K`** sudah aktif di header, dibangun dengan komponen `Command` milik design system.
- **Gaya menu bersama** (`menuStyles`) untuk Dropdown Menu, Context Menu, dan Menubar ada di
  `src/lib/control-styles.ts`, begitu juga animasi panel dan latar overlay.
- **`toast` diekspor dari `@mestakara/ui/sonner`** agar selalu terhubung ke `<Toaster>` yang sama.
- **Token sidebar** (`--sidebar-*` di `semantic.css`) mengatur warna `Sidebar`; ubah token untuk
  sidebar terang tanpa menyentuh komponen.
- **Hook `useIsMobile`** ada di `src/hooks/use-mobile.ts` (dipakai Sidebar) dan ikut diekspor.
- **react-resizable-panels v4** dipakai Resizable: angka = piksel, string = persen.
- **Kategori baru "Chat & Percakapan"** untuk komponen chat. Message Scroller dan Questionnaire
  memakai primitif `@shadcn/react`. Direction masuk kategori Navigasi & Layout.
- **`Toast` lama dari shadcn tidak dibuat** karena sudah digantikan Sonner (shadcn juga
  menandainya usang).
- **Form tidak diekspor dari `@mestakara/ui`**, hanya dari `@mestakara/ui/form`, karena butuh
  `react-hook-form` yang opsional. Ini ketahuan saat uji `npm pack`.
- **Import di kode library memakai jalur relatif** (dijaga aturan ESLint), supaya file tipe
  `.d.ts` di paket tetap benar.
- **Stylesheet paket berisi `@source`**, jadi aplikasi tidak perlu mengatur pemindaian kelas Tailwind.
- **`npm publish` belum dijalankan** karena registry belum ditentukan (`<URL_REGISTRY>`).
