import { useQuery } from '@tanstack/react-query';
import { ValidateCoupon } from '@wexelcode/api';
import { QueryKeys } from '@wexelcode/constants';
import { ValidateCouponRequest } from '@wexelcode/types';

export const useValidateCoupon = (request: ValidateCouponRequest) => {
  return useQuery({
    queryKey: [
      QueryKeys.coupon,
      request.userId,
      request.code,
      request.packageId,
    ],
    queryFn: async () => await ValidateCoupon(request),
    staleTime: 0,
    enabled: false,
    refetchOnWindowFocus: false,
  });
};
