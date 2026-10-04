import { useState } from "react";

import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";

const ITEMS = ["Tiket Dewasa", "Tiket Anak", "Parkir Mobil"];

export default function CheckboxIndeterminate() {
  const [selected, setSelected] = useState<string[]>(["Tiket Dewasa"]);

  // All selected → checked, some → "indeterminate", none → unchecked.
  const allState =
    selected.length === ITEMS.length ? true : selected.length > 0 ? "indeterminate" : false;

  function toggle(item: string) {
    setSelected((current) =>
      current.includes(item) ? current.filter((value) => value !== item) : [...current, item],
    );
  }

  return (
    <div className="flex flex-col gap-3">
      <div className="flex items-center gap-3">
        <Checkbox
          id="cb-all"
          checked={allState}
          onCheckedChange={(checked) => setSelected(checked === true ? ITEMS : [])}
        />
        <Label htmlFor="cb-all">Pilih semua</Label>
      </div>
      {ITEMS.map((item) => (
        <div key={item} className="flex items-center gap-3 pl-8">
          <Checkbox
            id={`cb-${item}`}
            checked={selected.includes(item)}
            onCheckedChange={() => toggle(item)}
          />
          <Label htmlFor={`cb-${item}`}>{item}</Label>
        </div>
      ))}
    </div>
  );
}
