'use client';

import { CreateStripePaymentIntent, ValidateCoupon } from '@wexelcode/api';
import { Button } from '@wexelcode/components';
import { calculateCouponDiscount } from '@wexelcode/utils';
import { isAxiosError } from 'axios';
import { useSession } from 'next-auth/react';
import { useTranslations } from 'next-intl';
import React, { useState } from 'react';

import { PaymentCard } from '../../components/checkout';
import Routes from '../../constants/routes';
import { useRouter } from '../../i18n/routing';
import { CheckoutSummary } from './checkout-summary';
import { CouponForm } from './coupon-form';

interface CheckoutProps {
  subtotal: number;
  initTotal: number;
  packageId: string;
}
export const Checkout = ({ subtotal, initTotal, packageId }: CheckoutProps) => {
  const [couponCode, setCouponCode] = useState('');
  const [appliedCoupon, setAppliedCoupon] = useState<string>();
  const [stripeClient, setStripeClient] = useState<string>();
  const [discountPercentage, setDiscountPercentage] = useState(0);
  const [couponError, setCouponError] = useState('');
  const [isCouponValidating, setIsCouponValidating] = useState(false);
  const [isPaymentIntentCreating, setIsPaymentIntentCreating] = useState(false);
  const [total, setTotal] = useState(initTotal);
  const [payableAmount, setPayableAmount] = useState(0);
  const { data: session } = useSession();
  const router = useRouter();
  const t = useTranslations('package.checkout');

  const applyCoupon = async () => {
    setCouponError('');
    if (!couponCode.trim()) {
      setCouponError(t('pleaseEnterCoupon'));
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
        setCouponError(t('invalidCode'));
      }
    } catch (e) {
      if (e && isAxiosError(e)) {
        if (e.response!.status >= 400 && e.response!.status < 500) {
          setCouponError(t('invalidCode'));
        } else {
          setCouponError(t('couponError'));
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
  const handleContinue = async () => {
    const userId = session?.user?.id || '';
    try {
      setIsPaymentIntentCreating(true);
      const paymentIntent = (await CreateStripePaymentIntent({
        userId,
        couponCode: appliedCoupon,
        packageId,
      })) as Awaited<ReturnType<typeof CreateStripePaymentIntent>>;

      if (paymentIntent) {
        if (paymentIntent.totalPayableAmount > 0) {
          setStripeClient(paymentIntent.clientSecret);
          setPayableAmount(paymentIntent.totalPayableAmount);
        } else if (
          paymentIntent.totalPayableAmount === 0 &&
          paymentIntent.paymentId
        ) {
          router.push(
            `${Routes.packages}/${packageId}/checkout/success?paymentId=${paymentIntent.paymentId}`
          );
        }
      }
    } catch (e) {
      return;
    } finally {
      setIsPaymentIntentCreating(false);
    }
  };
  if (stripeClient && payableAmount > 0) {
    return <PaymentCard clientSecret={stripeClient} amount={payableAmount} />;
  }
  return (
    <div className="bg-card rounded-lg border border-border p-6 shadow-sm">
      <h2 className="text-xl font-semibold mb-4">{t('purchaseSummary')}</h2>
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
      <Button
        loading={isPaymentIntentCreating}
        disabled={isPaymentIntentCreating}
        onClick={handleContinue}
        className="w-full mt-8 text-primary-foreground py-4 px-4 rounded-md transition-opacity"
      >
        {t('continuePurchase')}
      </Button>
    </div>
  );
};
