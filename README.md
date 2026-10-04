# @mestakara/ui

Design system **Agrowisata Regional 2 (Mestakara)**: kumpulan komponen React siap pakai
berbasis [shadcn/ui](https://ui.shadcn.com), dengan warna, tipografi, radius, dan bayangan
dari Figma "Agrowisata Regional 2 — Design System" (`asset/markdown/DESIGN.md`).

- **62 komponen**: Form & Input, Tampilan Data, Overlay, Navigasi & Layout, serta Chat & Percakapan.
- **Situs dokumentasi** dua bahasa (Indonesia/English) ala ui.shadcn.com: landing page, dokumentasi
  tiap komponen (contoh, kode, dan semua state), serta **27 block** siap salin (dasbor, sidebar, login,
  daftar).
- Bisa dipakai di **Next.js** (App Router & Pages Router), **Vite + React**, Remix, atau framework React lainnya.

## Memakai paket di aplikasi lain

Kebutuhan: React 19 dan Tailwind CSS v4.

```bash
# 1. .npmrc di root aplikasi (lihat .npmrc.example). Ganti <URL_REGISTRY> dengan alamat registry tim.
@mestakara:registry=<URL_REGISTRY>

# 2. Pasang
npm install @mestakara/ui
```

```css
/* 3. globals.css (Next.js) atau index.css (Vite) */
@import "tailwindcss";
@import "@mestakara/ui/styles.css";
```

```tsx
// 4. Pakai komponen
import { Button } from "@mestakara/ui/button"; // satu komponen per import (disarankan)
import { Card, Badge } from "@mestakara/ui"; // atau semuanya dari satu tempat

<Button>Pesan Tiket</Button>;
```

Catatan:

- **Font**: pasang `@fontsource-variable/fraunces` dan `@fontsource-variable/plus-jakarta-sans`,
  lalu impor sekali di entry aplikasi. Tanpa font itu, browser memakai font cadangan.
- **Form** butuh `react-hook-form` (peer dependency opsional) dan hanya tersedia dari
  `@mestakara/ui/form`.
- **Toast**: letakkan `<Toaster />` dari `@mestakara/ui/sonner` sekali di root, lalu panggil `toast()`.
- **Next.js**: setiap file sudah diberi `"use client"`, jadi bisa langsung dipakai di Server Component.
- Tidak perlu mengatur `@source` Tailwind: stylesheet paket sudah memberi tahu Tailwind lokasi komponen.

Panduan lengkap ada di halaman **Instalasi** pada situs dokumentasi.

## Mengembangkan design system ini

```bash
npm install
npm run dev          # situs di http://localhost:5173 (landing /, dokumentasi /docs, blocks /blocks)
npm run check        # typecheck + lint + format + cek terjemahan (jalankan sebelum commit)
npm run build        # build situs docs (dist-docs/) + paket npm (dist/)
npm run build:lib    # hanya paket npm
npm pack             # buat file .tgz untuk dicoba di aplikasi lain
```

| Perintah             | Fungsi                                                   |
| -------------------- | -------------------------------------------------------- |
| `npm run format`     | Rapikan semua file dengan Prettier                       |
| `npm run lint:fix`   | Perbaiki otomatis masalah ESLint yang bisa diperbaiki    |
| `npm run i18n:check` | Pastikan semua bahasa punya file & kunci terjemahan sama |
| `npm run build:docs` | Build situs dokumentasi saja                             |

### Struktur folder

```
src/
├── components/ui/     Komponen library (satu file per komponen) — ini yang diterbitkan
├── lib/               Gaya bersama (control-styles.ts)
├── hooks/             Hook bersama (use-mobile.ts)
├── styles/            Token desain: primitives → semantic → theme → typography
├── index.ts           Ekspor utama paket
├── blocks/            Block siap salin (satu folder per block) — tidak ikut diterbitkan
│   └── registry.ts    Daftar semua block
└── docs/              Situs dokumentasi (tidak ikut diterbitkan)
    ├── app.tsx        Rute situs
    ├── paths.ts       Semua URL situs di satu tempat
    ├── registry.ts    Daftar halaman docs — sidebar, rute, dan pencarian dibuat dari sini
    ├── layout/        Navbar, footer, dan layout (situs, docs, tampilan block)
    ├── landing/       Landing page: etalase kartu (cards/) dan pratinjau blocks
    ├── block-viewer/  Panel block di /blocks (preview iframe, kode, ukuran layar)
    ├── pages/         Halaman: beranda, blocks, dan satu halaman per komponen
    ├── examples/      Contoh yang tampil di halaman (kode yang sama ditampilkan di tab "Kode")
    ├── page-parts/    Potongan penyusun halaman docs (preview, tabel props, matriks state …)
    └── i18n/locales/  Teks situs per bahasa (id, en)
```

| URL                        | Isi                                      |
| -------------------------- | ---------------------------------------- |
| `/`                        | Landing page                             |
| `/blocks`, `/blocks/login` | Halaman Blocks per kategori              |
| `/view/<block>`            | Satu block di halaman penuh (isi iframe) |
| `/docs`                    | Pengantar dokumentasi                    |
| `/docs/components/<nama>`  | Dokumentasi satu komponen                |

Cara menambah komponen, block, kartu landing page, menu navbar, mengubah warna, menambah bahasa,
dan merilis versi baru ada di
[CONTRIBUTING.md](CONTRIBUTING.md). Riwayat perubahan ada di [CHANGELOG.md](CHANGELOG.md).
