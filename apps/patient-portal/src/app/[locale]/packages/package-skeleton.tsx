import { Skeleton } from '@wexelcode/components';

export function PackageSkeleton() {
  return (
    <div className=" px-56 py-8">
      <div className="flex flex-row items-center space-x-8 p-8">
        <Skeleton className="w-full h-96" />
        <Skeleton className="w-full h-96" />
        <Skeleton className="w-full h-96" />
      </div>
    </div>
  );
}
