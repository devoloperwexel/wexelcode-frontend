import { useMutation } from '@tanstack/react-query';
import { CreatePatient, UpdateUser } from '@wexelcode/api';
import { CreatePatientRequest, UpdateUserRequest } from '@wexelcode/types';

export const useCompletePatientProfile = () => {
  return useMutation({
    mutationFn: async (request: UpdateUserRequest & CreatePatientRequest) => {
      //  await UpdateUser(request);
      console.log('request', request);
      await CreatePatient(request);
    },
  });
};
