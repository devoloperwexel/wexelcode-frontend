import { QueryClient } from '@tanstack/react-query';
import { GetAllPackages } from '@wexelcode/api';
import { QueryKeys } from '@wexelcode/constants';
import { getTranslations } from 'next-intl/server';

import { PackageCard } from '../../../components/packages';
import { PackageSkeleton } from './package-skeleton';

export default async function BuyCreditsPage() {
  const t = await getTranslations('package');
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery({
    queryKey: [QueryKeys.package],
    queryFn: async () =>
      GetAllPackages({
        page: 1,
        limit: 3,
      }),
  });
  const packagesResults = queryClient.getQueryData([
    QueryKeys.package,
  ]) as Awaited<ReturnType<typeof GetAllPackages>>;

  if (!packagesResults?.results?.length) {
    return <PackageSkeleton />;
  }
  //
  return (
    <div className="bg-background w-full mb-12">
      <div className="container py-12 px-4 max-w-5xl mx-auto">
        <div className="text-center mb-10">
          <h1 className="text-3xl md:text-4xl font-bold mb-2">
            {t('choosePackage')}
          </h1>
          <p className="text-muted-foreground text-lg">{t('selectPackage')}</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto">
          {packagesResults?.results.map((pkg) => (
            <PackageCard
              key={pkg.id}
              id={pkg.id}
              name={pkg.name}
              description={pkg.description}
              credits={pkg.credits}
              price={pkg.price}
              popular={pkg.feature}
              discount={pkg.discount}
              discountType={pkg.discountType}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
