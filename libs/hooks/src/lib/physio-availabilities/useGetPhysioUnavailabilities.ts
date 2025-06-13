import { useQuery } from '@tanstack/react-query';
import { GetPhysioUnavailabilities } from '@wexelcode/api';
import { QueryKeys } from '@wexelcode/constants';
import { GetPhysioUnavailabilitiesRequest } from '@wexelcode/types';

export const useGetPhysioUnavailabilities = (
  request: GetPhysioUnavailabilitiesRequest,
  enabled = true
) => {
  return useQuery({
    queryKey: [
      QueryKeys.physioUnavailability,
      request.physioId,
      request.startTime,
      request.endTime,
    ],
    queryFn: async () => await GetPhysioUnavailabilities(request),
    enabled,
    staleTime: 0,
    gcTime: 0,
    refetchOnMount: true,
    refetchOnWindowFocus: true,
  });
};
