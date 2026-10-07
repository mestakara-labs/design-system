import { SendIcon } from "lucide-react";
import { useState } from "react";

import { Bubble, BubbleContent } from "@/components/ui/bubble";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Marker, MarkerContent } from "@/components/ui/marker";
import { Message, MessageContent, MessageFooter } from "@/components/ui/message";
import {
  MessageScroller,
  MessageScrollerButton,
  MessageScrollerContent,
  MessageScrollerItem,
  MessageScrollerProvider,
  MessageScrollerViewport,
} from "@/components/ui/message-scroller";

type ChatMessage = { id: string; from: "user" | "cs"; text: string; time: string };

const FIRST_MESSAGES: ChatMessage[] = Array.from({ length: 12 }, (_, index) => ({
  id: `m${index}`,
  from: index % 2 === 0 ? "cs" : "user",
  text:
    index % 2 === 0
      ? `Balasan CS nomor ${index / 2 + 1}: informasi kunjungan dan tiket.`
      : `Pertanyaan pengunjung nomor ${(index + 1) / 2}.`,
  time: `09.${String(10 + index).padStart(2, "0")}`,
}));

export default function MessageScrollerDemo() {
  const [messages, setMessages] = useState(FIRST_MESSAGES);
  const [draft, setDraft] = useState("");

  function send(event: React.FormEvent) {
    event.preventDefault();
    if (!draft.trim()) return;
    setMessages([
      ...messages,
      { id: `m${messages.length}`, from: "user", text: draft, time: "Baru saja" },
    ]);
    setDraft("");
  }

  return (
    <div className="flex h-96 w-full max-w-md flex-col overflow-hidden rounded-lg border border-border bg-canvas">
      <MessageScrollerProvider>
        <MessageScroller className="flex-1">
          <MessageScrollerViewport aria-label="Percakapan dengan CS">
            <MessageScrollerContent className="gap-3 p-4">
              <Marker variant="separator">
                <MarkerContent>Hari ini</MarkerContent>
              </Marker>
              {messages.map((message) => (
                <MessageScrollerItem key={message.id} messageId={message.id}>
                  <Message align={message.from === "user" ? "end" : "start"}>
                    <MessageContent>
                      <Bubble variant={message.from === "user" ? "default" : "secondary"}>
                        <BubbleContent>{message.text}</BubbleContent>
                      </Bubble>
                      <MessageFooter>{message.time}</MessageFooter>
                    </MessageContent>
                  </Message>
                </MessageScrollerItem>
              ))}
            </MessageScrollerContent>
          </MessageScrollerViewport>
          {/* Appears when you scroll up; jumps back to the newest message. */}
          <MessageScrollerButton />
        </MessageScroller>
      </MessageScrollerProvider>

      <form onSubmit={send} className="flex gap-2 border-t border-border bg-surface p-3">
        <Input
          value={draft}
          onChange={(event) => setDraft(event.target.value)}
          placeholder="Tulis pesan…"
          aria-label="Pesan"
        />
        <Button type="submit" size="icon" aria-label="Kirim">
          <SendIcon />
        </Button>
      </form>
    </div>
  );
}
