import { Fragment } from "react";

import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";

const VISITS = Array.from(
  { length: 30 },
  (_, index) => `TRX-2026-${String(index + 1).padStart(4, "0")}`,
);

export default function ScrollAreaDemo() {
  return (
    <ScrollArea className="h-72 w-56 rounded-md border border-border bg-surface">
      <div className="p-4">
        <h4 className="mb-3 typo-label-l text-fg-primary">Transaksi hari ini</h4>
        {VISITS.map((code) => (
          <Fragment key={code}>
            <div className="typo-body-m text-fg-secondary">{code}</div>
            <Separator className="my-2" />
          </Fragment>
        ))}
      </div>
    </ScrollArea>
  );
}
