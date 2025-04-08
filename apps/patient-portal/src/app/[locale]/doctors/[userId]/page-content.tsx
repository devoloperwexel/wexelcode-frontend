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
import { GetDoctorResponse } from '@wexelcode/types';
import { useTranslations } from 'next-intl';

import {
  DoctorAppointmentsTab,
  DoctorDetailsTitle,
} from '../../../../components/doctors';

interface DoctorPageContentProps {
  initialDate: Date;
  doctor: GetDoctorResponse;
}

export default function DoctorPageContent({
  initialDate,
  doctor,
}: DoctorPageContentProps) {
  const t = useTranslations('doctors.doctorPage');

  return (
    <div className="grid grid-cols-3 gap-4 h-full">
      <Card>
        <CardHeader className="flex items-center">
          <Avatar className="h-[120px] w-[120px]">
            <AvatarImage
              src={doctor?.data.user.profilePictureUrl}
              alt={`${doctor?.data.user.firstName} ${doctor?.data.user.lastName}`}
            />
            <AvatarFallback>
              {doctor?.data.user.firstName[0].toUpperCase()}
            </AvatarFallback>
          </Avatar>
          <CardTitle>
            {doctor?.data.user.firstName} {doctor?.data.user.lastName}
          </CardTitle>
          <CardDescription>{doctor?.data.specialty}</CardDescription>
        </CardHeader>

        <CardContent className="space-y-2">
          <Text>{doctor?.data.description}</Text>
          <div className="space-y-4">
            <DoctorDetailsTitle
              title={t('gender')}
              detail={doctor?.data.user.gender}
            />
            <DoctorDetailsTitle
              title={t('experience')}
              detail={`${doctor?.data.totalYearsOfExperience} ${t('years')}`}
            />
            <DoctorDetailsTitle
              title={t('languages')}
              detail={doctor?.data.user.languages
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
              {doctor?.data.id && (
                <DoctorAppointmentsTab
                  doctor={doctor.data}
                  initialDate={initialDate}
                />
              )}
            </TabsContent>
            <TabsContent value="experience">
              <Text>{doctor?.data.description}</Text>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </div>
  );
}
