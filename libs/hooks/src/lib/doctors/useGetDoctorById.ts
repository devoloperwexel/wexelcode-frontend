import { useQuery } from '@tanstack/react-query';
import { GetDoctorById } from '@wexelcode/api';
import { QueryKeys } from '@wexelcode/constants';

export const useGetDoctorById = (id: string) => {
  return useQuery({
    queryKey: [QueryKeys.doctors, id],
    queryFn: async () => GetDoctorById(id),
  });
};
