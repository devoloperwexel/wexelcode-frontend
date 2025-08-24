import { BaseResponse, PaginatedResponse } from '../..';
import {
  PhysioAvailabilityTime,
  PhysioUnavailability,
} from './physio-availability.types';

export type GetPhysioUnavailabilityResponse =
  BaseResponse<PhysioUnavailability>;

export type GetPhysioUnavailabilitiesResponse =
  PaginatedResponse<PhysioUnavailability>;

export type GetPhysioAvailabilityTimeResponse =
  BaseResponse<PhysioAvailabilityTime>;
