import { CheckIcon } from "lucide-react";

import { Avatar, AvatarBadge, AvatarFallback } from "@/components/ui/avatar";

export default function AvatarBadgeExample() {
  return (
    <>
      <Avatar>
        <AvatarFallback>DW</AvatarFallback>
        <AvatarBadge aria-label="Online" />
      </Avatar>
      <Avatar size="lg">
        <AvatarFallback>AK</AvatarFallback>
        <AvatarBadge aria-label="Terverifikasi">
          <CheckIcon />
        </AvatarBadge>
      </Avatar>
    </>
  );
}
