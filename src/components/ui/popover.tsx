/**
 * Popover
 * A small floating panel that opens next to a trigger, e.g. a date picker or extra info.
 *
 * Design: Elevation/2 (DESIGN.md §4).
 * Based on: https://ui.shadcn.com/docs/components/popover
 */
import { cn } from "cn";
import { Popover as PopoverPrimitive } from "radix-ui";
import * as React from "react";

import { panelAnimation, panelStyles } from "../../lib/control-styles";

function Popover(props: React.ComponentProps<typeof PopoverPrimitive.Root>) {
  return <PopoverPrimitive.Root data-slot="popover" {...props} />;
}

function PopoverTrigger(props: React.ComponentProps<typeof PopoverPrimitive.Trigger>) {
  return <PopoverPrimitive.Trigger data-slot="popover-trigger" {...props} />;
}

function PopoverContent({
  className,
  align = "center",
  sideOffset = 6,
  ...props
}: React.ComponentProps<typeof PopoverPrimitive.Content>) {
  return (
    <PopoverPrimitive.Portal>
      <PopoverPrimitive.Content
        data-slot="popover-content"
        align={align}
        sideOffset={sideOffset}
        className={cn(
          panelStyles,
          "z-50 w-72 origin-(--radix-popover-content-transform-origin) p-4",
          panelAnimation,
          className,
        )}
        {...props}
      />
    </PopoverPrimitive.Portal>
  );
}

/** Positions the popover relative to another element than the trigger. */
function PopoverAnchor(props: React.ComponentProps<typeof PopoverPrimitive.Anchor>) {
  return <PopoverPrimitive.Anchor data-slot="popover-anchor" {...props} />;
}

function PopoverHeader({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div data-slot="popover-header" className={cn("flex flex-col gap-1", className)} {...props} />
  );
}

function PopoverTitle({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="popover-title"
      className={cn("typo-label-m text-fg-primary", className)}
      {...props}
    />
  );
}

function PopoverDescription({ className, ...props }: React.ComponentProps<"p">) {
  return (
    <p
      data-slot="popover-description"
      className={cn("typo-body-m text-fg-secondary", className)}
      {...props}
    />
  );
}

export {
  Popover,
  PopoverAnchor,
  PopoverContent,
  PopoverDescription,
  PopoverHeader,
  PopoverTitle,
  PopoverTrigger,
};
