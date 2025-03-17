import { useMutation } from '@tanstack/react-query';
import { UpdatePatients, UpdateUser } from '@wexelcode/api';
import { UpdatePatientRequest, UpdateUserRequest } from '@wexelcode/types';

export const useUpdatePatientProfile = () => {
  return useMutation({
    mutationFn: async (request: UpdateUserRequest & UpdatePatientRequest) => {
      await UpdateUser(request);
      await UpdatePatients(request);
    },
  });
};
