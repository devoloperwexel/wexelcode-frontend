export interface StripePaymentIntent {
  packageId: string;
  paymentId?: string;
  appliedCoupon?: string;
  totalPayableAmount: number;
  totalDiscount: number;
  clientSecret?: string;
}
