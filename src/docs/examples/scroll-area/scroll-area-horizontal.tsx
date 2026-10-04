import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";

const PHOTOS = [
  { src: "/images/tea-hills-1.svg", caption: "Gunung Mas" },
  { src: "/images/tea-hills-2.svg", caption: "Rancabali" },
  { src: "/images/tea-hills-3.svg", caption: "Malabar" },
  { src: "/images/tea-hills-1.svg", caption: "Kertamanah" },
  { src: "/images/tea-hills-2.svg", caption: "Sedep" },
];

export default function ScrollAreaHorizontal() {
  return (
    <ScrollArea className="w-full max-w-md rounded-md border border-border bg-surface whitespace-nowrap">
      <div className="flex w-max gap-4 p-4">
        {PHOTOS.map((photo) => (
          <figure key={photo.caption} className="shrink-0">
            <img
              src={photo.src}
              alt={`Kebun teh ${photo.caption}`}
              className="h-32 w-48 rounded-md object-cover"
            />
            <figcaption className="pt-2 typo-body-s text-fg-secondary">{photo.caption}</figcaption>
          </figure>
        ))}
      </div>
      {/* Horizontal scrolling needs its own scrollbar. */}
      <ScrollBar orientation="horizontal" />
    </ScrollArea>
  );
}
