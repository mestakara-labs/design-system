/**
 * Marker
 * A small note between chat messages: a date ("Hari ini"), an event ("Rina bergabung"),
 * or a status line ("Pesanan dibuat").
 *
 * Based on: https://ui.shadcn.com/docs/components/marker
 *
 * Variants:
 *   - "default":   plain grey text
 *   - "separator": text in the middle of a horizontal line  ── Hari ini ──
 *   - "border":    text with a line underneath
 */
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "cn";
import { Slot } from "radix-ui";
import * as React from "react";

const markerVariants = cva(
  [
    "group/marker relative flex min-h-4 w-full items-center gap-2 text-left typo-body-s text-fg-tertiary",
    "[&_svg:not([class*='size-'])]:size-4",
    // Links inside a marker
    "[a]:underline [a]:underline-offset-4 [a]:hover:text-fg-link",
  ],
  {
    variants: {
      variant: {
        default: "",
        // The lines are drawn with ::before and ::after.
        separator:
          "before:mr-1 before:h-px before:min-w-0 before:flex-1 before:bg-border after:ml-1 after:h-px after:min-w-0 after:flex-1 after:bg-border",
        border: "border-b border-border pb-2",
      },
    },
    defaultVariants: { variant: "default" },
  },
);

function Marker({
  className,
  variant = "default",
  asChild = false,
  ...props
}: React.ComponentProps<"div"> &
  VariantProps<typeof markerVariants> & {
    /** Render the child element (e.g. a link) with marker styles. */
    asChild?: boolean;
  }) {
  const Component = asChild ? Slot.Root : "div";

  return (
    <Component
      data-slot="marker"
      data-variant={variant}
      className={cn(markerVariants({ variant }), className)}
      {...props}
    />
  );
}

/** Optional icon before the text. Hidden from screen readers. */
function MarkerIcon({ className, ...props }: React.ComponentProps<"span">) {
  return (
    <span
      data-slot="marker-icon"
      aria-hidden="true"
      className={cn("size-4 shrink-0 [&_svg:not([class*='size-'])]:size-4", className)}
      {...props}
    />
  );
}

function MarkerContent({ className, ...props }: React.ComponentProps<"span">) {
  return (
    <span
      data-slot="marker-content"
      className={cn(
        "min-w-0 wrap-break-word group-data-[variant=separator]/marker:flex-none group-data-[variant=separator]/marker:text-center",
        "*:[a]:underline *:[a]:underline-offset-4 *:[a]:hover:text-fg-link",
        className,
      )}
      {...props}
    />
  );
}

export { Marker, MarkerContent, MarkerIcon, markerVariants };
