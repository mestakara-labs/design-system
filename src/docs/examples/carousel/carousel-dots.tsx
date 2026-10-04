import { cn } from "cn";
import { useEffect, useState } from "react";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/carousel";

const PHOTOS = ["/images/tea-hills-1.svg", "/images/tea-hills-2.svg", "/images/tea-hills-3.svg"];

export default function CarouselDots() {
  // setApi gives access to the carousel, to build custom controls like these dots.
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!api) return;
    const update = () => setCurrent(api.selectedScrollSnap());
    update();
    api.on("select", update);
    return () => {
      api.off("select", update);
    };
  }, [api]);

  return (
    <div className="flex w-full max-w-md flex-col items-center gap-3">
      <Carousel setApi={setApi} opts={{ loop: true }} className="w-full">
        <CarouselContent>
          {PHOTOS.map((src, index) => (
            <CarouselItem key={src}>
              <img
                src={src}
                alt={`Foto destinasi ${index + 1}`}
                className="aspect-[19/10] w-full rounded-lg object-cover"
              />
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>

      <div className="flex gap-2">
        {PHOTOS.map((src, index) => (
          <button
            key={src}
            type="button"
            aria-label={`Ke foto ${index + 1}`}
            onClick={() => api?.scrollTo(index)}
            className={cn(
              "h-2 cursor-pointer rounded-full transition-all",
              index === current ? "w-6 bg-primary" : "w-2 bg-border-strong",
            )}
          />
        ))}
      </div>
    </div>
  );
}
