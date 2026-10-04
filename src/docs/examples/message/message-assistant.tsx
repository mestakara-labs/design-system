import { LeafIcon } from "lucide-react";

import { Bubble, BubbleContent } from "@/components/ui/bubble";
import {
  Message,
  MessageAvatar,
  MessageContent,
  MessageGroup,
  MessageHeader,
} from "@/components/ui/message";

export default function MessageAssistant() {
  return (
    <MessageGroup className="w-full max-w-md">
      <Message align="end">
        <MessageContent>
          <Bubble>
            <BubbleContent>Rekomendasi paket untuk keluarga dengan 2 anak?</BubbleContent>
          </Bubble>
        </MessageContent>
      </Message>

      {/* A "ghost" bubble has no balloon: good for long answers. */}
      <Message>
        <MessageAvatar className="size-8 bg-brand-subtle text-fg-brand">
          <LeafIcon className="size-4" />
        </MessageAvatar>
        <MessageContent>
          <MessageHeader>Asisten Agrowisata</MessageHeader>
          <Bubble variant="ghost">
            <BubbleContent>
              Paket Keluarga cocok untuk Anda: tiket masuk 4 orang, tur kebun teh 1 jam, dan makan
              siang di kafe. Anak di bawah 3 tahun gratis. Mau saya cek ketersediaan untuk akhir
              pekan ini?
            </BubbleContent>
          </Bubble>
        </MessageContent>
      </Message>
    </MessageGroup>
  );
}
