import { useQuery } from '@tanstack/react-query';
import { GetQuestionnaireByQuestionnaireId } from '@wexelcode/api';
import { QueryKeys } from '@wexelcode/constants';

export const useGetQuestionsByQuestionnaireId = (id: string) => {
  return useQuery({
    queryKey: [QueryKeys.questionnaire, id],
    queryFn: async () => GetQuestionnaireByQuestionnaireId(id),
  });
};
