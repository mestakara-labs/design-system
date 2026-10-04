/**
 * Navigation Menu
 * The main links of a website, with optional drop-down panels, e.g. "Destinasi ▾ · Paket · Tentang".
 *
 * Design: open trigger and active link use the light-green pill of the active navigation item.
 * Based on: https://ui.shadcn.com/docs/components/navigation-menu
 *
 * By default every panel opens inside one shared box (the "viewport") that resizes
 * and slides between panels. Pass `viewport={false}` to open each panel under its own trigger.
 */
import { cva } from "class-variance-authority";
import { cn } from "cn";
import { ChevronDownIcon } from "lucide-react";
import { NavigationMenu as NavigationMenuPrimitive } from "radix-ui";
import * as React from "react";

import { panelStyles } from "../../lib/control-styles";

function NavigationMenu({
  className,
  children,
  viewport = true,
  ...props
}: React.ComponentProps<typeof NavigationMenuPrimitive.Root> & {
  /** Open the panels in one shared, animated box (true) or under each trigger (false). */
  viewport?: boolean;
}) {
  return (
    <NavigationMenuPrimitive.Root
      data-slot="navigation-menu"
      data-viewport={viewport}
      className={cn(
        "group/navigation-menu relative flex max-w-max flex-1 items-center justify-center",
        className,
      )}
      {...props}
    >
      {children}
      {viewport && <NavigationMenuViewport />}
    </NavigationMenuPrimitive.Root>
  );
}

function NavigationMenuList({
  className,
  ...props
}: React.ComponentProps<typeof NavigationMenuPrimitive.List>) {
  return (
    <NavigationMenuPrimitive.List
      data-slot="navigation-menu-list"
      className={cn("flex flex-1 list-none items-center justify-center gap-1", className)}
      {...props}
    />
  );
}

function NavigationMenuItem({
  className,
  ...props
}: React.ComponentProps<typeof NavigationMenuPrimitive.Item>) {
  return (
    <NavigationMenuPrimitive.Item
      data-slot="navigation-menu-item"
      className={cn("relative", className)}
      {...props}
    />
  );
}

/**
 * Look of a top-level item. Also use it on a plain top-level link:
 *   <NavigationMenuLink className={navigationMenuTriggerStyle()} href="/paket">Paket</NavigationMenuLink>
 */
const navigationMenuTriggerStyle = cva([
  "group inline-flex h-10 w-max cursor-pointer items-center justify-center rounded-md px-4 typo-label-m text-fg-primary transition-colors",
  "hover:bg-subtle focus-visible:outline-2 focus-visible:outline-focus",
  "disabled:pointer-events-none disabled:text-fg-disabled",
  "data-[state=open]:bg-brand-subtle data-[state=open]:text-fg-brand",
  "data-[active]:bg-brand-subtle data-[active]:text-fg-brand",
]);

function NavigationMenuTrigger({
  className,
  children,
  ...props
}: React.ComponentProps<typeof NavigationMenuPrimitive.Trigger>) {
  return (
    <NavigationMenuPrimitive.Trigger
      data-slot="navigation-menu-trigger"
      className={cn(navigationMenuTriggerStyle(), "group", className)}
      {...props}
    >
      {children}
      <ChevronDownIcon
        aria-hidden="true"
        className="relative top-px ml-1 size-4 transition duration-300 group-data-[state=open]:rotate-180"
      />
    </NavigationMenuPrimitive.Trigger>
  );
}

