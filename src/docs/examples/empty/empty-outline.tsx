import { SearchXIcon } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Empty,
  EmptyContent,
  EmptyDescription,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
} from "@/components/ui/empty";

export default function EmptyOutline() {
  // Add `border` to get the dashed outline, e.g. inside a page section.
  return (
    <Empty className="border">
      <EmptyHeader>
        <EmptyMedia variant="icon">
          <SearchXIcon />
        </EmptyMedia>
        <EmptyTitle>Tidak ada hasil</EmptyTitle>
        <EmptyDescription>
          Tidak ada paket untuk &quot;glamping anak&quot;. Coba kata kunci lain atau hapus filter.
        </EmptyDescription>
      </EmptyHeader>
      <EmptyContent>
        <Button variant="outline">Hapus Filter</Button>
      </EmptyContent>
    </Empty>
  );
}
