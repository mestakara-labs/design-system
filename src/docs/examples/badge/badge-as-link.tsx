import { Badge } from "@/components/ui/badge";

export default function BadgeAsLink() {
  // With asChild the badge becomes the <a>; the dot is not added.
  return (
    <Badge asChild variant="outline">
      <a href="#promo" className="hover:bg-subtle">
        Lihat promo
      </a>
    </Badge>
  );
}
