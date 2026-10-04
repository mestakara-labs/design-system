import { StarIcon } from "lucide-react";

import { Badge } from "@/components/ui/badge";

export default function BadgeWithoutDot() {
  return (
    <>
      <Badge variant="brand" dot={false}>
        Buka · 08.00–21.00
      </Badge>
      <Badge variant="premium" dot={false}>
        <StarIcon />
        4,8
      </Badge>
    </>
  );
}
