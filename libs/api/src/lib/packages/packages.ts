import {
  GetPackageResponse,
  GetPackagesRequest,
  GetPackagesResponse,
} from '@wexelcode/types';
import { request } from '@wexelcode/utils';

import API from './constant';

export const GetPackageById = async (id: string) => {
  const response = await request<GetPackageResponse>(
    API.GET_PACKAGE_BY_ID,
    null,
    {
      params: { id },
      isSecure: false,
    }
  );

  return response?.data;
};

export const GetAllPackages = async (params: GetPackagesRequest) => {
  const response = await request<GetPackagesResponse>(
    API.GET_ALL_PACKAGES,
    null,
    {
      params,
      isSecure: false,
    }
  );

  return response?.data;
};
