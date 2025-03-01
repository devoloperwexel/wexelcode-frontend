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
} from '@wexelcode/components';
import { Doctor } from '@wexelcode/types';

import Routes from '../../constants/routes';
import { Link } from '../../i18n/routing';

interface DoctorCardProps {
  doctor: Doctor;
}

export function DoctorCard({ doctor }: DoctorCardProps) {
  return (
    <Card>
      <CardHeader className="flex items-center">
        <Avatar className="h-[120px] w-[120px]">
          <AvatarImage
            src={doctor.user.profilePictureUrl}
            alt={doctor.user.name}
          />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <CardTitle>{doctor.user.name}</CardTitle>
        <CardDescription>{doctor.specialty}</CardDescription>
      </CardHeader>
      <CardContent>
        <p>{doctor.description}</p>
      </CardContent>
      <CardFooter className="justify-center">
        <Link href={`${Routes.doctors.url}/${doctor.userId}`}>
          <Button>Book Now</Button>
        </Link>
      </CardFooter>
    </Card>
  );
}
