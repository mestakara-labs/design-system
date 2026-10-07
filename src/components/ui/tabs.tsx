/**
 * Tabs
 * Switches between views that share one place on the screen, e.g. "Deskripsi · Fasilitas · Ulasan".
 *
 * Two looks (`variant` on <TabsList>):
 *   - "default": a grey track, the active tab is a white pill (segmented control)
 *   - "line":    tabs on a line, the active tab is underlined in green
 *
 * Based on: https://ui.shadcn.com/docs/components/tabs
 */
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "cn";
import { Tabs as TabsPrimitive } from "radix-ui";
import * as React from "react";

function Tabs({ className, ...props }: React.ComponentProps<typeof TabsPrimitive.Root>) {
  return (
    <TabsPrimitive.Root
      data-slot="tabs"
      className={cn("flex flex-col gap-3 data-[orientation=vertical]:flex-row", className)}
      {...props}
    />
  );
}

const tabsListVariants = cva(
  "group/tabs-list inline-flex w-fit items-center text-fg-secondary data-[orientation=vertical]:flex-col data-[orientation=vertical]:items-stretch",
  {
    variants: {
      variant: {
        default: "gap-1 rounded-md bg-muted p-[3px]",
        // The grey base line is an inset shadow (not a border), so the green line of the
        // active tab can sit on top of it without sticking out. That keeps the list scrollable
        // sideways (`overflow-x-auto`) without an unwanted vertical scroll.
        line: "gap-4 data-[orientation=horizontal]:shadow-[inset_0_-1px_0_var(--border-default)] data-[orientation=vertical]:shadow-[inset_1px_0_0_var(--border-default)]",
      },
    },
    defaultVariants: { variant: "default" },
  },
);

function TabsList({
  className,
  variant = "default",
  ...props
}: React.ComponentProps<typeof TabsPrimitive.List> & VariantProps<typeof tabsListVariants>) {
  return (
    <TabsPrimitive.List
      data-slot="tabs-list"
      data-variant={variant}
      className={cn(tabsListVariants({ variant }), className)}
      {...props}
    />
  );
}

function TabsTrigger({ className, ...props }: React.ComponentProps<typeof TabsPrimitive.Trigger>) {
  return (
    <TabsPrimitive.Trigger
      data-slot="tabs-trigger"
      className={cn(
        // Shared
        "inline-flex cursor-pointer items-center justify-center gap-2 typo-label-m whitespace-nowrap transition-colors",
        "hover:text-fg-primary focus-visible:outline-2 focus-visible:outline-focus",
        "disabled:pointer-events-none disabled:text-fg-disabled!",
        "[&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        // variant="default": white pill on the grey track
        "group-data-[variant=default]/tabs-list:h-[30px] group-data-[variant=default]/tabs-list:rounded-sm group-data-[variant=default]/tabs-list:px-2",
        "group-data-[variant=default]/tabs-list:data-[state=active]:bg-surface group-data-[variant=default]/tabs-list:data-[state=active]:text-fg-primary group-data-[variant=default]/tabs-list:data-[state=active]:shadow-sm",
        // variant="line": green underline (or left line when vertical)
        "group-data-[variant=line]/tabs-list:border-transparent group-data-[variant=line]/tabs-list:px-1 group-data-[variant=line]/tabs-list:focus-visible:-outline-offset-2",
        "group-data-[variant=line]/tabs-list:data-[orientation=horizontal]:border-b-2 group-data-[variant=line]/tabs-list:data-[orientation=horizontal]:pb-2",
        "group-data-[variant=line]/tabs-list:data-[orientation=vertical]:justify-start group-data-[variant=line]/tabs-list:data-[orientation=vertical]:border-l-2 group-data-[variant=line]/tabs-list:data-[orientation=vertical]:py-1.5 group-data-[variant=line]/tabs-list:data-[orientation=vertical]:pl-3",
        "group-data-[variant=line]/tabs-list:data-[state=active]:border-primary group-data-[variant=line]/tabs-list:data-[state=active]:text-fg-brand",
        className,
      )}
      {...props}
    />
  );
}

function TabsContent({ className, ...props }: React.ComponentProps<typeof TabsPrimitive.Content>) {
  return (
    <TabsPrimitive.Content
      data-slot="tabs-content"
      className={cn(
        "flex-1 typo-body-m text-fg-primary focus-visible:outline-2 focus-visible:outline-focus",
        className,
      )}
      {...props}
    />
  );
}

export { Tabs, TabsContent, TabsList, tabsListVariants, TabsTrigger };
