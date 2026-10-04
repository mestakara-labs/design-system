/**
 * Input Group
 * An input (or textarea) with extra content attached: icons, text, buttons, a character counter …
 *
 *   <InputGroup>
 *     <InputGroupInput placeholder="Cari destinasi" />
 *     <InputGroupAddon><SearchIcon /></InputGroupAddon>
 *   </InputGroup>
 *
 * The whole group looks like one field: border, focus and error states live on the group.
 *
 * Design: DESIGN.md §5 "Text Field" — shared styles live in `src/lib/control-styles.ts`.
 * Based on: https://ui.shadcn.com/docs/components/input-group
 */
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "cn";
import * as React from "react";

import { controlStyles } from "../../lib/control-styles";

import { Button } from "./button";
import { Input } from "./input";
import { Textarea } from "./textarea";

function InputGroup({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="input-group"
      role="group"
      className={cn(
        controlStyles.base,
        "group/input-group relative flex h-12 items-center has-[>textarea]:h-auto",

        // Layout depends on where the addons are placed.
        "has-[>[data-align=inline-start]]:[&>input]:pl-2",
        "has-[>[data-align=inline-end]]:[&>input]:pr-2",
        "has-[>[data-align=block-start]]:h-auto has-[>[data-align=block-start]]:flex-col has-[>[data-align=block-start]]:[&>input]:pb-3",
        "has-[>[data-align=block-end]]:h-auto has-[>[data-align=block-end]]:flex-col has-[>[data-align=block-end]]:[&>input]:pt-3",

        // Focus: when the input/textarea inside is focused.
        "has-[[data-slot=input-group-control]:focus-visible]:border-focus has-[[data-slot=input-group-control]:focus-visible]:ring-1 has-[[data-slot=input-group-control]:focus-visible]:ring-focus",

        // Error: when the input/textarea inside has aria-invalid="true".
        "has-[[data-slot][aria-invalid=true]]:border-danger has-[[data-slot][aria-invalid=true]]:ring-1 has-[[data-slot][aria-invalid=true]]:ring-danger",

        // Disabled: when the input/textarea inside is disabled.
        "has-[[data-slot=input-group-control]:disabled]:bg-muted",
        className,
      )}
      {...props}
    />
  );
}

const inputGroupAddonVariants = cva(
  [
    "flex h-auto cursor-text items-center justify-center gap-2 py-1.5 typo-body-m text-fg-tertiary select-none",
    "group-has-[[data-slot=input-group-control]:disabled]/input-group:text-fg-disabled",
    "[&>svg:not([class*='size-'])]:size-5",
  ],
  {
    variants: {
      align: {
        // Left of the input
        "inline-start": "order-first pl-4 has-[>button]:ml-[-0.5rem]",
        // Right of the input
        "inline-end": "order-last pr-4 has-[>button]:mr-[-0.5rem]",
        // Above the input (full width)
        "block-start": "order-first w-full justify-start px-4 pt-3 [.border-b]:pb-3",
        // Below the input (full width)
        "block-end": "order-last w-full justify-start px-4 pb-3 [.border-t]:pt-3",
      },
    },
    defaultVariants: {
      align: "inline-start",
    },
  },
);

/** Extra content next to the input. Clicking it (outside a button) focuses the input. */
function InputGroupAddon({
  className,
  align = "inline-start",
  ...props
}: React.ComponentProps<"div"> & VariantProps<typeof inputGroupAddonVariants>) {
  return (
    // The click handler is only a mouse shortcut to focus the input; keyboard users
    // reach the input directly with Tab, so no keyboard handler is needed.
    // eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-noninteractive-element-interactions
    <div
      role="group"
      data-slot="input-group-addon"
      data-align={align}
      className={cn(inputGroupAddonVariants({ align }), className)}
      onClick={(event) => {
        if ((event.target as HTMLElement).closest("button")) return;
        event.currentTarget.parentElement?.querySelector("input")?.focus();
      }}
      {...props}
    />
  );
}

const inputGroupButtonVariants = cva("flex items-center gap-2", {
  variants: {
    size: {
      xs: "h-7 gap-1 rounded-xs px-2 typo-label-s [&>svg:not([class*='size-'])]:size-3.5",
      sm: "h-8 gap-1.5 rounded-sm px-2.5 typo-label-s [&>svg:not([class*='size-'])]:size-4",
      "icon-xs": "size-7 rounded-xs p-0 [&>svg:not([class*='size-'])]:size-4",
      "icon-sm": "size-8 rounded-sm p-0 [&>svg:not([class*='size-'])]:size-4",
    },
  },
  defaultVariants: {
    size: "xs",
  },
});

/** A small button inside the group (e.g. "Salin", clear, show password). */
function InputGroupButton({
  className,
  type = "button",
  variant = "ghost",
  size = "xs",
  ...props
}: Omit<React.ComponentProps<typeof Button>, "size"> &
  VariantProps<typeof inputGroupButtonVariants>) {
  return (
    <Button
      type={type}
      data-size={size}
      variant={variant}
      // `size={null}` = skip the normal Button sizes; this component sets its own.
      size={null}
      className={cn(inputGroupButtonVariants({ size }), className)}
      {...props}
    />
  );
}

/** Plain text inside an addon, e.g. "Rp" or "@agrowisata.id". */
function InputGroupText({ className, ...props }: React.ComponentProps<"span">) {
  return (
    <span
      className={cn(
        "flex items-center gap-2 typo-body-m text-fg-tertiary [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4",
        className,
      )}
      {...props}
    />
  );
}

/** The input itself. Its own border is removed; the group draws it. */
function InputGroupInput({ className, ...props }: React.ComponentProps<"input">) {
  return (
    <Input
      data-slot="input-group-control"
      className={cn(
        "h-full flex-1 rounded-none border-0 bg-transparent ring-0! hover:border-0 disabled:bg-transparent",
        className,
      )}
      {...props}
    />
  );
}

/** The textarea itself. Its own border is removed; the group draws it. */
function InputGroupTextarea({ className, ...props }: React.ComponentProps<"textarea">) {
  return (
    <Textarea
      data-slot="input-group-control"
      className={cn(
        "flex-1 resize-none rounded-none border-0 bg-transparent py-3 ring-0! disabled:bg-transparent",
        className,
      )}
      {...props}
    />
  );
}

export {
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupInput,
  InputGroupText,
  InputGroupTextarea,
};
