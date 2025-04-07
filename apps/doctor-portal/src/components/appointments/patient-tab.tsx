'use client';

import { Card, CardContent, CardHeader, Text } from '@wexelcode/components';
import { useGetPatientByUserId } from '@wexelcode/hooks';
import { useTranslations } from 'next-intl';

interface AppointmentPatientTabProps {
  userId: string;
}

export function AppointmentPatientTab({ userId }: AppointmentPatientTabProps) {
  const t = useTranslations('appointments.patientTab');

  const { data: patientResponse } = useGetPatientByUserId(userId);

  return (
    <Card>
      <CardHeader>Patient</CardHeader>
      <CardContent>
        {patientResponse && (
          <div className="space-y-6">
            <div className="space-y-4">
              <Text variant="h4" className="border-b pb-2">
                {t('personalDetails')}
              </Text>

              <div className="grid grid-cols-2 gap-4">
                <Text>
                  {t('birthday')}:
                  <span className="font-medium ml-2">
                    {patientResponse.user.birthDay}
                  </span>
                </Text>
                <Text>
                  {t('address')}:
                  <span className="font-medium ml-2">
                    {patientResponse.user.address}
                  </span>
                </Text>
                <Text>
                  {t('city')}:
                  <span className="font-medium ml-2">
                    {patientResponse.user.city}
                  </span>
                </Text>
                <Text>
                  {t('zipCode')}:
                  <span className="font-medium ml-2">
                    {patientResponse.user.zipCode}
                  </span>
                </Text>
                <Text>
                  {t('gender')}:
                  <span className="font-medium ml-2">
                    {patientResponse.user.gender}
                  </span>
                </Text>
                <Text>
                  {t('languages')}:
                  <span className="font-medium ml-2">
                    {patientResponse.user.languages.join(', ')}
                  </span>
                </Text>
              </div>
            </div>

            <div className="space-y-4 rounded-md">
              <Text variant="h4" className="border-b pb-2">
                {t('medicalDetails')}
              </Text>

              <div className="grid grid-cols-2 gap-4">
                <Text>
                  {t('occupation')}:
                  <span className="font-medium ml-2">
                    {patientResponse.occupation}
                  </span>
                </Text>
                <Text>
                  {t('weight')}:
                  <span className="font-medium ml-2">
                    {patientResponse.weight}
                  </span>
                </Text>
                <Text>
                  {t('height')}:
                  <span className="font-medium ml-2">
                    {patientResponse.height}
                  </span>
                </Text>

                <Text className="col-span-2">
                  {t('activities')}:
                  <span className="font-medium ml-2">
                    {patientResponse.activities.join(', ')}
                  </span>
                </Text>
              </div>
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
