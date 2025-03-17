import { useMutation } from '@tanstack/react-query';
import { UpdatePatients } from '@wexelcode/api';
import { UpdatePatientRequest } from '@wexelcode/types';

export const useUpdatePatient = () => {
  return useMutation({
    mutationFn: async (request: UpdatePatientRequest) =>
      await UpdatePatients(request),
  });
};
