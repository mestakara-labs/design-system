import { BookmarkIcon } from "lucide-react";

import { Toggle } from "@/components/ui/toggle";

export default function ToggleSizes() {
  return (
    <>
      <Toggle size="sm" variant="outline" aria-label="Simpan (small)">
        <BookmarkIcon />
      </Toggle>
      <Toggle size="md" variant="outline" aria-label="Simpan (medium)">
        <BookmarkIcon />
      </Toggle>
      <Toggle size="lg" variant="outline" aria-label="Simpan (large)">
        <BookmarkIcon />
      </Toggle>
    </>
  );
}
