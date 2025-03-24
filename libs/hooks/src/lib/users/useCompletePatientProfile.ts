import { useMutation } from '@tanstack/react-query';
import { CreatePatient, UpdateUser } from '@wexelcode/api';
import { CreatePatientRequest, UpdateUserRequest } from '@wexelcode/types';
import { useSession } from 'next-auth/react';

export const useCompletePatientProfile = () => {
  const { update } = useSession();

  return useMutation({
    mutationFn: async (request: UpdateUserRequest & CreatePatientRequest) => {
      await CreatePatient(request);
      return await UpdateUser(request);
    },
    onSuccess: async (response) => {
      await update({
        user: response?.data,
      });
    },
  });
};
