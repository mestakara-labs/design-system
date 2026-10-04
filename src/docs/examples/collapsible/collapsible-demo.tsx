import { ChevronsUpDownIcon } from "lucide-react";
import { useState } from "react";

import { Button } from "@/components/ui/button";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";

export default function CollapsibleDemo() {
  const [open, setOpen] = useState(false);

  return (
    <Collapsible open={open} onOpenChange={setOpen} className="flex w-full max-w-sm flex-col gap-2">
      <div className="flex items-center justify-between gap-4">
        <h4 className="typo-label-l text-fg-primary">Total: Rp 150.000</h4>
        <CollapsibleTrigger asChild>
          <Button variant="ghost" size="icon-sm" aria-label="Tampilkan rincian harga">
            <ChevronsUpDownIcon />
          </Button>
        </CollapsibleTrigger>
      </div>
      <div className="flex justify-between rounded-md border border-border px-4 py-3 typo-body-m">
        <span>2 × Tiket dewasa</span>
        <span>Rp 100.000</span>
      </div>
      <CollapsibleContent className="flex flex-col gap-2">
        <div className="flex justify-between rounded-md border border-border px-4 py-3 typo-body-m">
          <span>1 × Tiket anak</span>
          <span>Rp 30.000</span>
        </div>
        <div className="flex justify-between rounded-md border border-border px-4 py-3 typo-body-m">
          <span>Biaya layanan</span>
          <span>Rp 20.000</span>
        </div>
      </CollapsibleContent>
    </Collapsible>
  );
}
