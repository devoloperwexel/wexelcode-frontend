import { useMutation } from '@tanstack/react-query';
import { UpdateAppointment } from '@wexelcode/api';
import { UpdateAppointmentRequest } from '@wexelcode/types';

export const useUpdateAppointment = () => {
  return useMutation({
    mutationFn: async (request: UpdateAppointmentRequest) =>
      await UpdateAppointment(request),
  });
};
