/**
 * Hover Card
 * A preview card that appears when hovering (or focusing) a link, e.g. a unit name → short info.
 * Mouse/keyboard only: do not put essential information in it (phones cannot hover).
 *
 * Design: Elevation/2 panel (DESIGN.md §4).
 * Based on: https://ui.shadcn.com/docs/components/hover-card
 */
import { cn } from "cn";
import { HoverCard as HoverCardPrimitive } from "radix-ui";
import * as React from "react";

import { panelAnimation, panelStyles } from "../../lib/control-styles";

function HoverCard(props: React.ComponentProps<typeof HoverCardPrimitive.Root>) {
  return <HoverCardPrimitive.Root data-slot="hover-card" {...props} />;
}

function HoverCardTrigger(props: React.ComponentProps<typeof HoverCardPrimitive.Trigger>) {
  return <HoverCardPrimitive.Trigger data-slot="hover-card-trigger" {...props} />;
}

function HoverCardContent({
  className,
  align = "center",
  sideOffset = 6,
  ...props
}: React.ComponentProps<typeof HoverCardPrimitive.Content>) {
  return (
    <HoverCardPrimitive.Portal data-slot="hover-card-portal">
      <HoverCardPrimitive.Content
        data-slot="hover-card-content"
        align={align}
        sideOffset={sideOffset}
        className={cn(
          panelStyles,
          "z-50 w-72 origin-(--radix-hover-card-content-transform-origin) p-4",
          panelAnimation,
          className,
        )}
        {...props}
      />
    </HoverCardPrimitive.Portal>
  );
}

export { HoverCard, HoverCardContent, HoverCardTrigger };
