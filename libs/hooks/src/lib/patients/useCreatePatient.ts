import { useMutation } from '@tanstack/react-query';
import { CreatePatient } from '@wexelcode/api';
import { CreatePatientRequest } from '@wexelcode/types';

export const useCreatePatient = () => {
  return useMutation({
    mutationFn: async (request: CreatePatientRequest) =>
      await CreatePatient(request),
  });
};
