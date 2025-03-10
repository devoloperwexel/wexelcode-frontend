import { Skeleton } from '@wexelcode/components';

export default function QuestionsLoading() {
  return (
    <div className="space-y-4">
      {Array.from({ length: 5 }).map((_, index) => (
        <div className="flex flex-col space-y-2" key={index}>
          <Skeleton className="w-1/6 h-2" />
          <Skeleton className="w-full h-1" />
          <Skeleton className="w-full h-1" />
          <Skeleton className="w-full h-12" />
        </div>
      ))}
    </div>
  );
}
