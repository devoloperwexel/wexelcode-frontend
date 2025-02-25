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

import Routes from '../../constants/routes';
import { Link } from '../../i18n/routing';

export function DoctorCard() {
  return (
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
      <CardContent>
        <p>Dr. John Doe is a cardiologist with 10 years of experience.</p>
      </CardContent>
      <CardFooter className="justify-center">
        <Link href={`${Routes.doctors.url}/1`}>
          <Button>Book Now</Button>
        </Link>
      </CardFooter>
    </Card>
  );
}
