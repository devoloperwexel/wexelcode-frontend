import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  Skeleton,
} from '@wexelcode/components';

export function LoadingAppointmentCard() {
  return (
    <Card className="flex flex-col">
      <CardHeader>
        <Skeleton className="w-3/4 h-4" />
      </CardHeader>
      <CardContent className="flex flex-col flex-grow space-y-2">
        <div className="flex items-center space-x-4 ">
          <Skeleton className="w-16 h-16 rounded-full" />
          <div className="w-full space-y-2">
            <Skeleton className="w-2/3 h-2" />
            <Skeleton className="w-1/3 h-2" />
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <Skeleton className="w-full h-10" />
          <Skeleton className="w-full h-10" />
          <Skeleton className="w-full h-10" />
          <Skeleton className="w-full h-10" />
        </div>
      </CardContent>
      <CardFooter>
        <Skeleton className="w-full h-4" />
      </CardFooter>
    </Card>
  );
}

export function CalendarAppointmentLoading() {
  return (
    <div className="space-y-4">
      {Array.from({ length: 5 }).map((_, index) => (
        <Skeleton key={index} className="w-full h-14" />
      ))}
    </div>
  );
}
