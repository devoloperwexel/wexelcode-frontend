'use client';

import {
  Card,
  CardContent,
  CardHeader,
  Text,
  UserAvatar,
} from '@wexelcode/components';
import { useGetAppointmentById, useGetPatientByUserId } from '@wexelcode/hooks';
import { dateTimeFormat } from '@wexelcode/utils';
import { CalendarIcon, ClockIcon, VideoIcon } from 'lucide-react';
import { useTranslations } from 'next-intl';

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

  return (
    <Card>
      <CardHeader>Overview</CardHeader>
      <CardContent className="space-y-6">
        {patientResponse && (
          <div className="flex flex-col justify-center items-center space-x-4">
            <UserAvatar
              name={`${patientResponse.user.firstName} ${patientResponse.user.lastName}`}
              profileUrl={patientResponse.user?.profilePictureUrl}
              className="w-16 h-16"
            />

            <Text variant="large">{`${patientResponse.user.firstName} ${patientResponse.user.lastName}`}</Text>
          </div>
        )}

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
              {/* <div>
                <Text variant="muted">{t('status')}</Text>
                <span
                  className={`inline-block px-3 py-1 rounded-full text-xs font-medium ${getStatusColor()}`}
                >
                  {appointmentsResponse.status}
                </span>
              </div> */}
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
