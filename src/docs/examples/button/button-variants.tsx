import { Button } from "@/components/ui/button";

export default function ButtonVariants() {
  return (
    <>
      <Button variant="primary">Pesan Tiket</Button>
      <Button variant="accent">Lihat Promo</Button>
      <Button variant="tonal">Tambah ke Keranjang</Button>
      <Button variant="outline">Unduh PDF</Button>
      <Button variant="ghost">Lihat semua</Button>
      <Button variant="link">Syarat & Ketentuan</Button>
      <Button variant="destructive">Batalkan Pesanan</Button>
    </>
  );
}
