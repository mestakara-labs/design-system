import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export default function AvatarDemo() {
  return (
    <>
      <Avatar>
        <AvatarImage src="/images/tea-hills-1.svg" alt="Foto profil Rina" />
        <AvatarFallback>RS</AvatarFallback>
      </Avatar>
      {/* No image (or it failed to load) → the initials are shown. */}
      <Avatar>
        <AvatarFallback>BP</AvatarFallback>
      </Avatar>
    </>
  );
}
