'use client';

import {
  Avatar,
  AvatarFallback,
  AvatarImage,
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
  Text,
} from '@wexelcode/components';
import { useGetDoctorByUserId } from '@wexelcode/hooks';
import { useTranslations } from 'next-intl';

import {
  DoctorAppointmentsTab,
  DoctorDetailsTitle,
} from '../../../../components/doctors';

interface DoctorPageContentProps {
  userId: string;
  initialDate: Date;
}

export default function DoctorPageContent({
  userId,
  initialDate,
}: DoctorPageContentProps) {
  const t = useTranslations('doctors.doctorPage');

  const { data: response } = useGetDoctorByUserId(userId);

  return (
    <div className="grid grid-cols-3 gap-4 h-full">
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
              title={t('gender')}
              detail={response?.data.user.gender}
            />
            <DoctorDetailsTitle
              title={t('experience')}
              detail={`${response?.data.totalYearsOfExperience} ${t('years')}`}
            />
            <DoctorDetailsTitle
              title={t('languages')}
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
              <TabsTrigger value="appointments">
                {t('appointments')}
              </TabsTrigger>
              <TabsTrigger value="experience">{t('experience')}</TabsTrigger>
            </TabsList>
            <TabsContent value="appointments">
              {response?.data.id && (
                <DoctorAppointmentsTab
                  doctorId={response?.data.id}
                  initialDate={initialDate}
                />
              )}
            </TabsContent>
            <TabsContent value="experience">
              <Text>{response?.data.description}</Text>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </div>
  );
}
