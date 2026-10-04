import { ChevronDownIcon } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";

export default function CollapsibleShowMore() {
  return (
    <Collapsible className="group/collapsible w-full max-w-sm">
      <p className="typo-body-m text-fg-secondary">
        Gunung Mas adalah perkebunan teh seluas 2.500 hektare di kawasan Puncak, Bogor, pada
        ketinggian 800–1.200 mdpl.
      </p>
      <CollapsibleContent>
        <p className="pt-2 typo-body-m text-fg-secondary">
          Dibuka sejak 1910, kebun ini kini menawarkan tur pabrik teh, jalur trekking, dan area
          piknik dengan pemandangan Gunung Gede Pangrango.
        </p>
      </CollapsibleContent>
      <CollapsibleTrigger asChild>
        <Button variant="link" className="mt-2">
          {/* The text changes with the state: open → "Sembunyikan". */}
          <span className="group-data-[state=open]/collapsible:hidden">Baca selengkapnya</span>
          <span className="hidden group-data-[state=open]/collapsible:inline">Sembunyikan</span>
          <ChevronDownIcon className="size-4 transition-transform group-data-[state=open]/collapsible:rotate-180" />
        </Button>
      </CollapsibleTrigger>
    </Collapsible>
  );
}
