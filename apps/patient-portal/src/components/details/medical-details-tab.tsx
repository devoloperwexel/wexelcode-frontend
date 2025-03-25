'use client';

import {
  Button,
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  Form,
} from '@wexelcode/components';
import { useGetPatientByUserId, useUpdatePatient } from '@wexelcode/hooks';
import { getDirtyValues } from '@wexelcode/utils';
import { useSession } from 'next-auth/react';
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';

import { MedicalDetailsForm } from './medical-details-form';

export function MedicalDetailsTab() {
  const { data: userData } = useSession();

  const { data: patientData } = useGetPatientByUserId(userData?.user.id);

  const form = useForm();

  const { mutate: update } = useUpdatePatient();

  useEffect(() => {
    form.reset(patientData);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [patientData]);

  const handleNSave = async (data: any) => {
    const dirtyValues = getDirtyValues(form.formState.dirtyFields, data);
    // TODO: remove userID
    update({ userId: userData?.user.id, id: patientData?.id, ...dirtyValues });
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(handleNSave)}>
        <Card>
          <CardHeader>Medical Details</CardHeader>
          <CardContent>
            <MedicalDetailsForm includeScreening />
          </CardContent>
          <CardFooter className="flex justify-end">
            <Button>Save</Button>
          </CardFooter>
        </Card>
      </form>
    </Form>
  );
}