function NavigationMenuContent({
  className,
  ...props
}: React.ComponentProps<typeof NavigationMenuPrimitive.Content>) {
  return (
    <NavigationMenuPrimitive.Content
      data-slot="navigation-menu-content"
      className={cn(
        "top-0 left-0 w-full p-2 md:absolute md:w-auto",
        // Inside the shared viewport: slide in from the side the pointer came from.
        "data-[motion^=from-]:animate-in data-[motion^=from-]:fade-in data-[motion^=to-]:animate-out data-[motion^=to-]:fade-out",
        "data-[motion=from-end]:slide-in-from-right-52 data-[motion=from-start]:slide-in-from-left-52 data-[motion=to-end]:slide-out-to-right-52 data-[motion=to-start]:slide-out-to-left-52",
        // viewport={false}: each panel is its own floating box under the trigger.
        "group-data-[viewport=false]/navigation-menu:top-full group-data-[viewport=false]/navigation-menu:mt-1.5 group-data-[viewport=false]/navigation-menu:overflow-hidden group-data-[viewport=false]/navigation-menu:rounded-md",
        "group-data-[viewport=false]/navigation-menu:border group-data-[viewport=false]/navigation-menu:border-border group-data-[viewport=false]/navigation-menu:bg-surface group-data-[viewport=false]/navigation-menu:shadow-md",
        "group-data-[viewport=false]/navigation-menu:data-[state=open]:animate-in group-data-[viewport=false]/navigation-menu:data-[state=open]:fade-in-0 group-data-[viewport=false]/navigation-menu:data-[state=open]:zoom-in-95",
        "group-data-[viewport=false]/navigation-menu:data-[state=closed]:animate-out group-data-[viewport=false]/navigation-menu:data-[state=closed]:fade-out-0 group-data-[viewport=false]/navigation-menu:data-[state=closed]:zoom-out-95",
        className,
      )}
      {...props}
    />
  );
}

/** The shared box the panels open in (added automatically by <NavigationMenu>). */
function NavigationMenuViewport({
  className,
  ...props
}: React.ComponentProps<typeof NavigationMenuPrimitive.Viewport>) {
  return (
    <div className="absolute top-full left-0 isolate z-50 flex justify-center">
      <NavigationMenuPrimitive.Viewport
        data-slot="navigation-menu-viewport"
        className={cn(
          panelStyles,
          "relative mt-1.5 h-(--radix-navigation-menu-viewport-height) w-full origin-top overflow-hidden md:w-(--radix-navigation-menu-viewport-width)",
          "data-[state=closed]:animate-out data-[state=closed]:zoom-out-95 data-[state=open]:animate-in data-[state=open]:zoom-in-90",
          className,
        )}
        {...props}
      />
    </div>
  );
}

/** A link inside a panel (or a top-level link). Set `active` on the link of the current page. */
function NavigationMenuLink({
  className,
  ...props
}: React.ComponentProps<typeof NavigationMenuPrimitive.Link>) {
  return (
    <NavigationMenuPrimitive.Link
      data-slot="navigation-menu-link"
      className={cn(
        "flex flex-col gap-1 rounded-sm p-3 typo-body-m text-fg-primary transition-colors",
        "hover:bg-subtle focus-visible:outline-2 focus-visible:outline-focus",
        "data-[active]:bg-brand-subtle data-[active]:text-fg-brand",
        "[&_svg:not([class*='size-'])]:size-4 [&_svg:not([class*='text-'])]:text-fg-tertiary",
        className,
      )}
      {...props}
    />
  );
}

/** Optional small arrow under the open trigger. */
function NavigationMenuIndicator({
  className,
  ...props
}: React.ComponentProps<typeof NavigationMenuPrimitive.Indicator>) {
  return (
    <NavigationMenuPrimitive.Indicator
      data-slot="navigation-menu-indicator"
      className={cn(
        "top-full z-[1] flex h-1.5 items-end justify-center overflow-hidden data-[state=hidden]:animate-out data-[state=hidden]:fade-out data-[state=visible]:animate-in data-[state=visible]:fade-in",
        className,
      )}
      {...props}
    >
      <div className="relative top-[60%] size-2 rotate-45 rounded-tl-xs bg-border shadow-md" />
    </NavigationMenuPrimitive.Indicator>
  );
}

export {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
  NavigationMenuViewport,
};
