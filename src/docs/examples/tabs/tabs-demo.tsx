import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function TabsDemo() {
  return (
    <Tabs defaultValue="description" className="w-full max-w-md">
      <TabsList>
        <TabsTrigger value="description">Deskripsi</TabsTrigger>
        <TabsTrigger value="facilities">Fasilitas</TabsTrigger>
        <TabsTrigger value="reviews">Ulasan</TabsTrigger>
      </TabsList>
      <TabsContent value="description" className="text-fg-secondary">
        Jelajahi hamparan kebun teh Gunung Mas sambil belajar proses pengolahan teh, dari pemetikan
        hingga penyeduhan.
      </TabsContent>
      <TabsContent value="facilities" className="text-fg-secondary">
        Area parkir, musala, toilet, kafe, dan pemandu wisata berlisensi.
      </TabsContent>
      <TabsContent value="reviews" className="text-fg-secondary">
        4,8 dari 5 · 1.204 ulasan pengunjung.
      </TabsContent>
    </Tabs>
  );
}
