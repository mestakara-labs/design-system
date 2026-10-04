import { useState } from "react";

import { Slider } from "@/components/ui/slider";

const formatRupiah = (value: number) => `Rp${value.toLocaleString("id-ID")}`;

export default function SliderRange() {
  const [range, setRange] = useState([50_000, 300_000]);

  return (
    <div className="flex w-full max-w-sm flex-col gap-3">
      <div className="flex justify-between typo-label-m text-fg-primary">
        <span>Harga</span>
        <span>
          {formatRupiah(range[0])} – {formatRupiah(range[1])}
        </span>
      </div>
      <Slider
        value={range}
        onValueChange={setRange}
        min={0}
        max={1_000_000}
        step={25_000}
        aria-label="Rentang harga"
      />
    </div>
  );
}
