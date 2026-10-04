import { Bubble, BubbleContent, BubbleGroup } from "@/components/ui/bubble";

export default function BubbleDemo() {
  return (
    <div className="flex w-full max-w-md flex-col gap-3">
      {/* Reply from customer service: on the left, light. */}
      <Bubble variant="secondary">
        <BubbleContent>Halo! Ada yang bisa kami bantu untuk kunjungan ke Gunung Mas?</BubbleContent>
      </Bubble>
      {/* The user's own messages: on the right, green. */}
      <BubbleGroup>
        <Bubble align="end">
          <BubbleContent>Apakah tiket bisa dijadwalkan ulang?</BubbleContent>
        </Bubble>
        <Bubble align="end">
          <BubbleContent>Saya pesan untuk Sabtu, tapi ingin pindah ke Minggu.</BubbleContent>
        </Bubble>
      </BubbleGroup>
      <Bubble variant="secondary">
        <BubbleContent>
          Bisa, paling lambat 24 jam sebelum jadwal. Buka menu Pesanan, lalu pilih “Ubah jadwal”.
        </BubbleContent>
      </Bubble>
    </div>
  );
}
