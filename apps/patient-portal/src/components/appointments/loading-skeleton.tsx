import { Card, CardContent, Skeleton } from '@wexelcode/components';

export const DoctorInfoLoadingSkeleton = () => {
  return (
    <Card>
      <CardContent>
        <div className="grid grid-cols-2 gap-4">
          <div className="flex items-center space-x-4">
            <Skeleton className="h-[80px] w-[80px] rounded-full" />
            <div className="flex flex-col space-y-1">
              <Skeleton className="h-6 w-40" />
              <Skeleton className="h-4 w-32" />
              <Skeleton className="h-4 w-60" />
            </div>
          </div>
          <div className="flex flex-col space-y-4 mt-4">
            <div className="space-y-2">
              <Skeleton className="h-4 w-20" />
              <Skeleton className="h-5 w-36" />
            </div>
            <div className="space-y-2">
              <Skeleton className="h-4 w-20" />
              <Skeleton className="h-5 w-36" />
            </div>
            <div className="space-y-2">
              <Skeleton className="h-4 w-20" />
              <Skeleton className="h-5 w-36" />
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export const AppointmentInfoLoadingSkeleton = () => {
  return (
    <Card>
      <CardContent>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="flex items-center">
            <Skeleton className="h-5 w-5 rounded-full" />
            <div>
              <Skeleton className="h-4 w-20" />
              <Skeleton className="h-5 w-40" />
            </div>
          </div>
          <div className="flex items-center">
            <Skeleton className="h-5 w-5 rounded-full" />
            <div>
              <Skeleton className="h-4 w-20" />
              <Skeleton className="h-5 w-40" />
            </div>
          </div>
          <div className="flex items-center">
            <Skeleton className="h-5 w-5 rounded-full" />
            <div>
              <Skeleton className="h-4 w-20" />
              <Skeleton className="h-5 w-40" />
            </div>
          </div>
          <div className="flex items-center">
            <Skeleton className="h-5 w-5 rounded-full" />
            <div>
              <Skeleton className="h-4 w-20" />
              <Skeleton className="h-5 w-40" />
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export const AppointmentListLoadingSkeleton = () => {
  return (
    <div className="space-y-4">
      {Array.from({ length: 6 }, (_, index) => (
        <div key={index}>
          <div className="flex items-center space-x-4">
            <Skeleton className="h-16 w-16 rounded-full" />
            <div className="flex flex-col space-y-2 w-4/5">
              <Skeleton className="h-6 w-fll" />
              <Skeleton className="h-4 w-32" />
              <Skeleton className="h-4 w-60" />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
