export interface GetPhysioUnavailabilitiesRequest {
  physioId: string;
  startTime?: Date;
  endTime?: Date;
}

export interface GetPhysioUnavailabilityCheckRequest {
  id: string;
  date: string;
}
