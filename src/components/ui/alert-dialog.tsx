/**
 * Alert Dialog
 * Asks the user to confirm an important action, e.g. "Batalkan pesanan?".
 * Unlike Dialog, it cannot be closed by clicking outside: the user must choose.
 *
 * Design: radius xl (24px) and Elevation/3 (DESIGN.md §4).
 * Based on: https://ui.shadcn.com/docs/components/alert-dialog
 */
import { cn } from "cn";
import { AlertDialog as AlertDialogPrimitive } from "radix-ui";
import * as React from "react";

import { overlayBackdropStyles } from "../../lib/control-styles";

import { Button } from "./button";

function AlertDialog(props: React.ComponentProps<typeof AlertDialogPrimitive.Root>) {
  return <AlertDialogPrimitive.Root data-slot="alert-dialog" {...props} />;
}

function AlertDialogTrigger(props: React.ComponentProps<typeof AlertDialogPrimitive.Trigger>) {
  return <AlertDialogPrimitive.Trigger data-slot="alert-dialog-trigger" {...props} />;
}

function AlertDialogPortal(props: React.ComponentProps<typeof AlertDialogPrimitive.Portal>) {
  return <AlertDialogPrimitive.Portal data-slot="alert-dialog-portal" {...props} />;
}

function AlertDialogOverlay({
  className,
  ...props
}: React.ComponentProps<typeof AlertDialogPrimitive.Overlay>) {
  return (
    <AlertDialogPrimitive.Overlay
      data-slot="alert-dialog-overlay"
      className={cn(overlayBackdropStyles, className)}
      {...props}
    />
  );
}

/** The window. `size="sm"` = narrow, centered layout with two equal buttons. */
function AlertDialogContent({
  className,
  size = "md",
  ...props
}: React.ComponentProps<typeof AlertDialogPrimitive.Content> & { size?: "sm" | "md" }) {
  return (
    <AlertDialogPortal>
      <AlertDialogOverlay />
      <AlertDialogPrimitive.Content
        data-slot="alert-dialog-content"
        data-size={size}
        className={cn(
          "group/alert-dialog-content fixed top-1/2 left-1/2 z-50 grid w-full max-w-[calc(100%-2rem)] -translate-x-1/2 -translate-y-1/2 gap-4 rounded-xl bg-surface p-6 text-fg-primary shadow-lg",
          "data-[size=sm]:max-w-xs data-[size=md]:sm:max-w-lg",
          "duration-200 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[state=open]:animate-in data-[state=open]:fade-in-0 data-[state=open]:zoom-in-95",
          className,
        )}
        {...props}
      />
    </AlertDialogPortal>
  );
}

function AlertDialogHeader({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="alert-dialog-header"
      className={cn(
        "grid grid-rows-[auto_1fr] place-items-center gap-1.5 text-center",
        "has-data-[slot=alert-dialog-media]:grid-rows-[auto_auto_1fr] has-data-[slot=alert-dialog-media]:gap-x-5",
        // Medium size on larger screens: left aligned, icon on the left.
        "sm:group-data-[size=md]/alert-dialog-content:place-items-start sm:group-data-[size=md]/alert-dialog-content:text-left",
        "sm:group-data-[size=md]/alert-dialog-content:has-data-[slot=alert-dialog-media]:grid-rows-[auto_1fr]",
        className,
      )}
      {...props}
    />
  );
}

function AlertDialogFooter({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="alert-dialog-footer"
      className={cn(
        "flex flex-col-reverse gap-2 sm:flex-row sm:justify-end",
        "group-data-[size=sm]/alert-dialog-content:grid group-data-[size=sm]/alert-dialog-content:grid-cols-2",
        className,
      )}
      {...props}
    />
  );
}

function AlertDialogTitle({
  className,
  ...props
}: React.ComponentProps<typeof AlertDialogPrimitive.Title>) {
  return (
    <AlertDialogPrimitive.Title
      data-slot="alert-dialog-title"
      className={cn(
        "typo-h3 text-fg-primary",
        "sm:group-data-[size=md]/alert-dialog-content:group-has-data-[slot=alert-dialog-media]/alert-dialog-content:col-start-2",
        className,
      )}
      {...props}
    />
  );
}

function AlertDialogDescription({
  className,
  ...props
}: React.ComponentProps<typeof AlertDialogPrimitive.Description>) {
  return (
    <AlertDialogPrimitive.Description
      data-slot="alert-dialog-description"
      className={cn("typo-body-m text-fg-secondary", className)}
      {...props}
    />
  );
}

/** An icon in a soft circle above (or left of) the title. */
function AlertDialogMedia({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="alert-dialog-media"
      className={cn(
        "mb-2 inline-flex size-14 items-center justify-center rounded-full bg-danger-subtle text-danger",
        "sm:group-data-[size=md]/alert-dialog-content:row-span-2 *:[svg:not([class*='size-'])]:size-7",
        className,
      )}
      {...props}
    />
  );
}

/** The confirm button. Use `variant="destructive"` for dangerous actions. */
function AlertDialogAction({
  className,
  variant = "primary",
  size = "md",
  ...props
}: React.ComponentProps<typeof AlertDialogPrimitive.Action> &
  Pick<React.ComponentProps<typeof Button>, "variant" | "size">) {
  return (
    <Button variant={variant} size={size} asChild>
      <AlertDialogPrimitive.Action
        data-slot="alert-dialog-action"
        className={className}
        {...props}
      />
    </Button>
  );
}

/** The cancel button (closes the dialog without doing anything). */
function AlertDialogCancel({
  className,
  variant = "outline",
  size = "md",
  ...props
}: React.ComponentProps<typeof AlertDialogPrimitive.Cancel> &
  Pick<React.ComponentProps<typeof Button>, "variant" | "size">) {
  return (
    <Button variant={variant} size={size} asChild>
      <AlertDialogPrimitive.Cancel
        data-slot="alert-dialog-cancel"
        className={className}
        {...props}
      />
    </Button>
  );
}

export {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogMedia,
  AlertDialogOverlay,
  AlertDialogPortal,
  AlertDialogTitle,
  AlertDialogTrigger,
};
