import { notFound } from 'next/navigation';

import AppointmentSuccessPageContent from './page-content';

interface AppointmentSuccessPageProps {
  searchParams: Promise<{ payment_intent?: string }>;
}

const stripe = require('stripe')(process.env.STRIPE_CLIENT_SECRET);

export default async function AppointmentSuccessPage({
  searchParams,
}: AppointmentSuccessPageProps) {
  const paymentIntent = (await searchParams)?.payment_intent;
  if (!paymentIntent) {
    notFound();
  }
  try {
    const intent = await stripe.checkout.paymentIntents.retrieve(paymentIntent);

    if (intent.payment_status !== 'succeeded') {
      notFound();
    }

    return <AppointmentSuccessPageContent />;
  } catch (_error) {
    notFound();
  }
}
