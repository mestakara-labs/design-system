import { Skeleton } from "@/components/ui/skeleton";

export default function SkeletonCard() {
  // Same shape as a destination card: photo, overline, title, meta, price row.
  return (
    <div className="flex w-full max-w-sm flex-col gap-3 rounded-lg border border-border bg-surface p-4">
      <Skeleton className="aspect-[19/10] w-full rounded-md" />
      <Skeleton className="h-3 w-24" />
      <Skeleton className="h-5 w-3/4" />
      <Skeleton className="h-3 w-1/2" />
      <div className="flex items-center justify-between pt-2">
        <Skeleton className="h-7 w-28" />
        <Skeleton className="h-9 w-24 rounded-md" />
      </div>
    </div>
  );
}
