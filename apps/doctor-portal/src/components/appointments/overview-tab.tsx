'use client';

import {
  Button,
  Card,
  CardContent,
  CardFooter,
  Text,
  UserAvatar,
} from '@wexelcode/components';
import { useGetAppointmentById, useGetPatientByUserId } from '@wexelcode/hooks';
import {
  cn,
  dateTimeDiff,
  dateTimeFormat,
  getAppointmentStatus,
} from '@wexelcode/utils';
import { CalendarIcon, ClockIcon, VideoIcon } from 'lucide-react';
import Link from 'next/link';
import { useTranslations } from 'next-intl';

import Routes from '../../constants/routes';
import PatientDetailItem from './patient-detail-item';

interface AppointmentOverviewTabProps {
  id: string;
  userId: string;
}

export function AppointmentOverviewTab({
  id,
  userId,
}: AppointmentOverviewTabProps) {
  const t = useTranslations('appointments.overviewTab');

  const { data: appointmentsResponse, isLoading } = useGetAppointmentById({
    userId,
    appointmentId: id,
  });

  const { data: patientResponse } = useGetPatientByUserId(userId);

  const appointmentStatus = appointmentsResponse
    ? getAppointmentStatus(appointmentsResponse?.appointmentTime)
    : undefined;

  const allowJoinBefore = 5 * 60 * 1000; // 5 minutes
  const isJoinable = appointmentsResponse
    ? dateTimeDiff(appointmentsResponse.appointmentTime, new Date()) <
      allowJoinBefore
    : false;

  return (
    <div className="space-y-4">
      <Card>
        <CardContent className="space-y-6 py-4">
          {appointmentsResponse && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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
                  <span
                    className={cn(
                      'inline-block px-3 py-1 rounded-full text-xs font-medium',
                      appointmentStatus === 'past'
                        ? 'text-yellow-700 bg-yellow-300'
                        : 'text-green-700 bg-green-300'
                    )}
                  >
                    {appointmentStatus && t(appointmentStatus)}
                  </span>
                </div>
              </div>
            </div>
          )}
        </CardContent>

        {appointmentStatus === 'upcoming' && (
          <CardFooter className="border-t p-2">
            {isJoinable ? (
              <Link
                href={`${Routes.appointments}/${appointmentsResponse?.id}/video-call`}
              >
                <Button className="w-full min-h-12">
                  <VideoIcon className="w-12 h-12" />
                  {t('joinVideoCall')}
                </Button>
              </Link>
            ) : (
              <Button className="w-full min-h-12" disabled>
                <VideoIcon className="w-12 h-12" />
                {t('joinVideoCall')}
              </Button>
            )}

            {!isJoinable && (
              <p className=" text-xs text-gray-600 text-center mt-2">
                {t('buttonEnableMessage')}
              </p>
            )}
          </CardFooter>
        )}
      </Card>

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
    </div>
  );
}
