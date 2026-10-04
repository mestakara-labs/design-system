import { ChartColumnIcon, LayoutDashboardIcon, ReceiptTextIcon, TicketIcon } from "lucide-react";
import { useState } from "react";

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarInset,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";

const MENU = [
  { title: "Dasbor", icon: LayoutDashboardIcon },
  { title: "Transaksi", icon: ReceiptTextIcon },
  { title: "Tiket", icon: TicketIcon },
  { title: "Laporan", icon: ChartColumnIcon },
];

type Variant = "sidebar" | "floating" | "inset";

export default function SidebarVariants() {
  const [variant, setVariant] = useState<Variant>("floating");

  return (
    <SidebarProvider>
      <Sidebar variant={variant} collapsible="icon">
        <SidebarContent>
          <SidebarGroup>
            <SidebarGroupContent>
              <SidebarMenu>
                {MENU.map((item, index) => (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton isActive={index === 0} tooltip={item.title}>
                      <item.icon />
                      <span>{item.title}</span>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        </SidebarContent>
      </Sidebar>

      <SidebarInset>
        <div className="flex flex-col items-start gap-4 p-4">
          <SidebarTrigger />
          <ToggleGroup
            type="single"
            variant="outline"
            size="sm"
            value={variant}
            onValueChange={(value) => value && setVariant(value as Variant)}
          >
            <ToggleGroupItem value="sidebar">sidebar</ToggleGroupItem>
            <ToggleGroupItem value="floating">floating</ToggleGroupItem>
            <ToggleGroupItem value="inset">inset</ToggleGroupItem>
          </ToggleGroup>
          <p className="typo-body-m text-fg-secondary">
            variant=&quot;{variant}&quot; · tekan Ctrl+B untuk melipat menu.
          </p>
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
}
