import { HeartIcon } from "lucide-react";

import { Toggle } from "@/components/ui/toggle";

export default function ToggleDemo() {
  return (
    <Toggle aria-label="Simpan ke favorit">
      <HeartIcon />
      Favorit
    </Toggle>
  );
}
