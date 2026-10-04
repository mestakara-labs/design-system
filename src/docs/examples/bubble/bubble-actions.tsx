import { toast } from "@/components/ui/sonner";
import { Bubble, BubbleContent, BubbleReactions } from "@/components/ui/bubble";

const SUGGESTIONS = ["Jam buka hari ini", "Harga tiket anak", "Lokasi parkir"];

export default function BubbleActions() {
  return (
    <div className="flex w-full max-w-md flex-col gap-6">
      {/* Reactions sit on the corner of the balloon. */}
      <Bubble align="end">
        <BubbleContent>Terima kasih, sudah berhasil diubah!</BubbleContent>
        <BubbleReactions>👍</BubbleReactions>
      </Bubble>

      {/* asChild turns the balloon into a button, e.g. quick suggestions. */}
      <div className="flex flex-wrap gap-2">
        {SUGGESTIONS.map((text) => (
          <Bubble key={text} variant="outline">
            <BubbleContent asChild>
              <button type="button" onClick={() => toast(`Dipilih: ${text}`)}>
                {text}
              </button>
            </BubbleContent>
          </Bubble>
        ))}
      </div>
    </div>
  );
}
