import { Timestamps } from '../..';

export interface Coupon extends Timestamps {
  id: string;

  code: string;

  type: CouponType;

  maxUsePerUser: number;

  maxUses?: number;

  isActive: boolean;

  expiresAt?: Date;

  discountType: CouponDiscountType;

  discount?: number;
}

export type CouponDiscountType = 'FLAT' | 'PERCENTAGE';
export type CouponType =
  | 'PUBLIC_PACKAGE'
  | 'PUBLIC_NON_PACKAGE'
  | 'USER_GROUP_PACKAGE'
  | 'USER_GROUP_NON_PACKAGE';
