/**
 * Breadcrumb
 * Shows where the current page sits: "Beranda › Paket Wisata › Gunung Mas Tea Hills".
 *
 * Design: earlier pages are grey links (navy on hover), the current page is dark text.
 * Based on: https://ui.shadcn.com/docs/components/breadcrumb
 */
import { cn } from "cn";
import { ChevronRightIcon, MoreHorizontalIcon } from "lucide-react";
import { Slot } from "radix-ui";
import * as React from "react";

function Breadcrumb({
  "aria-label": ariaLabel = "Breadcrumb",
  ...props
}: React.ComponentProps<"nav">) {
  return <nav data-slot="breadcrumb" aria-label={ariaLabel} {...props} />;
}

function BreadcrumbList({ className, ...props }: React.ComponentProps<"ol">) {
  return (
    <ol
      data-slot="breadcrumb-list"
      className={cn(
        "flex flex-wrap items-center gap-1.5 typo-body-m break-words text-fg-tertiary",
        className,
      )}
      {...props}
    />
  );
}

function BreadcrumbItem({ className, ...props }: React.ComponentProps<"li">) {
  return (
    <li
      data-slot="breadcrumb-item"
      className={cn("inline-flex items-center gap-1.5", className)}
      {...props}
    />
  );
}

type BreadcrumbLinkProps = React.ComponentProps<"a"> & {
  /** Render your router's link instead, e.g. <BreadcrumbLink asChild><Link to="/" /></BreadcrumbLink>. */
  asChild?: boolean;
};

function BreadcrumbLink({ asChild, className, ...props }: BreadcrumbLinkProps) {
  const Component = asChild ? Slot.Root : "a";

  return (
    <Component
      data-slot="breadcrumb-link"
      className={cn(
        "rounded-xs transition-colors hover:text-fg-link hover:underline hover:underline-offset-4 focus-visible:outline-2 focus-visible:outline-focus",
        className,
      )}
      {...props}
    />
  );
}

/** The current page (not a link). */
function BreadcrumbPage({ className, ...props }: React.ComponentProps<"span">) {
  return (
    <span
      data-slot="breadcrumb-page"
      aria-current="page"
      className={cn("typo-label-m text-fg-primary", className)}
      {...props}
    />
  );
}

/** The "›" between items. Pass children to use another icon. */
function BreadcrumbSeparator({ children, className, ...props }: React.ComponentProps<"li">) {
  return (
    <li
      data-slot="breadcrumb-separator"
      role="presentation"
      aria-hidden="true"
      className={cn("[&>svg]:size-4", className)}
      {...props}
    >
      {children ?? <ChevronRightIcon />}
    </li>
  );
}

/** "…" in place of hidden items in a long trail. */
function BreadcrumbEllipsis({
  className,
  label = "Halaman lainnya",
  ...props
}: React.ComponentProps<"span"> & {
  /** Screen-reader text. */
  label?: string;
}) {
  return (
    <span
      data-slot="breadcrumb-ellipsis"
      className={cn("flex size-6 items-center justify-center", className)}
      {...props}
    >
      <MoreHorizontalIcon className="size-4" />
      <span className="sr-only">{label}</span>
    </span>
  );
}

export {
  Breadcrumb,
  BreadcrumbEllipsis,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
};
