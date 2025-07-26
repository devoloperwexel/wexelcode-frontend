import { Skeleton } from '@wexelcode/components';

export default function PaymentLoading() {
  return (
    <div className="flex flex-col space-y-3">
      {/* Card Header */}
      <div className="flex items-center justify-between">
        <Skeleton className="h-6 w-[100px]" />
        <Skeleton className="h-6 w-[50px]" />
      </div>

      {/* Card Number */}
      <div className="space-y-2">
        <Skeleton className="h-4 w-[200px]" />
        <Skeleton className="h-4 w-[180px]" />
      </div>

      {/* Card Details */}
      <div className="flex items-center justify-between">
        <Skeleton className="h-4 w-[100px]" />
        <Skeleton className="h-4 w-[80px]" />
      </div>

      {/* Card Footer */}
      <Skeleton className="h-6 w-full" />
    </div>
  );
}
