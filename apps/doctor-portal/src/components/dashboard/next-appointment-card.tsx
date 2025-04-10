'use client';

import { calenderIcon } from '@wexelcode/assets';
import { Button, Text, UserAvatar } from '@wexelcode/components';
import { useGetAllAppointments } from '@wexelcode/hooks';
import { dateTimeFormat } from '@wexelcode/utils';
import { VideoIcon } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useSession } from 'next-auth/react';
import { useTranslations } from 'next-intl';

import Routes from '../../constants/routes';
import { NoDataBanner } from '../common';

const now = new Date();

export function NextAppointmentCard() {
  const t = useTranslations('dashboard.nextAppointmentCard');

  const { data: userData } = useSession();

  const { data: appointmentsResponse } = useGetAllAppointments({
    page: 1,
    limit: 1,
    physioUserId: userData?.user.id,
    includes: ['patient-user'],
    sortBy: 'appointmentTime:desc',
    startDate: now.toISOString(),
  });

  return (
    <div>
      <div className="flex flex-col bg-white shadow-md rounded-lg p-4 space-y-4">
        <div className="flex justify-between items-center">
          <h4>{t('title')}</h4>
        </div>
        {appointmentsResponse?.results.length ? (
          <>
            <div className="flex items-center space-x-2">
              <UserAvatar
                name={appointmentsResponse.results[0].patientUser?.firstName}
                className="w-8 h-8"
              />
              <Text className="capitalize">{`${appointmentsResponse.results[0].patientUser?.firstName} ${appointmentsResponse.results[0].patientUser?.lastName}`}</Text>
            </div>

            <Text variant="muted">
              {t('datetime', {
                date: dateTimeFormat(
                  appointmentsResponse.results[0].appointmentTime,
                  'Do MMMM, yyyy'
                ),
                time: dateTimeFormat(
                  appointmentsResponse.results[0].appointmentTime,
                  'HH:mm'
                ),
              })}
            </Text>
            <Link
              href={`${Routes.appointments}/${appointmentsResponse.results[0]?.id}/video-call`}
            >
              <Button className="w-full">
                <VideoIcon className="w-12 h-12" />
                {t('joinVideo')}
              </Button>
            </Link>
          </>
        ) : (
          <NoDataBanner
            message={t('noData')}
            icon={<Image src={calenderIcon} alt="No data" className="w-16" />}
          />
        )}
      </div>
    </div>
  );
}
