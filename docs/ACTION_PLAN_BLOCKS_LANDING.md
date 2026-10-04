# Action Plan — Struktur `/docs`, Halaman Blocks, dan Landing Page

Status: **Selesai ✅ (semua tahap 1–7).**

## Keputusan (4 Okt 2026)

| Topik            | Keputusan                                                                         |
| ---------------- | --------------------------------------------------------------------------------- |
| Isi landing page | Hero + etalase kartu ala shadcn + pratinjau block unggulan dari halaman Blocks    |
| Konten block     | Konteks Agrowisata, Bahasa Indonesia. Teks halaman (judul, deskripsi) tetap ID/EN |
| Block di npm     | Tidak. Block adalah kode salin-tempel, seperti shadcn                             |
| Menu navbar      | Beranda · Dokumentasi · Komponen · Blocks (menu lain bisa ditambah nanti)         |

## 1. Tujuan

1. Semua halaman dokumentasi yang sekarang ada (dari `/` sampai `/components/questionnaire`)
   dipindah ke bawah `/docs`, seperti struktur ui.shadcn.com.
2. Halaman **Blocks** (`/blocks`) berisi semua block shadcn, dibangun ulang dengan komponen
   `@mestakara/ui`.
3. **Landing page** baru di `/`, sangat mirip landing page shadcn, menampilkan building block
   yang tersusun dari komponen Mestakara UI.
4. **Navbar** ala shadcn: Beranda · Dokumentasi · Komponen · Blocks, ditambah pencarian, bahasa,
   dan menu ponsel.

Tiga prinsip tetap dipegang: alur kode **sangat mudah dipahami**, kode **sangat mudah dibaca**,
dan **sangat mudah dirawat serta diubah manual**.

## 2. Peta URL baru

| Sekarang                | Menjadi                        | Layout                           |
| ----------------------- | ------------------------------ | -------------------------------- |
| —                       | `/` (landing page baru)        | Situs (navbar + footer)          |
| —                       | `/blocks`, `/blocks/:kategori` | Situs                            |
| —                       | `/view/:block`                 | Polos, tanpa navbar (isi iframe) |
| `/`                     | `/docs` (Pengantar)            | Docs (sidebar + daftar isi)      |
| `/installation`         | `/docs/installation`           | Docs                             |
| `/foundations/:halaman` | `/docs/foundations/:halaman`   | Docs                             |
| `/components`           | `/docs/components`             | Docs                             |
| `/components/:slug`     | `/docs/components/:slug`       | Docs                             |

- Semua URL dibuat dari **satu file `src/docs/paths.ts`** (misalnya `componentPath("button")`),
  jadi kalau struktur URL berubah lagi cukup ubah satu file.
- URL lama (misalnya `/components/button`) otomatis dialihkan ke URL baru, supaya tautan
  lama tidak rusak.

## 3. Daftar block yang disalin dari shadcn (27 block)

Daftar sesuai ui.shadcn.com/blocks per 4 Okt 2026.

| Kategori | Block                       | Isi                                                                                                                                                                                                        |
| -------- | --------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Unggulan | `dashboard-01`              | Dasbor: sidebar, kartu statistik, grafik area interaktif, tabel data yang bisa diurutkan dengan drag                                                                                                       |
| Sidebar  | `sidebar-01` … `sidebar-16` | 16 variasi sidebar: bergrup, collapsible, submenu, floating, melipat jadi ikon, inset, bertingkat, di dalam popover, pohon file, dengan kalender, di dalam dialog, di kanan, kiri + kanan, header menempel |
| Login    | `login-01` … `login-05`     | Form login: sederhana, dua kolom dengan gambar, latar muted, form + gambar, email saja                                                                                                                     |
| Signup   | `signup-01` … `signup-05`   | Form daftar dengan variasi yang sama, termasuk tombol login sosial                                                                                                                                         |

Penyesuaian:

- **Komponen**: semua dari Mestakara UI. Ikon `@tabler/icons-react` di dashboard-01 diganti
  `lucide-react` (sudah dipakai di library), supaya tidak ada paket ikon kedua.
