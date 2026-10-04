import { CheckCheckIcon } from "lucide-react";

import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Bubble, BubbleContent } from "@/components/ui/bubble";
import {
  Message,
  MessageAvatar,
  MessageContent,
  MessageFooter,
  MessageGroup,
  MessageHeader,
} from "@/components/ui/message";

export default function MessageDemo() {
  return (
    <MessageGroup className="w-full max-w-md">
      <Message>
        <MessageAvatar>
          <Avatar size="sm">
            <AvatarFallback>CS</AvatarFallback>
          </Avatar>
        </MessageAvatar>
        <MessageContent>
          <MessageHeader>CS Gunung Mas</MessageHeader>
          <Bubble variant="secondary">
            <BubbleContent>
              Selamat pagi! Tiket Anda untuk Minggu, 12 Okt sudah aktif.
            </BubbleContent>
          </Bubble>
          <MessageFooter>09.41</MessageFooter>
        </MessageContent>
      </Message>

      {/* align="end": the user's own message, mirrored to the right. */}
      <Message align="end">
        <MessageAvatar>
          <Avatar size="sm">
            <AvatarFallback>RS</AvatarFallback>
          </Avatar>
        </MessageAvatar>
        <MessageContent>
          <Bubble>
            <BubbleContent>Terima kasih! Apakah boleh membawa hewan peliharaan?</BubbleContent>
          </Bubble>
          <MessageFooter>
            09.43 · Dibaca
            <CheckCheckIcon className="size-4 text-fg-success" />
          </MessageFooter>
        </MessageContent>
      </Message>
    </MessageGroup>
  );
}
