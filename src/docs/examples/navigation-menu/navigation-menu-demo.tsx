import { LeafIcon, MountainIcon, TentTreeIcon, TrainFrontIcon } from "lucide-react";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

const DESTINATIONS = [
  { title: "Gunung Mas", description: "Kebun teh di kawasan Puncak, Bogor.", icon: LeafIcon },
  { title: "Rancabali", description: "Danau dan kebun teh di Ciwidey.", icon: MountainIcon },
  { title: "Malabar", description: "Hutan dan rumah peninggalan Bosscha.", icon: TentTreeIcon },
  { title: "Kertamanah", description: "Wisata kereta kebun di Pangalengan.", icon: TrainFrontIcon },
];

const PACKAGES = [
  { title: "Tea Walk", description: "Jalan santai 2 jam bersama pemandu." },
  { title: "Paket Keluarga", description: "Tiket 4 orang dan makan siang." },
  { title: "Rombongan Sekolah", description: "Edukasi teh untuk 20+ siswa." },
];

export default function NavigationMenuDemo() {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Destinasi</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[calc(100vw-4rem)] gap-1 sm:w-[480px] sm:grid-cols-2">
              {DESTINATIONS.map((item) => (
                <li key={item.title}>
                  <NavigationMenuLink href="#" className="flex-row items-start gap-3">
                    <item.icon className="mt-0.5 size-5 text-fg-brand" />
                    <div className="flex flex-col gap-0.5">
                      <span className="typo-label-m">{item.title}</span>
                      <span className="typo-body-s text-fg-secondary">{item.description}</span>
                    </div>
                  </NavigationMenuLink>
                </li>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Paket</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[calc(100vw-4rem)] gap-1 sm:w-[320px]">
              {PACKAGES.map((item) => (
                <li key={item.title}>
                  <NavigationMenuLink href="#">
                    <span className="typo-label-m">{item.title}</span>
                    <span className="typo-body-s text-fg-secondary">{item.description}</span>
                  </NavigationMenuLink>
                </li>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          {/* A plain link at the top level uses the trigger style. */}
          <NavigationMenuLink href="#" className={navigationMenuTriggerStyle()}>
            Tentang
          </NavigationMenuLink>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}
