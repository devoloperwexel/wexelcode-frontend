import {
  Card,
  CardContent,
  CardHeader,
  Text,
  UserAvatar,
} from '@wexelcode/components';
import { User } from '@wexelcode/types';

import { GenderBadge, LanguageTags } from '../common';

interface DoctorInfoCardProps {
  user: User;
}

export function DoctorInfoCard({ user }: DoctorInfoCardProps) {
  return (
    <Card>
      <CardHeader>Doctor Information</CardHeader>

      <CardContent className="flex items-center space-x-4">
        <UserAvatar
          className="h-[80px] w-[80px]"
          name={`${user.firstName} ${user.lastName}`}
          profileUrl={user.profilePictureUrl}
        />
        <div className="flex flex-col space-y-1">
          <div className="flex items-center space-x-2">
            <Text variant="large" weight="bold">
              {user.firstName} {user.lastName}
            </Text>
            <GenderBadge gender={user.gender} />
          </div>

          <LanguageTags languages={user.languages} />
        </div>
      </CardContent>
    </Card>
  );
}
