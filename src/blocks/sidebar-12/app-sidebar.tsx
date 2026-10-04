import * as React from "react";
import { Plus } from "lucide-react";

import { Calendars } from "./calendars";
import { DatePicker } from "./date-picker";
import { NavUser } from "./nav-user";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarRail,
  SidebarSeparator,
} from "@/components/ui/sidebar";

// This is sample data.
const data = {
  user: {
    name: "Rina Sari",
    email: "rina@agrowisata.id",
    avatar: "/avatars/shadcn.jpg",
  },
  calendars: [
    {
      name: "Kalender Saya",
      items: ["Pribadi", "Kerja", "Keluarga"],
    },
    {
      name: "Favorit",
      items: ["Hari Libur", "Ulang Tahun"],
    },
    {
      name: "Lainnya",
      items: ["Renovasi Kafe", "Pengingat", "Tenggat"],
    },
  ],
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar {...props}>
      <SidebarHeader className="h-16 border-b border-sidebar-border">
        <NavUser user={data.user} />
      </SidebarHeader>
      <SidebarContent>
        <DatePicker />
        <SidebarSeparator className="mx-0" />
        <Calendars calendars={data.calendars} />
      </SidebarContent>
      <SidebarFooter>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton>
              <Plus />
              <span>Kalender Baru</span>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  );
}
