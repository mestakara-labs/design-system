import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function TabsVertical() {
  return (
    <Tabs defaultValue="account" orientation="vertical" className="w-full max-w-md gap-6">
      <TabsList variant="line">
        <TabsTrigger value="account">Akun</TabsTrigger>
        <TabsTrigger value="notifications">Notifikasi</TabsTrigger>
        <TabsTrigger value="security">Keamanan</TabsTrigger>
      </TabsList>
      <TabsContent value="account" className="text-fg-secondary">
        Nama, email, dan nomor WhatsApp yang dipakai untuk tiket.
      </TabsContent>
      <TabsContent value="notifications" className="text-fg-secondary">
        Pilih kapan kamu ingin menerima pengingat kunjungan.
      </TabsContent>
      <TabsContent value="security" className="text-fg-secondary">
        Ubah kata sandi dan kelola perangkat yang masuk.
      </TabsContent>
    </Tabs>
  );
}
