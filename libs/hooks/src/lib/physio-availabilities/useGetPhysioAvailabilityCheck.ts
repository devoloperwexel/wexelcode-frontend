import { useQuery } from '@tanstack/react-query';
import { GetPhysioAvailabilityCheck } from '@wexelcode/api';
import { QueryKeys } from '@wexelcode/constants';
import { GetPhysioUnavailabilityCheckRequest } from '@wexelcode/types';

export const useGetPhysioAvailabilityCheck = (
  request: GetPhysioUnavailabilityCheckRequest,
  enabled = true
) => {
  return useQuery({
    queryKey: [QueryKeys.doctors, request.id, request.date],
    queryFn: async () => GetPhysioAvailabilityCheck(request),
    staleTime: 0,
    gcTime: 0,
    enabled,
    refetchOnMount: true,
    refetchOnWindowFocus: true,
  });
};
