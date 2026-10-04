import { useState } from "react";

import { DirectionProvider } from "@/components/ui/direction";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";

export default function DirectionDemo() {
  const [dir, setDir] = useState<"ltr" | "rtl">("rtl");

  return (
    <div className="flex w-full max-w-sm flex-col gap-6">
      <ToggleGroup
        type="single"
        variant="outline"
        size="sm"
        value={dir}
        onValueChange={(value) => value && setDir(value as "ltr" | "rtl")}
      >
        <ToggleGroupItem value="ltr">ltr</ToggleGroupItem>
        <ToggleGroupItem value="rtl">rtl</ToggleGroupItem>
      </ToggleGroup>

      {/* DirectionProvider for the components + the dir attribute for the browser layout. */}
      <DirectionProvider dir={dir}>
        <div dir={dir} className="flex flex-col gap-4 rounded-md border border-border p-4">
          <Label htmlFor="direction-slider">{dir === "rtl" ? "عدد التذاكر" : "Jumlah tiket"}</Label>
          <Slider id="direction-slider" defaultValue={[30]} max={100} />
          <p className="typo-body-s text-fg-secondary">
            {dir === "rtl"
              ? "يبدأ شريط التمرير من اليمين."
              : "Slider dimulai dari kiri; panah keyboard ikut menyesuaikan."}
          </p>
        </div>
      </DirectionProvider>
    </div>
  );
}
