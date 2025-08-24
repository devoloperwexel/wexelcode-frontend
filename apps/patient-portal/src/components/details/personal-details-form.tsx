import {
  FormInputField,
  FormPhoneInputField,
  FormSelectorField,
  FormSmartMultiSelectorField,
  FormSmartSelectorField,
} from '@wexelcode/components';
import {
  CountriesOptions,
  GenderOptions,
  LanguageOptions,
} from '@wexelcode/constants';
import { useLocale, useTranslations } from 'next-intl';
import de from 'react-phone-number-input/locale/de';

import { MyAvatar } from '../common';

interface PersonalDetailsFormProps {
  includeAllFields?: boolean;
}

export function PersonalDetailsForm({
  includeAllFields,
}: PersonalDetailsFormProps) {
  const t = useTranslations('profile.personalDetailsForm');
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

  return (
    <div className="space-y-4">
      {includeAllFields && (
        <>
          <div className="flex justify-center">
            <MyAvatar className="w-20 h-20 text-3xl text-white" />
          </div>

          <div className="grid grid-cols-2 gap-6">
            <FormInputField
              label={t('firstName')}
              name="firstName"
              rules={{
                required: {
                  value: true,
                  message: t('errorMessages.firstNameRequiredError'),
                },
              }}
            />

            <FormInputField
              label={t('lastName')}
              name="lastName"
              rules={{
                required: {
                  value: true,
                  message: t('errorMessages.lastNameRequiredError'),
                },
              }}
            />
          </div>
        </>
      )}

      <div className="grid grid-cols-2 gap-6">
        <FormInputField
          label={t('birthday')}
          name="birthDay"
          type="date"
          rules={{
            required: {
              value: true,
              message: t('errorMessages.birthDayRequiredError'),
            },
          }}
        />
        <FormSelectorField
          label={t('gender')}
          name="gender"
          options={genderOptions}
          rules={{
            required: {
              value: true,
              message: t('errorMessages.genderRequiredError'),
            },
          }}
        />
      </div>

      <div className="grid grid-cols-2 gap-6">
        <FormPhoneInputField
          defaultCountry="DE"
          labels={local === 'de' ? de : undefined}
          name="mobile"
          label={t('mobile')}
          rules={{
            required: {
              value: true,
              message: t('errorMessages.mobileRequiredError'),
            },
          }}
        />

        <FormInputField
          label={t('address')}
          name="address"
          rules={{
            required: {
              value: true,
              message: t('errorMessages.addressRequiredError'),
            },
          }}
        />
      </div>

      <div className="grid grid-cols-3 gap-6">
        <FormInputField
          label={t('city')}
          name="city"
          rules={{
            required: {
              value: true,
              message: t('errorMessages.cityRequiredError'),
            },
          }}
        />
        <FormSmartSelectorField
          label={t('state')}
          name="country"
          placeholder={t('select')}
          searchPlaceholder={t('search')}
          options={countryOptions}
          rules={{
            required: {
              value: true,
              message: t('errorMessages.countryRequiredError'),
            },
          }}
        />
        <FormInputField
          label={t('zipCode')}
          name="zipCode"
          type="number"
          rules={{
            required: {
              value: true,
              message: t('errorMessages.zipCodeRequiredError'),
            },
          }}
        />
      </div>

      <div className="grid grid-cols-2 gap-6">
        <FormSmartMultiSelectorField
          label={t('languages')}
          name="languages"
          placeholder={t('select')}
          searchPlaceholder={t('search')}
          maxItems={2}
          options={languagesOptions}
          rules={{
            required: {
              value: true,
              message: t('errorMessages.languagesRequiredError'),
            },
          }}
        />

        <FormSmartSelectorField
          label={t('timezone')}
          searchPlaceholder={t('search')}
          placeholder={t('select')}
          name="timeZone"
          options={timeZonesOptions}
        />
      </div>
    </div>
  );
}
