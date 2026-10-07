/**
 * Alert
 * A message box that draws attention: information, success, a warning or an error.
 *
 *   <Alert variant="warning">
 *     <ClockIcon />
 *     <AlertTitle>Menunggu pembayaran</AlertTitle>
 *     <AlertDescription>Selesaikan sebelum 17 Okt 2026, 12.00.</AlertDescription>
 *   </Alert>
 *
 * Design: status colors from DESIGN.md §2 (light background + darker text for contrast).
 * Based on: https://ui.shadcn.com/docs/components/alert
 */
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "cn";
import * as React from "react";

const alertVariants = cva(
  [
    "relative grid w-full grid-cols-[0_1fr] items-start gap-y-1 rounded-md border px-4 py-3 typo-body-m",
    // An icon as first child gets its own column.
    "has-[>svg]:grid-cols-[calc(var(--spacing)*4)_1fr] has-[>svg]:gap-x-3 [&>svg]:size-4 [&>svg]:translate-y-0.5",
  ],
  {
    variants: {
      variant: {
        default: "border-border bg-surface text-fg-primary [&>svg]:text-fg-secondary",
        info: "border-transparent bg-info-subtle text-fg-info [&>svg]:text-info",
        success: "border-transparent bg-success-subtle text-fg-success [&>svg]:text-success",
        warning: "border-transparent bg-warning-subtle text-fg-warning [&>svg]:text-warning",
        danger: "border-transparent bg-danger-subtle text-fg-danger [&>svg]:text-danger",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  },
);

function Alert({
  className,
  variant,
  ...props
}: React.ComponentProps<"div"> & VariantProps<typeof alertVariants>) {
  return (
    <div
      data-slot="alert"
      role="alert"
      className={cn(alertVariants({ variant }), className)}
      {...props}
    />
  );
}

function AlertTitle({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="alert-title"
      className={cn("col-start-2 line-clamp-1 typo-label-m", className)}
      {...props}
    />
  );
}

function AlertDescription({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="alert-description"
      className={cn(
        "col-start-2 grid justify-items-start gap-1 typo-body-m [&_p]:leading-relaxed",
        className,
      )}
      {...props}
    />
  );
}

export { Alert, AlertDescription, AlertTitle, alertVariants };
