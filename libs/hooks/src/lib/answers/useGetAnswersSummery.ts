import { useQuery } from '@tanstack/react-query';
import { GetAnswersSummary } from '@wexelcode/api';
import { QueryKeys } from '@wexelcode/constants';
import { GetAnswersSummaryRequest } from '@wexelcode/types';

export const useGetAnswersSummery = (request: GetAnswersSummaryRequest) => {
  return useQuery({
    queryKey: [QueryKeys.answersSummary, request.userId, request.appointmentId],
    queryFn: async () => await GetAnswersSummary(request),
    enabled: !!request.userId, // TODO: should remove this
  });
};
