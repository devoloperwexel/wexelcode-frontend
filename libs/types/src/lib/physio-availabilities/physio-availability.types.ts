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

export interface PhysioAvailabilityTime {
  date: string;
  timezone: string;
  availableSlots: {
    time: string[];
    available: boolean;
  }[];
}
