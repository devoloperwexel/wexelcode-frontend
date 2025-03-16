import { useMutation } from '@tanstack/react-query';
import { UpdateUser } from '@wexelcode/api';
import { UpdateUserRequest } from '@wexelcode/types';

export const useUpdateUser = () => {
  return useMutation({
    mutationFn: async (request: UpdateUserRequest) => await UpdateUser(request),
  });
};
