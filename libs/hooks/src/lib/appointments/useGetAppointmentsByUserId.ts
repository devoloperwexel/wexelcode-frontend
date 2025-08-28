import { useQuery } from '@tanstack/react-query';
import { GetAppointmentsByUserId } from '@wexelcode/api';
import { QueryKeys } from '@wexelcode/constants';
import { GetAppointmentsRequest } from '@wexelcode/types';

export const useGetAppointmentsByUserId = (request: GetAppointmentsRequest) => {
  return useQuery({
    queryKey: [
      QueryKeys.appointments,
      request.userId,
      request.startDate,
      request.endDate,
      request.timezone,
      request.limit,
      request.page,
    ],
    queryFn: async () => await GetAppointmentsByUserId(request),
    enabled: !!request.userId, // TODO: should remove this
  });
};
