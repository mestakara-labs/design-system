/**
 * Attachment
 * A file attached to a chat message or form: photo of a payment receipt, PDF ticket, ID card …
 * Shows a thumbnail or icon, the file name, details, and optional actions (remove, download).
 *
 * States (`state` prop):
 *   - "idle":       empty slot waiting for a file (dashed border)
 *   - "uploading" / "processing": the file name shimmers, put a <Spinner> in the media
 *   - "error":      red tint, explain the problem in the description
 *   - "done":       finished (default)
 *
 * Based on: https://ui.shadcn.com/docs/components/attachment
 */
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "cn";
import { Slot } from "radix-ui";
import * as React from "react";

import { Button } from "./button";

const attachmentVariants = cva(
  [
    "group/attachment relative flex w-fit max-w-full min-w-0 shrink-0 flex-wrap rounded-md border border-border bg-surface text-fg-primary transition-colors",
    "focus-within:outline-2 focus-within:outline-focus",
    // The whole card is clickable when it contains an <AttachmentTrigger> (a button or link).
    "has-[>a,>button]:hover:bg-subtle",
    "data-[state=error]:border-danger/40 data-[state=idle]:border-dashed data-[state=idle]:border-border-strong",
  ],
  {
    variants: {
      size: {
        md: "gap-3 typo-body-m has-data-[slot=attachment-content]:px-3 has-data-[slot=attachment-content]:py-2.5 has-data-[slot=attachment-media]:p-2",
        sm: "gap-2.5 typo-body-s has-data-[slot=attachment-content]:px-2 has-data-[slot=attachment-content]:py-1.5 has-data-[slot=attachment-media]:p-1.5",
        xs: "gap-1.5 rounded-sm typo-body-s has-data-[slot=attachment-content]:px-1.5 has-data-[slot=attachment-content]:py-1 has-data-[slot=attachment-media]:p-1",
      },
      orientation: {
        horizontal: "min-w-40 items-center",
        vertical: "w-28 flex-col has-data-[slot=attachment-content]:w-32",
      },
    },
    defaultVariants: { size: "md", orientation: "horizontal" },
  },
);

function Attachment({
  className,
  state = "done",
  size = "md",
  orientation = "horizontal",
  ...props
}: React.ComponentProps<"div"> &
  VariantProps<typeof attachmentVariants> & {
    state?: "idle" | "uploading" | "processing" | "error" | "done";
  }) {
  return (
    <div
      data-slot="attachment"
      data-state={state}
      data-size={size}
      data-orientation={orientation}
      className={cn(attachmentVariants({ size, orientation }), className)}
      {...props}
    />
  );
}

const attachmentMediaVariants = cva(
  [
    "relative flex aspect-square w-10 shrink-0 items-center justify-center overflow-hidden rounded-sm bg-subtle text-fg-secondary",
    "group-data-[orientation=vertical]/attachment:w-full group-data-[size=sm]/attachment:w-8 group-data-[size=xs]/attachment:w-7 group-data-[size=xs]/attachment:rounded-xs",
    "group-data-[state=error]/attachment:bg-danger-subtle group-data-[state=error]/attachment:text-fg-danger",
    "[&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-5 group-data-[orientation=vertical]/attachment:[&_svg:not([class*='size-'])]:size-6 group-data-[size=xs]/attachment:[&_svg:not([class*='size-'])]:size-3.5",
  ],
  {
    variants: {
      variant: {
        icon: "",
        // A thumbnail. Faded until the upload is done.
        image:
          "opacity-60 group-data-[state=done]/attachment:opacity-100 group-data-[state=idle]/attachment:opacity-100 *:[img]:aspect-square *:[img]:w-full *:[img]:object-cover",
      },
    },
    defaultVariants: { variant: "icon" },
  },
);

/** Thumbnail or file icon on the left (or on top when vertical). */
function AttachmentMedia({
  className,
  variant = "icon",
  ...props
}: React.ComponentProps<"div"> & VariantProps<typeof attachmentMediaVariants>) {
  return (
    <div
      data-slot="attachment-media"
      data-variant={variant}
      className={cn(attachmentMediaVariants({ variant }), className)}
      {...props}
    />
  );
}

/** Column with the title and description. */
function AttachmentContent({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="attachment-content"
      className={cn(
        "max-w-full min-w-0 flex-1 group-data-[orientation=vertical]/attachment:px-1",
        className,
      )}
      {...props}
    />
  );
}

/** File name. Cut off with "…" when too long; shimmers while uploading. */
function AttachmentTitle({ className, ...props }: React.ComponentProps<"span">) {
  return (
    <span
      data-slot="attachment-title"
      className={cn(
        "block max-w-full min-w-0 truncate typo-label-m",
        "group-data-[state=processing]/attachment:shimmer group-data-[state=uploading]/attachment:shimmer",
        className,
      )}
      {...props}
    />
  );
}

/** Size, type, progress or error text. */
function AttachmentDescription({ className, ...props }: React.ComponentProps<"span">) {
  return (
    <span
      data-slot="attachment-description"
      className={cn(
        "mt-0.5 block max-w-full min-w-0 truncate typo-body-s text-fg-tertiary group-data-[state=error]/attachment:text-fg-danger",
        className,
      )}
      {...props}
    />
  );
}

/** Holds the action buttons. Top-right corner when vertical. */
function AttachmentActions({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="attachment-actions"
      className={cn(
        // z-20 keeps the buttons clickable above an <AttachmentTrigger>.
        "relative z-20 flex shrink-0 items-center",
        "group-data-[orientation=vertical]/attachment:absolute group-data-[orientation=vertical]/attachment:top-3 group-data-[orientation=vertical]/attachment:right-3 group-data-[orientation=vertical]/attachment:gap-1",
        className,
      )}
      {...props}
    />
  );
}

/** A small icon button, e.g. remove or download. Always add an `aria-label`. */
function AttachmentAction({
  className,
  variant = "ghost",
  size = "icon-sm",
  ...props
}: React.ComponentProps<typeof Button>) {
  return (
    <Button
      data-slot="attachment-action"
      variant={variant}
      size={size}
      className={cn("text-fg-secondary", className)}
      {...props}
    />
  );
}

/**
 * Makes the whole card clickable (e.g. open a preview). It stretches over the card invisibly.
 * Give it an `aria-label`, or use `asChild` with a link.
 */
function AttachmentTrigger({
  className,
  asChild = false,
  type,
  ...props
}: React.ComponentProps<"button"> & { asChild?: boolean }) {
  const Component = asChild ? Slot.Root : "button";

  return (
    <Component
      data-slot="attachment-trigger"
      type={asChild ? undefined : (type ?? "button")}
      // The focus ring is drawn by the card (focus-within).
      className={cn(
        "absolute inset-0 z-10 cursor-pointer rounded-[inherit] outline-none",
        className,
      )}
      {...props}
    />
  );
}

/** A row of attachments that scrolls sideways. */
function AttachmentGroup({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="attachment-group"
      className={cn(
        "flex min-w-0 snap-x snap-mandatory scroll-px-1 [scrollbar-width:none] gap-3 overflow-x-auto overscroll-x-contain p-1",
        "*:data-[slot=attachment]:flex-none *:data-[slot=attachment]:snap-start",
        className,
      )}
      {...props}
    />
  );
}

export {
  Attachment,
  AttachmentAction,
  AttachmentActions,
  AttachmentContent,
  AttachmentDescription,
  AttachmentGroup,
  AttachmentMedia,
  attachmentVariants,
  AttachmentTitle,
  AttachmentTrigger,
};
