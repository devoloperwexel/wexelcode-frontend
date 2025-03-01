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
  DatePicker,
  ScrollArea,
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
  Text,
} from '@wexelcode/components';

import { DoctorDetailsTitle } from '../../../../components/doctors';

export default function DoctorPageContent() {
  return (
    <div className="grid grid-cols-3 gap-4">
      <Card>
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
        <CardContent className="space-y-2">
          <Text>
            Dr John Doe is a cardiologist with over 10 years of experience. He
            has worked in various hospitals and has a good reputation in the
            medical community.
          </Text>

          <div className="space-y-4">
            <DoctorDetailsTitle title="Gender" detail="10 years" />
            <DoctorDetailsTitle title="Experience" detail="10 years" />
            <DoctorDetailsTitle title="Languages" detail="English, German" />
          </div>
        </CardContent>
      </Card>

      <Card className="col-span-2">
        <CardContent className="p-8">
          <Tabs defaultValue="appointments">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="appointments">Appointments</TabsTrigger>
              <TabsTrigger value="experience">Experience</TabsTrigger>
            </TabsList>
            <TabsContent value="appointments" className="space-y-4">
              <DatePicker initialDate={new Date()} />
              <ScrollArea className="h-[600px]">
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
              </ScrollArea>
              <Button>Book</Button>
            </TabsContent>
            <TabsContent value="experience">
              <Text>
                Dr John Doe has over 10 years of experience in cardiology. He
                has worked in various hospitals and has a good reputation in the
                medical community.
              </Text>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </div>
  );
}
