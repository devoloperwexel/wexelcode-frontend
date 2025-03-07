import { useQuery } from '@tanstack/react-query';
import { GetQuestions } from '@wexelcode/api';
import { QueryKeys } from '@wexelcode/constants';
import { GetQuestionsRequest } from '@wexelcode/types';

export const useGetQuestions = (params: GetQuestionsRequest) => {
  return useQuery({
    queryKey: [QueryKeys.questions, params.page, params.limit],
    queryFn: async () => GetQuestions(params),
  });
};
