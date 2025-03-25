import {
  FormInputField,
  FormMultiSelectorField,
  FormPhoneInputField,
  FormSelectorField,
} from '@wexelcode/components';
import { GenderOptions, LanguageOptions } from '@wexelcode/constants';
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
  const local = useLocale();

  const genderOptions = GenderOptions.map((option) => ({
    label: tOptions(`gender.${option}`),
    value: option,
  }));

  const languagesOptions = LanguageOptions.map((option) => ({
    label: tOptions(`language.${option}`),
    value: option,
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
          </div>
        </>
      )}

      <div className="grid grid-cols-2 gap-6">
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
      </div>

      <div className="grid grid-cols-2 gap-6">
        <FormPhoneInputField
          defaultCountry="GE"
          labels={local === 'de' ? de : undefined}
          name="mobile"
          label={t('mobile')}
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
      </div>

      <div className="grid grid-cols-3 gap-6">
        <FormInputField
          label={t('city')}
          name="city"
          rules={{
            required: true,
          }}
        />
        <FormInputField
          label={t('state')}
          name="country"
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
      </div>

      <div>
        <FormMultiSelectorField
          label={t('languages')}
          name="languages"
          options={languagesOptions}
          rules={{
            required: true,
          }}
        />
      </div>
    </div>
  );
}
