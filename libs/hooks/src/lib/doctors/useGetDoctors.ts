import { useQuery } from '@tanstack/react-query';
import { GetDoctors } from '@wexelcode/api';
import { QueryKeys } from '@wexelcode/constants';
import { GetDoctorsRequest } from '@wexelcode/types';

export const useGetDoctors = ({ query }: GetDoctorsRequest) => {
  return useQuery({
    queryKey: [QueryKeys.doctors],
    queryFn: async () => GetDoctors({ query }),
  });
};
