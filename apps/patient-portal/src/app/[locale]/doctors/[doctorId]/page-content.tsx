'use client';

import {
  Avatar,
  AvatarFallback,
  AvatarImage,
  Button,
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
  ScrollArea,
} from '@wexelcode/components';

export default function DoctorPageContent() {
  return (
    <div className="grid grid-cols-3 gap-4">
      <Card className="h-[400px]">
        <CardHeader className="flex items-center">
          <Avatar className="h-[120px] w-[120px]">
            <AvatarImage
              src={'https://ui.shadcn.com/avatars/shadcn.jpg'}
              alt={'https://ui.shadcn.com/avatars/shadcn.jpg'}
            />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <CardTitle>Dr. John Doe</CardTitle>
          <CardDescription>Cardiologist</CardDescription>
        </CardHeader>
        <CardContent>
          <p>Dr. John Doe is a cardiologist with 10 years of experience.</p>
        </CardContent>
      </Card>

      <Card className="col-span-2">
        <CardContent className="p-8">
          <ScrollArea className="h-[600px]">
            <CardTitle>Appointments</CardTitle>
            {Array.from({ length: 6 }).map((_, index) => (
              <div key={index} className="p-4 border-b border-border space-y-2">
                <p>Monday, 12th July 2021</p>
                <div className="grid grid-cols-3 gap-4">
                  {Array.from({ length: 5 }).map((_, index) => (
                    <div
                      key={index}
                      className="flex justify-center border p-2 hover:bg-border rounded-md cursor-pointer"
                    >
                      <p>10:00 AM - 10:30 AM</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </ScrollArea>
        </CardContent>

        <CardFooter className="justify-end">
          <Button>Book</Button>
        </CardFooter>
      </Card>
    </div>
  );
}
