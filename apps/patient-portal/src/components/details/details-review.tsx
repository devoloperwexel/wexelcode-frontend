import { Text } from '@wexelcode/components';
import { LanguageOptions } from '@wexelcode/constants';
import { useLocale, useTranslations } from 'next-intl';
import { useMemo } from 'react';
import { useFormContext } from 'react-hook-form';

export function DetailsReview() {
  const t = useTranslations('profile');
  const tOptions = useTranslations('options');
  const local = useLocale() as 'en' | 'de';
  const { getValues } = useFormContext();

  const activities = useMemo(() => {
    return (
      getValues('activities')?.map((act: string) =>
        tOptions(`activity.${act.toUpperCase()}`)
      ) || []
    );
  }, [getValues, tOptions]);

  const languages = useMemo(() => {
    return (
      getValues('languages')
        ?.map((lng: string) => {
          const language = LanguageOptions.find(
            (option) => option.value === lng
          );
          return language?.label?.[local];
        })
        .filter(Boolean) || []
    );
  }, [getValues, local]);

  const birthday = new Intl.DateTimeFormat(local === 'de' ? 'de-DE' : 'en-GB', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  }).format(new Date(getValues('birthDay')));

  return (
    <>
      <div className="bg-gray-50 p-4  space-y-4 rounded-md capitalize">
        <Text variant="h4" className="border-b pb-2">
          {t('completeProfilePage.personalDetails')}
        </Text>

        <div className="grid grid-cols-2 gap-4">
          <Text>
            {t('personalDetailsForm.birthday')}:
            <span className="font-medium ml-2">{birthday}</span>
          </Text>
          <Text>
            {t('personalDetailsForm.address')}:
            <span className="font-medium ml-2">{getValues('address')}</span>
          </Text>
          <Text>
            {t('personalDetailsForm.city')}:
            <span className="font-medium ml-2">{getValues('city')}</span>
          </Text>
          <Text>
            {t('personalDetailsForm.zipCode')}:
            <span className="font-medium ml-2">{getValues('zipCode')}</span>
          </Text>
          <Text>
            {t('personalDetailsForm.gender')}:
            <span className="font-medium ml-2">
              {tOptions(
                `gender.${(getValues('gender') as string).toUpperCase()}`
              )}
            </span>
          </Text>
          <Text>
            {t('personalDetailsForm.languages')}:
            <span className="font-medium ml-2">{languages?.join(', ')}</span>
          </Text>
        </div>
      </div>

      <div className="bg-gray-50 p-4 space-y-4 rounded-md">
        <Text variant="h4" className="border-b pb-2">
          {t('completeProfilePage.medicalDetails')}
        </Text>

        <div className="grid grid-cols-2 gap-4">
          <Text>
            {t('medicalDetailsForm.occupation')}:
            <span className="font-medium ml-2">{getValues('occupation')}</span>
          </Text>
          <Text>
            {t('medicalDetailsForm.weight')}:
            <span className="font-medium ml-2">{getValues('weight')}</span>
          </Text>
          <Text>
            {t('medicalDetailsForm.height')}:
            <span className="font-medium ml-2">{getValues('height')}</span>
          </Text>
          <Text className="col-span-2">
            {t('medicalDetailsForm.activities')}:
            <span className="font-medium ml-2">{activities.join(', ')}</span>
          </Text>
        </div>
      </div>
    </>
  );
}
