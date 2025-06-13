import { useMutation, useQueryClient } from '@tanstack/react-query';
import { DeletePhysioUnavailability } from '@wexelcode/api';
import { QueryKeys } from '@wexelcode/constants';
import { DeletePhysioUnavailabilityRequest } from '@wexelcode/types';

export const useDeletePhysioUnavailability = () => {
  const client = useQueryClient();

  return useMutation({
    mutationFn: async (request: DeletePhysioUnavailabilityRequest) =>
      await DeletePhysioUnavailability(request),
    onSuccess: (_, variables) => {
      client.invalidateQueries({
        queryKey: [QueryKeys.physioUnavailability, variables.physioId],
      });
    },
  });
};
