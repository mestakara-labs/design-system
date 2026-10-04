import { CircleAlertIcon, CircleCheckIcon, ClockIcon, InfoIcon } from "lucide-react";

import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

export default function AlertVariants() {
  return (
    <div className="flex w-full max-w-lg flex-col gap-3">
      <Alert variant="info">
        <InfoIcon />
        <AlertTitle>Kunjungan dijadwalkan</AlertTitle>
        <AlertDescription>Sabtu, 17 Okt 2026 · 08.00. Datang 15 menit lebih awal.</AlertDescription>
      </Alert>
      <Alert variant="success">
        <CircleCheckIcon />
        <AlertTitle>Pembayaran berhasil</AlertTitle>
        <AlertDescription>Tiket Anda sudah siap — tunjukkan QR di gerbang masuk.</AlertDescription>
      </Alert>
      <Alert variant="warning">
        <ClockIcon />
        <AlertTitle>Menunggu pembayaran</AlertTitle>
        <AlertDescription>
          Selesaikan pembayaran sebelum 12.00 agar pesanan tidak batal.
        </AlertDescription>
      </Alert>
      <Alert variant="danger">
        <CircleAlertIcon />
        <AlertTitle>Pembayaran gagal</AlertTitle>
        <AlertDescription>Saldo tidak mencukupi. Coba metode pembayaran lain.</AlertDescription>
      </Alert>
    </div>
  );
}
