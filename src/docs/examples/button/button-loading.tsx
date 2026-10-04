import { LoaderCircleIcon } from "lucide-react";

import { Button } from "@/components/ui/button";

export default function ButtonLoading() {
  return (
    <Button disabled>
      <LoaderCircleIcon className="animate-spin" />
      Memproses pembayaran…
    </Button>
  );
}
