import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

const SIDES = [
  { side: "top", label: "Atas" },
  { side: "right", label: "Kanan" },
  { side: "bottom", label: "Bawah" },
  { side: "left", label: "Kiri" },
] as const;

export default function SheetSides() {
  return (
    <>
      {SIDES.map(({ side, label }) => (
        <Sheet key={side}>
          <SheetTrigger asChild>
            <Button variant="outline">{label}</Button>
          </SheetTrigger>
          <SheetContent side={side}>
            <SheetHeader>
              <SheetTitle>Sheet dari {label.toLowerCase()}</SheetTitle>
              <SheetDescription>
                Gunakan prop side=&quot;{side}&quot; untuk mengatur arah munculnya panel.
              </SheetDescription>
            </SheetHeader>
          </SheetContent>
        </Sheet>
      ))}
    </>
  );
}