- **Konten**: disesuaikan ke konteks Agrowisata, contohnya dasbor transaksi tiket per unit,
  menu Paket Wisata, dan login "Masuk ke Agrowisata".
- **Gambar sampul** login/signup memakai ilustrasi kebun teh yang sudah ada di `public/images`.
- **Dependensi baru, khusus situs docs** (devDependencies): `@dnd-kit/core`, `@dnd-kit/sortable`,
  `@dnd-kit/modifiers`, dan `@dnd-kit/utilities`, untuk tabel drag di dashboard-01.

## 4. Cara kerja halaman Blocks (seperti shadcn)

Setiap block tampil sebagai satu panel:

```
┌ Judul block · deskripsi ─────────── [Preview | Kode] [🖥 💻 📱] [↗ buka] ┐
│                                                                         │
│   <iframe src="/view/sidebar-07">   ← block dirender di halaman penuh   │
│                                                                         │
└─────────────────────────────────────────────────────────────────────────┘
```

- **Preview** memakai `<iframe>` yang membuka `/view/<block>`. Alasannya: block seperti sidebar
  dan dasbor memenuhi seluruh layar, dan tombol ukuran layar (desktop / tablet / ponsel) bisa
  mengubah lebar iframe sehingga tampilan responsif (termasuk mode Sheet di ponsel) benar-benar terlihat.
- **Kode** menampilkan semua file block dalam tab per file, masing-masing dengan tombol salin.
  Import `@/components/ui/…` otomatis ditampilkan sebagai `@mestakara/ui/…`, sama seperti contoh komponen.
- **Kategori** (Unggulan · Sidebar · Login · Signup) berupa tab di atas daftar block.

Struktur file, satu folder per block, mengikuti pembagian file shadcn:

```
src/blocks/
├── registry.ts              ← DAFTAR SEMUA BLOCK (nama, kategori, file). Satu-satunya tempat mendaftar.
├── login-01/
│   ├── page.tsx             ← halaman block (yang dirender di /view/login-01)
│   └── login-form.tsx
├── sidebar-07/
│   ├── page.tsx
│   ├── app-sidebar.tsx
│   ├── nav-main.tsx …
└── dashboard-01/ …
```

Menambah block baru cukup dua langkah: buat foldernya, lalu tambahkan satu entri di `registry.ts`.
Daftar file untuk tab "Kode" dibaca otomatis dari folder (`import.meta.glob`), jadi tidak perlu
didaftarkan satu per satu.

**Block tidak ikut paket npm**, sama seperti shadcn: block adalah kode contoh yang disalin ke
aplikasi.

## 5. Landing page (`/`)

Meniru susunan landing page shadcn saat ini:

1. **Pengumuman**: pil kecil "Baru: komponen Questionnaire →".
2. **Hero**: judul besar (Fraunces), subjudul, tombol **Mulai** (→ `/docs/installation`) dan
   **Lihat Komponen** (→ `/docs/components`).
3. **Etalase building block**: grid kartu bertingkat (masonry) seperti shadcn. Setiap kartu
   adalah block kecil yang disusun dari komponen Mestakara UI, dengan konten Agrowisata. Padanan
   kartu shadcn:

   | Kartu shadcn             | Versi Mestakara                                          |
   | ------------------------ | -------------------------------------------------------- |
   | Kumpulan komponen dasar  | Button, Input, Badge, Switch, Alert Dialog, Button Group |
   | Menu navigasi bertingkat | Menu dasbor (Navigation / Sidebar mini)                  |
   | Savings Targets          | Target kunjungan per unit (Progress)                     |
   | Contribution History     | Grafik pengunjung 6 bulan (Chart)                        |
   | Claimable Balance        | Saldo penjualan tiket siap dicairkan (Card + Item)       |
   | Q2 Dividend Income       | Pendapatan per unit (Item list + Avatar)                 |
   | Scan QR                  | E-tiket dengan kode QR (Card)                            |
   | New Chat                 | Chat CS (Message, Bubble, Message Scroller)              |
   | Account options          | Pengaturan akun (Item + Switch)                          |

4. **Pratinjau Blocks**: tab (Dasbor · Sidebar · Login) yang menampilkan block unggulan dari
   halaman Blocks, dengan tautan "Lihat semua blocks".
