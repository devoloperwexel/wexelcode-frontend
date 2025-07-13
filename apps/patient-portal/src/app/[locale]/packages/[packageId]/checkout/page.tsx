import { QueryClient } from '@tanstack/react-query';
import { GetPackageById } from '@wexelcode/api';
import { auth } from '@wexelcode/auth';
import { QueryKeys } from '@wexelcode/constants';
import { ChevronLeft } from 'lucide-react';
import { notFound } from 'next/navigation';

import { CheckoutCard } from '../../../../../components/checkout';
import { PackageDetails } from '../../../../../components/packages/package-details';
import Routes from '../../../../../constants/routes';
import { Link } from '../../../../../i18n/routing';

interface PackagePaymentProps {
  params: Promise<{
    packageId: string;
  }>;
}

export default async function PackagePaymentPage({
  params,
}: PackagePaymentProps) {
  const { packageId } = await params;
  const session = await auth();
  const userId = session?.user?.id;
  //
  const queryClient = new QueryClient();
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
  return (
    <div className="min-h-screen bg-background w-full">
      <div className="container py-12 px-4 max-w-6xl mx-auto">
        <div className="mb-8">
          <Link
            href={Routes.packages}
            className="text-primary hover:underline flex items-center"
          >
            <ChevronLeft style={{ marginRight: 4 }} />
            Back to packages
          </Link>
        </div>
        <h1 className="text-3xl font-bold mb-8">Complete Your Purchase</h1>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div>
            <PackageDetails
              name={packagesResponse.name}
              description={packagesResponse.description}
              credits={packagesResponse.credits}
              price={packagesResponse.price}
            />
          </div>
          <div>
            <CheckoutCard
              userId={userId}
              appointmentId={packageId}
              amount={packagesResponse.price}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
