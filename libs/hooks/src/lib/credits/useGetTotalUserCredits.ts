import { useQuery } from '@tanstack/react-query';
import { GetUserTotalCredits } from '@wexelcode/api';
import { QueryKeys } from '@wexelcode/constants';
import { GetTotalCreditsRequest } from '@wexelcode/types';

export const useGetTotalUserCredits = (request: GetTotalCreditsRequest) => {
  return useQuery({
    queryKey: [QueryKeys.credit, request.userId],
    queryFn: async () => await GetUserTotalCredits(request),
    enabled: !!request.userId,
  });
};
