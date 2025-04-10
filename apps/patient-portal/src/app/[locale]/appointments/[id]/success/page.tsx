import { notFound } from 'next/navigation';

import AppointmentSuccessPageContent from './page-content';

interface AppointmentSuccessPageProps {
  searchParams: Promise<{ session_id?: string }>;
}

const stripe = require('stripe')(process.env.STRIPE_CLIENT_SECRET);

export default async function AppointmentSuccessPage({
  searchParams,
}: AppointmentSuccessPageProps) {
  const sessionId = (await searchParams)?.session_id;
  if (!sessionId) {
    notFound();
  }
  try {
    const session = await stripe.checkout.sessions.retrieve(sessionId);

    if (session.payment_status !== 'paid') {
      notFound();
    }

    return <AppointmentSuccessPageContent />;
  } catch (_error) {
    notFound();
  }
}
