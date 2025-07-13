import { useMutation, useQueryClient } from '@tanstack/react-query';
import { UpdateAppointment } from '@wexelcode/api';
import { QueryKeys } from '@wexelcode/constants';
import { UpdateAppointmentRequest } from '@wexelcode/types';

export const useUpdateAppointment = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (request: UpdateAppointmentRequest) =>
      await UpdateAppointment(request),
    onSuccess: (_, request) => {
      queryClient.invalidateQueries({
        queryKey: [QueryKeys.credit, request.userId],
      });
    },
  });
};
