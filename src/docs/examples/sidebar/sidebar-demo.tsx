import {
  ChartColumnIcon,
  ChevronRightIcon,
  LayoutDashboardIcon,
  LeafIcon,
  MapIcon,
  PlusIcon,
  ReceiptTextIcon,
  SettingsIcon,
  TicketIcon,
} from "lucide-react";

import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbList,
  BreadcrumbPage,
} from "@/components/ui/breadcrumb";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { Separator } from "@/components/ui/separator";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupAction,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarInset,
  SidebarMenu,
  SidebarMenuBadge,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
  SidebarProvider,
  SidebarRail,
  SidebarTrigger,
} from "@/components/ui/sidebar";

const MAIN_MENU = [
  { title: "Dasbor", icon: LayoutDashboardIcon, isActive: true },
  { title: "Transaksi", icon: ReceiptTextIcon, badge: "12" },
  { title: "Tiket", icon: TicketIcon },
  { title: "Laporan", icon: ChartColumnIcon },
];

const PACKAGES = ["Tea Walk", "Paket Keluarga", "Rombongan Sekolah"];

const UNITS = ["Gunung Mas", "Rancabali", "Malabar"];

export default function SidebarDemo() {
  return (
    <SidebarProvider>
      {/* collapsible="icon": closing folds the menu to icons; labels become tooltips. */}
      <Sidebar collapsible="icon">
        <SidebarHeader>
          <SidebarMenu>
            <SidebarMenuItem>
              <SidebarMenuButton size="lg" tooltip="Agrowisata Regional 2">
                <span className="flex size-8 shrink-0 items-center justify-center rounded-sm bg-primary text-fg-on-brand">
                  <LeafIcon className="size-5" />
                </span>
                <span className="flex flex-col">
                  <span className="typo-label-m">Agrowisata</span>
                  <span className="typo-body-s text-sidebar-fg-muted">Regional 2</span>
                </span>
              </SidebarMenuButton>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarHeader>

        <SidebarContent>
          <SidebarGroup>
            <SidebarGroupLabel>Menu</SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                {MAIN_MENU.map((item) => (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton isActive={item.isActive} tooltip={item.title}>
                      <item.icon />
                      <span>{item.title}</span>
                    </SidebarMenuButton>
                    {item.badge && <SidebarMenuBadge>{item.badge}</SidebarMenuBadge>}
                  </SidebarMenuItem>
                ))}

                {/* An item with sub-items that folds open. */}
                <Collapsible asChild className="group/collapsible">
                  <SidebarMenuItem>
                    <CollapsibleTrigger asChild>
                      <SidebarMenuButton tooltip="Paket Wisata">
                        <MapIcon />
                        <span>Paket Wisata</span>
                        <ChevronRightIcon className="ml-auto size-4! transition-transform group-data-[state=open]/collapsible:rotate-90" />
                      </SidebarMenuButton>
                    </CollapsibleTrigger>
                    <CollapsibleContent>
                      <SidebarMenuSub>
                        {PACKAGES.map((name) => (
                          <SidebarMenuSubItem key={name}>
                            <SidebarMenuSubButton href="#">
                              <span>{name}</span>
                            </SidebarMenuSubButton>
                          </SidebarMenuSubItem>
                        ))}
                      </SidebarMenuSub>
                    </CollapsibleContent>
                  </SidebarMenuItem>
                </Collapsible>
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>

          <SidebarGroup>
            <SidebarGroupLabel>Unit</SidebarGroupLabel>
            <SidebarGroupAction title="Tambah unit">
              <PlusIcon />
              <span className="sr-only">Tambah unit</span>
            </SidebarGroupAction>
            <SidebarGroupContent>
              <SidebarMenu>
                {UNITS.map((unit) => (
                  <SidebarMenuItem key={unit}>
                    <SidebarMenuButton size="sm" tooltip={unit}>
                      <LeafIcon />
                      <span>{unit}</span>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        </SidebarContent>

        <SidebarFooter>
          <SidebarMenu>
            <SidebarMenuItem>
              <SidebarMenuButton tooltip="Pengaturan">
                <SettingsIcon />
                <span>Pengaturan</span>
              </SidebarMenuButton>
            </SidebarMenuItem>
            <SidebarMenuItem>
              <SidebarMenuButton size="lg" tooltip="Rina Sari">
                <Avatar size="sm" className="shrink-0">
                  <AvatarFallback>RS</AvatarFallback>
                </Avatar>
                <span className="flex flex-col">
                  <span className="typo-label-m">Rina Sari</span>
                  <span className="typo-body-s text-sidebar-fg-muted">Admin Unit</span>
                </span>
              </SidebarMenuButton>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarFooter>

        {/* Thin strip on the edge: click to fold/unfold. */}
        <SidebarRail />
      </Sidebar>

      <SidebarInset>
        <header className="flex h-14 shrink-0 items-center gap-2 border-b border-border px-4">
          <SidebarTrigger />
          <Separator orientation="vertical" className="h-5!" />
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbPage>Dasbor</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </header>
        <div className="grid flex-1 auto-rows-min gap-4 p-4 sm:grid-cols-3">
          <div className="h-24 rounded-lg bg-subtle" />
          <div className="h-24 rounded-lg bg-subtle" />
          <div className="h-24 rounded-lg bg-subtle" />
          <div className="h-48 rounded-lg bg-subtle sm:col-span-3" />
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
}
