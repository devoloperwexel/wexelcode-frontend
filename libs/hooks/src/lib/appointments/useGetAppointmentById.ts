import { useQuery } from '@tanstack/react-query';
import { GetAppointmentById } from '@wexelcode/api';
import { QueryKeys } from '@wexelcode/constants';
import { GetAppointmentRequest } from '@wexelcode/types';

export const useGetAppointmentById = (request: GetAppointmentRequest) => {
  return useQuery({
    queryKey: [QueryKeys.appointments, request.userId, request.appointmentId],
    queryFn: async () => await GetAppointmentById(request),
    enabled: !!request.userId, // TODO: should remove this
  });
};
