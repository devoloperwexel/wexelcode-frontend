'use client';

import { Card, CardContent, CardHeader, Text } from '@wexelcode/components';
import { useGetDoctorByUserId } from '@wexelcode/hooks';
import { User } from '@wexelcode/types';
import { Award, Languages, User as UserIcon } from 'lucide-react';
import { useTranslations } from 'next-intl';

import { PhysioAvatar } from '../common';
import { DoctorInfoLoadingSkeleton } from './loading-skeleton';
import { Link } from '../../i18n/routing';
import Routes from '../../constants/routes';

interface DoctorInfoCardProps {
  user: User;
}

export function DoctorInfoCard({ user }: DoctorInfoCardProps) {
  const t = useTranslations('appointments.doctorInformationCard');
  const { data: doctor } = useGetDoctorByUserId(user.id);

  if (!doctor) {
    return <DoctorInfoLoadingSkeleton />;
  }

  return (
    <Card>
      <CardHeader>{t('title')}</CardHeader>

      <CardContent className="grid grid-cols-2">
        <div className="flex items-center space-x-4">
          <PhysioAvatar className="h-[80px] w-[80px]" physioUser={user} />
          <div className="flex flex-col space-y-1">
            <Link href={`${Routes.doctors}/${user.id}`}>
              <Text variant="large" weight="bold">
                {user.firstName} {user.lastName}
              </Text>
            </Link>

            <Text className="text-primary">{doctor.data?.specialty}</Text>
            <Text variant="muted" className=" line-clamp-4">
              {doctor.data?.description}
            </Text>
          </div>
        </div>
        <div className="flex flex-col space-y-2">
          <div className="flex items-center">
            <UserIcon className="w-5 h-5 text-primary mr-3" />
            <div>
              <Text variant="muted">{t('gender')}</Text>
              <Text weight="semibold">{user.gender}</Text>
            </div>
          </div>
          <div className="flex items-center">
            <Languages className="w-5 h-5 text-primary mr-3" />
            <div>
              <Text variant="muted">{t('languages')}</Text>
              <Text weight="semibold">{user.languages.join(',')}</Text>
            </div>
          </div>
          <div className="flex items-center">
            <Award className="w-5 h-5 text-primary mr-3" />
            <div>
              <Text variant="muted">{t('experience')}</Text>
              <Text weight="semibold">
                {doctor.data?.totalYearsOfExperience} {t('years')}
              </Text>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
