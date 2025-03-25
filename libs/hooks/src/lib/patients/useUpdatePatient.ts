import { useMutation, useQueryClient } from '@tanstack/react-query';
import { UpdatePatient } from '@wexelcode/api';
import { QueryKeys } from '@wexelcode/constants';
import { UpdatePatientRequest } from '@wexelcode/types';

export const useUpdatePatient = () => {
  const client = useQueryClient();

  return useMutation({
    mutationFn: async (request: UpdatePatientRequest) =>
      await UpdatePatient(request),
    onSuccess: () => {
      client.invalidateQueries({
        queryKey: [QueryKeys.patients],
      });
    },
  });
};
