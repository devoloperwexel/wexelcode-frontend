import { Timestamps } from '../..';

export interface ZoomToken extends Timestamps {
  token: string;
  expire: number;
}
