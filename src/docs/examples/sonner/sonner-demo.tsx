import { Button } from "@/components/ui/button";
import { toast } from "@/components/ui/sonner";

export default function SonnerDemo() {
  // <Toaster /> is placed once near the root of the app (here: in the docs layout).
  return (
    <Button
      variant="outline"
      onClick={() =>
        toast("Tiket ditambahkan ke keranjang", {
          description: "Paket Petik Teh & Sarapan · 2 orang",
          action: { label: "Lihat", onClick: () => {} },
        })
      }
    >
      Tambah ke Keranjang
    </Button>
  );
}
