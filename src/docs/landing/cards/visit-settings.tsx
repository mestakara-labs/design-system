import { CalendarClockIcon, ChevronRightIcon, ReceiptTextIcon, TicketIcon } from "lucide-react";

import {
  Breadcrumb,
  BreadcrumbEllipsis,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Card, CardContent } from "@/components/ui/card";
import {
  Item,
  ItemActions,
  ItemContent,
  ItemDescription,
  ItemGroup,
  ItemMedia,
  ItemTitle,
} from "@/components/ui/item";

const OPTIONS = [
  {
    title: "Ubah jadwal kunjungan",
    description: "Pindahkan tanggal tiket paling lambat H-1.",
    icon: CalendarClockIcon,
  },
  {
    title: "Pengembalian dana",
    description: "Ajukan refund untuk pesanan yang dibatalkan.",
    icon: ReceiptTextIcon,
  },
  {
    title: "Tiket terusan",
    description: "Kelola tiket langganan bulanan Anda.",
    icon: TicketIcon,
  },
];

/** A breadcrumb above a list of booking options (Item). */
export function VisitSettings() {
  return (
    <Card>
      <CardContent className="flex flex-col gap-4">
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="#beranda">Beranda</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbEllipsis />
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>Pesanan</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
        <ItemGroup className="gap-3">
          {OPTIONS.map((option) => (
            <Item key={option.title} asChild variant="muted">
              <a href="#pesanan">
                <ItemMedia variant="icon">
                  <option.icon />
                </ItemMedia>
                <ItemContent>
                  <ItemTitle>{option.title}</ItemTitle>
                  <ItemDescription>{option.description}</ItemDescription>
                </ItemContent>
                <ItemActions>
                  <ChevronRightIcon className="size-4 text-fg-tertiary" />
                </ItemActions>
              </a>
            </Item>
          ))}
        </ItemGroup>
      </CardContent>
    </Card>
  );
}
