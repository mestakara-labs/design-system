import { HeartIcon } from "lucide-react";

import { Toggle } from "@/components/ui/toggle";

export default function ToggleDisabled() {
  return (
    <Toggle disabled aria-label="Favorit (non-aktif)">
      <HeartIcon />
      Favorit
    </Toggle>
  );
}
