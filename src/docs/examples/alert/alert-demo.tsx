import { InfoIcon } from "lucide-react";

import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

export default function AlertDemo() {
  return (
    <Alert className="max-w-lg">
      <InfoIcon />
      <AlertTitle>Jam operasional berubah</AlertTitle>
      <AlertDescription>
        Selama libur sekolah, kebun buka lebih pagi pukul 07.00–18.00.
      </AlertDescription>
    </Alert>
  );
}
