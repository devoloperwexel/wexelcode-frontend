'use client';

import {
  PaymentElement,
  useElements,
  useStripe,
} from '@stripe/react-stripe-js';
import { Button, Text } from '@wexelcode/components';
import { convertToSubCurrency } from '@wexelcode/utils';
import { useTranslations } from 'next-intl';
import React, { useEffect, useState } from 'react';

import CheckoutLoading from './checkout-loading';

interface CheckoutPageProps {
  userId: string;
  packageId: string;
  amount: number;
}

export default function CheckoutForm({
  amount,
  userId,
  packageId,
}: CheckoutPageProps) {
  const t = useTranslations('appointments.paymentCard');
  const stripe = useStripe();
  const elements = useElements();
  const [errorMessage, setErrorMessage] = useState<string>();
  const [clientSecret, setClientSecret] = useState('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetch('/api/create-payment-intent', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        amount: convertToSubCurrency(amount),
        userId,
        packageId,
      }),
    })
      .then((res) => res.json())
      .then((data) => setClientSecret(data.clientSecret));
  }, [amount, userId, packageId]);

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
        return_url: `${window.location.href.replace('/checkout', '')}/success`,
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
    return <CheckoutLoading />;
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {clientSecret && <PaymentElement />}

      {errorMessage && <Text variant="error">{errorMessage}</Text>}

      <Button className="w-full" disabled={!stripe || loading}>
        {t('pay')} &#8364;{amount}
      </Button>
    </form>
  );
}
