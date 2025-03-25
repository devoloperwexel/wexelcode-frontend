import { useQuery } from '@tanstack/react-query';
import { GetPatientsByUserId } from '@wexelcode/api';
import { QueryKeys } from '@wexelcode/constants';

export const useGetPatientByUserId = (id?: string) => {
  return useQuery({
    queryKey: [QueryKeys.users, id, QueryKeys.patients],
    queryFn: async () => await GetPatientsByUserId(id!),
    enabled: !!id,
  });
};
