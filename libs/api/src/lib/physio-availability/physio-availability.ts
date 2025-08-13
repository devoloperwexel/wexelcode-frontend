import {
  DeletePhysioUnavailabilityRequest,
  GetPhysioAvailabilityTimeResponse,
  GetPhysioUnavailabilitiesRequest,
  GetPhysioUnavailabilitiesResponse,
  GetPhysioUnavailabilityResponse,
  GetPhysioUnavailabilityTimeRequest,
  SavedPhysioUnavailability,
} from '@wexelcode/types';
import { request } from '@wexelcode/utils';

import API from './constant';

export const SavePhysioUnavailability = async ({
  physioId,
  ...physioUnavailabilitiesData
}: SavedPhysioUnavailability) => {
  const response = await request<GetPhysioUnavailabilityResponse>(
    API.SAVE_PHYSIO_UNAVAILABILITIES,
    { ...physioUnavailabilitiesData },
    {
      params: {
        physioId,
      },
      isSecure: true,
    }
  );

  return response?.data;
};

export const DeletePhysioUnavailability = async ({
  physioId,
  id,
}: DeletePhysioUnavailabilityRequest) => {
  const response = await request<GetPhysioUnavailabilityResponse>(
    API.DELETE_PHYSIO_UNAVAILABILITIES,
    {},
    {
      params: {
        physioId,
        id,
      },
      isSecure: true,
    }
  );

  return response?.data;
};

export const GetPhysioUnavailabilities = async (
  params: GetPhysioUnavailabilitiesRequest
) => {
  const response = await request<GetPhysioUnavailabilitiesResponse>(
    API.GET_PHYSIO_UNAVAILABILITIES,
    null,
    {
      params,
      isSecure: true,
    }
  );

  return response?.data;
};

export const GetPhysioAvailabilityTime = async (
  params: GetPhysioUnavailabilityTimeRequest
) => {
  const response = await request<GetPhysioAvailabilityTimeResponse>(
    API.GET_UNAVAILABILITY_TIMES,
    null,
    {
      params,
    }
  );

  return response;
};
