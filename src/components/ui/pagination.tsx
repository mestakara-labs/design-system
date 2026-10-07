/**
 * Pagination
 * Page numbers under a long list or table: "‹ Sebelumnya  1  2  3  …  Berikutnya ›".
 *
 * Design: the current page uses the light-green pill of the active navigation item
 * (Button `tonal`); other pages are `ghost` buttons.
 * Based on: https://ui.shadcn.com/docs/components/pagination
 */
import { cn } from "cn";
import { ChevronLeftIcon, ChevronRightIcon, MoreHorizontalIcon } from "lucide-react";
import * as React from "react";

import { buttonVariants } from "./button";

function Pagination({
  className,
  "aria-label": ariaLabel = "Navigasi halaman",
  ...props
}: React.ComponentProps<"nav">) {
  return (
    <nav
      data-slot="pagination"
      aria-label={ariaLabel}
      className={cn("mx-auto flex w-full justify-center", className)}
      {...props}
    />
  );
}

function PaginationContent({ className, ...props }: React.ComponentProps<"ul">) {
  return (
    <ul
      data-slot="pagination-content"
      className={cn("flex flex-row items-center gap-1", className)}
      {...props}
    />
  );
}

function PaginationItem(props: React.ComponentProps<"li">) {
  return <li data-slot="pagination-item" {...props} />;
}

type PaginationLinkProps = React.ComponentProps<"a"> & {
  /** The page the user is on. */
  isActive?: boolean;
  /** "icon" = square page number, "md" = wider (used by Previous / Next). */
  size?: "icon" | "md";
};

/** One page number. Renders an `<a>`; give it an `href` (or an `onClick`). */
function PaginationLink({
  className,
  isActive,
  size = "icon",
  children,
  ...props
}: PaginationLinkProps) {
  return (
    <a
      data-slot="pagination-link"
      data-active={isActive}
      aria-current={isActive ? "page" : undefined}
      className={cn(
        buttonVariants({ variant: isActive ? "tonal" : "ghost", size }),
        !isActive && "text-fg-primary",
        className,
      )}
      {...props}
    >
      {children}
    </a>
  );
}

function PaginationPrevious({
  className,
  text = "Sebelumnya",
  ...props
}: React.ComponentProps<typeof PaginationLink> & { text?: string }) {
  return (
    <PaginationLink
      aria-label={text}
      size="md"
      className={cn("gap-1 px-2.5", className)}
      {...props}
    >
      <ChevronLeftIcon />
      {/* On phones only the arrow is shown. */}
      <span className="hidden sm:block">{text}</span>
    </PaginationLink>
  );
}

function PaginationNext({
  className,
  text = "Berikutnya",
  ...props
}: React.ComponentProps<typeof PaginationLink> & { text?: string }) {
  return (
    <PaginationLink
      aria-label={text}
      size="md"
      className={cn("gap-1 px-2.5", className)}
      {...props}
    >
      <span className="hidden sm:block">{text}</span>
      <ChevronRightIcon />
    </PaginationLink>
  );
}

/** "…" in place of skipped page numbers. */
function PaginationEllipsis({
  className,
  label = "Halaman lainnya",
  ...props
}: React.ComponentProps<"span"> & {
  /** Screen-reader text. */
  label?: string;
}) {
  return (
    <span
      data-slot="pagination-ellipsis"
      className={cn("flex size-9 items-center justify-center text-fg-tertiary", className)}
      {...props}
    >
      <MoreHorizontalIcon className="size-4" />
      <span className="sr-only">{label}</span>
    </span>
  );
}

export {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
};
