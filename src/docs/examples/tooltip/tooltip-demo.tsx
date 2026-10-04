import { HeartIcon } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";

export default function TooltipDemo() {
  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <Button variant="outline" size="icon" aria-label="Simpan ke favorit">
          <HeartIcon />
        </Button>
      </TooltipTrigger>
      <TooltipContent>Simpan ke favorit</TooltipContent>
    </Tooltip>
  );
}
