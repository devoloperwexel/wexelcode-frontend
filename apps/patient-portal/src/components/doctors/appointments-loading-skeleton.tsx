import { Skeleton } from '@wexelcode/components';

export default function AppointmentsLoadingSkeleton() {
  return (
    <>
      {Array.from({ length: 13 }).map((_, index) => (
        <Skeleton className="h-8" key={index} />
      ))}
    </>
  );
}
