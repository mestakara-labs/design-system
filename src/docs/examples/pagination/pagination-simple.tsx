import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

export default function PaginationSimple() {
  return (
    <Pagination>
      <PaginationContent className="w-full max-w-md justify-between">
        <PaginationItem>
          {/* First page: "Previous" is disabled. */}
          <PaginationPrevious
            href="#"
            aria-disabled="true"
            tabIndex={-1}
            className="pointer-events-none text-fg-disabled"
          />
        </PaginationItem>
        <PaginationItem className="typo-body-m text-fg-secondary">Halaman 1 dari 12</PaginationItem>
        <PaginationItem>
          <PaginationNext href="#" />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
}
