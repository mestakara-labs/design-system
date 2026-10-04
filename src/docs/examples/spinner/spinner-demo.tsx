import { Spinner } from "@/components/ui/spinner";

export default function SpinnerDemo() {
  return (
    <div className="flex items-center gap-2 typo-body-m text-fg-secondary">
      <Spinner />
      Memuat paket wisata…
    </div>
  );
}
