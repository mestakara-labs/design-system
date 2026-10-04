/**
 * Toggle
 * A button that stays pressed ("on") or not ("off"), e.g. bold text or a "favorit" filter.
 *
 * Design: the "on" state uses the light-green pill of the active navigation item (DESIGN.md §5).
 * Based on: https://ui.shadcn.com/docs/components/toggle
 */
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "cn";
import { Toggle as TogglePrimitive } from "radix-ui";
import * as React from "react";

const toggleVariants = cva(
  [
    "inline-flex cursor-pointer items-center justify-center gap-2 whitespace-nowrap text-fg-secondary transition-colors",
    "hover:bg-subtle hover:text-fg-primary",
    "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-focus",
    "data-[state=on]:bg-brand-subtle data-[state=on]:text-fg-brand",
    "disabled:pointer-events-none disabled:text-fg-disabled disabled:data-[state=on]:border-border disabled:data-[state=on]:bg-muted",
    "[&_svg]:pointer-events-none [&_svg]:shrink-0",
  ],
  {
    variants: {
      variant: {
        default: "bg-transparent",
        outline: "border border-border bg-surface data-[state=on]:border-primary",
      },
      size: {
        sm: "h-8 min-w-8 rounded-sm px-2 typo-label-s [&_svg:not([class*='size-'])]:size-4",
        md: "h-11 min-w-11 rounded-md px-3 typo-label-m [&_svg:not([class*='size-'])]:size-5",
        lg: "h-13 min-w-13 rounded-md px-4 typo-label-l [&_svg:not([class*='size-'])]:size-5",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "md",
    },
  },
);

function Toggle({
  className,
  variant,
  size,
  ...props
}: React.ComponentProps<typeof TogglePrimitive.Root> & VariantProps<typeof toggleVariants>) {
  return (
    <TogglePrimitive.Root
      data-slot="toggle"
      className={cn(toggleVariants({ variant, size }), className)}
      {...props}
    />
  );
}

export { Toggle, toggleVariants };
