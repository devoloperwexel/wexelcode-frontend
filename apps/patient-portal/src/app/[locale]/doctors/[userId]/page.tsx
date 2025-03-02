import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from '@tanstack/react-query';
import { GetDoctorByUserId } from '@wexelcode/api';
import { QueryKeys } from '@wexelcode/constants';

import DoctorPageContent from './page-content';

interface DoctorPageProps {
  params: {
    userId: string;
  };
  searchParams: {
    date?: string;
  };
}

export default async function DoctorPage({
  params,
  searchParams,
}: DoctorPageProps) {
  const { userId } = await params;
  const { date } = await searchParams;

  const initialDate = date ? new Date(date) : new Date();

  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: [QueryKeys.doctors, userId],
    queryFn: async () => GetDoctorByUserId(userId),
  });

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <DoctorPageContent userId={userId} initialDate={initialDate} />
    </HydrationBoundary>
  );
}
