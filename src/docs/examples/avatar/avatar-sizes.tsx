import { Avatar, AvatarFallback } from "@/components/ui/avatar";

export default function AvatarSizes() {
  return (
    <>
      <Avatar size="sm">
        <AvatarFallback>SM</AvatarFallback>
      </Avatar>
      <Avatar size="md">
        <AvatarFallback>MD</AvatarFallback>
      </Avatar>
      <Avatar size="lg">
        <AvatarFallback>LG</AvatarFallback>
      </Avatar>
    </>
  );
}
