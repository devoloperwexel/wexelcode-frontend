import { useMutation, useQueryClient } from '@tanstack/react-query';
import { UpdateDoctor } from '@wexelcode/api';
import { QueryKeys } from '@wexelcode/constants';
import { UpdateDoctorRequest } from '@wexelcode/types';

export const useUpdateDoctor = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (payload: UpdateDoctorRequest) => {
      return await UpdateDoctor(payload);
    },
    onSuccess: async () => {
      await queryClient.invalidateQueries({
        queryKey: [QueryKeys.doctors],
      });
    },
  });
};
