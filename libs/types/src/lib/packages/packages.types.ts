import { Timestamps, TranslatedField } from '../..';

export interface Package extends Timestamps {
  id: string;
  name: TranslatedField;
  description: TranslatedField;
  credits: number;
  price: number;
  discount: number;
  discountType: PackageDiscountType;
  feature: boolean;
}

export type PackageDiscountType = 'FLAT' | 'PERCENTAGE';
