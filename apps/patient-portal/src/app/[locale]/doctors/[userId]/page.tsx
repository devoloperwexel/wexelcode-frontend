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
}

export default async function DoctorPage({ params }: DoctorPageProps) {
  const { userId } = await params;

  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: [QueryKeys.doctors, userId],
    queryFn: async () => GetDoctorByUserId(userId),
  });

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <DoctorPageContent userId={userId} />
    </HydrationBoundary>
  );
}
