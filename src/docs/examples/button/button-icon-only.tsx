import { HeartIcon, PlusIcon, ShareIcon } from "lucide-react";

import { Button } from "@/components/ui/button";

export default function ButtonIconOnly() {
  return (
    <>
      {/* Icon-only buttons need an aria-label so screen readers can announce them. */}
      <Button size="icon-sm" variant="tonal" aria-label="Tambah">
        <PlusIcon />
      </Button>
      <Button size="icon" variant="outline" aria-label="Bagikan">
        <ShareIcon />
      </Button>
      <Button size="icon-lg" aria-label="Simpan ke favorit">
        <HeartIcon />
      </Button>
    </>
  );
}