5. **Footer** singkat.

Setiap kartu etalase berada di filenya sendiri: `src/docs/landing/cards/<nama>.tsx`.

## 6. Navbar & layout

- **`SiteHeader`** dipakai di semua halaman kecuali `/view/*`: logo · Beranda · Dokumentasi ·
  Komponen · Blocks · pencarian Ctrl+K · bahasa · menu ponsel (Sheet). Menu yang aktif disorot.
- Daftar menu ada di satu array `NAV_LINKS`, jadi menambah menu baru cukup satu baris.
- Pencarian Ctrl+K ditambah grup **Blocks**.
- Tiga layout, masing-masing satu file:
  - `SiteLayout`: navbar + footer (landing, blocks)
  - `DocsLayout`: navbar + sidebar + daftar isi (semua `/docs/*`)
  - `BlockViewLayout`: kosong (isi iframe)

## 7. Tahapan & checkpoint

| Tahap | Pekerjaan                                                                                                                                  | Checkpoint                                      |
| ----- | ------------------------------------------------------------------------------------------------------------------------------------------ | ----------------------------------------------- |
| 1     | Pindah ke `/docs`, `paths.ts`, pengalihan URL lama, `SiteHeader` + 3 layout, footer                                                        | Semua halaman lama terbuka di URL baru          |
| 2     | Fondasi Blocks: `registry.ts`, `/view/:block`, panel block (preview/kode/ukuran layar), `/blocks` + tab kategori, block pertama `login-01` | Review tampilan panel sebelum block lain dibuat |
| 3     | Login 02–05 dan Signup 01–05                                                                                                               | —                                               |
| 4     | Sidebar 01–16                                                                                                                              | —                                               |
| 5     | Dashboard-01 (grafik, tabel drag, drawer detail)                                                                                           | Review semua block                              |
| 6     | Landing page: hero, etalase kartu, pratinjau blocks                                                                                        | Review landing page                             |
| 7     | i18n (ID/EN) untuk teks halaman, README/CONTRIBUTING ("Menambah block"), CHANGELOG, `npm run check`, uji visual desktop + ponsel           | Laporan akhir                                   |

Setiap tahap ditutup dengan `npm run check`, `npm run build`, dan pengecekan visual.

## 8. Yang tidak berubah

- **Paket npm `@mestakara/ui`**: isi dan cara import sama.
- **Halaman dokumentasi komponen**: isi sama, hanya URL-nya yang berubah.
- **Bahasa situs**: tetap dua bahasa (ID/EN) dengan toggle.

## 9. Progres

| Tahap | Status     | Catatan                                                                             |
| ----- | ---------- | ----------------------------------------------------------------------------------- |
| 1     | ✅ Selesai | Semua dokumentasi di `/docs`, `paths.ts`, pengalihan URL lama, navbar + 3 layout    |
| 2     | ✅ Selesai | Registry block, panel (preview iframe, kode per file, ukuran layar), `/view/:block` |
| 3     | ✅ Selesai | Login 01–05, Signup 01–05                                                           |
| 4     | ✅ Selesai | Sidebar 01–16                                                                       |
| 5     | ✅ Selesai | Dashboard-01 (tabel ditulis ulang ke TanStack Table v8)                             |
| 6     | ✅ Selesai | Landing page: hero, etalase 12 kartu, pratinjau block                               |
| 7     | ✅ Selesai | README, CONTRIBUTING, CHANGELOG, pengecekan akhir                                   |

Penyesuaian selama pengerjaan:

- `src/docs/blocks/` (potongan halaman docs) diganti nama menjadi `src/docs/page-parts/` agar tidak
  rancu dengan fitur Blocks.
- Ikon `@tabler/icons-react` di dashboard-01 diganti `lucide-react`; skema zod diganti tipe TypeScript.
- Komponen library ikut diperbaiki: Toggle Group (border item terpilih), Tabs `line` (scroll vertikal),
  Sidebar (tooltip objek, teks tidak turun baris, utilitas `sidebar-light`).
- Halaman Beranda, Blocks, dan tampilan block dimuat saat dibuka (bundel utama 369 kB).
