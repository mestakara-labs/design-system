# Panduan Kontribusi

Panduan singkat untuk pekerjaan yang paling sering dilakukan. Jalankan `npm run check`
sebelum commit: perintah ini memeriksa tipe, lint, format, dan kelengkapan terjemahan.

## Aturan umum

- **Warna, radius, bayangan, dan teks selalu lewat token**: `bg-primary`, `text-fg-secondary`,
  `rounded-md`, `shadow-sm`, `typo-body-m`. Jangan menulis hex atau ukuran piksel langsung.
- **Jangan menumpuk dua kelas `typo-*`** di satu elemen; `cn()` tidak bisa memilih salah satunya.
- **Kode library (`src/components`, `src/lib`, `src/hooks`) memakai import relatif**
  (`../../lib/control-styles`), bukan alias `@/`. ESLint akan menolak alias di sana karena
  alias tidak berfungsi di paket yang diterbitkan.
- **Teks bawaan komponen** (label screen reader, "Tutup", "Sebelumnya" …) berbahasa Indonesia
  dan harus bisa diganti lewat props.
- **Focus harus terlihat**: pakai `focus-visible:outline-2 focus-visible:outline-focus`.
  Jangan menambahkan `outline-none` pada elemen yang sama, karena di Tailwind v4 kelas itu
  menghapus garis focus.

## Menambah komponen

1. **Komponen** — buat `src/components/ui/<nama>.tsx`. Mulai dari komponen yang mirip
   (misalnya `button.tsx`). Beri komentar di atas file: fungsi komponen, acuan desain, dan
   tautan shadcn/ui. Ekspor semua bagian di baris `export { … }` paling bawah.
2. **Ekspor paket** — tambahkan `export * from "./components/ui/<nama>";` di `src/index.ts`
   (urut abjad). Lewati langkah ini bila komponen butuh peer dependency opsional, seperti Form.
3. **Contoh** — buat `src/docs/examples/<nama>/<nama>-demo.tsx` dan contoh lain. Contoh mengimpor
   dari `@/components/ui/…`; tab "Kode" otomatis menampilkannya sebagai `@mestakara/ui/…`.
4. **Halaman docs** — salin `src/docs/pages/components/button.tsx` menjadi `<nama>.tsx`, lalu
   sesuaikan isinya: preview, instalasi, penggunaan, contoh, semua state, anatomi, dan props.
5. **Teks** — buat `src/docs/i18n/locales/id/<nama>.json` dan `en/<nama>.json` dengan kunci
   yang sama, lalu daftarkan namespace di `src/docs/i18n/i18next.d.ts`.
6. **Registry** — tambahkan satu entri di `COMPONENTS` pada `src/docs/registry.ts`. Sidebar,
   rute, dan pencarian Ctrl+K langsung ikut diperbarui.
7. Jalankan `npm run check` dan buka halamannya di `npm run dev`.

## Menambah block

Block adalah halaman contoh siap salin (bukan bagian paket npm).

1. Buat folder `src/blocks/<nama>/` berisi `page.tsx` (default export) dan file pendukung lain,
   misalnya `login-form.tsx`. Impor komponen dari `@/components/ui/…`; tab "Kode" otomatis
   menampilkannya sebagai `@mestakara/ui/…`.
2. Tambahkan satu entri di `BLOCKS` pada `src/blocks/registry.ts` (nama, kategori, tinggi preview,
   dan `featured: true` bila ingin tampil di tab Unggulan).
3. Tulis deskripsinya di `locales/id/blocks.json` dan `locales/en/blocks.json` → `items`.
   TypeScript menolak block yang belum punya deskripsi.

Halaman `/view/<nama>`, preview, dan daftar file di tab "Kode" dibuat otomatis dari folder block.
Kategori baru: tambahkan ke `BLOCK_CATEGORIES` lalu labelnya di `blocks.json` → `categories`.

Tips sidebar gelap: block shadcn mengasumsikan sidebar terang. Untuk sidebar di atas panel putih
(popover, dialog), beri kelas `sidebar-light` pada `<Sidebar>`. Badge Mestakara menampilkan titik
secara default; pakai `dot={false}` bila badge sudah berisi ikon.

## Menambah kartu di landing page

1. Buat komponen kartu di `src/docs/landing/cards/<nama>.tsx` (satu kartu per file).
2. Masukkan ke salah satu kolom di `COLUMNS` pada `src/docs/landing/showcase.tsx`.

Block yang tampil di bagian pratinjau landing page diatur di `PREVIEW_BLOCKS` pada
`src/docs/landing/blocks-preview.tsx`.

## Menambah menu navbar atau mengubah URL

- Menu navbar ada di array `NAV_LINKS` pada `src/docs/layout/site-header.tsx` (satu baris per menu).
- Semua URL situs ditulis di `src/docs/paths.ts`. Ubah di sana; tautan dan rute ikut berubah.

## Mengubah warna

Token tersusun dalam tiga lapis di `src/styles/`:

| File             | Isi                                                            | Kapan diubah                      |
| ---------------- | -------------------------------------------------------------- | --------------------------------- |
| `primitives.css` | Palet mentah (`--color-green-600: #…`)                         | Warna palet di Figma berubah      |
| `semantic.css`   | Fungsi warna (`--action-primary: var(--color-green-600)`)      | Ingin mengganti peran suatu warna |
| `theme.css`      | Nama kelas Tailwind (`--color-primary: var(--action-primary)`) | Menambah nama kelas baru          |

Contoh: tombol utama menjadi navy → ubah `--action-primary` (dan `-hover`, `-pressed`) di
`semantic.css`. Semua komponen dan halaman docs langsung mengikuti. Cek kontras teks minimal
4,5:1 (WCAG AA). Warna sidebar dasbor punya token sendiri (`--sidebar-*`).

## Menambah bahasa dokumentasi

1. Salin folder `src/docs/i18n/locales/en` menjadi `locales/<kode>` (misalnya `jv`).
2. Terjemahkan semua file JSON. Jangan mengubah kuncinya.
3. Tambahkan bahasa itu ke `LANGUAGES` di `src/docs/i18n/languages.ts`.
4. Jalankan `npm run i18n:check` untuk memastikan tidak ada file atau kunci yang terlewat.

Untuk menambah atau mengubah teks, edit file JSON di setiap bahasa. Bahasa Indonesia (`id`)
adalah acuan: kunci yang ada di `id` wajib ada di bahasa lain.

## Merilis versi baru

1. Catat perubahan di `CHANGELOG.md` di bawah judul versi baru.
2. Naikkan versi dengan [semver](https://semver.org/lang/id/):
   - `npm version patch`: perbaikan bug (0.1.0 → 0.1.1)
   - `npm version minor`: komponen atau fitur baru (0.1.0 → 0.2.0)
   - `npm version major`: perubahan yang memaksa aplikasi menyesuaikan kodenya
3. Jalankan `npm run check` dan `npm run build`.
4. Coba dulu di aplikasi lain: `npm pack`, lalu `npm install ./mestakara-ui-<versi>.tgz`.
5. Terbitkan ke registry tim: `npm publish`. Registry diatur di `.npmrc` (lihat `.npmrc.example`).
   `prepack` otomatis menjalankan `build:lib`, jadi `dist/` selalu terbaru.
