import { useMutation } from '@tanstack/react-query';
import { SaveAnswer } from '@wexelcode/api';
import { SaveAnswersRequest } from '@wexelcode/types';

export const useSaveAnswers = () => {
  return useMutation({
    mutationFn: async (request: SaveAnswersRequest) =>
      await SaveAnswer(request),
  });
};
