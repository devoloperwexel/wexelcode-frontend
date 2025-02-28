import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from '@tanstack/react-query';
import { GetDoctors } from '@wexelcode/api';
import { QueryKeys } from '@wexelcode/constants';

import DoctorsPageContent from './page-content';

export default async function DoctorsPage() {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: [QueryKeys.doctors, 1, 1],
    queryFn: async () => GetDoctors({ page: 1, limit: 1, includes: ['user'] }),
  });

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <DoctorsPageContent />
    </HydrationBoundary>
  );
}
