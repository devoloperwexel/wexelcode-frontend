import { Elements } from '@stripe/react-stripe-js';
import { Card, CardContent, CardHeader } from '@wexelcode/components';
import { convertToSubCurrency, getStripe } from '@wexelcode/utils';
import { useTranslations } from 'next-intl';

import CheckoutForm from './checkout-form';

type CheckoutCardProps = React.ComponentProps<typeof CheckoutForm>;

export function CheckoutCard(props: CheckoutCardProps) {
  const t = useTranslations('appointments.appointmentCard');
  return (
    <Card>
      <CardHeader>{t('title')}</CardHeader>
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
