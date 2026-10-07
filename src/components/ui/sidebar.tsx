/**
 * Sidebar
 * The side menu of a dashboard: logo, menu groups, user account, and a button to fold it away.
 *
 * Design: DESIGN.md §6 "Dashboard operasional" — 256px wide, dark forest background,
 * the active item uses `bg/brand`. Colors come from the `--sidebar-*` tokens in semantic.css.
 * Based on: https://ui.shadcn.com/docs/components/sidebar
 *
 * Page structure:
 *   <SidebarProvider>            ← keeps the open/closed state
 *     <Sidebar>                  ← the menu (becomes a Sheet on phones)
 *       <SidebarHeader /> <SidebarContent> <SidebarGroup /> … </SidebarContent> <SidebarFooter />
 *     </Sidebar>
 *     <SidebarInset>             ← the page content next to the menu
 *       <SidebarTrigger />       ← the button that opens/closes the menu
 *     </SidebarInset>
 *   </SidebarProvider>
 *
 * Ctrl+B (⌘B on Mac) also opens/closes the menu. The choice is saved in a cookie
 * named "sidebar_state" so a server (e.g. Next.js) can render it the same way next time.
 */
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "cn";
import { PanelLeftIcon } from "lucide-react";
import { Slot } from "radix-ui";
import * as React from "react";

import { useIsMobile } from "../../hooks/use-mobile";

import { Button } from "./button";
import { Input } from "./input";
import { Separator } from "./separator";
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle } from "./sheet";
import { Skeleton } from "./skeleton";
import { Tooltip, TooltipContent, TooltipTrigger } from "./tooltip";

const SIDEBAR_COOKIE_NAME = "sidebar_state";
const SIDEBAR_COOKIE_MAX_AGE = 60 * 60 * 24 * 7; // 7 days
const SIDEBAR_WIDTH = "16rem"; // 256px — DESIGN.md, same as shadcn/ui
const SIDEBAR_WIDTH_MOBILE = "18rem";
const SIDEBAR_WIDTH_ICON = "3rem"; // folded to icons only
const SIDEBAR_KEYBOARD_SHORTCUT = "b";

/* -------------------------------------------------------------------------- */
/* State                                                                      */
/* -------------------------------------------------------------------------- */

type SidebarContextValue = {
  /** "expanded" or "collapsed" (desktop). */
  state: "expanded" | "collapsed";
  open: boolean;
  setOpen: (open: boolean) => void;
  /** Phones show the menu in a Sheet, which has its own open state. */
  openMobile: boolean;
  setOpenMobile: (open: boolean) => void;
  isMobile: boolean;
  toggleSidebar: () => void;
};

const SidebarContext = React.createContext<SidebarContextValue | null>(null);

/** Read or change the sidebar state from any component inside <SidebarProvider>. */
function useSidebar() {
  const context = React.useContext(SidebarContext);
  if (!context) throw new Error("useSidebar must be used inside <SidebarProvider>.");
  return context;
}

type SidebarProviderProps = React.ComponentProps<"div"> & {
  /** Open at first (uncontrolled). */
  defaultOpen?: boolean;
  /** Open state (controlled). */
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
};

