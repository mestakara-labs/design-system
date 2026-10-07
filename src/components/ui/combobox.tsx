/**
 * Combobox
 * An input with a filtered list of suggestions: type to search, then pick one (or several) items.
 *
 *   <Combobox items={units}>
 *     <ComboboxInput placeholder="Cari unit…" />
 *     <ComboboxContent>
 *       <ComboboxEmpty>Unit tidak ditemukan.</ComboboxEmpty>
 *       <ComboboxList>{(unit) => <ComboboxItem key={unit} value={unit}>{unit}</ComboboxItem>}</ComboboxList>
 *     </ComboboxContent>
 *   </Combobox>
 *
 * Design: input = DESIGN.md §5 "Text Field"; list = Elevation/2.
 * Based on: https://ui.shadcn.com/docs/components/combobox (uses Base UI: https://base-ui.com)
 */
import { Combobox as ComboboxPrimitive } from "@base-ui/react";
import { cn } from "cn";
import { CheckIcon, ChevronDownIcon, XIcon } from "lucide-react";
import * as React from "react";

import {
  controlStyles,
  panelItemDisabledStyles,
  panelItemStyles,
  panelStyles,
} from "../../lib/control-styles";

import { Button } from "./button";
import { InputGroup, InputGroupAddon, InputGroupButton, InputGroupInput } from "./input-group";

/** Holds the state. Pass `items` (the full list) and optionally `multiple`. */
const Combobox = ComboboxPrimitive.Root;

function ComboboxValue(props: ComboboxPrimitive.Value.Props) {
  return <ComboboxPrimitive.Value data-slot="combobox-value" {...props} />;
}

/** Chevron button that opens the list. */
function ComboboxTrigger({ className, children, ...props }: ComboboxPrimitive.Trigger.Props) {
  return (
    <ComboboxPrimitive.Trigger
      data-slot="combobox-trigger"
      className={cn("[&_svg:not([class*='size-'])]:size-4", className)}
      {...props}
    >
      {children}
      <ChevronDownIcon
        data-slot="combobox-trigger-icon"
        className="pointer-events-none size-4 text-fg-tertiary"
      />
    </ComboboxPrimitive.Trigger>
  );
}

/** "×" button that empties the input. */
function ComboboxClear({ className, ...props }: ComboboxPrimitive.Clear.Props) {
  return (
    <ComboboxPrimitive.Clear
      data-slot="combobox-clear"
      render={<InputGroupButton variant="ghost" size="icon-xs" />}
      className={cn("text-fg-tertiary", className)}
      {...props}
    >
      <XIcon className="pointer-events-none" />
    </ComboboxPrimitive.Clear>
  );
}

/** The search field. `showTrigger` = chevron button, `showClear` = "×" button. */
function ComboboxInput({
  className,
  children,
  disabled = false,
  showTrigger = true,
  showClear = false,
  ...props
}: ComboboxPrimitive.Input.Props & {
  showTrigger?: boolean;
  showClear?: boolean;
}) {
  return (
    <InputGroup className={cn("w-auto", className)}>
      <ComboboxPrimitive.Input render={<InputGroupInput disabled={disabled} />} {...props} />
      <InputGroupAddon align="inline-end">
        {showTrigger && (
          <InputGroupButton
            size="icon-xs"
            variant="ghost"
            asChild
            data-slot="input-group-button"
            className="group-has-data-[slot=combobox-clear]/input-group:hidden data-pressed:bg-transparent"
            disabled={disabled}
          >
            <ComboboxTrigger />
          </InputGroupButton>
        )}
        {showClear && <ComboboxClear disabled={disabled} />}
      </InputGroupAddon>
      {children}
    </InputGroup>
  );
}

/** The floating panel with the suggestions. */
function ComboboxContent({
  className,
  side = "bottom",
  sideOffset = 6,
  align = "start",
  alignOffset = 0,
  anchor,
  ...props
}: ComboboxPrimitive.Popup.Props &
  Pick<
    ComboboxPrimitive.Positioner.Props,
    "side" | "align" | "sideOffset" | "alignOffset" | "anchor"
  >) {
  return (
    <ComboboxPrimitive.Portal>
      <ComboboxPrimitive.Positioner
        side={side}
        sideOffset={sideOffset}
        align={align}
        alignOffset={alignOffset}
        anchor={anchor}
        className="isolate z-50"
      >
        <ComboboxPrimitive.Popup
          data-slot="combobox-content"
          data-chips={!!anchor}
          className={cn(
            panelStyles,
            "group/combobox-content relative max-h-96 w-(--anchor-width) max-w-(--available-width) min-w-[calc(var(--anchor-width)+--spacing(7))] origin-(--transform-origin) overflow-hidden duration-100 data-[chips=true]:min-w-(--anchor-width)",
            // Open / close animation
            "data-closed:animate-out data-closed:fade-out-0 data-closed:zoom-out-95 data-open:animate-in data-open:fade-in-0 data-open:zoom-in-95",
            "data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
            // A search input placed inside the panel (chips mode).
            "*:data-[slot=input-group]:m-1 *:data-[slot=input-group]:mb-0 *:data-[slot=input-group]:h-8",
            className,
          )}
          {...props}
        />
      </ComboboxPrimitive.Positioner>
    </ComboboxPrimitive.Portal>
  );
}

