import { QueryClient } from '@tanstack/react-query';
import { GetPatientsByUserId } from '@wexelcode/api';
import { QueryKeys } from '@wexelcode/constants';

import DetailsPageContent from './page-content';

interface DetailsPageProps {
  params: Promise<{
    userId: string;
  }>;
}

export default async function DetailsPage({ params }: DetailsPageProps) {
  const { userId } = await params;
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: [QueryKeys.users, userId, QueryKeys.patients],
    queryFn: async () => GetPatientsByUserId(userId),
  });

  return <DetailsPageContent userId={userId} />;
}
