import { useQuery } from '@tanstack/react-query';
import { GetPhysioUnavailabilities } from '@wexelcode/api';
import { QueryKeys } from '@wexelcode/constants';
import { GetPhysioUnavailabilitiesRequest } from '@wexelcode/types';

export const useGetPhysioUnavailabilities = (
  request: GetPhysioUnavailabilitiesRequest
) => {
  return useQuery({
    queryKey: [
      QueryKeys.answers,
      request.physioId,
      request.startTime,
      request.endTime,
    ],
    queryFn: async () => await GetPhysioUnavailabilities(request),
  });
};
