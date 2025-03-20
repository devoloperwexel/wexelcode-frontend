import { FormInputField, FormMultiSelectorField } from '@wexelcode/components';
import { ActivityOptions } from '@wexelcode/constants';
import { useTranslations } from 'next-intl';

export function MedicalDetailsForm() {
  const t = useTranslations('profile.medicalDetailsForm');
  const tOptions = useTranslations('options');

  const activities = ActivityOptions.map((option) => ({
    label: tOptions(`activity.${option}`),
    value: option,
  }));

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
