'use client';

import { Elements } from '@stripe/react-stripe-js';
import { Card, CardContent, CardHeader } from '@wexelcode/components';
import { convertToSubCurrency, getStripe } from '@wexelcode/utils';
import { useLocale, useTranslations } from 'next-intl';

import PaymentForm from './payment-form';

type PaymentCardProps = React.ComponentProps<typeof PaymentForm>;

export function PaymentCard(props: PaymentCardProps) {
  const t = useTranslations('appointments.paymentCard');
  const localeValue = useLocale();
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
            locale: localeValue === 'de' ? 'de' : 'en',
          }}
        >
          <PaymentForm {...props} />
        </Elements>
      </CardContent>
    </Card>
  );
}
