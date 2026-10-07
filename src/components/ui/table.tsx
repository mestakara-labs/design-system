/**
 * Table
 * Rows and columns of data, e.g. a transaction list on the operations dashboard.
 *
 * Design: DESIGN.md §6 — dashboard tables use zebra rows (`striped`) and status badges.
 * Based on: https://ui.shadcn.com/docs/components/table
 * For sorting, filtering and paging, see the "Data Table" pattern in the docs.
 */
import { cn } from "cn";
import * as React from "react";

type TableProps = React.ComponentProps<"table"> & {
  /** Alternate row background (zebra rows). */
  striped?: boolean;
};

function Table({ className, striped = false, ...props }: TableProps) {
  return (
    // The wrapper scrolls horizontally on small screens instead of squeezing the columns.
    <div data-slot="table-container" className="relative w-full overflow-x-auto">
      <table
        data-slot="table"
        data-striped={striped}
        className={cn("group/table w-full caption-bottom typo-body-m text-fg-primary", className)}
        {...props}
      />
    </div>
  );
}

function TableHeader({ className, ...props }: React.ComponentProps<"thead">) {
  return (
    <thead
      data-slot="table-header"
      className={cn("bg-subtle [&_tr]:border-b [&_tr]:hover:bg-transparent", className)}
      {...props}
    />
  );
}

function TableBody({ className, ...props }: React.ComponentProps<"tbody">) {
  return (
    <tbody
      data-slot="table-body"
      className={cn(
        "[&_tr:last-child]:border-0",
        "group-data-[striped=true]/table:[&_tr:nth-child(even)]:bg-subtle",
        className,
      )}
      {...props}
    />
  );
}

function TableFooter({ className, ...props }: React.ComponentProps<"tfoot">) {
  return (
    <tfoot
      data-slot="table-footer"
      className={cn(
        "border-t border-border bg-subtle typo-label-m [&>tr]:last:border-b-0",
        className,
      )}
      {...props}
    />
  );
}

function TableRow({ className, ...props }: React.ComponentProps<"tr">) {
  return (
    <tr
      data-slot="table-row"
      className={cn(
        "border-b border-border transition-colors hover:bg-brand-subtle/50",
        "has-aria-expanded:bg-brand-subtle/50 data-[state=selected]:bg-brand-subtle",
        className,
      )}
      {...props}
    />
  );
}

function TableHead({ className, ...props }: React.ComponentProps<"th">) {
  return (
    <th
      data-slot="table-head"
      className={cn(
        "h-10 px-2 text-left align-middle typo-label-m whitespace-nowrap text-fg-secondary",
        "[&:has([role=checkbox])]:w-10 [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-0.5",
        className,
      )}
      {...props}
    />
  );
}

function TableCell({ className, ...props }: React.ComponentProps<"td">) {
  return (
    <td
      data-slot="table-cell"
      className={cn(
        "p-2 align-middle whitespace-nowrap",
        "[&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-0.5",
        className,
      )}
      {...props}
    />
  );
}

function TableCaption({ className, ...props }: React.ComponentProps<"caption">) {
  return (
    <caption
      data-slot="table-caption"
      className={cn("mt-4 typo-body-m text-fg-secondary", className)}
      {...props}
    />
  );
}

export {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
  type TableProps,
};
