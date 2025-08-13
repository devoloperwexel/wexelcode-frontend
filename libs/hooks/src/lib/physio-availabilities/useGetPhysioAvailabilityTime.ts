import { useQuery } from '@tanstack/react-query';
import { GetPhysioAvailabilityTime } from '@wexelcode/api';
import { QueryKeys } from '@wexelcode/constants';
import { GetPhysioUnavailabilityTimeRequest } from '@wexelcode/types';

export const useGetPhysioAvailabilityTime = (
  request: GetPhysioUnavailabilityTimeRequest,
  enabled = true
) => {
  return useQuery({
    queryKey: [QueryKeys.doctors, request.id, request.date, request.timezone],
    queryFn: async () => GetPhysioAvailabilityTime(request),
    staleTime: 0,
    gcTime: 0,
    enabled,
    refetchOnMount: true,
    refetchOnWindowFocus: true,
  });
};
