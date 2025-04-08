import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from '@tanstack/react-query';
import { GetDoctorByUserId } from '@wexelcode/api';
import { QueryKeys } from '@wexelcode/constants';

import DoctorPageContent from './page-content';
import { notFound } from 'next/navigation';
import { GetDoctorResponse } from '@wexelcode/types';

interface DoctorPageProps {
  params: Promise<{
    userId: string;
  }>;
  searchParams: Promise<{
    date?: string;
  }>;
}

export default async function DoctorPage({
  params,
  searchParams,
}: DoctorPageProps) {
  const [{ userId }, { date }] = await Promise.all([params, searchParams]);

  const initialDate = date ? new Date(date) : new Date();

  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: [QueryKeys.doctors, userId],
    queryFn: async () => GetDoctorByUserId(userId),
  });

  const physio = queryClient.getQueryData([QueryKeys.doctors, userId]);
  if (!physio) {
    notFound();
  }

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <DoctorPageContent
        initialDate={initialDate}
        doctor={physio as GetDoctorResponse}
      />
    </HydrationBoundary>
  );
}
