import { Slider } from "@/components/ui/slider";

export default function SliderDemo() {
  return <Slider defaultValue={[40]} max={100} step={1} className="max-w-sm" aria-label="Volume" />;
}
