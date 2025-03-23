import { useMutation, useQueryClient } from '@tanstack/react-query';
import { SaveAnswer } from '@wexelcode/api';
import { QueryKeys } from '@wexelcode/constants';
import { SaveAnswersRequest } from '@wexelcode/types';

export const useSaveAnswers = () => {
  const client = useQueryClient();

  return useMutation({
    mutationFn: async (request: SaveAnswersRequest) =>
      await SaveAnswer(request),
    onSuccess: () => {
      client.invalidateQueries({
        queryKey: [QueryKeys.answers],
      });
    },
  });
};
