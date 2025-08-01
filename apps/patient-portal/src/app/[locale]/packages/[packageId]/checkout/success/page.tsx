import { QueryClient } from '@tanstack/react-query';
import { GetPackageById } from '@wexelcode/api';
import { QueryKeys } from '@wexelcode/constants';
import { notFound } from 'next/navigation';

import PaymentSuccessPageContent from './page-content';

interface AppointmentSuccessPageProps {
  params: Promise<{
    packageId: string;
  }>;
  searchParams: Promise<{
    payment_intent?: string;
    redirect_status: string;
    paymentId?: string;
  }>;
}

const stripe = require('stripe')(process.env?.STRIPE_CLIENT_SECRET);

export default async function AppointmentSuccessPage({
  searchParams,
  params,
}: AppointmentSuccessPageProps) {
  const queryParm = await searchParams;
  const paymentIntent = queryParm?.payment_intent;
  const status = queryParm?.redirect_status;
  const packageId = (await params).packageId;
  const paymentId = queryParm?.paymentId;
  const queryClient = new QueryClient();
  // Prefetch the package data
  await queryClient.prefetchQuery({
    queryKey: [QueryKeys.package],
    queryFn: async () => GetPackageById(packageId),
  });
  const packagesResponse = queryClient.getQueryData([
    QueryKeys.package,
  ]) as Awaited<ReturnType<typeof GetPackageById>>;

  if (!packagesResponse) {
    notFound();
  }
  if (!paymentId) {
    // Check if payment intent exists and status is succeeded
    if (!paymentIntent || status !== 'succeeded') {
      notFound();
    }
    try {
      const intent = await stripe.paymentIntents.retrieve(paymentIntent);
      //
      if (intent.status !== 'succeeded') {
        notFound();
      }
      //
      return <PaymentSuccessPageContent credits={packagesResponse?.credits} />;
    } catch (_error) {
      notFound();
    }
  } else {
    return <PaymentSuccessPageContent credits={packagesResponse?.credits} />;
  }
}
