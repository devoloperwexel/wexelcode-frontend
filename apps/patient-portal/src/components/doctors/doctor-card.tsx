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
  Text,
} from '@wexelcode/components';
import { Doctor } from '@wexelcode/types';
import { useTranslations } from 'next-intl';

import Routes from '../../constants/routes';
import { Link } from '../../i18n/routing';

interface DoctorCardProps {
  doctor: Doctor;
  date?: Date;
}

export function DoctorCard({ doctor, date }: DoctorCardProps) {
  const t = useTranslations('doctors.doctorListingPage');

  let href = `${Routes.doctors}/${doctor.userId}`;

  if (date) {
    href += `?date=${date.toISOString()}`;
  }

  return (
    <Card>
      <CardHeader className="flex items-center">
        <Avatar className="h-[120px] w-[120px]">
          <AvatarImage
            src={doctor.user.profilePictureUrl}
            alt={`${doctor.user.firstName} ${doctor.user.lastName}`}
          />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <CardTitle>{`${doctor.user.firstName} ${doctor.user.lastName}`}</CardTitle>
        <CardDescription>{doctor.specialty}</CardDescription>
      </CardHeader>
      <CardContent>
        <Text className="line-clamp-3">{doctor.description}</Text>
      </CardContent>
      <CardFooter className="justify-center">
        <Link href={href}>
          <Button>{t('bookAppointment')}</Button>
        </Link>
      </CardFooter>
    </Card>
  );
}
