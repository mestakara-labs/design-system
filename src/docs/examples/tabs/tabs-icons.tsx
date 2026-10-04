import { BedDoubleIcon, TicketIcon, UtensilsIcon } from "lucide-react";

import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function TabsIcons() {
  return (
    <div className="flex flex-col items-center gap-6">
      <Tabs defaultValue="tickets">
        <TabsList>
          <TabsTrigger value="tickets">
            <TicketIcon />
            Tiket
          </TabsTrigger>
          <TabsTrigger value="food">
            <UtensilsIcon />
            Kuliner
          </TabsTrigger>
          {/* A disabled tab cannot be selected. */}
          <TabsTrigger value="stay" disabled>
            <BedDoubleIcon />
            Penginapan
          </TabsTrigger>
        </TabsList>
      </Tabs>
      <Tabs defaultValue="tickets">
        <TabsList variant="line">
          <TabsTrigger value="tickets">
            <TicketIcon />
            Tiket
          </TabsTrigger>
          <TabsTrigger value="food">
            <UtensilsIcon />
            Kuliner
          </TabsTrigger>
          <TabsTrigger value="stay" disabled>
            <BedDoubleIcon />
            Penginapan
          </TabsTrigger>
        </TabsList>
      </Tabs>
    </div>
  );
}
