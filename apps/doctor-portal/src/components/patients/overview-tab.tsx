'use client';

import { Card, CardContent, Text, UserAvatar } from '@wexelcode/components';
import { useGetPatientByUserId } from '@wexelcode/hooks';
import { dateTimeFormat } from '@wexelcode/utils';
import { useTranslations } from 'next-intl';

import PatientDetailItem from './patient-detail-item';
interface PatientOverviewTabProps {
  patientId: string;
}

export function PatientOverviewTab({ patientId }: PatientOverviewTabProps) {
  const t = useTranslations('appointments.detailsPage.overviewTab');

  const { data: patientResponse } = useGetPatientByUserId(patientId);

  return (
    <Card>
      <CardContent className="space-y-6 py-4">
        {patientResponse && (
          <>
            <div className="flex items-center space-x-4">
              <UserAvatar
                name={`${patientResponse.user.firstName} ${patientResponse.user.lastName}`}
                profileUrl={patientResponse.user?.profilePictureUrl}
                className="w-16 h-16"
              />

              <div className="flex flex-col">
                <Text
                  variant="large"
                  weight="semibold"
                >{`${patientResponse.user.firstName} ${patientResponse.user.lastName}`}</Text>
                <Text variant="muted">{t('patient')}</Text>
              </div>
            </div>

            <div className="py-2 border-b">
              <Text variant="h4">{t('personalDetails')}</Text>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <PatientDetailItem
                label={t('birthday')}
                value={dateTimeFormat(
                  patientResponse.user?.birthDay,
                  'D MMM YYYY'
                )}
              />
              <PatientDetailItem
                label={t('address')}
                value={patientResponse.user.address}
              />
              <PatientDetailItem
                label={t('city')}
                value={patientResponse.user.city}
              />
              <PatientDetailItem
                label={t('zipCode')}
                value={patientResponse.user.zipCode.toString()}
              />
              <PatientDetailItem
                label={t('gender')}
                value={patientResponse.user.gender}
              />
              <PatientDetailItem
                label={t('languages')}
                value={patientResponse.user.languages.join(', ')}
              />
            </div>

            <div className="py-2 border-b">
              <Text variant="h4">{t('medicalDetails')}</Text>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <PatientDetailItem
                label={t('occupation')}
                value={patientResponse.occupation}
              />
              <PatientDetailItem
                label={t('weight')}
                value={patientResponse.weight.toString()}
              />
              <PatientDetailItem
                label={t('height')}
                value={patientResponse.height.toString()}
              />
              <PatientDetailItem
                label={t('activities')}
                value={patientResponse.activities.join(', ')}
              />
            </div>
          </>
        )}
      </CardContent>
    </Card>
  );
}
