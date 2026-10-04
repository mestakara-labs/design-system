import { Separator } from "@/components/ui/separator";

export default function SeparatorDemo() {
  return (
    <div className="w-full max-w-sm">
      <p className="typo-label-l text-fg-primary">Paket Petik Teh & Sarapan</p>
      <p className="typo-body-m text-fg-secondary">Malabar Tea Village</p>
      <Separator className="my-4" />
      <div className="flex h-5 items-center gap-4 typo-body-m text-fg-secondary">
        <span>3 jam</span>
        <Separator orientation="vertical" />
        <span>Maks. 10 orang</span>
        <Separator orientation="vertical" />
        <span>Rp75.000</span>
      </div>
    </div>
  );
}
