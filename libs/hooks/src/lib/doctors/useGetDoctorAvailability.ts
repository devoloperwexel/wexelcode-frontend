import { useQuery } from '@tanstack/react-query';
import { GetDoctorAvailability } from '@wexelcode/api';
import { QueryKeys } from '@wexelcode/constants';
import { GetDoctorAvailabilityRequest } from '@wexelcode/types';

export const useGetDoctorAvailability = (
  request: GetDoctorAvailabilityRequest
) => {
  return useQuery({
    queryKey: [QueryKeys.doctors, request.id, request.date],
    queryFn: async () => GetDoctorAvailability(request),
  });
};
