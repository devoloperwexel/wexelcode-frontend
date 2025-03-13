import { Elements } from '@stripe/react-stripe-js';
import { Card, CardContent, CardHeader } from '@wexelcode/components';
import { convertToSubCurrency, getStripe } from '@wexelcode/utils';

import CheckoutForm from './checkout-form';

type CheckoutCardProps = React.ComponentProps<typeof CheckoutForm>;

export function CheckoutCard(props: CheckoutCardProps) {
  return (
    <Card>
      <CardHeader>Complete Appointment</CardHeader>
      <CardContent>
        <Elements
          stripe={getStripe()}
          options={{
            mode: 'payment',
            amount: convertToSubCurrency(props.amount),
            currency: 'eur',
          }}
        >
          <CheckoutForm {...props} />
        </Elements>
      </CardContent>
    </Card>
  );
}
