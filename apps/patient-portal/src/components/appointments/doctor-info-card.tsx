import {
  Card,
  CardContent,
  CardHeader,
  Text,
  UserAvatar,
} from '@wexelcode/components';
import { Doctor } from '@wexelcode/types';

import { ExperienceBadge, GenderBadge, LanguageTags } from '../common';

interface DoctorInfoCardProps {
  doctor?: Doctor; // TODO: remove optional
}

export function DoctorInfoCard({ doctor }: DoctorInfoCardProps) {
  return (
    <Card>
      <CardHeader>Doctor Information</CardHeader>

      <CardContent className="flex items-center space-x-4">
        <UserAvatar name="Imasha Weerakoon" className="h-[80px] w-[80px]" />
        <div className="flex flex-col space-y-1">
          <div className="flex items-center space-x-2">
            <Text variant="large" weight="bold">
              Dr. Saraha Johnson
            </Text>
            <GenderBadge gender="MALE" />
          </div>

          <Text variant="muted">Specialist in Cardiology</Text>

          <ExperienceBadge experience={5} />

          <LanguageTags languages={['English', 'Sinhala']} />
        </div>
      </CardContent>
    </Card>
  );
}
