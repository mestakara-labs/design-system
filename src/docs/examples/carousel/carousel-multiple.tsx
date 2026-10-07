import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const UNITS = [
  { name: "Gunung Mas Tea Hills", city: "Bogor" },
  { name: "Rancabali Tea Valley", city: "Bandung" },
  { name: "Malabar Tea Village", city: "Bandung" },
  { name: "Walini by Me", city: "Bandung Barat" },
  { name: "Bosscha Space", city: "Lembang" },
];

export default function CarouselMultiple() {
  // basis-1/2 = two slides visible; align "start" keeps the first slide on the left.
  return (
    <div className="w-full max-w-lg px-14">
      <Carousel opts={{ align: "start" }}>
        <CarouselContent>
          {UNITS.map((unit) => (
            <CarouselItem key={unit.name} className="basis-1/2">
              <Card>
                <CardHeader>
                  <CardTitle>{unit.name}</CardTitle>
                  <CardDescription>{unit.city}</CardDescription>
                </CardHeader>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
}
