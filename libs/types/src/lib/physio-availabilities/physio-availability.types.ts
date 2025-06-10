import { Timestamps } from '../..';

export interface PhysioUnavailability {
  id: string;
  physioId: string;
  startTime: Date;
  endTime: Date;
}

export interface SavedPhysioUnavailability
  extends PhysioUnavailability,
    Timestamps {}
