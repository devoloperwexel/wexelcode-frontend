import {
  FormInputField,
  FormPhoneInputField,
  FormSelectorField,
  FormSmartMultiSelectorField,
  FormSmartSelectorField,
} from '@wexelcode/components';
import { GenderOptions } from '@wexelcode/constants';
import { countries, languages } from 'country-data';
import _ from 'lodash';
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

  const languagesOptions = _.unionBy(
    languages.all,
    (language) => language.alpha3
  ).map((language) => ({
    value: language.alpha3,
    label: language.name,
  }));

  const countryOptions = _.unionBy(
    countries.all,
    (county) => county.alpha2
  ).map((country) => ({
    value: country.alpha2,
    label: country.name,
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
        <FormSmartSelectorField
          label={t('state')}
          name="country"
          placeholder={t('select')}
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
      </div>

      <div>
        <FormSmartMultiSelectorField
          label={t('languages')}
          name="languages"
          placeholder={t('select')}
          options={languagesOptions}
          rules={{
            required: true,
          }}
        />
      </div>
    </div>
  );
}
