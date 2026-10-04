import { Badge } from "@/components/ui/badge";

export default function BadgeVariants() {
  return (
    <>
      <Badge variant="success">Lunas</Badge>
      <Badge variant="warning">Menunggu Bayar</Badge>
      <Badge variant="danger">Dibatalkan</Badge>
      <Badge variant="info">Dijadwalkan</Badge>
      <Badge variant="neutral">Draf</Badge>
      <Badge variant="brand">Rekomendasi</Badge>
      <Badge variant="premium">Premium</Badge>
      <Badge variant="outline">Baru</Badge>
    </>
  );
}
