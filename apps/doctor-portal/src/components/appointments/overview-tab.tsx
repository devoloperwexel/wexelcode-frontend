'use client';

import {
  Card,
  CardContent,
  CardFooter,
  Text,
  UserAvatar,
} from '@wexelcode/components';
import { useGetAppointmentById } from '@wexelcode/hooks';
import { Patient } from '@wexelcode/types';
import { dateTimeDiff, dateTimeFormat } from '@wexelcode/utils';
import { CalendarIcon, ClockIcon, VideoIcon } from 'lucide-react';
import { useSession } from 'next-auth/react';
import { useLocale, useTranslations } from 'next-intl';

import { JoinNowButton } from './join-now-button';
import PatientDetailItem from './patient-detail-item';
import { AppointmentStatusBadge } from './status-badge';

interface AppointmentOverviewTabProps {
  appointmentId: string;
  patientId: string;
  patient?: Patient;
}

const now = new Date();
const thirtyMinutesAgo = new Date(now.getTime() - 30 * 60 * 1000);

export function AppointmentOverviewTab({
  appointmentId,
  patientId,
  patient,
}: AppointmentOverviewTabProps) {
  const { data, status: sessionStatus } = useSession();
  const t = useTranslations('appointments.detailsPage.overviewTab');
  const language = useLocale();

  const { data: appointmentsResponse, isLoading } = useGetAppointmentById({
    userId: patientId,
    appointmentId: appointmentId,
  });

  const canJoinCall = appointmentsResponse
    ? dateTimeDiff(appointmentsResponse.appointmentTime, thirtyMinutesAgo) > 0
    : undefined;
  const timezone =
    sessionStatus === 'loading'
      ? ''
      : data?.user?.timeZone ||
        Intl.DateTimeFormat().resolvedOptions().timeZone;

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
                      'Do MMMM, yyyy',
                      language,
                      timezone
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
                      'HH:mm',
                      language,
                      timezone
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

          {canJoinCall && (
            <CardFooter className="border-t p-2">
              <JoinNowButton
                appointment={appointmentsResponse}
                patientUserId={patientId}
                size="lg"
              />
            </CardFooter>
          )}
        </Card>
      )}

      <Card>
        <CardContent className="space-y-6 py-4">
          {patient && (
            <>
              <div className="flex items-center space-x-4">
                <UserAvatar
                  name={`${patient?.user.firstName} ${patient?.user.lastName}`}
                  profileUrl={patient?.user?.profilePictureUrl}
                  className="w-16 h-16"
                />

                <div className="flex flex-col">
                  <Text
                    variant="large"
                    weight="semibold"
                    className=" capitalize"
                  >{`${patient?.user.firstName} ${patient?.user.lastName}`}</Text>
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
                    patient?.user?.birthDay,
                    'DD MMM YYYY',
                    language
                  )}
                />
                <PatientDetailItem
                  label={t('address')}
                  value={patient?.user.address}
                />
                <PatientDetailItem
                  label={t('city')}
                  value={patient?.user.city}
                />
                <PatientDetailItem
                  label={t('zipCode')}
                  value={patient?.user.zipCode.toString()}
                />
                <PatientDetailItem
                  label={t('gender')}
                  value={t(patient?.user.gender.toLowerCase())}
                />
                <PatientDetailItem
                  label={t('languages')}
                  value={patient?.user.languages.join(', ')}
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
                  value={patient?.occupation}
                />
                <PatientDetailItem
                  label={t('weight')}
                  value={patient?.weight.toString()}
                />
                <PatientDetailItem
                  label={t('height')}
                  value={patient?.height.toString()}
                />
                <PatientDetailItem
                  label={t('activities')}
                  value={patient?.activities.join(', ')}
                />
              </div>
            </>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
