import { useQuery } from '@tanstack/react-query';
import { GetQuestionnaire } from '@wexelcode/api';
import { QueryKeys } from '@wexelcode/constants';
import { GetQuestionnaireRequest } from '@wexelcode/types';

export const useGetQuestionnaire = (params: GetQuestionnaireRequest) => {
  return useQuery({
    queryKey: [QueryKeys.questionnaire, params.page, params.limit],
    queryFn: async () => GetQuestionnaire({ ...params, sortBy: 'index:asc' }),
  });
};
