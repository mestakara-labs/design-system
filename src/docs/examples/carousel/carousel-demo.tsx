import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const PHOTOS = [
  { src: "/images/tea-hills-1.svg", alt: "Kebun teh Gunung Mas saat matahari terbit" },
  { src: "/images/tea-hills-2.svg", alt: "Hamparan teh Rancabali di pagi hari" },
  { src: "/images/tea-hills-3.svg", alt: "Bukit teh Malabar berkabut" },
];

export default function CarouselDemo() {
  return (
    // px-14 leaves room for the arrow buttons outside the slides.
    <div className="w-full max-w-md px-14">
      <Carousel>
        <CarouselContent>
          {PHOTOS.map((photo) => (
            <CarouselItem key={photo.src}>
              <img
                src={photo.src}
                alt={photo.alt}
                className="aspect-[19/10] w-full rounded-lg object-cover"
              />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
}
