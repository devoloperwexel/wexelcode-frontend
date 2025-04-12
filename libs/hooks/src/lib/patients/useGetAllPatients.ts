import { useQuery } from '@tanstack/react-query';
import { GetAllPatients } from '@wexelcode/api';
import { QueryKeys } from '@wexelcode/constants';
import { GetAllPatientsRequest } from '@wexelcode/types';

export const useGetAllPatients = (request: GetAllPatientsRequest) => {
  return useQuery({
    queryKey: [
      QueryKeys.patients,
      request.physioUserId,
      request.name,
      request.limit,
      request.page,
    ],
    queryFn: async () => await GetAllPatients(request),
  });
};
