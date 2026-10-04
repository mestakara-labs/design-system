import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

const RULES = [
  "Tiket berlaku sesuai tanggal kunjungan yang dipilih.",
  "Tunjukkan QR e-tiket di gerbang masuk.",
  "Anak di bawah 3 tahun tidak memerlukan tiket.",
  "Dilarang memetik teh di luar area yang ditentukan.",
  "Jaga kebersihan dan buang sampah pada tempatnya.",
  "Pembatalan paling lambat 24 jam sebelum kunjungan.",
  "Dana dikembalikan dalam 3–5 hari kerja.",
  "Pengelola berhak menutup area saat cuaca buruk.",
];

export default function DialogScroll() {
  // Long content: limit the height and let only the middle part scroll.
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="ghost">Syarat & Ketentuan</Button>
      </DialogTrigger>
      <DialogContent className="max-h-[80vh] grid-rows-[auto_1fr_auto]">
        <DialogHeader>
          <DialogTitle>Syarat & Ketentuan</DialogTitle>
          <DialogDescription>Berlaku untuk semua unit Agrowisata.</DialogDescription>
        </DialogHeader>
        <ol className="-mx-6 list-decimal space-y-3 overflow-y-auto px-6 pl-11 typo-body-m text-fg-secondary">
          {[...RULES, ...RULES].map((rule, index) => (
            <li key={index}>{rule}</li>
          ))}
        </ol>
        <DialogFooter showCloseButton />
      </DialogContent>
    </Dialog>
  );
}
