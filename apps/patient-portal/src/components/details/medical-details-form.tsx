import { FormInputField, FormSmartMultiSelectorField } from '@wexelcode/components';
import { ActivityOptions } from '@wexelcode/constants';
import { useTranslations } from 'next-intl';

import { QuestionnaireTrigger } from '../questions';

interface MedicalDetailsFormProps {
  includeScreening?: boolean;
}

export function MedicalDetailsForm({
  includeScreening,
}: MedicalDetailsFormProps) {
  const t = useTranslations('profile.medicalDetailsForm');
  const tOptions = useTranslations('options');

  const activities = ActivityOptions.map((option) => ({
    label: tOptions(`activity.${option}`),
    value: option,
  }));

  return (
    <div className="space-y-4">
      {includeScreening && (
        <QuestionnaireTrigger className="flex flex-col items-center justify-center" />
      )}
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
        <FormSmartMultiSelectorField
          name="activities"
          label={t('activities')}
          placeholder={t('select')}
          options={activities}
        />
      </div>
    </div>
  );
}
