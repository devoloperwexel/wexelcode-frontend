'use client';

import {
  Button,
  Card,
  CardContent,
  CardFooter,
  Form,
  FormInputField,
} from '@wexelcode/components';
import { useGetDoctorByUserId, useUpdateDoctor } from '@wexelcode/hooks';
import { getDirtyValues } from '@wexelcode/utils';
import { useSession } from 'next-auth/react';
import { useTranslations } from 'next-intl';
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';

export function ProfessionalDetailsTab() {
  const t = useTranslations('settings.settingsPage.tabs.professional');

  const { data: userData } = useSession();

  const form = useForm();

  const { mutate: update, isPending } = useUpdateDoctor();

  const { data: doctorResponse } = useGetDoctorByUserId(userData?.user.id);

  useEffect(() => {
    if (!doctorResponse) return;

    form.reset({
      ...doctorResponse.data,
    });
  }, [doctorResponse, form]);

  const handleFormSubmit = (data: any) => {
    const updateData = getDirtyValues(form.formState.dirtyFields, data);

    update({
      userId: doctorResponse?.data.userId,
      id: doctorResponse?.data.id,
      ...updateData,
    });
  };

  return (
    <Card className="p-4">
      <CardContent>
        <Form {...form}>
          <form className="grid grid-cols-2 gap-6">
            <FormInputField
              disabled
              label={t('specialty')}
              name="specialty"
              rules={{
                required: true,
              }}
            />
            <FormInputField
              label={t('totalYearsOfExperience')}
              name="totalYearsOfExperience"
              type="number"
              rules={{
                required: true,
              }}
            />

            <div className="col-span-2">
              <FormInputField
                label={t('description')}
                name="description"
                rules={{
                  required: true,
                }}
                lines={3}
              />
            </div>
          </form>
        </Form>
      </CardContent>

      <CardFooter className="flex justify-end">
        <Button
          disabled={!form.formState.isDirty}
          loading={isPending}
          onClick={form.handleSubmit(handleFormSubmit)}
        >
          {t('save')}
        </Button>
      </CardFooter>
    </Card>
  );
}
