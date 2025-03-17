import {
  FormInputField,
  FormMultiSelectField,
  FormSelectField,
} from '@wexelcode/components';
import { useTranslations } from 'next-intl';

export function PersonalDetailsForm() {
  const t = useTranslations('profile.personalDetailsForm');

  const genderOptions = [
    {
      label: 'Male',
      value: 'Male',
    },
    {
      label: 'Female',
      value: 'Female',
    },
  ];

  const languagesOptions = [
    {
      label: 'English',
      value: 'English',
    },
    {
      label: 'Spanish',
      value: 'Spanish',
    },
    {
      label: 'French',
      value: 'French',
    },
  ];

  return (
    <div className="space-y-4">
      <div className="grid grid-cols-2 gap-6">
        <FormInputField
          label={t('birthday')}
          name="birthDay"
          type="date"
          rules={{
            required: true,
          }}
        />

        <FormSelectField
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
        <FormMultiSelectField
          label={t('languages')}
          name="languages"
          options={languagesOptions}
          placeholder={t('selectLanguages')}
          rules={{
            required: true,
          }}
        />
      </div>
    </div>
  );
}
