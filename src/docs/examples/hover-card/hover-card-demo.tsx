import { CalendarDaysIcon, MapPinIcon } from "lucide-react";

import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card";

export default function HoverCardDemo() {
  return (
    <p className="typo-body-m text-fg-secondary">
      Paket ini tersedia di{" "}
      <HoverCard>
        <HoverCardTrigger asChild>
          <a href="#malabar" className="typo-label-m text-fg-link underline underline-offset-4">
            Malabar Tea Village
          </a>
        </HoverCardTrigger>
        <HoverCardContent>
          <div className="flex gap-3">
            <Avatar>
              <AvatarFallback>MT</AvatarFallback>
            </Avatar>
            <div className="flex flex-col gap-1">
              <p className="typo-label-m text-fg-primary">Malabar Tea Village</p>
              <p className="typo-body-s text-fg-secondary">
                Kebun teh bersejarah sejak 1896 di kaki Gunung Malabar.
              </p>
              <p className="flex items-center gap-1.5 typo-body-s text-fg-tertiary">
                <MapPinIcon className="size-3.5" /> Pangalengan, Bandung
              </p>
              <p className="flex items-center gap-1.5 typo-body-s text-fg-tertiary">
                <CalendarDaysIcon className="size-3.5" /> Buka setiap hari · 08.00–17.00
              </p>
            </div>
          </div>
        </HoverCardContent>
      </HoverCard>
      .
    </p>
  );
}
