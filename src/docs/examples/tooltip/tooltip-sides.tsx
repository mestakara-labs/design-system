import { Button } from "@/components/ui/button";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";

const SIDES = [
  { side: "top", label: "Atas" },
  { side: "right", label: "Kanan" },
  { side: "bottom", label: "Bawah" },
  { side: "left", label: "Kiri" },
] as const;

export default function TooltipSides() {
  return (
    <>
      {SIDES.map(({ side, label }) => (
        <Tooltip key={side}>
          <TooltipTrigger asChild>
            <Button variant="outline">{label}</Button>
          </TooltipTrigger>
          <TooltipContent side={side}>Tooltip di {label.toLowerCase()}</TooltipContent>
        </Tooltip>
      ))}
    </>
  );
}
