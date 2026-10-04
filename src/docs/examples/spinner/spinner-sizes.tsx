import { Spinner } from "@/components/ui/spinner";

export default function SpinnerSizes() {
  // Size with `size-*`, color with `text-*` (the spinner uses the current text color).
  return (
    <>
      <Spinner className="size-4 text-primary" />
      <Spinner className="size-6 text-secondary" />
      <Spinner className="size-8 text-tertiary" />
      <Spinner className="size-10 text-fg-tertiary" />
    </>
  );
}
