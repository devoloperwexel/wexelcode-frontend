'use client';

import {
  Button,
  Card,
  CardContent,
  CardFooter,
  Form,
  FormInputField,
  FormSelectorField,
  FormSmartMultiSelectorField,
  FormSmartSelectorField,
  UserAvatar,
} from '@wexelcode/components';
import {
  CountriesOptions,
  GenderOptions,
  LanguageOptions,
} from '@wexelcode/constants';
import { useUpdateUser } from '@wexelcode/hooks';
import { dateTimeFormat, getDirtyValues } from '@wexelcode/utils';
import { useSession } from 'next-auth/react';
import { useLocale, useTranslations } from 'next-intl';
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';

export function AccountDetailsTab() {
  const t = useTranslations('settings.settingsPage.tabs.account');
  const tOptions = useTranslations('options');
  const local = useLocale() as 'en' | 'de';

  const genderOptions = GenderOptions.map((option) => ({
    label: tOptions(`gender.${option}`),
    value: option,
  }));

  const languagesOptions = LanguageOptions.map((option) => ({
    label: option.label[local],
    value: option.value,
  }));

  const countryOptions = CountriesOptions.map((option) => ({
    label: option.label[local],
    value: option.value,
  }));

  const timeZonesOptions = Intl.supportedValuesOf('timeZone').map((tz) => ({
    label: tz.replaceAll('_', ' '),
    value: tz,
  }));

  const { data: userData } = useSession();

  const form = useForm();

  const { mutate: update, isPending } = useUpdateUser();

  useEffect(() => {
    if (!userData?.user) return;
    form.reset({
      ...userData?.user,
      birthDay: dateTimeFormat(userData?.user.birthDay, 'yyyy-MM-DD'),
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
            <FormInputField
              label={t('birthday')}
              name="birthDay"
              type="date"
              rules={{
                required: true,
              }}
            />
            <FormSelectorField
              label={t('gender')}
              name="gender"
              options={genderOptions}
              rules={{
                required: true,
              }}
            />
            <FormInputField
              label={t('address')}
              name="address"
              rules={{
                required: true,
              }}
            />
            <FormInputField
              label={t('city')}
              name="city"
              rules={{
                required: true,
              }}
            />
            <FormSmartSelectorField
              label={t('state')}
              name="country"
              placeholder={t('select')}
              searchPlaceholder={t('search')}
              options={countryOptions}
              rules={{
                required: true,
              }}
            />
            <FormInputField
              label={t('zipCode')}
              name="zipCode"
              type="number"
              rules={{
                required: true,
              }}
            />

            <FormSmartMultiSelectorField
              label={t('languages')}
              name="languages"
              placeholder={t('select')}
              searchPlaceholder={t('search')}
              options={languagesOptions}
              rules={{
                required: true,
              }}
            />
            <FormSmartSelectorField
              label={t('timezone')}
              name="timeZone"
              placeholder={t('select')}
              searchPlaceholder={t('search')}
              options={timeZonesOptions}
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
