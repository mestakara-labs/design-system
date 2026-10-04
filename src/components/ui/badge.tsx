/**
 * Badge
 * A small pill that shows a status or label: "Lunas", "Menunggu Bayar", "Premium".
 *
 * Design: DESIGN.md §5 "Badge" — pill (radius full), padding 4×12, a 6px dot + Label/S.
 *   Tones: success, warning, danger, info, neutral, brand, premium.
 *   Always include text; never rely on color alone.
 * Based on: https://ui.shadcn.com/docs/components/badge
 */
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "cn";
import { Slot } from "radix-ui";
import * as React from "react";

const badgeVariants = cva(
  [
    "inline-flex w-fit shrink-0 items-center justify-center gap-1.5 overflow-hidden rounded-full border border-transparent px-3 py-1 typo-label-s whitespace-nowrap",
    "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-focus",
    "[&>svg]:pointer-events-none [&>svg]:size-3.5",
  ],
  {
    variants: {
      variant: {
        // Paid, active, open
        success: "bg-success-subtle text-fg-success [&_[data-slot=badge-dot]]:bg-success",
        // Awaiting payment
        warning: "bg-warning-subtle text-fg-warning [&_[data-slot=badge-dot]]:bg-warning",
        // Error, cancelled
        danger: "bg-danger-subtle text-fg-danger [&_[data-slot=badge-dot]]:bg-danger",
        // Info, scheduled
        info: "bg-info-subtle text-fg-info [&_[data-slot=badge-dot]]:bg-info",
        // Neutral information
        neutral: "bg-muted text-fg-secondary [&_[data-slot=badge-dot]]:bg-fg-tertiary",
        // Brand label (dark green, white text)
        brand: "bg-brand text-fg-on-brand [&_[data-slot=badge-dot]]:bg-green-400",
        // Premium label (very dark green, gold text)
        premium: "bg-inverse text-premium [&_[data-slot=badge-dot]]:bg-premium",
        // Border only
        outline:
          "border-border bg-surface text-fg-secondary [&_[data-slot=badge-dot]]:bg-fg-tertiary",
      },
    },
    defaultVariants: {
      variant: "neutral",
    },
  },
);

type BadgeProps = React.ComponentProps<"span"> &
  VariantProps<typeof badgeVariants> & {
    /** Show the 6px dot before the text (DESIGN.md default). */
    dot?: boolean;
    /** Render the child element (e.g. a link) with badge styles. The dot is not added then. */
    asChild?: boolean;
  };

function Badge({
  className,
  variant,
  dot = true,
  asChild = false,
  children,
  ...props
}: BadgeProps) {
  const Component = asChild ? Slot.Root : "span";

  return (
    <Component
      data-slot="badge"
      data-variant={variant}
      className={cn(badgeVariants({ variant }), className)}
      {...props}
    >
      {asChild ? (
        children
      ) : (
        <>
          {dot && (
            <span data-slot="badge-dot" aria-hidden="true" className="size-1.5 rounded-full" />
          )}
          {children}
        </>
      )}
    </Component>
  );
}

export { Badge, badgeVariants, type BadgeProps };
