import { cn } from "cn";
import {
  ArrowLeftRightIcon,
  BellIcon,
  BookOpenIcon,
  CalendarIcon,
  ChartColumnIcon,
  CircleHelpIcon,
  ClipboardListIcon,
  CreditCardIcon,
  FileTextIcon,
  GlobeIcon,
  LandmarkIcon,
  MessageCircleIcon,
  PaletteIcon,
  PiggyBankIcon,
  ShieldIcon,
  TargetIcon,
  UserIcon,
  UsersIcon,
  WalletIcon,
  ActivityIcon,
  type LucideIcon,
} from "lucide-react";

import { Card, CardContent } from "@/components/ui/card";

type Menu = {
  title: string;
  items: { label: string; icon: LucideIcon; active?: boolean }[];
};

const MENUS: Menu[] = [
  {
    title: "Perencanaan",
    items: [
      { label: "Dokumen", icon: FileTextIcon },
      { label: "Anggaran", icon: WalletIcon },
      { label: "Laporan", icon: ClipboardListIcon },
      { label: "Target", icon: TargetIcon },
      { label: "Kalender", icon: CalendarIcon },
    ],
  },
  {
    title: "Bantuan",
    items: [
      { label: "Pusat Bantuan", icon: CircleHelpIcon },
      { label: "Panduan", icon: BookOpenIcon },
      { label: "Hubungi Kami", icon: MessageCircleIcon },
      { label: "Status", icon: ActivityIcon },
      { label: "Komunitas", icon: GlobeIcon },
    ],
  },
  {
    title: "Ringkasan",
    items: [
      { label: "Analitik", icon: ChartColumnIcon, active: true },
      { label: "Transaksi", icon: ArrowLeftRightIcon },
      { label: "Pendapatan", icon: PiggyBankIcon },
      { label: "Rekening", icon: LandmarkIcon },
      { label: "Pengunjung", icon: UsersIcon },
    ],
  },
  {
    title: "Akun",
    items: [
      { label: "Profil", icon: UserIcon },
      { label: "Tagihan", icon: CreditCardIcon, active: true },
      { label: "Notifikasi", icon: BellIcon },
      { label: "Keamanan", icon: ShieldIcon },
      { label: "Tampilan", icon: PaletteIcon },
    ],
  },
];

/** Four small navigation menus in a 2×2 grid. The active item uses the light-green pill. */
export function MenuCards() {
  return (
    <div className="grid w-full grid-cols-2 gap-4">
      {MENUS.map((menu) => (
        <Card key={menu.title} className="py-4">
          <CardContent className="flex flex-col gap-1 px-2">
            <p className="px-2 pb-1 typo-label-s text-fg-tertiary">{menu.title}</p>
            {menu.items.map((item) => (
              <a
                key={item.label}
                href="#menu"
                className={cn(
                  "flex items-center gap-2 rounded-sm px-2 py-1.5 typo-body-m transition-colors focus-visible:outline-2 focus-visible:outline-focus [&_svg]:size-4",
                  item.active ? "bg-brand-subtle text-fg-brand" : "text-fg-primary hover:bg-subtle",
                )}
              >
                <item.icon />
                {item.label}
              </a>
            ))}
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
