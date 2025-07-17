import { TranslatedField } from '@wexelcode/types';
import { useLocale, useTranslations } from 'next-intl';

interface PackageDetailsProps {
  name: TranslatedField;
  description: TranslatedField;
  credits: number;
  price: number;
  discountPrice: number;
}
export function PackageDetails({
  name,
  description,
  credits,
  price,
  discountPrice,
}: PackageDetailsProps) {
  const local = useLocale();
  const t = useTranslations('package');
  return (
    <div className="bg-card rounded-lg border border-border p-6 shadow-sm">
      <h2 className="text-2xl font-bold mb-4">{t('orderSummary')}</h2>
      <div className="mb-6 pb-6 border-b border-border">
        <h3 className="text-xl font-bold mb-2">
          {name?.[local]} {local === 'en' && t('package')}
        </h3>
        <p className="text-muted-foreground mb-4">{description?.[local]}</p>
      </div>
      <div className="space-y-3 mb-6">
        <div className="flex justify-between">
          <span className="text-muted-foreground">{t('package')}</span>
          <span>{name?.[local]}</span>
        </div>
        <div className="flex justify-between">
          <span className="text-muted-foreground">{t('credits')}</span>
          <span>{credits}</span>
        </div>
        <div className="flex justify-between">
          <span className="text-muted-foreground">{t('pricePerCredit')}</span>
          <span>€{(price / credits).toFixed(2)}</span>
        </div>
      </div>
      <div className="flex justify-between pt-4 border-t border-border">
        <span className="font-bold">{t('total')}</span>
        {discountPrice < price ? (
          <div>
            <span className="font-bold">€{discountPrice.toFixed(2)}</span>
            <span className="text-muted-foreground line-through text-sm pl-1">
              €{price.toFixed(2)}
            </span>
          </div>
        ) : (
          <span className="font-bold">€{price.toFixed(2)}</span>
        )}
      </div>
    </div>
  );
}
