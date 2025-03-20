import {
  FormInputField,
  FormMultiSelectorField,
  FormSelectorField,
} from '@wexelcode/components';
import { GenderOptions, LanguageOptions } from '@wexelcode/constants';
import { useTranslations } from 'next-intl';

interface PersonalDetailsFormProps {
  includeAllFields?: boolean;
}

export function PersonalDetailsForm({
  includeAllFields,
}: PersonalDetailsFormProps) {
  const t = useTranslations('profile.personalDetailsForm');
  const tOptions = useTranslations('options');

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

      <div>
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
