/**
 * Shared look of every text-like form control:
 * Input, Textarea, Select, Native Select, Input Group, Combobox.
 *
 * Design: DESIGN.md §5 "Text Field" — sizes follow shadcn/ui
 *   - height 36 (small: 32), radius 12, padding 12, 1px border `border/default`
 *   - text: `typo-field` (Body/M, 16px on phones so iOS Safari does not zoom in)
 *   - focus: 2px border `border/focus`   (1px border + 1px ring = 2px, without layout shift)
 *   - error: 2px border `status/danger`  (set `aria-invalid="true"` on the control)
 *
 * Change a value here and every control above follows.
 */
export const controlStyles = {
  /**
   * Border, background, text color and placeholder.
   * The text SIZE is not here: each control adds `typo-field` (or `typo-body-m` for a Select,
   * which is a button, not a text field), because cn() cannot tell that two `typo-*` classes conflict.
   */
  base: "w-full min-w-0 rounded-md border border-border bg-surface text-fg-primary outline-none transition-[border-color,box-shadow] placeholder:text-fg-tertiary hover:border-border-strong",
  /** Keyboard / click focus. */
  focus: "focus-visible:border-focus focus-visible:ring-1 focus-visible:ring-focus",
  /** Error state, driven by the `aria-invalid` attribute. */
  invalid: "aria-invalid:border-danger aria-invalid:ring-1 aria-invalid:ring-danger",
  /** Disabled state. */
  disabled:
    "disabled:cursor-not-allowed disabled:border-border disabled:bg-muted disabled:text-fg-disabled",
};

/**
 * Shared look of floating panels: Popover, Select menu, Combobox list, Dropdown Menu …
 * DESIGN.md §4: dropdowns use Elevation/2 (`shadow-md`).
 */
export const panelStyles =
  "rounded-md border border-border bg-surface text-fg-primary shadow-md outline-none";

/**
 * Shared look of one option inside a panel (Select item, Combobox item, Menu item …).
 * The highlighted option uses the same light-green pill as the active navigation item.
 */
export const panelItemStyles =
  "relative flex w-full cursor-default items-center gap-2 rounded-sm px-2 py-1.5 typo-body-m outline-none select-none [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4 [&_svg:not([class*='text-'])]:text-fg-tertiary";

/**
 * Disabled look of a panel option, for Radix / Base UI items (they add `data-disabled` when disabled).
 * Kept separate because cmdk (Command) always sets `data-disabled="false"`, which would also match.
 */
export const panelItemDisabledStyles =
  "data-[disabled]:pointer-events-none data-[disabled]:text-fg-disabled";

/**
 * Open/close animation of floating panels positioned by Radix (Popover, Select, menus, Hover Card).
 * Fades and zooms in, and slides in from the side of the trigger.
 */
export const panelAnimation =
  "data-[state=open]:animate-in data-[state=open]:fade-in-0 data-[state=open]:zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2";

/**
 * Shared look of Dropdown Menu, Context Menu and Menubar (they have the same parts).
 */
export const menuStyles = {
  /** The menu panel. */
  content: "z-50 min-w-[10rem] overflow-x-hidden overflow-y-auto p-1",
  /** One clickable item. `inset` items line up with checkbox/radio items. */
  item: "focus:bg-brand-subtle focus:text-fg-brand data-[inset]:pl-8",
  /** Red "dangerous" item, e.g. "Batalkan pesanan". */
  destructive:
    "data-[variant=destructive]:text-fg-danger data-[variant=destructive]:focus:bg-danger-subtle data-[variant=destructive]:focus:text-fg-danger data-[variant=destructive]:*:[svg]:text-danger!",
  /** Checkbox/radio item: leaves room on the left for the check mark or dot. */
  choiceItem: "pl-8 focus:bg-brand-subtle focus:text-fg-brand",
  /** Where the check mark or dot of a choice item sits. */
  indicator: "pointer-events-none absolute left-2 flex size-4 items-center justify-center",
  /** Item that opens a sub-menu. */
  subTrigger:
    "focus:bg-brand-subtle focus:text-fg-brand data-[inset]:pl-8 data-[state=open]:bg-brand-subtle data-[state=open]:text-fg-brand",
  /** Small title above a group of items. */
  label: "px-2 py-1.5 typo-label-m text-fg-primary data-[inset]:pl-8",
  separator: "-mx-1 my-1 h-px bg-border",
  /** Keyboard shortcut text on the right of an item. */
  shortcut: "ml-auto typo-body-s tracking-widest text-fg-tertiary",
};

/**
 * Dimmed background behind modal overlays (Dialog, Alert Dialog, Sheet, Drawer).
 * Tinted with the brand's darkest green instead of pure black.
 */
export const overlayBackdropStyles =
  "fixed inset-0 z-50 bg-inverse/50 data-[state=open]:animate-in data-[state=open]:fade-in-0 data-[state=closed]:animate-out data-[state=closed]:fade-out-0";

/** The "×" close button in the top-right corner of Dialog and Sheet. */
export const overlayCloseButtonStyles =
  "absolute top-4 right-4 inline-flex size-8 cursor-pointer items-center justify-center rounded-sm text-fg-tertiary transition-colors hover:bg-subtle hover:text-fg-primary focus-visible:outline-2 focus-visible:outline-focus disabled:pointer-events-none [&_svg]:size-4";
