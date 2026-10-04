import { Slider } from "@/components/ui/slider";

export default function SliderDisabled() {
  return <Slider defaultValue={[60]} disabled className="max-w-sm" aria-label="Kapasitas" />;
}
