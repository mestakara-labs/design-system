import { useEffect, useState } from "react";

import { Progress } from "@/components/ui/progress";

export default function ProgressDemo() {
  const [value, setValue] = useState(15);

  // Simulates a task that finishes after a moment.
  useEffect(() => {
    const timer = setTimeout(() => setValue(68), 600);
    return () => clearTimeout(timer);
  }, []);

  return <Progress value={value} className="max-w-sm" aria-label="Progres unggah" />;
}
