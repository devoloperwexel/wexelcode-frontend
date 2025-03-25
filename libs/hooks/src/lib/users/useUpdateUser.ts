import { useMutation } from '@tanstack/react-query';
import { UpdateUser } from '@wexelcode/api';
import { UpdateUserRequest } from '@wexelcode/types';
import { useSession } from 'next-auth/react';

export const useUpdateUser = () => {
  const { update } = useSession();

  return useMutation({
    mutationFn: async (request: UpdateUserRequest) => await UpdateUser(request),
    onSuccess: async (response) => {
      await update({
        user: response?.data,
      });
    },
  });
};
