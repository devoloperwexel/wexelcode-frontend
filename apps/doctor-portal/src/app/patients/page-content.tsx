'use client';

import {
  DataTable,
  Input,
  Pagination,
  Text,
  UserAvatar,
} from '@wexelcode/components';
import { useGetAllPatients, useQueryParams } from '@wexelcode/hooks';
import { dateTimeDiff } from '@wexelcode/utils';
import { debounce } from 'lodash';
import { useRouter } from 'next/navigation';
import { useSession } from 'next-auth/react';
import { useTranslations } from 'next-intl';

import Routes from '../../constants/routes';

export default function PatientPageContent() {
  const t = useTranslations('patients');

  const { data: userData } = useSession();

  const router = useRouter();

  const queryParams = useQueryParams();

  const { data: patientsResponse } = useGetAllPatients({
    page: queryParams.getInt('page') || 1,
    limit: queryParams.getInt('limit') || 10,
    physioUserId: userData?.user.id,
    includes: ['user'],
    name: queryParams.getString('search'),
  });

  const handleOnSearch = (search: string) => {
    debounce(() => {
      queryParams.set('search', search);
    }, 500)();
  };

  return (
    <div className="flex flex-col justify-start space-y-2 h-full">
      <div className="flex items-center justify-between">
        <div className="w-1/2">
          <Input
            placeholder="Search"
            value={queryParams.getString('search')}
            onChange={(e) => handleOnSearch(e.target.value)}
          />
        </div>
      </div>

      <div className="flex-grow">
        <DataTable
          data={patientsResponse?.results || []}
          onRowClick={(row) => {
            const {
              user: { id },
            } = row;
            router.push(`${Routes.patients}/${id}`);
          }}
          columns={[
            {
              accessorKey: 'patient',
              header: t('table.header.patient'),
              cell: ({ row }) => {
                const data = row.original.user;
                return (
                  <div className="flex items-center space-x-2">
                    <UserAvatar name={data?.firstName} className="w-10 h-10" />
                    <Text className="capitalize">{`${data?.firstName} ${data?.lastName}`}</Text>
                  </div>
                );
              },
            },
            {
              accessorKey: 'age',
              header: t('table.header.age'),
              cell: ({ row }) => {
                const data = row.original.user;
                const age = dateTimeDiff(new Date(), data?.birthDay, 'years');
                return (
                  <Text>
                    {age} {t('years')}
                  </Text>
                );
              },
            },
            {
              accessorKey: 'gender',
              header: t('table.header.gender'),
              cell: ({ row }) => {
                const data = row.original.user;
                return <Text>{t(`gender.${data.gender}`)}</Text>;
              },
            },
          ]}
        />
      </div>

      <Pagination totalPages={patientsResponse?.totalPages || 0} />
    </div>
  );
}
