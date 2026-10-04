import { Separator } from "@/components/ui/separator";

export default function SeparatorVertical() {
  // A vertical separator needs a parent with a height (here: h-5).
  return (
    <nav className="flex h-5 items-center gap-4 typo-label-m text-fg-link">
      <a href="#beranda">Beranda</a>
      <Separator orientation="vertical" />
      <a href="#tiket">Tiket</a>
      <Separator orientation="vertical" />
      <a href="#pesanan">Pesanan</a>
    </nav>
  );
}
