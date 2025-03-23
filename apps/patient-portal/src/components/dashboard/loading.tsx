import { Card, CardContent, CardHeader, Skeleton } from '@wexelcode/components';

export function LoadingAppointmentCard() {
  return (
    <Card>
      <CardHeader>
        <Skeleton className="w-3/4 h-4" />
      </CardHeader>
      <CardContent className="flex flex-col space-y-2">
        <div className="flex space-x-4">
          <Skeleton className="w-15 h-15" />
          <Skeleton className="w-1/3 h-4" />
        </div>

        <Skeleton className="w-1/2 h-2" />
        <Skeleton className="w-1/3 h-2" />

        <Skeleton className="w-full h-4" />
      </CardContent>
    </Card>
  );
}
