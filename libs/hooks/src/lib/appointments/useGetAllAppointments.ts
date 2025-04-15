import { useQuery } from '@tanstack/react-query';
import { GetAllAppointments } from '@wexelcode/api';
import { QueryKeys } from '@wexelcode/constants';
import { GetAppointmentsRequest } from '@wexelcode/types';

export const useGetAllAppointments = (request: GetAppointmentsRequest) => {
  return useQuery({
    queryKey: [
      QueryKeys.appointments,
      request.physioUserId,
      request.name,
      request.startDate,
      request.endDate,
      request.limit,
      request.page,
    ],
    queryFn: async () => await GetAllAppointments(request),
  });
};
