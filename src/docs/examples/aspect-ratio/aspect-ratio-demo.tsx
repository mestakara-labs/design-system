import { AspectRatio } from "@/components/ui/aspect-ratio";

export default function AspectRatioDemo() {
  // 19:10 = the landscape photo ratio of destination cards (DESIGN.md §5).
  return (
    <div className="w-full max-w-md">
      <AspectRatio ratio={19 / 10} className="overflow-hidden rounded-lg bg-muted">
        <img
          src="/images/tea-hills-2.svg"
          alt="Hamparan kebun teh Rancabali di pagi hari"
          className="size-full object-cover"
        />
      </AspectRatio>
    </div>
  );
}
