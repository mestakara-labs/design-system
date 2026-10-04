import { LeafIcon, WifiIcon } from "lucide-react";

import { Toggle } from "@/components/ui/toggle";

export default function ToggleOutline() {
  return (
    <>
      <Toggle variant="outline" defaultPressed>
        <LeafIcon />
        Ramah Lingkungan
      </Toggle>
      <Toggle variant="outline">
        <WifiIcon />
        Ada Wi-Fi
      </Toggle>
    </>
  );
}
