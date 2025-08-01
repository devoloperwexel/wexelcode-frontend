import { BaseRequest } from '../api/request.types';

export interface GetPhysioUnavailabilitiesRequest extends BaseRequest {
  physioId: string;
  startDateRange?: string;
  endDateRange?: string;
}

export interface DeletePhysioUnavailabilityRequest {
  physioId: string;
  id: string;
}

export interface GetPhysioUnavailabilityCheckRequest {
  id: string;
  date: string;
}
