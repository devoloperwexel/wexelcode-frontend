import { notFound } from 'next/navigation';

import AppointmentSuccessPageContent from './page-content';

interface AppointmentSuccessPageProps {
  params: Promise<{
    id: string;
  }>;
  searchParams: Promise<{ payment_intent?: string; redirect_status: string }>;
}

const stripe = require('stripe')(process.env?.STRIPE_CLIENT_SECRET);

export default async function AppointmentSuccessPage({
  searchParams,
  params,
}: AppointmentSuccessPageProps) {
  const queryParm = await searchParams;
  const paymentIntent = queryParm?.payment_intent;
  const status = queryParm?.redirect_status;

  if (!paymentIntent || status !== 'succeeded') {
    notFound();
  }
  try {
    const intent = await stripe.paymentIntents.retrieve(paymentIntent);

    if (intent.status !== 'succeeded') {
      notFound();
    }

    return <AppointmentSuccessPageContent appointmentId={(await params).id} />;
  } catch (_error) {
    notFound();
  }
}
