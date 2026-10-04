import { Progress } from "@/components/ui/progress";

export default function ProgressWithLabel() {
  const sold = 168;
  const quota = 200;
  const percent = Math.round((sold / quota) * 100);

  return (
    <div className="flex w-full max-w-sm flex-col gap-2">
      <div className="flex justify-between typo-label-m">
        <span className="text-fg-primary">Kuota Sesi Pagi</span>
        <span className="text-fg-secondary">
          {sold}/{quota} tiket
        </span>
      </div>
      <Progress value={percent} aria-label="Kuota terjual" />
      <p className="typo-body-s text-fg-tertiary">Tersisa {quota - sold} tiket untuk hari ini.</p>
    </div>
  );
}
