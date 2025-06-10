import { useMutation, useQueryClient } from '@tanstack/react-query';
import { SavePhysioUnavailability } from '@wexelcode/api';
import { QueryKeys } from '@wexelcode/constants';
import { SavedPhysioUnavailability } from '@wexelcode/types';

export const useSavePhysioUnavailability = () => {
  const client = useQueryClient();

  return useMutation({
    mutationFn: async (request: SavedPhysioUnavailability) =>
      await SavePhysioUnavailability(request),
    onSuccess: (_, variables) => {
      client.invalidateQueries({
        queryKey: [QueryKeys.answers, variables.physioId],
      });

      client.invalidateQueries({
        queryKey: [QueryKeys.answersSummary, variables.physioId],
      });
    },
  });
};
