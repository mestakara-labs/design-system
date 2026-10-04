import { BellIcon, ChevronRightIcon, CreditCardIcon, UserIcon } from "lucide-react";
import { Fragment } from "react";

import {
  Item,
  ItemActions,
  ItemContent,
  ItemGroup,
  ItemMedia,
  ItemSeparator,
  ItemTitle,
} from "@/components/ui/item";

const SETTINGS = [
  { title: "Profil", href: "#profil", Icon: UserIcon },
  { title: "Metode Pembayaran", href: "#pembayaran", Icon: CreditCardIcon },
  { title: "Notifikasi", href: "#notifikasi", Icon: BellIcon },
];

export default function ItemGroupExample() {
  return (
    <ItemGroup className="w-full max-w-md rounded-lg border border-border bg-surface">
      {SETTINGS.map(({ title, href, Icon }, index) => (
        <Fragment key={title}>
          {index > 0 && <ItemSeparator />}
          {/* asChild turns the whole row into a link. */}
          <Item asChild size="sm" className="rounded-none">
            <a href={href}>
              <ItemMedia variant="icon">
                <Icon />
              </ItemMedia>
              <ItemContent>
                <ItemTitle>{title}</ItemTitle>
              </ItemContent>
              <ItemActions>
                <ChevronRightIcon className="size-4 text-fg-tertiary" />
              </ItemActions>
            </a>
          </Item>
        </Fragment>
      ))}
    </ItemGroup>
  );
}
