import { useQuery } from '@tanstack/react-query';
import { GetAnswers } from '@wexelcode/api';
import { QueryKeys } from '@wexelcode/constants';
import { GetAnswersRequest } from '@wexelcode/types';

export const useGetAnswers = (request: GetAnswersRequest) => {
  return useQuery({
    queryKey: [
      QueryKeys.answers,
      request.userId,
      request.appointmentId,
      request.questionnaireId,
    ],
    queryFn: async () => await GetAnswers(request),
    enabled: !!request.userId, // TODO: should remove this
  });
};
