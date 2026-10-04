import { Button } from "@/components/ui/button";

export default function ButtonAsLink() {
  // `asChild` gives the <a> the look of a button, while it stays a real link.
  return (
    <Button asChild variant="tonal">
      <a href="#paket">Lihat Paket</a>
    </Button>
  );
}