/** Scrollable list of items. Children can be a render function: (item) => <ComboboxItem/>. */
function ComboboxList({ className, ...props }: ComboboxPrimitive.List.Props) {
  return (
    <ComboboxPrimitive.List
      data-slot="combobox-list"
      className={cn(
        "max-h-[min(calc(--spacing(96)---spacing(9)),calc(var(--available-height)---spacing(9)))] scroll-py-1 overflow-y-auto p-1 data-empty:p-0",
        className,
      )}
      {...props}
    />
  );
}

/** One suggestion. The selected one shows a green check. */
function ComboboxItem({ className, children, ...props }: ComboboxPrimitive.Item.Props) {
  return (
    <ComboboxPrimitive.Item
      data-slot="combobox-item"
      className={cn(
        panelItemStyles,
        panelItemDisabledStyles,
        "pr-8 data-highlighted:bg-brand-subtle data-highlighted:text-fg-brand",
        className,
      )}
      {...props}
    >
      {children}
      <ComboboxPrimitive.ItemIndicator
        data-slot="combobox-item-indicator"
        render={
          <span className="pointer-events-none absolute right-2 flex size-4 items-center justify-center" />
        }
      >
        <CheckIcon className="pointer-events-none size-4 text-primary" />
      </ComboboxPrimitive.ItemIndicator>
    </ComboboxPrimitive.Item>
  );
}

function ComboboxGroup({ className, ...props }: ComboboxPrimitive.Group.Props) {
  return <ComboboxPrimitive.Group data-slot="combobox-group" className={className} {...props} />;
}

/** Small title above a group of items. */
function ComboboxLabel({ className, ...props }: ComboboxPrimitive.GroupLabel.Props) {
  return (
    <ComboboxPrimitive.GroupLabel
      data-slot="combobox-label"
      className={cn("px-2 py-1.5 typo-body-s text-fg-tertiary", className)}
      {...props}
    />
  );
}

function ComboboxCollection(props: ComboboxPrimitive.Collection.Props) {
  return <ComboboxPrimitive.Collection data-slot="combobox-collection" {...props} />;
}

/** Shown when nothing matches the search. */
function ComboboxEmpty({ className, ...props }: ComboboxPrimitive.Empty.Props) {
  return (
    <ComboboxPrimitive.Empty
      data-slot="combobox-empty"
      className={cn(
        "hidden w-full justify-center py-3 text-center typo-body-m text-fg-tertiary group-data-empty/combobox-content:flex",
        className,
      )}
      {...props}
    />
  );
}

function ComboboxSeparator({ className, ...props }: ComboboxPrimitive.Separator.Props) {
  return (
    <ComboboxPrimitive.Separator
      data-slot="combobox-separator"
      className={cn("-mx-1 my-1 h-px bg-border", className)}
      {...props}
    />
  );
}

/** Multiple selection: a field that shows every selected item as a removable chip. */
function ComboboxChips({
  className,
  ...props
}: React.ComponentPropsWithRef<typeof ComboboxPrimitive.Chips> & ComboboxPrimitive.Chips.Props) {
  return (
    <ComboboxPrimitive.Chips
      data-slot="combobox-chips"
      className={cn(
        controlStyles.base,
        "flex min-h-9 flex-wrap items-center gap-1.5 px-3 py-1 typo-field",
        "focus-within:border-focus focus-within:ring-1 focus-within:ring-focus",
        "has-aria-invalid:border-danger has-aria-invalid:ring-1 has-aria-invalid:ring-danger",
        "has-data-[slot=combobox-chip]:px-1",
        className,
      )}
      {...props}
    />
  );
}

/** One selected item inside <ComboboxChips>. */
function ComboboxChip({
  className,
  children,
  showRemove = true,
  ...props
}: ComboboxPrimitive.Chip.Props & { showRemove?: boolean }) {
  return (
    <ComboboxPrimitive.Chip
      data-slot="combobox-chip"
      className={cn(
        "flex h-6 w-fit items-center justify-center gap-1 rounded-full bg-brand-subtle px-2 typo-label-s whitespace-nowrap text-fg-brand",
        "has-disabled:pointer-events-none has-disabled:cursor-not-allowed has-disabled:text-fg-disabled",
        "has-data-[slot=combobox-chip-remove]:pr-1",
        className,
      )}
      {...props}
    >
      {children}
      {showRemove && (
        <ComboboxPrimitive.ChipRemove
          render={<Button variant="ghost" size="icon-sm" />}
          className="size-4 rounded-full text-fg-brand hover:bg-tonal-hover [&_svg]:size-3!"
          data-slot="combobox-chip-remove"
        >
          <XIcon className="pointer-events-none" />
        </ComboboxPrimitive.ChipRemove>
      )}
    </ComboboxPrimitive.Chip>
  );
}

/** The text input placed inside <ComboboxChips>. */
function ComboboxChipsInput({ className, ...props }: ComboboxPrimitive.Input.Props) {
  return (
    <ComboboxPrimitive.Input
      data-slot="combobox-chip-input"
      className={cn(
        "min-w-16 flex-1 bg-transparent outline-none placeholder:text-fg-tertiary",
        className,
      )}
      {...props}
    />
  );
}

/** Ref for <ComboboxChips>, so the list can be positioned under the whole chips field. */
function useComboboxAnchor() {
  return React.useRef<HTMLDivElement | null>(null);
}

export {
  Combobox,
  ComboboxChip,
  ComboboxChips,
  ComboboxChipsInput,
  ComboboxCollection,
  ComboboxContent,
  ComboboxEmpty,
  ComboboxGroup,
  ComboboxInput,
  ComboboxItem,
  ComboboxLabel,
  ComboboxList,
  ComboboxSeparator,
  ComboboxTrigger,
  ComboboxValue,
  useComboboxAnchor,
};
