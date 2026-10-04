import { Button } from "@/components/ui/button";
import { Spinner } from "@/components/ui/spinner";

export default function SpinnerButton() {
  return (
    <>
      <Button disabled>
        <Spinner />
        Memproses…
      </Button>
      <Button variant="outline" disabled>
        <Spinner />
        Mengunduh PDF
      </Button>
    </>
  );
}
