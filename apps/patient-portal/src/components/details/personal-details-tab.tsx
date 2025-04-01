'use client';

import {
  Button,
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  Form,
} from '@wexelcode/components';
import { useUpdateUser } from '@wexelcode/hooks';
import { dateTimeFormat, getDirtyValues } from '@wexelcode/utils';
import { useSession } from 'next-auth/react';
import { useTranslations } from 'next-intl';
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';

import { PersonalDetailsForm } from './personal-details-form';

export function PersonalDetailsTab() {
  const t = useTranslations('profile');

  const form = useForm();

  const { data: userData } = useSession();

  const { mutate: update } = useUpdateUser();

  useEffect(() => {
    if (!userData?.user) return;

    form.reset({
      ...userData?.user,
      birthDay: dateTimeFormat(userData?.user.birthDay, 'yyyy-MM-DD'),
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [userData]);

  const handleSave = async (data: any) => {
    const dirtyValues = getDirtyValues(form.formState.dirtyFields, data);
    // TODO: remove userID
    update({ id: userData?.user.id, ...dirtyValues });
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(handleSave)}>
        <Card>
          <CardHeader>{t('personalDetails')} </CardHeader>

          <CardContent>
            <PersonalDetailsForm includeAllFields />
          </CardContent>

          <CardFooter className="flex justify-end">
            <Button disabled={!form.formState.isDirty}>{t('save')}</Button>
          </CardFooter>
        </Card>
      </form>
    </Form>
  );
}
