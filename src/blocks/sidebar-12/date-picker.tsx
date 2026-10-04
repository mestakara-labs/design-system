import { Calendar } from "@/components/ui/calendar";
import { SidebarGroup, SidebarGroupContent } from "@/components/ui/sidebar";

export function DatePicker() {
  return (
    <SidebarGroup className="px-0">
      <SidebarGroupContent>
        {/* A white card with dark text that fills the width of the sidebar. */}
        <Calendar className="mx-2 w-auto rounded-md p-2 text-fg-primary [--cell-size:30px]" />
      </SidebarGroupContent>
    </SidebarGroup>
  );
}
