import { useQuery } from '@tanstack/react-query';
import { GetQuestionnaireByQuestionnaireId } from '@wexelcode/api';
import { QueryKeys } from '@wexelcode/constants';
import { GetQuestionnaireByQuestionnaireIdRequest } from '@wexelcode/types';

export const useGetQuestionsByQuestionnaireId = (
  params: GetQuestionnaireByQuestionnaireIdRequest
) => {
  return useQuery({
    queryKey: [QueryKeys.questionnaire, params.id, params.page, params.limit],
    queryFn: async () =>
      GetQuestionnaireByQuestionnaireId({ ...params, sortBy: 'index:asc' }),
  });
};
