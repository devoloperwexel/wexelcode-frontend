import {
  DeletePhysioUnavailabilityRequest,
  GetPhysioAvailabilityCheckResponse,
  GetPhysioUnavailabilitiesRequest,
  GetPhysioUnavailabilitiesResponse,
  GetPhysioUnavailabilityCheckRequest,
  GetPhysioUnavailabilityResponse,
  SavedPhysioUnavailability,
} from '@wexelcode/types';
import { request } from '@wexelcode/utils';

import API from './constant';

export const SavePhysioUnavailability = async ({
  physioId,
  ...physioUnavailabilitiesData
}: SavedPhysioUnavailability) => {
  console.log(physioUnavailabilitiesData);

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
  console.log(id);
  
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
    }
  );

  return response?.data;
};

export const GetPhysioAvailabilityCheck = async (
  params: GetPhysioUnavailabilityCheckRequest
) => {
  const response = await request<GetPhysioAvailabilityCheckResponse>(
    API.CHECK_UNAVAILABILITY,
    null,
    {
      params,
    }
  );

  return response;
};
