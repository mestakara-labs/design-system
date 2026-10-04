import { Marker, MarkerContent } from "@/components/ui/marker";

export default function MarkerDemo() {
  return (
    <div className="flex w-full max-w-md flex-col gap-6">
      <Marker variant="separator">
        <MarkerContent>Hari ini</MarkerContent>
      </Marker>
      <Marker>
        <MarkerContent>Rina bergabung ke percakapan</MarkerContent>
      </Marker>
      <Marker variant="border">
        <MarkerContent>Riwayat pesanan</MarkerContent>
      </Marker>
    </div>
  );
}
