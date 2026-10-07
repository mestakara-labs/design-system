/**
 * Card
 * A box that groups related content: a package, a ticket summary, a statistic …
 *
 * Design: DESIGN.md §4 — radius 16, padding 20, and EITHER a 1px border OR Elevation/1, never both.
 *   variant="outline"  → border (default)
 *   variant="elevated" → shadow, no border
 * Based on: https://ui.shadcn.com/docs/components/card
 */
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "cn";
import * as React from "react";

const cardVariants = cva("flex flex-col gap-6 rounded-lg bg-surface py-6 text-fg-primary", {
  variants: {
    variant: {
      outline: "border border-border",
      elevated: "shadow-sm",
    },
  },
  defaultVariants: {
    variant: "outline",
  },
});

function Card({
  className,
  variant,
  ...props
}: React.ComponentProps<"div"> & VariantProps<typeof cardVariants>) {
  return (
    <div
      data-slot="card"
      data-variant={variant}
      className={cn(cardVariants({ variant }), className)}
      {...props}
    />
  );
}

/** Title + description (+ optional <CardAction> on the right). */
function CardHeader({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-header"
      className={cn(
        "@container/card-header grid auto-rows-min grid-rows-[auto_auto] items-start gap-1.5 px-6",
        "has-data-[slot=card-action]:grid-cols-[1fr_auto] [.border-b]:pb-4",
        className,
      )}
      {...props}
    />
  );
}

function CardTitle({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-title"
      className={cn("typo-label-l text-fg-primary", className)}
      {...props}
    />
  );
}

function CardDescription({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-description"
      className={cn("typo-body-m text-fg-secondary", className)}
      {...props}
    />
  );
}

/** Top-right corner of the header, e.g. a badge or a small button. */
function CardAction({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-action"
      className={cn("col-start-2 row-span-2 row-start-1 self-start justify-self-end", className)}
      {...props}
    />
  );
}

function CardContent({ className, ...props }: React.ComponentProps<"div">) {
  return <div data-slot="card-content" className={cn("px-6", className)} {...props} />;
}

function CardFooter({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-footer"
      className={cn("flex items-center gap-3 px-6 [.border-t]:pt-6", className)}
      {...props}
    />
  );
}

export {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
  cardVariants,
};
