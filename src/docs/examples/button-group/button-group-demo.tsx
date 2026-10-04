import { DownloadIcon, PrinterIcon, Share2Icon } from "lucide-react";

import { Button } from "@/components/ui/button";
import { ButtonGroup } from "@/components/ui/button-group";

export default function ButtonGroupDemo() {
  return (
    <ButtonGroup aria-label="Aksi e-tiket">
      <Button variant="outline">
        <DownloadIcon />
        Unduh PDF
      </Button>
      <Button variant="outline">
        <PrinterIcon />
        Cetak
      </Button>
      <Button variant="outline" size="icon" aria-label="Bagikan">
        <Share2Icon />
      </Button>
    </ButtonGroup>
  );
}
