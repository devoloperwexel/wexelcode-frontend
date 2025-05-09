import { useQuery } from '@tanstack/react-query';
import { GetDoctors } from '@wexelcode/api';
import { QueryKeys } from '@wexelcode/constants';
import { GetDoctorsRequest } from '@wexelcode/types';

export const useGetDoctors = (request: GetDoctorsRequest) => {
  return useQuery({
    queryKey: [QueryKeys.doctors, request.page, request.limit],
    queryFn: async () => GetDoctors(request),
  });
};
