import { FormInputField, FormMultiSelectorField } from '@wexelcode/components';
import { useTranslations } from 'next-intl';

export function MedicalDetailsForm() {
  const t = useTranslations('profile.medicalDetailsForm');

  const activities = [
    {
      label: 'Running',
      value: 'Running',
    },
    {
      label: 'Swimming',
      value: 'Swimming',
    },
    {
      label: 'Cycling',
      value: 'Cycling',
    },
    {
      label: 'Yoga',
      value: 'Yoga',
    },
    {
      label: 'Weightlifting',
      value: 'Weightlifting',
    },
    {
      label: 'Dancing',
      value: 'Dancing',
    },
  ];

  return (
    <div className="space-y-4">
      <div>
        <FormInputField
          label={t('occupation')}
          name="occupation"
          rules={{
            required: true,
          }}
        />
      </div>

      <div className="grid grid-cols-2 gap-6">
        <FormInputField
          label={t('weight')}
          name="weight"
          type="number"
          rules={{
            required: true,
          }}
        />
        <FormInputField
          label={t('height')}
          name="height"
          type="number"
          rules={{
            required: true,
          }}
        />
      </div>

      <div>
        <FormMultiSelectorField
          name="activities"
          label={t('activities')}
          options={activities}
        />
      </div>
    </div>
  );
}
