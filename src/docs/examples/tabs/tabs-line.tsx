import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function TabsLine() {
  return (
    <Tabs defaultValue="active" className="w-full max-w-md">
      <TabsList variant="line">
        <TabsTrigger value="active">Aktif</TabsTrigger>
        <TabsTrigger value="done">Selesai</TabsTrigger>
        <TabsTrigger value="cancelled">Dibatalkan</TabsTrigger>
      </TabsList>
      <TabsContent value="active" className="text-fg-secondary">
        2 tiket aktif untuk kunjungan minggu ini.
      </TabsContent>
      <TabsContent value="done" className="text-fg-secondary">
        14 kunjungan selesai.
      </TabsContent>
      <TabsContent value="cancelled" className="text-fg-secondary">
        Tidak ada pesanan yang dibatalkan.
      </TabsContent>
    </Tabs>
  );
}
