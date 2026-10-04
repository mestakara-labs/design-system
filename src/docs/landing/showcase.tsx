import { AccountAccess } from "./cards/account-access";
import { ComponentsCard } from "./cards/components-card";
import { CsChat } from "./cards/cs-chat";
import { DailyQuota } from "./cards/daily-quota";
import { EticketQr } from "./cards/eticket-qr";
import { GroupScheduleForm } from "./cards/group-schedule-form";
import { MenuCards } from "./cards/menu-cards";
import { TicketBalance } from "./cards/ticket-balance";
import { UnitRevenue } from "./cards/unit-revenue";
import { VisitSettings } from "./cards/visit-settings";
import { VisitTargets } from "./cards/visit-targets";
import { VisitorHistory } from "./cards/visitor-history";

/**
 * Columns of the showcase grid, left to right. Each card is a file in `cards/`.
 * Narrow screens show fewer columns (`hidden md:flex` = only from the md breakpoint).
 * To add a card: create it in `cards/`, then put it in one of the lists below.
 */
const COLUMNS = [
  { className: "flex", cards: [ComponentsCard, MenuCards, VisitTargets] },
  { className: "hidden md:flex", cards: [VisitorHistory, TicketBalance, UnitRevenue] },
  { className: "hidden lg:flex", cards: [GroupScheduleForm, DailyQuota, AccountAccess] },
  { className: "hidden xl:flex", cards: [EticketQr, CsChat, VisitSettings] },
];

/**
 * The grid of building blocks under the hero (like ui.shadcn.com).
 * It is cut off at a fixed height and fades out at the bottom.
 */
export function Showcase() {
  return (
    <section className="relative max-h-[1500px] overflow-hidden border-y border-border bg-subtle px-4 pt-8 md:px-12 md:pt-12">
      <div className="mx-auto grid max-w-screen-2xl items-start gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {COLUMNS.map((column, index) => (
          <div key={index} className={`${column.className} flex-col gap-6`}>
            {column.cards.map((CardComponent) => (
              <CardComponent key={CardComponent.name} />
            ))}
          </div>
        ))}
      </div>
      {/* Fade-out at the bottom. */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-64 bg-linear-to-t from-subtle to-transparent" />
    </section>
  );
}
