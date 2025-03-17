import {
  FormDateInputField,
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
        <FormInputField label={t('birthday')} name="birthDay" type="date" />

        <FormSelectField
          label={t('gender')}
          name="gender"
          options={genderOptions}
        />
      </div>

      <div>
        <FormInputField label={t('address')} name="address" />
      </div>

      <div className="grid grid-cols-3 gap-6">
        <FormInputField label={t('city')} name="city" />
        <FormInputField label={t('state')} name="country" />
        <FormInputField label={t('zipCode')} name="zipCode" type="number" />
      </div>

      <div>
        <FormMultiSelectField
          label={t('languages')}
          name="languages"
          options={languagesOptions}
          placeholder={t('selectLanguages')}
        />
      </div>
    </div>
  );
}
