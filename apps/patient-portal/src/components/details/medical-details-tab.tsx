'use client';

import {
  Button,
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  Form,
} from '@wexelcode/components';
import { useForm } from 'react-hook-form';

import { MedicalDetailsForm } from './medical-details-form';

export function MedicalDetailsTab() {
  const form = useForm();

  // const { data } = useSession();

  // useEffect(() => {
  //   form.reset(data?.user);
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, [data]);

  const handleSave = async (data: any) => {
    console.log(data);
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(handleSave)}>
        <Card>
          <CardHeader>Medical Details</CardHeader>
          <CardContent>
            <MedicalDetailsForm />
          </CardContent>
          <CardFooter className="flex justify-end">
            <Button>Save</Button>
          </CardFooter>
        </Card>
      </form>
    </Form>
  );
}
