import { Text } from '@wexelcode/components';
import { useTranslations } from 'next-intl';
import { useFormContext } from 'react-hook-form';

export function DetailsReview() {
  const t = useTranslations('profile');
  const { getValues } = useFormContext();

  return (
    <>
      <div className="bg-gray-50 p-4  space-y-4 rounded-md">
        <Text variant="h4" className="border-b pb-2">
          {t('completeProfilePage.personalDetails')}
        </Text>

        <div className="grid grid-cols-2 gap-4">
          <Text>
            {t('personalDetailsForm.birthday')}:
            <span className="font-medium ml-2">{getValues('birthDay')}</span>
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
            {t('personalDetailsForm.languages')}:
            <span className="font-medium ml-2">
              {getValues('languages').join(', ')}
            </span>
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
          {getValues('activities') && (
            <Text className="col-span-2">
              {t('medicalDetailsForm.activities')}:
              <span className="font-medium ml-2">
                {getValues('activities').join(', ')}
              </span>
            </Text>
          )}
        </div>
      </div>
    </>
  );
}
