import { cn } from "cn";

function Skeleton({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="skeleton"
      className={cn("animate-pulse bg-muted", className)}
      {...props}
    />
  );
}

export function SkeletonText() {
  return (
    <div className="flex w-full flex-col gap-1 mt-2">
      <Skeleton className="h-4 w-10/12 bg-[grey]/50 rounded-md" />
      <Skeleton className="h-4 w-8/12 bg-[grey]/40 rounded-md" />
    </div>
  );
}

export { Skeleton };
