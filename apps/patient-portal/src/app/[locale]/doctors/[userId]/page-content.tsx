'use client';

import {
  Avatar,
  AvatarFallback,
  AvatarImage,
  Button,
  Card,
  CardContent,
  CardDescription,
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
import { useGetDoctorByUserId } from '@wexelcode/hooks';

import { DoctorDetailsTitle } from '../../../../components/doctors';

interface DoctorPageContentProps {
  userId: string;
}

export default function DoctorPageContent({ userId }: DoctorPageContentProps) {
  const { data: response } = useGetDoctorByUserId(userId);

  return (
    <div className="grid grid-cols-3 gap-4">
      <Card>
        <CardHeader className="flex items-center">
          <Avatar className="h-[120px] w-[120px]">
            <AvatarImage
              src={response?.data.user.profilePictureUrl}
              alt={response?.data.user.name}
            />
            <AvatarFallback>
              {response?.data.user.name[0].toUpperCase()}
            </AvatarFallback>
          </Avatar>
          <CardTitle>{response?.data.user.name}</CardTitle>
          <CardDescription>{response?.data.specialty}</CardDescription>
        </CardHeader>
        <CardContent className="space-y-2">
          <Text>{response?.data.description}</Text>

          <div className="space-y-4">
            <DoctorDetailsTitle
              title="Gender"
              detail={response?.data.user.gender}
            />
            <DoctorDetailsTitle
              title="Experience"
              detail={`${response?.data.totalYearsOfExperience} years`}
            />
            <DoctorDetailsTitle
              title="Languages"
              detail={response?.data.user.languages
                .map((language) => language)
                .join(', ')}
            />
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
