'use client';

import { ValidateCoupon } from '@wexelcode/api';
import { Button } from '@wexelcode/components';
import { calculateCouponDiscount } from '@wexelcode/utils';
import { isAxiosError } from 'axios';
import { useSession } from 'next-auth/react';
import React, { useState } from 'react';

import { CheckoutSummary } from './checkout-summary';
import { CouponForm } from './coupon-form';

interface CheckoutProps {
  subtotal: number;
  initTotal: number;
  packageId: string;
}
export const Checkout = ({ subtotal, initTotal, packageId }: CheckoutProps) => {
  const [couponCode, setCouponCode] = useState('');
  const [appliedCoupon, setAppliedCoupon] = useState('');
  const [discountPercentage, setDiscountPercentage] = useState(0);
  const [couponError, setCouponError] = useState('');
  const [isCouponValidating, setIsCouponValidating] = useState(false);
  const [total, setTotal] = useState(initTotal);
  const { data: session } = useSession();

  const applyCoupon = async () => {
    setCouponError('');
    if (!couponCode.trim()) {
      setCouponError('Please enter a coupon code');
      return;
    }
    const userId = session?.user?.id || '';
    try {
      setIsCouponValidating(true);
      const coupon = (await ValidateCoupon({
        userId,
        code: couponCode,
        packageId,
      })) as Awaited<ReturnType<typeof ValidateCoupon>>;

      if (coupon) {
        const { couponDiscountPercentage, finalPrice } =
          calculateCouponDiscount({
            price: subtotal,
            priceAfterPackage: total,
            couponDiscount: coupon.discount,
            discountType: coupon.discountType,
          });
        setDiscountPercentage(couponDiscountPercentage);
        setAppliedCoupon(coupon.code.toUpperCase());
        setTotal(finalPrice);
        setCouponCode('');
      } else {
        setCouponError('Invalid coupon code');
      }
    } catch (e) {
      if (e && isAxiosError(e)) {
        if (e.response!.status >= 400 && e.response!.status < 500) {
          setCouponError('Invalid coupon code');
        } else {
          setCouponError('An error occurred while applying the coupon');
        }
      }
      return;
    } finally {
      setIsCouponValidating(false);
    }
  };
  const removeCoupon = () => {
    setAppliedCoupon('');
    setDiscountPercentage(0);
    setTotal(initTotal);
  };
  return (
    <div className="bg-card rounded-lg border border-border p-6 shadow-sm">
      <h2 className="text-xl font-semibold mb-4">Purchase Summary</h2>
      <CouponForm
        couponCode={couponCode}
        setCouponCode={setCouponCode}
        applyCoupon={applyCoupon}
        appliedCoupon={appliedCoupon}
        removeCoupon={removeCoupon}
        couponError={couponError}
        discountPercentage={discountPercentage}
        isValidating={isCouponValidating}
      />
      <CheckoutSummary
        subtotal={subtotal}
        discountAmount={subtotal - total}
        total={total}
      />
      <Button className="w-full mt-8 text-primary-foreground py-4 px-4 rounded-md transition-opacity">
        Continue Purchase
      </Button>
    </div>
  );
};
