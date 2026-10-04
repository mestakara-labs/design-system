/**
 * Collapsible
 * Shows or hides one piece of content with a button, e.g. "Lihat detail harga".
 * It has no look of its own: style the trigger and content yourself.
 * For a list of collapsible sections, use Accordion.
 *
 * Based on: https://ui.shadcn.com/docs/components/collapsible
 */
import { cn } from "cn";
import { Collapsible as CollapsiblePrimitive } from "radix-ui";
import * as React from "react";

function Collapsible(props: React.ComponentProps<typeof CollapsiblePrimitive.Root>) {
  return <CollapsiblePrimitive.Root data-slot="collapsible" {...props} />;
}

function CollapsibleTrigger(props: React.ComponentProps<typeof CollapsiblePrimitive.Trigger>) {
  return <CollapsiblePrimitive.Trigger data-slot="collapsible-trigger" {...props} />;
}

function CollapsibleContent({
  className,
  ...props
}: React.ComponentProps<typeof CollapsiblePrimitive.Content>) {
  return (
    <CollapsiblePrimitive.Content
      data-slot="collapsible-content"
      // Slides open/closed (animations from tw-animate-css).
      className={cn(
        "overflow-hidden data-[state=closed]:animate-collapsible-up data-[state=open]:animate-collapsible-down",
        className,
      )}
      {...props}
    />
  );
}

export { Collapsible, CollapsibleContent, CollapsibleTrigger };
