import { User } from '../..';

export interface Patient {
  id: string;
  occupation: string;
  weight: number;
  height: number;
  activities: string[];
  user: User;
}
