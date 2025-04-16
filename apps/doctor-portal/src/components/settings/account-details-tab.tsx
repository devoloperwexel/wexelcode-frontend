'use client';

import {
  Button,
  Card,
  CardContent,
  CardFooter,
  Form,
  FormInputField,
  UserAvatar,
} from '@wexelcode/components';
import { useUpdateUser } from '@wexelcode/hooks';
import { getDirtyValues } from '@wexelcode/utils';
import { useSession } from 'next-auth/react';
import { useTranslations } from 'next-intl';
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';

export function AccountDetailsTab() {
  const t = useTranslations('settings.settingsPage.tabs.account');

  const { data: userData } = useSession();

  const form = useForm();

  const { mutate: update, isPending } = useUpdateUser();

  useEffect(() => {
    if (!userData?.user) return;

    form.reset({
      ...userData?.user,
    });
  }, [userData, form]);

  const handleFormSubmit = (data: any) => {
    const updateData = getDirtyValues(form.formState.dirtyFields, data);

    update({ id: userData?.user.id, ...updateData });
  };

  return (
    <Card className="p-4">
      <CardContent>
        <Form {...form}>
          <form className="grid grid-cols-2 gap-6">
            <div className="col-span-2 flex items-center justify-center">
              <UserAvatar
                className="w-24 h-24"
                profileUrl={userData?.user.profilePictureUrl}
                name={`${userData?.user.firstName} ${userData?.user.lastName}`}
              />
            </div>
            <FormInputField
              label={t('firstName')}
              name="firstName"
              rules={{
                required: true,
              }}
            />

            <FormInputField
              label={t('lastName')}
              name="lastName"
              rules={{
                required: true,
              }}
            />
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
