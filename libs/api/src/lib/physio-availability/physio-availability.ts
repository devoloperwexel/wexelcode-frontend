import {
  GetPhysioUnavailabilitiesRequest,
  GetPhysioUnavailabilitiesResponse,
  GetPhysioUnavailabilityResponse,
  PhysioUnavailability,
} from '@wexelcode/types';
import { request } from '@wexelcode/utils';

import API from './constant';

export const SavePhysioUnavailability = async ({
  physioId,
  ...rest
}: PhysioUnavailability) => {
  const dataToSave = {
    physioUnavailabilities: rest,
  };

  const response = await request<GetPhysioUnavailabilityResponse>(
    API.SAVE_PHYSIO_UNAVAILABILITIES,
    dataToSave,
    {
      params: {
        physioId,
      },
      isSecure: true,
    }
  );

  return response?.data;
};

export const GetPhysioUnavailabilities = async (params: GetPhysioUnavailabilitiesRequest) => {
  const response = await request<GetPhysioUnavailabilitiesResponse>(
    API.GET_PHYSIO_UNAVAILABILITIES,
    null,
    {
      params,
    }
  );

  return response?.data;
};
