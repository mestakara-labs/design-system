/**
 * Command
 * A searchable list of commands or pages: type to filter, use arrow keys + Enter to pick.
 * <CommandDialog> shows it as a popup, usually opened with Ctrl+K.
 *
 * Design: Elevation/3 dialog, highlighted item = light-green pill.
 * Based on: https://ui.shadcn.com/docs/components/command (uses cmdk: https://cmdk.paco.me)
 */
import { Command as CommandPrimitive } from "cmdk";
import { cn } from "cn";
import { SearchIcon } from "lucide-react";
import * as React from "react";

import { panelItemStyles } from "../../lib/control-styles";

import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "./dialog";

/** The command box (search input + list). Can be placed directly on a page. */
function Command({ className, ...props }: React.ComponentProps<typeof CommandPrimitive>) {
  return (
    <CommandPrimitive
      data-slot="command"
      className={cn(
        "flex h-full w-full flex-col overflow-hidden rounded-md bg-surface text-fg-primary",
        className,
      )}
      {...props}
    />
  );
}

type CommandDialogProps = React.ComponentProps<typeof Dialog> & {
  /** Title and description for screen readers (not visible). */
  title?: string;
  description?: string;
  className?: string;
  showCloseButton?: boolean;
};

/** The command box inside a dialog. Control it with `open` / `onOpenChange`. */
function CommandDialog({
  title = "Pencarian",
  description = "Ketik untuk mencari halaman atau perintah.",
  children,
  className,
  showCloseButton = false,
  ...props
}: CommandDialogProps) {
  return (
    <Dialog {...props}>
      <DialogHeader className="sr-only">
        <DialogTitle>{title}</DialogTitle>
        <DialogDescription>{description}</DialogDescription>
      </DialogHeader>
      <DialogContent
        className={cn("top-[20%] translate-y-0 gap-0 overflow-hidden p-0 sm:max-w-xl", className)}
        showCloseButton={showCloseButton}
      >
        <Command className="**:data-[slot=command-input-wrapper]:h-14">{children}</Command>
      </DialogContent>
    </Dialog>
  );
}

/** The search field at the top. */
function CommandInput({
  className,
  ...props
}: React.ComponentProps<typeof CommandPrimitive.Input>) {
  return (
    <div
      data-slot="command-input-wrapper"
      className="flex h-12 items-center gap-3 border-b border-border px-4"
    >
      <SearchIcon className="size-5 shrink-0 text-fg-tertiary" />
      <CommandPrimitive.Input
        data-slot="command-input"
        className={cn(
          "flex h-full w-full bg-transparent typo-body-l text-fg-primary outline-none placeholder:text-fg-tertiary disabled:cursor-not-allowed",
          className,
        )}
        {...props}
      />
    </div>
  );
}

function CommandList({ className, ...props }: React.ComponentProps<typeof CommandPrimitive.List>) {
  return (
    <CommandPrimitive.List
      data-slot="command-list"
      className={cn("max-h-[320px] scroll-py-2 overflow-x-hidden overflow-y-auto p-2", className)}
      {...props}
    />
  );
}

/** Shown when nothing matches. */
function CommandEmpty({
  className,
  ...props
}: React.ComponentProps<typeof CommandPrimitive.Empty>) {
  return (
    <CommandPrimitive.Empty
      data-slot="command-empty"
      className={cn("py-8 text-center typo-body-m text-fg-tertiary", className)}
      {...props}
    />
  );
}

/** A titled group of items (`heading="Komponen"`). */
function CommandGroup({
  className,
  ...props
}: React.ComponentProps<typeof CommandPrimitive.Group>) {
  return (
    <CommandPrimitive.Group
      data-slot="command-group"
      className={cn(
        "overflow-hidden text-fg-primary",
        "[&_[cmdk-group-heading]]:px-3 [&_[cmdk-group-heading]]:pt-3 [&_[cmdk-group-heading]]:pb-1 [&_[cmdk-group-heading]]:typo-overline [&_[cmdk-group-heading]]:text-fg-tertiary",
        className,
      )}
      {...props}
    />
  );
}

function CommandSeparator({
  className,
  ...props
}: React.ComponentProps<typeof CommandPrimitive.Separator>) {
  return (
    <CommandPrimitive.Separator
      data-slot="command-separator"
      className={cn("-mx-2 my-2 h-px bg-border", className)}
      {...props}
    />
  );
}

/** One result. Runs `onSelect` on click or Enter. */
function CommandItem({ className, ...props }: React.ComponentProps<typeof CommandPrimitive.Item>) {
  return (
    <CommandPrimitive.Item
      data-slot="command-item"
      className={cn(
        panelItemStyles,
        "cursor-pointer py-2.5",
        "data-[selected=true]:bg-brand-subtle data-[selected=true]:text-fg-brand data-[selected=true]:[&_svg:not([class*='text-'])]:text-fg-brand",
        "data-[disabled=true]:pointer-events-none data-[disabled=true]:text-fg-disabled",
        className,
      )}
      {...props}
    />
  );
}

/** Keyboard shortcut on the right of an item. */
function CommandShortcut({ className, ...props }: React.ComponentProps<"span">) {
  return (
    <span
      data-slot="command-shortcut"
      className={cn("ml-auto typo-body-s tracking-widest text-fg-tertiary", className)}
      {...props}
    />
  );
}

export {
  Command,
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
  type CommandDialogProps,
};
