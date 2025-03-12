import { Elements } from '@stripe/react-stripe-js';
import { Card, CardContent, CardHeader } from '@wexelcode/components';
import { convertToSubCurrency, getStripe } from '@wexelcode/utils';

import CheckoutForm from './checkout-form';

export function CheckoutCard() {
  const amount = 49;

  return (
    <Card>
      <CardHeader>Complete Appointment</CardHeader>
      <CardContent>
        <Elements
          stripe={getStripe()}
          options={{
            mode: 'payment',
            amount: convertToSubCurrency(amount),
            currency: 'usd',
          }}
        >
          <CheckoutForm amount={amount} />
        </Elements>
      </CardContent>
    </Card>
  );
}
