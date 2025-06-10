import { BaseResponse, PaginatedResponse } from '../..';
import {
  PhysioAvailabilityCheck,
  PhysioUnavailability,
} from './physio-availability.types';

export type GetPhysioUnavailabilityResponse =
  BaseResponse<PhysioUnavailability>;

export type GetPhysioUnavailabilitiesResponse =
  PaginatedResponse<PhysioUnavailability>;

export type GetPhysioAvailabilityCheckResponse =
  BaseResponse<PhysioAvailabilityCheck>;
