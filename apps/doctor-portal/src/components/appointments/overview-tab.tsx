'use client';

import {
  Card,
  CardContent,
  CardFooter,
  Text,
  UserAvatar,
} from '@wexelcode/components';
import { useGetAppointmentById, useGetPatientByUserId } from '@wexelcode/hooks';
import { dateTimeFormat, getAppointmentStatus } from '@wexelcode/utils';
import { CalendarIcon, ClockIcon, VideoIcon } from 'lucide-react';
import { useTranslations } from 'next-intl';

import { JoinNowButton } from './join-now-button';
import PatientDetailItem from './patient-detail-item';
import { AppointmentStatusBadge } from './status-badge';

interface AppointmentOverviewTabProps {
  appointmentId: string;
  patientId: string;
}

export function AppointmentOverviewTab({
  appointmentId,
  patientId,
}: AppointmentOverviewTabProps) {
  const t = useTranslations('appointments.detailsPage.overviewTab');

  const { data: appointmentsResponse, isLoading } = useGetAppointmentById({
    userId: patientId,
    appointmentId: appointmentId,
  });

  const { data: patientResponse } = useGetPatientByUserId(patientId);

  const appointmentStatus = appointmentsResponse
    ? getAppointmentStatus(appointmentsResponse?.appointmentTime)
    : undefined;

  return (
    <div className="space-y-6">
      {appointmentsResponse && (
        <Card>
          <CardContent className="space-y-6 py-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex items-center">
                <CalendarIcon className="w-5 h-5 text-primary mr-3" />
                <div>
                  <Text variant="muted">{t('date')}</Text>
                  <Text weight="semibold">
                    {dateTimeFormat(
                      appointmentsResponse.appointmentTime,
                      'Do MMMM, yyyy'
                    )}
                  </Text>
                </div>
              </div>
              <div className="flex items-center">
                <ClockIcon className="w-5 h-5 text-primary mr-3" />
                <div>
                  <Text variant="muted">{t('time')}</Text>
                  <Text weight="semibold">
                    {dateTimeFormat(
                      appointmentsResponse.appointmentTime,
                      'HH:mm'
                    )}{' '}
                    (30 {t('minutes')})
                  </Text>
                </div>
              </div>
              <div className="flex items-center">
                <VideoIcon className="w-5 h-5 text-primary mr-3" />
                <div>
                  <Text variant="muted">{t('type')}</Text>
                  <Text weight="semibold">{t('video')}</Text>
                </div>
              </div>
              <div className="flex items-center">
                <div>
                  <Text variant="muted">{t('status')}</Text>
                  <AppointmentStatusBadge
                    datetime={appointmentsResponse?.appointmentTime}
                  />
                </div>
              </div>
            </div>
          </CardContent>

          {appointmentStatus === 'upcoming' && (
            <CardFooter className="border-t p-2">
              <JoinNowButton appointment={appointmentsResponse} size="lg" />
            </CardFooter>
          )}
        </Card>
      )}

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
                <Text variant="h4" weight="semibold">
                  {t('personalDetails')}
                </Text>
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
                <Text variant="h4" weight="semibold">
                  {t('medicalDetails')}
                </Text>
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
    </div>
  );
}
