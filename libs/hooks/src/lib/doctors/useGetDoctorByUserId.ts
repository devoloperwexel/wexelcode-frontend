import { useQuery } from '@tanstack/react-query';
import { GetDoctorByUserId } from '@wexelcode/api';
import { QueryKeys } from '@wexelcode/constants';

export const useGetDoctorByUserId = (id?: string) => {
  return useQuery({
    queryKey: [QueryKeys.doctors, id],
    queryFn: async () => GetDoctorByUserId(id!),
    enabled: !!id, // TODO: remove this when we have a better solution for the user id
  });
};
