import { Skeleton } from '@wexelcode/components';

export function DoctorsLoadingSkeleton() {
  return (
    <>
      {Array.from({ length: 7 }).map((_, index) => (
        <div key={index} className="flex flex-col items-center space-y-4">
          <Skeleton className="h-[120px] w-[120px] rounded-full" />
          <Skeleton className="w-1/2 h-4" />
          <Skeleton className="w-1/4 h-2" />
          <Skeleton className="w-full h-16" />
        </div>
      ))}
    </>
  );
}
