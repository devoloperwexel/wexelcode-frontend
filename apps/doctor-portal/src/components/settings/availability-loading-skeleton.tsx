import { Skeleton } from '@wexelcode/components';

export default function AvailabilityLoadingSkeleton() {
  return (
    <>
      {Array.from({ length: 18 }).map((_, index) => (
        <Skeleton className="h-16" key={index} />
      ))}
    </>
  );
}
