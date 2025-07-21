export interface PhysioUnavailability {
  id: string;
  physioId: string;
  startTime: string;
  endTime: string;
}

export type SavedPhysioUnavailability = {
  physioId: string;
  startTime: string;
  endTime: string;
};

export interface PhysioAvailabilityCheck {
  date: string;
  availabilityTimes: Date[];
}
