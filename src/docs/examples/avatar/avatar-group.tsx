import { Avatar, AvatarFallback, AvatarGroup, AvatarGroupCount } from "@/components/ui/avatar";

export default function AvatarGroupExample() {
  return (
    <AvatarGroup>
      <Avatar>
        <AvatarFallback>RS</AvatarFallback>
      </Avatar>
      <Avatar>
        <AvatarFallback>BP</AvatarFallback>
      </Avatar>
      <Avatar>
        <AvatarFallback>DW</AvatarFallback>
      </Avatar>
      <AvatarGroupCount>+5</AvatarGroupCount>
    </AvatarGroup>
  );
}
