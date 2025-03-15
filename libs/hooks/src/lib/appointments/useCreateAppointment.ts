import { useMutation } from '@tanstack/react-query';
import { CreateAppointment } from '@wexelcode/api';
import { CreateAppointmentRequest } from '@wexelcode/types';

export const useCreateAppointment = () => {
  return useMutation({
    mutationFn: async (request: CreateAppointmentRequest) =>
      await CreateAppointment(request),
  });
};
