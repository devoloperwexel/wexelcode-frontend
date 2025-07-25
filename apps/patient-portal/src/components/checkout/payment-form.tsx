'use client';

import {
  PaymentElement,
  useElements,
  useStripe,
} from '@stripe/react-stripe-js';
import { Button, Text } from '@wexelcode/components';
import { useTranslations } from 'next-intl';
import React, { useState } from 'react';

import PaymentLoading from './payment-loading';

interface PaymentPageProps {
  amount: number;
  clientSecret: string;
}

export default function PaymentForm({
  clientSecret,
  amount,
}: PaymentPageProps) {
  const t = useTranslations('appointments.paymentCard');
  const stripe = useStripe();
  const elements = useElements();
  const [errorMessage, setErrorMessage] = useState<string>();
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setLoading(true);

    if (!stripe || !elements) {
      return;
    }

    const { error: submitError } = await elements.submit();

    if (submitError) {
      setErrorMessage(submitError.message);
      setLoading(false);
      return;
    }

    const { error } = await stripe.confirmPayment({
      elements,
      clientSecret,
      confirmParams: {
        return_url: `${window.location.href.replace('/Payment', '')}/success`,
      },
    });

    if (error) {
      // This point is only reached if there's an immediate error when
      // confirming the payment. Show the error to your customer (for example, payment details incomplete)
      setErrorMessage(error.message);
    } else {
      // The payment UI automatically closes with a success animation.
      // Your customer is redirected to your `return_url`.
    }

    setLoading(false);
  };

  if (!clientSecret || !stripe || !elements) {
    return <PaymentLoading />;
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {clientSecret && <PaymentElement />}

      {errorMessage && <Text variant="error">{errorMessage}</Text>}

      <Button className="w-full" disabled={!stripe || loading}>
        {t('pay')} &#8364;{amount / 100}
      </Button>
    </form>
  );
}
