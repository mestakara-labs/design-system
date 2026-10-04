import { useState } from "react";

import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

const TOTAL_PAGES = 10;

/** Which page numbers to show, e.g. page 5 → [1, "…", 4, 5, 6, "…", 10]. */
function getPages(current: number): (number | "…")[] {
  const pages: (number | "…")[] = [1];
  if (current > 3) pages.push("…");
  // The current page and its neighbours.
  const from = Math.max(2, current - 1);
  const to = Math.min(TOTAL_PAGES - 1, current + 1);
  for (let page = from; page <= to; page++) pages.push(page);
  if (current < TOTAL_PAGES - 2) pages.push("…");
  pages.push(TOTAL_PAGES);
  return pages;
}

export default function PaginationDemo() {
  const [page, setPage] = useState(5);

  // In a real app the links have real URLs (e.g. ?page=4). Here we only change the state.
  function goTo(event: React.MouseEvent, target: number) {
    event.preventDefault();
    setPage(Math.min(Math.max(target, 1), TOTAL_PAGES));
  }

  return (
    <Pagination>
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious href="#" onClick={(event) => goTo(event, page - 1)} />
        </PaginationItem>
        {getPages(page).map((item, index) => (
          <PaginationItem key={index}>
            {item === "…" ? (
              <PaginationEllipsis />
            ) : (
              <PaginationLink
                href="#"
                isActive={item === page}
                onClick={(event) => goTo(event, item)}
              >
                {item}
              </PaginationLink>
            )}
          </PaginationItem>
        ))}
        <PaginationItem>
          <PaginationNext href="#" onClick={(event) => goTo(event, page + 1)} />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
}