function SidebarProvider({
  defaultOpen = true,
  open: openProp,
  onOpenChange,
  className,
  style,
  children,
  ...props
}: SidebarProviderProps) {
  const isMobile = useIsMobile();
  const [openMobile, setOpenMobile] = React.useState(false);
  const [internalOpen, setInternalOpen] = React.useState(defaultOpen);
  const open = openProp ?? internalOpen;

  function setOpen(value: boolean) {
    if (onOpenChange) onOpenChange(value);
    else setInternalOpen(value);
    document.cookie = `${SIDEBAR_COOKIE_NAME}=${value}; path=/; max-age=${SIDEBAR_COOKIE_MAX_AGE}`;
  }

  function toggleSidebar() {
    if (isMobile) setOpenMobile(!openMobile);
    else setOpen(!open);
  }

  // Ctrl+B / ⌘B
  const onKeyDown = React.useEffectEvent((event: KeyboardEvent) => {
    if (event.key === SIDEBAR_KEYBOARD_SHORTCUT && (event.metaKey || event.ctrlKey)) {
      event.preventDefault();
      toggleSidebar();
    }
  });
  React.useEffect(() => {
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  const value: SidebarContextValue = {
    state: open ? "expanded" : "collapsed",
    open,
    setOpen,
    openMobile,
    setOpenMobile,
    isMobile,
    toggleSidebar,
  };

  return (
    <SidebarContext.Provider value={value}>
      <div
        data-slot="sidebar-wrapper"
        style={
          {
            "--sidebar-width": SIDEBAR_WIDTH,
            "--sidebar-width-icon": SIDEBAR_WIDTH_ICON,
            ...style,
          } as React.CSSProperties
        }
        className={cn(
          "group/sidebar-wrapper flex min-h-svh w-full has-data-[variant=inset]:bg-sidebar",
          className,
        )}
        {...props}
      >
        {children}
      </div>
    </SidebarContext.Provider>
  );
}

/* -------------------------------------------------------------------------- */
/* Frame                                                                      */
/* -------------------------------------------------------------------------- */

type SidebarProps = React.ComponentProps<"div"> & {
  side?: "left" | "right";
  /**
   * - "sidebar":  attached to the edge of the screen
   * - "floating": a rounded box with a small gap around it
   * - "inset":    the page content becomes a rounded card next to the menu
   */
  variant?: "sidebar" | "floating" | "inset";
  /**
   * What happens when it closes:
   * - "offcanvas": slides out of the screen
   * - "icon":      folds to a narrow bar with icons only (labels show as tooltips)
   * - "none":      always open
   */
  collapsible?: "offcanvas" | "icon" | "none";
  /** Screen-reader title of the menu on phones. */
  mobileTitle?: string;
};

function Sidebar({
  side = "left",
  variant = "sidebar",
  collapsible = "offcanvas",
  mobileTitle = "Menu",
  className,
  children,
  ...props
}: SidebarProps) {
  const { isMobile, state, openMobile, setOpenMobile } = useSidebar();

  // Always open: a plain column.
  if (collapsible === "none") {
    return (
      <div
        data-slot="sidebar"
        className={cn(
          "flex h-full w-(--sidebar-width) flex-col bg-sidebar text-sidebar-fg",
          className,
        )}
        {...props}
      >
        {children}
      </div>
    );
  }

  // Phones: the menu slides in as a Sheet.
  if (isMobile) {
    return (
      <Sheet open={openMobile} onOpenChange={setOpenMobile}>
        <SheetContent
          data-slot="sidebar"
          data-mobile="true"
          side={side}
          showCloseButton={false}
          className="w-(--sidebar-width) gap-0 border-sidebar-border bg-sidebar p-0 text-sidebar-fg"
          style={{ "--sidebar-width": SIDEBAR_WIDTH_MOBILE } as React.CSSProperties}
        >
          <SheetHeader className="sr-only">
            <SheetTitle>{mobileTitle}</SheetTitle>
            <SheetDescription>{mobileTitle}</SheetDescription>
          </SheetHeader>
          <div className="flex h-full w-full flex-col">{children}</div>
        </SheetContent>
      </Sheet>
    );
  }

  const boxed = variant === "floating" || variant === "inset";

  // Desktop
  return (
    <div
      data-slot="sidebar"
      data-state={state}
      data-collapsible={state === "collapsed" ? collapsible : ""}
      data-variant={variant}
      data-side={side}
      className="group peer hidden text-sidebar-fg md:block"
    >
      {/* Takes up the sidebar's width in the page, so the content sits next to it. */}
      <div
        data-slot="sidebar-gap"
        className={cn(
          "relative w-(--sidebar-width) bg-transparent transition-[width] duration-200 ease-linear",
          "group-data-[collapsible=offcanvas]:w-0 group-data-[side=right]:rotate-180",
          boxed
            ? "group-data-[collapsible=icon]:w-[calc(var(--sidebar-width-icon)+--spacing(4))]"
            : "group-data-[collapsible=icon]:w-(--sidebar-width-icon)",
        )}
      />
      {/* The visible menu, fixed to the side of the screen. */}
      <div
        data-slot="sidebar-container"
        className={cn(
          "fixed inset-y-0 z-10 hidden w-(--sidebar-width) transition-[left,right,width] duration-200 ease-linear md:flex",
          side === "left"
            ? "left-0 group-data-[collapsible=offcanvas]:left-[calc(var(--sidebar-width)*-1)]"
            : "right-0 group-data-[collapsible=offcanvas]:right-[calc(var(--sidebar-width)*-1)]",
          boxed
            ? "p-2 group-data-[collapsible=icon]:w-[calc(var(--sidebar-width-icon)+--spacing(4)+2px)]"
            : "border-sidebar-border group-data-[collapsible=icon]:w-(--sidebar-width-icon) group-data-[side=left]:border-r group-data-[side=right]:border-l",
          className,
        )}
        {...props}
      >
        <div
          data-slot="sidebar-inner"
          className="flex size-full flex-col bg-sidebar group-data-[variant=floating]:rounded-lg group-data-[variant=floating]:shadow-md"
        >
          {children}
        </div>
      </div>
    </div>
  );
}

/** The button that opens/closes the menu. Put it in the page header. */
function SidebarTrigger({
  className,
  onClick,
  label = "Buka/tutup menu",
  ...props
}: React.ComponentProps<typeof Button> & {
  /** Screen-reader text. */
  label?: string;
}) {
  const { toggleSidebar } = useSidebar();

  return (
    <Button
      data-slot="sidebar-trigger"
      variant="ghost"
      size="icon-sm"
      className={cn("text-fg-secondary", className)}
      onClick={(event) => {
        onClick?.(event);
        toggleSidebar();
      }}
      {...props}
    >
      <PanelLeftIcon />
      <span className="sr-only">{label}</span>
    </Button>
  );
}

/** A thin strip on the edge of the menu: click it (or drag-cursor hint) to open/close. */
function SidebarRail({
  className,
  label = "Buka/tutup menu",
  ...props
}: React.ComponentProps<"button"> & { label?: string }) {
  const { toggleSidebar } = useSidebar();

  return (
    <button
      data-slot="sidebar-rail"
      aria-label={label}
      tabIndex={-1}
      onClick={toggleSidebar}
      title={label}
      className={cn(
        "absolute inset-y-0 z-20 hidden w-4 -translate-x-1/2 transition-all ease-linear sm:flex",
        "after:absolute after:inset-y-0 after:left-1/2 after:w-0.5 hover:after:bg-border-strong",
        "group-data-[side=left]:-right-4 group-data-[side=right]:left-0",
        "in-data-[side=left]:cursor-w-resize in-data-[side=right]:cursor-e-resize",
        "[[data-side=left][data-state=collapsed]_&]:cursor-e-resize [[data-side=right][data-state=collapsed]_&]:cursor-w-resize",
        "group-data-[collapsible=offcanvas]:translate-x-0 group-data-[collapsible=offcanvas]:after:left-full",
        "[[data-side=left][data-collapsible=offcanvas]_&]:-right-2 [[data-side=right][data-collapsible=offcanvas]_&]:-left-2",
        className,
      )}
      {...props}
    />
  );
}

/** The page content next to the menu. */
function SidebarInset({ className, ...props }: React.ComponentProps<"main">) {
  return (
    <main
      data-slot="sidebar-inset"
      className={cn(
        "relative flex w-full flex-1 flex-col bg-canvas",
        // variant="inset": the content is a rounded card
        "md:peer-data-[variant=inset]:m-2 md:peer-data-[variant=inset]:ml-0 md:peer-data-[variant=inset]:rounded-lg md:peer-data-[variant=inset]:shadow-sm md:peer-data-[variant=inset]:peer-data-[state=collapsed]:ml-2",
        className,
      )}
      {...props}
    />
  );
}

/* -------------------------------------------------------------------------- */
/* Sections                                                                   */
/* -------------------------------------------------------------------------- */

/** Search field at the top of the menu. */
function SidebarInput({ className, ...props }: React.ComponentProps<typeof Input>) {
  return <Input data-slot="sidebar-input" className={cn("h-8", className)} {...props} />;
}

/** Top of the menu: logo, app or unit switcher. */
function SidebarHeader({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="sidebar-header"
      className={cn("flex flex-col gap-2 p-2", className)}
      {...props}
    />
  );
}

/** Bottom of the menu: user account. */
function SidebarFooter({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="sidebar-footer"
      className={cn("flex flex-col gap-2 p-2", className)}
      {...props}
    />
  );
}

function SidebarSeparator({ className, ...props }: React.ComponentProps<typeof Separator>) {
  return (
    <Separator
      data-slot="sidebar-separator"
      // `data-[orientation=horizontal]:` is needed to replace the full width set by <Separator>.
      className={cn("mx-3 bg-sidebar-border data-[orientation=horizontal]:w-auto", className)}
      {...props}
    />
  );
}

/** The scrolling middle part with the menu groups. */
function SidebarContent({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="sidebar-content"
      className={cn(
        "flex min-h-0 flex-1 flex-col gap-1 overflow-auto group-data-[collapsible=icon]:overflow-hidden",
        className,
      )}
      {...props}
    />
  );
}

/** A group of menu items, usually with a <SidebarGroupLabel>. */
function SidebarGroup({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="sidebar-group"
      className={cn("relative flex w-full min-w-0 flex-col p-2", className)}
      {...props}
    />
  );
}

function SidebarGroupLabel({
  className,
  asChild = false,
  ...props
}: React.ComponentProps<"div"> & { asChild?: boolean }) {
  const Component = asChild ? Slot.Root : "div";

  return (
    <Component
      data-slot="sidebar-group-label"
      className={cn(
        "flex h-8 shrink-0 items-center rounded-sm px-2 typo-label-s text-sidebar-fg-muted",
        "transition-[margin,opacity] duration-200 ease-linear focus-visible:outline-2 focus-visible:outline-sidebar-fg",
        "group-data-[collapsible=icon]:-mt-8 group-data-[collapsible=icon]:opacity-0",
        "[&>svg]:size-4 [&>svg]:shrink-0",
        className,
      )}
      {...props}
    />
  );
}

/** Small icon button on the right of a group label, e.g. "+" to add a project. */
function SidebarGroupAction({
  className,
  asChild = false,
  ...props
}: React.ComponentProps<"button"> & { asChild?: boolean }) {
  const Component = asChild ? Slot.Root : "button";

  return (
    <Component
      data-slot="sidebar-group-action"
      className={cn(
        "absolute top-3.5 right-3 flex size-5 cursor-pointer items-center justify-center rounded-sm text-sidebar-fg-muted",
        "transition-colors hover:bg-sidebar-hover hover:text-sidebar-fg focus-visible:outline-2 focus-visible:outline-sidebar-fg",
        "[&>svg]:size-4 [&>svg]:shrink-0",
        // Bigger touch area on phones.
        "after:absolute after:-inset-2 md:after:hidden",
        "group-data-[collapsible=icon]:hidden",
        className,
      )}
      {...props}
    />
  );
}

function SidebarGroupContent({ className, ...props }: React.ComponentProps<"div">) {
  return <div data-slot="sidebar-group-content" className={cn("w-full", className)} {...props} />;
}

/* -------------------------------------------------------------------------- */
/* Menu                                                                       */
/* -------------------------------------------------------------------------- */

function SidebarMenu({ className, ...props }: React.ComponentProps<"ul">) {
  return (
    <ul
      data-slot="sidebar-menu"
      className={cn("flex w-full min-w-0 flex-col gap-1", className)}
      {...props}
    />
  );
}

function SidebarMenuItem({ className, ...props }: React.ComponentProps<"li">) {
  return (
    <li
      data-slot="sidebar-menu-item"
      className={cn("group/menu-item relative", className)}
      {...props}
    />
  );
}

const sidebarMenuButtonVariants = cva(
  [
    "peer/menu-button flex w-full cursor-pointer items-center gap-2 overflow-hidden rounded-md p-2 text-left whitespace-nowrap text-sidebar-fg",
    "transition-[width,height,padding,background-color] hover:bg-sidebar-hover focus-visible:outline-2 focus-visible:outline-sidebar-fg",
    "disabled:pointer-events-none disabled:text-sidebar-fg-muted aria-disabled:pointer-events-none aria-disabled:text-sidebar-fg-muted",
    // The page the user is on.
    "data-[active=true]:bg-sidebar-active data-[active=true]:font-semibold data-[active=true]:text-sidebar-active-fg",
    // Room for a <SidebarMenuAction> on the right.
    "group-has-data-[slot=sidebar-menu-action]/menu-item:pr-8",
    // Folded to icons only.
    "group-data-[collapsible=icon]:size-8! group-data-[collapsible=icon]:p-2!",
    "[&>span:last-child]:truncate [&>svg]:size-4 [&>svg]:shrink-0",
  ],
  {
    variants: {
      variant: {
        default: "",
        outline: "border border-sidebar-border",
      },
      size: {
        sm: "h-7 typo-body-s",
        md: "h-8 typo-body-m",
        // For a header/footer row with an avatar and two lines of text.
        lg: "h-12 typo-body-m group-data-[collapsible=icon]:p-0!",
      },
    },
    defaultVariants: { variant: "default", size: "md" },
  },
);

type SidebarMenuButtonProps = React.ComponentProps<"button"> &
  VariantProps<typeof sidebarMenuButtonVariants> & {
    /** Render your router's link instead: <SidebarMenuButton asChild><Link to="/" /></SidebarMenuButton>. */
    asChild?: boolean;
    /** Marks the page the user is on. */
    isActive?: boolean;
    /**
     * Label shown on hover when the menu is folded to icons.
     * Pass an object to set TooltipContent props, e.g. `{ children: "Inbox", hidden: false }`
     * to always show it.
     */
    tooltip?: string | React.ComponentProps<typeof TooltipContent>;
  };

function SidebarMenuButton({
  asChild = false,
  isActive = false,
  variant,
  size,
  tooltip,
  className,
  ...props
}: SidebarMenuButtonProps) {
  const Component = asChild ? Slot.Root : "button";
  const { isMobile, state } = useSidebar();

  const button = (
    <Component
      data-slot="sidebar-menu-button"
      data-size={size ?? "md"}
      data-active={isActive}
      aria-current={isActive ? "page" : undefined}
      className={cn(sidebarMenuButtonVariants({ variant, size }), className)}
      {...props}
    />
  );

  if (!tooltip) return button;
  const tooltipProps = typeof tooltip === "string" ? { children: tooltip } : tooltip;

  return (
    <Tooltip>
      <TooltipTrigger asChild>{button}</TooltipTrigger>
      {/* By default only shown when the labels are hidden. */}
      <TooltipContent
        side="right"
        align="center"
        hidden={state !== "collapsed" || isMobile}
        {...tooltipProps}
      />
    </Tooltip>
  );
}

/** Small icon button on the right of a menu item, e.g. "⋯" for more options. */
function SidebarMenuAction({
  className,
  asChild = false,
  showOnHover = false,
  ...props
}: React.ComponentProps<"button"> & {
  asChild?: boolean;
  /** Only show it when the item is hovered or focused (desktop). */
  showOnHover?: boolean;
}) {
  const Component = asChild ? Slot.Root : "button";

  return (
    <Component
      data-slot="sidebar-menu-action"
      className={cn(
        "absolute top-1.5 right-1 flex size-5 cursor-pointer items-center justify-center rounded-sm text-sidebar-fg-muted",
        "transition-colors hover:bg-sidebar-hover hover:text-sidebar-fg focus-visible:outline-2 focus-visible:outline-sidebar-fg",
        "peer-data-[active=true]/menu-button:text-sidebar-active-fg peer-data-[active=true]/menu-button:hover:bg-sidebar-hover",
        "peer-data-[size=lg]/menu-button:top-2.5 peer-data-[size=sm]/menu-button:top-1",
        "[&>svg]:size-4 [&>svg]:shrink-0",
        "after:absolute after:-inset-2 md:after:hidden",
        "group-data-[collapsible=icon]:hidden",
        showOnHover &&
          "group-focus-within/menu-item:opacity-100 group-hover/menu-item:opacity-100 data-[state=open]:opacity-100 md:opacity-0",
        className,
      )}
      {...props}
    />
  );
}

/** A number on the right of a menu item, e.g. new orders. */
function SidebarMenuBadge({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="sidebar-menu-badge"
      className={cn(
        "pointer-events-none absolute top-1.5 right-1 flex h-5 min-w-5 items-center justify-center rounded-full bg-sidebar-hover px-1 typo-label-s text-sidebar-fg tabular-nums select-none",
        "peer-data-[active=true]/menu-button:bg-sidebar-hover peer-data-[active=true]/menu-button:text-sidebar-active-fg",
        "peer-data-[size=lg]/menu-button:top-3.5 peer-data-[size=sm]/menu-button:top-1",
        "group-data-[collapsible=icon]:hidden",
        className,
      )}
      {...props}
    />
  );
}

/** Grey placeholder row while the menu is loading. */
function SidebarMenuSkeleton({
  className,
  showIcon = false,
  ...props
}: React.ComponentProps<"div"> & { showIcon?: boolean }) {
  // A random width (50–90%) so a list of skeletons looks like real text. Picked once.
  const [width] = React.useState(() => `${Math.floor(Math.random() * 40) + 50}%`);

  return (
    <div
      data-slot="sidebar-menu-skeleton"
      className={cn("flex h-8 items-center gap-2 rounded-md px-2", className)}
      {...props}
    >
      {showIcon && <Skeleton className="size-4 rounded-sm bg-sidebar-hover" />}
      <Skeleton
        className="h-4 max-w-(--skeleton-width) flex-1 bg-sidebar-hover"
        style={{ "--skeleton-width": width } as React.CSSProperties}
      />
    </div>
  );
}

/** Indented list of sub-items under a menu item. */
function SidebarMenuSub({ className, ...props }: React.ComponentProps<"ul">) {
  return (
    <ul
      data-slot="sidebar-menu-sub"
      className={cn(
        "mx-3.5 flex min-w-0 translate-x-px flex-col gap-1 border-l border-sidebar-border px-2.5 py-0.5",
        "group-data-[collapsible=icon]:hidden",
        className,
      )}
      {...props}
    />
  );
}

function SidebarMenuSubItem({ className, ...props }: React.ComponentProps<"li">) {
  return (
    <li
      data-slot="sidebar-menu-sub-item"
      className={cn("group/menu-sub-item relative", className)}
      {...props}
    />
  );
}

function SidebarMenuSubButton({
  asChild = false,
  size = "md",
  isActive = false,
  className,
  ...props
}: React.ComponentProps<"a"> & {
  asChild?: boolean;
  size?: "sm" | "md";
  isActive?: boolean;
}) {
  const Component = asChild ? Slot.Root : "a";

  return (
    <Component
      data-slot="sidebar-menu-sub-button"
      data-size={size}
      data-active={isActive}
      aria-current={isActive ? "page" : undefined}
      className={cn(
        "flex h-7 min-w-0 -translate-x-px cursor-pointer items-center gap-2 overflow-hidden rounded-sm px-2 whitespace-nowrap text-sidebar-fg",
        "transition-colors hover:bg-sidebar-hover focus-visible:outline-2 focus-visible:outline-sidebar-fg",
        "aria-disabled:pointer-events-none aria-disabled:text-sidebar-fg-muted",
        "data-[active=true]:bg-sidebar-active data-[active=true]:text-sidebar-active-fg",
        "data-[size=md]:typo-body-m data-[size=sm]:typo-body-s",
        "[&>span:last-child]:truncate [&>svg]:size-4 [&>svg]:shrink-0",
        "group-data-[collapsible=icon]:hidden",
        className,
      )}
      {...props}
    />
  );
}

export {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupAction,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarInput,
  SidebarInset,
  SidebarMenu,
  SidebarMenuAction,
  SidebarMenuBadge,
  SidebarMenuButton,
  sidebarMenuButtonVariants,
  SidebarMenuItem,
  SidebarMenuSkeleton,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
  SidebarProvider,
  SidebarRail,
  SidebarSeparator,
  SidebarTrigger,
  useSidebar,
};
