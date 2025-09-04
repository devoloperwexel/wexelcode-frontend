'use client';

import { Card, CardContent, CardHeader, Text } from '@wexelcode/components';
import { useGetAppointmentsByUserId } from '@wexelcode/hooks';
import { dateTimeFormat } from '@wexelcode/utils';
import { ClockIcon } from 'lucide-react';
import { useSession } from 'next-auth/react';
import { useLocale, useTranslations } from 'next-intl';
import { useMemo, useState } from 'react';

import Routes from '../../constants/routes';
import { Link } from '../../i18n/routing';
import { NoDataBanner } from '../common';
import Calendar from './calender';
import { CalendarAppointmentLoading } from './loading';

export function AppointmentCalenderCard() {
  const t = useTranslations('dashboard');
  const language = useLocale();

  const [selectedMonth, setSelectedMonth] = useState(new Date().getMonth());
  const { data: userData } = useSession();
  const timezone =
    userData?.user?.timeZone ||
    Intl.DateTimeFormat().resolvedOptions().timeZone;

  const startDateOfSelectedMonth = useMemo(() => {
    const date = new Date(new Date().getFullYear(), selectedMonth, 1);
    return date.toISOString();
  }, [selectedMonth]);

  const endDateOfSelectedMonth = useMemo(() => {
    const date = new Date(
      new Date().getFullYear(),
      selectedMonth + 1,
      0,
      23,
      59,
      59
    );
    return date.toISOString();
  }, [selectedMonth]);

  const { data: appointmentResponse, isLoading } = useGetAppointmentsByUserId({
    userId: userData?.user?.id,
    limit: 100,
    page: 1,
    includes: ['physio-user'],
    sortBy: 'appointmentTime:desc',
    startDate: startDateOfSelectedMonth,
    endDate: endDateOfSelectedMonth,
  });

  return (
    <Card>
      <CardHeader>{t('appointmentCalenderCard.title')}</CardHeader>
      <CardContent className="grid grid-cols-2">
        <div>
          <Calendar
            selectedDates={appointmentResponse?.results.map((appointment) => {
              return dateTimeFormat(
                appointment.appointmentTime,
                'yyyy-MM-DD',
                'en',
                timezone
              );
            })}
            onMonthChange={(year, month) => setSelectedMonth(month)}
          />
        </div>

        <div className="col-span-1 flex flex-col gap-4">
          <Text variant="h3">
            {t('appointmentCalenderCard.appointmentFor')}{' '}
            {dateTimeFormat(
              startDateOfSelectedMonth,
              'MMMM yyyy',
              language,
              timezone
            )}
          </Text>

          <div className="space-y-4 overflow-y-auto max-h-[300px]">
            {isLoading && <CalendarAppointmentLoading />}

            {appointmentResponse?.totalResults === 0 && (
              <NoDataBanner
                message={`${t(
                  'appointmentCalenderCard.noDataFound'
                )} ${dateTimeFormat(
                  startDateOfSelectedMonth,
                  'MMMM',
                  language,
                  timezone
                )}`}
              />
            )}

            {appointmentResponse?.results?.map((appointment) => {
              return (
                <Link
                  href={`${Routes.appointments}/${appointment.id}`}
                  key={appointment.id}
                >
                  <div className="flex items-center gap-2 bg-gray-50 p-4 rounded-lg">
                    <div className="flex items-center gap-2">
                      <div className="flex flex-col justify-center items-center border w-12 h-12">
                        <div className="flex justify-center bg-border w-full">
                          {t(
                            `calendar.days.${dateTimeFormat(
                              appointment.appointmentTime,
                              'ddd',
                              language,
                              timezone
                            ).toLowerCase()}`
                          )}
                        </div>
                        <Text>
                          {dateTimeFormat(
                            appointment.appointmentTime,
                            'D',
                            language,
                            timezone
                          )}
                        </Text>
                      </div>
                    </div>
                    <div className="flex-grow flex flex-col">
                      <Text variant="large" weight="semibold">
                        {appointment.physioUser?.firstName}{' '}
                        {appointment.physioUser?.lastName}
                      </Text>
                      <Text variant="muted">Physiotherapist</Text>
                    </div>
                    <div className="flex items-center text-sm text-gray-700">
                      <ClockIcon className="w-4 h-4 mr-1 text-gray-400 flex-shrink-0" />
                      <span>
                        {dateTimeFormat(
                          appointment.appointmentTime,
                          'HH:mm',
                          'en',
                          timezone
                        )}
                      </span>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
