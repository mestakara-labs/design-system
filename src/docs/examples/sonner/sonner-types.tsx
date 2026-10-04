import { Button } from "@/components/ui/button";
import { toast } from "@/components/ui/sonner";

export default function SonnerTypes() {
  return (
    <>
      <Button variant="outline" onClick={() => toast.success("Pembayaran berhasil")}>
        Success
      </Button>
      <Button
        variant="outline"
        onClick={() => toast.info("Kebun buka lebih pagi selama libur sekolah")}
      >
        Info
      </Button>
      <Button
        variant="outline"
        onClick={() => toast.warning("Selesaikan pembayaran sebelum 12.00")}
      >
        Warning
      </Button>
      <Button variant="outline" onClick={() => toast.error("Pembayaran gagal. Coba metode lain.")}>
        Error
      </Button>
    </>
  );
}
