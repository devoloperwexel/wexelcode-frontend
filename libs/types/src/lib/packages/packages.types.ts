import { Timestamps } from '../..';

export interface Package extends Timestamps {
  id: string;
  name: string;
  description: string;
  credits: number;
  price: number;
  feature: boolean;
}
