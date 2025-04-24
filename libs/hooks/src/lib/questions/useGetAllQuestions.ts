import { useQuery } from '@tanstack/react-query';
import { GetAllQuestions } from '@wexelcode/api';
import { QueryKeys } from '@wexelcode/constants';
import { GetAllQuestionsRequest } from '@wexelcode/types';

export const useGetAllQuestions = (params: GetAllQuestionsRequest) => {
  return useQuery({
    queryKey: [QueryKeys.questions, params.page, params.limit],
    queryFn: async () => GetAllQuestions({ ...params, sortBy: 'index:asc' }),
  });
};
