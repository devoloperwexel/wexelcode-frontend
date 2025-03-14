'use client';

import {
  Card,
  CardContent,
  CardHeader,
  Text,
  UserAvatar,
} from '@wexelcode/components';
import { useGetDoctorByUserId } from '@wexelcode/hooks';
import { User } from '@wexelcode/types';
import { Award, Languages, User as UserIcon } from 'lucide-react';

import { DoctorInfoLoadingSkeleton } from './loading-skeleton';

interface DoctorInfoCardProps {
  user: User;
}

export function DoctorInfoCard({ user }: DoctorInfoCardProps) {
  const { data: doctor } = useGetDoctorByUserId(user.id);

  if (!doctor) {
    return <DoctorInfoLoadingSkeleton />;
  }

  return (
    <Card>
      <CardHeader>Doctor Information</CardHeader>

      <CardContent className="grid grid-cols-2">
        <div className="flex items-center space-x-4">
          <UserAvatar
            className="h-[80px] w-[80px]"
            name={`${user.firstName} ${user.lastName}`}
            profileUrl={user.profilePictureUrl}
          />
          <div className="flex flex-col space-y-1">
            <Text variant="large" weight="bold">
              {user.firstName} {user.lastName}
            </Text>
            <Text className="text-blue-600">{doctor.data?.specialty}</Text>
            <Text variant="muted">{doctor.data?.description}</Text>
          </div>
        </div>
        <div className="flex flex-col space-y-2">
          <div className="flex items-center">
            <UserIcon className="w-5 h-5 text-blue-600 mr-3" />
            <div>
              <Text variant="muted">Gender</Text>
              <Text weight="semibold">{user.gender}</Text>
            </div>
          </div>
          <div className="flex items-center">
            <Languages className="w-5 h-5 text-blue-600 mr-3" />
            <div>
              <Text variant="muted">Languages</Text>
              <Text weight="semibold">{user.languages.join(',')}</Text>
            </div>
          </div>
          <div className="flex items-center">
            <Award className="w-5 h-5 text-blue-600 mr-3" />
            <div>
              <Text variant="muted">Experience</Text>
              <Text weight="semibold">
                {doctor.data?.totalYearsOfExperience} years
              </Text>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
