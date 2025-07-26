export interface CreateStripePaymentIntentRequest {
  userId: string;
  packageId: string;
  couponCode?: string;
}
