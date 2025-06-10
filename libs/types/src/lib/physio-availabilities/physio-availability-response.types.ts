import { BaseResponse, PaginatedResponse } from '../..';
import { PhysioUnavailability } from './physio-availability.types';

export type GetPhysioUnavailabilityResponse =
  BaseResponse<PhysioUnavailability>;

export type GetPhysioUnavailabilitiesResponse =
  PaginatedResponse<PhysioUnavailability>;
