import { Button } from "@/components/ui/button";
import { toast } from "@/components/ui/sonner";

// Pretends to call a server for 2 seconds.
const sendTicket = () => new Promise((resolve) => setTimeout(resolve, 2000));

export default function SonnerPromise() {
  // toast.promise shows "loading" first, then success or error when the promise settles.
  return (
    <Button
      variant="tonal"
      onClick={() =>
        toast.promise(sendTicket(), {
          loading: "Mengirim e-tiket ke email…",
          success: "E-tiket terkirim ke nama@email.com",
          error: "Gagal mengirim. Coba lagi.",
        })
      }
    >
      Kirim E-Tiket
    </Button>
  );
}
