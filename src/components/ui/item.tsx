/**
 * Item
 * A flexible row for lists: media (icon/image) + title + description + actions.
 * Good for settings lists, order history, menu items …
 *
 *   <Item variant="outline">
 *     <ItemMedia variant="icon"><TicketIcon /></ItemMedia>
 *     <ItemContent>
 *       <ItemTitle>Tiket Terusan</ItemTitle>
 *       <ItemDescription>Berlaku 17 Okt 2026</ItemDescription>
 *     </ItemContent>
 *     <ItemActions><Button size="sm" variant="tonal">Lihat</Button></ItemActions>
 *   </Item>
 *
 * Based on: https://ui.shadcn.com/docs/components/item
 */
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "cn";
import { Slot } from "radix-ui";
import * as React from "react";

import { Separator } from "./separator";

/** A list of <Item>s. */
function ItemGroup({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      role="list"
      data-slot="item-group"
      className={cn("group/item-group flex flex-col", className)}
      {...props}
    />
  );
}

function ItemSeparator({ className, ...props }: React.ComponentProps<typeof Separator>) {
  return (
    <Separator
      data-slot="item-separator"
      orientation="horizontal"
      className={cn("my-0", className)}
      {...props}
    />
  );
}

const itemVariants = cva(
  [
    "group/item flex flex-wrap items-center rounded-md border border-transparent typo-body-m transition-colors",
    "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-focus",
    // When the item is a link (asChild + <a>), highlight it on hover.
    "[a]:hover:bg-subtle",
  ],
  {
    variants: {
      variant: {
        default: "bg-transparent",
        outline: "border-border bg-surface",
        muted: "bg-subtle",
      },
      size: {
        md: "gap-4 p-4",
        sm: "gap-2.5 px-4 py-3",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "md",
    },
  },
);

function Item({
  className,
  variant = "default",
  size = "md",
  asChild = false,
  ...props
}: React.ComponentProps<"div"> & VariantProps<typeof itemVariants> & { asChild?: boolean }) {
  const Component = asChild ? Slot.Root : "div";

  return (
    <Component
      data-slot="item"
      data-variant={variant}
      data-size={size}
      className={cn(itemVariants({ variant, size }), className)}
      {...props}
    />
  );
}

const itemMediaVariants = cva(
  [
    "flex shrink-0 items-center justify-center gap-2 [&_svg]:pointer-events-none",
    // With a description, align the media to the top instead of the middle.
    "group-has-[[data-slot=item-description]]/item:translate-y-0.5 group-has-[[data-slot=item-description]]/item:self-start",
  ],
  {
    variants: {
      variant: {
        default: "bg-transparent",
        icon: "size-8 rounded-sm bg-brand-subtle text-fg-brand [&_svg:not([class*='size-'])]:size-4",
        image: "size-10 overflow-hidden rounded-sm [&_img]:size-full [&_img]:object-cover",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  },
);

function ItemMedia({
  className,
  variant = "default",
  ...props
}: React.ComponentProps<"div"> & VariantProps<typeof itemMediaVariants>) {
  return (
    <div
      data-slot="item-media"
      data-variant={variant}
      className={cn(itemMediaVariants({ variant }), className)}
      {...props}
    />
  );
}

function ItemContent({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="item-content"
      className={cn(
        "flex flex-1 flex-col gap-0.5 [&+[data-slot=item-content]]:flex-none",
        className,
      )}
      {...props}
    />
  );
}

function ItemTitle({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="item-title"
      className={cn("flex w-fit items-center gap-2 typo-label-m text-fg-primary", className)}
      {...props}
    />
  );
}

function ItemDescription({ className, ...props }: React.ComponentProps<"p">) {
  return (
    <p
      data-slot="item-description"
      className={cn(
        "line-clamp-2 typo-body-m text-balance text-fg-secondary",
        "[&>a]:text-fg-link [&>a]:underline [&>a]:underline-offset-4",
        className,
      )}
      {...props}
    />
  );
}

/** Buttons or other controls on the right. */
function ItemActions({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div data-slot="item-actions" className={cn("flex items-center gap-2", className)} {...props} />
  );
}

/** A full-width row above the content. */
function ItemHeader({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="item-header"
      className={cn("flex basis-full items-center justify-between gap-2", className)}
      {...props}
    />
  );
}

/** A full-width row below the content. */
function ItemFooter({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="item-footer"
      className={cn("flex basis-full items-center justify-between gap-2", className)}
      {...props}
    />
  );
}

export {
  Item,
  ItemActions,
  ItemContent,
  ItemDescription,
  ItemFooter,
  ItemGroup,
  ItemHeader,
  ItemMedia,
  ItemSeparator,
  ItemTitle,
};
