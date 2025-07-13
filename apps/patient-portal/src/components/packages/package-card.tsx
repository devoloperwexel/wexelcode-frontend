import { Check } from 'lucide-react';

import Routes from '../../constants/routes';
import { Link } from '../../i18n/routing';

interface PackageCardProps {
  id: string;
  name: string;
  description: string;
  credits: number;
  price: number;
  appointments: number;
  popular: boolean;
}
export function PackageCard({
  id,
  name,
  description,
  credits,
  price,
  appointments,
  popular,
}: PackageCardProps) {
  return (
    <div
      className={`rounded-lg border ${
        popular ? 'border-primary border-2' : 'border-border'
      } p-6 shadow-sm relative h-full flex flex-col`}
    >
      {popular && (
        <div className="absolute -top-3 right-4">
          <span className="bg-primary text-primary-foreground text-xs font-semibold px-3 py-1 rounded-full">
            Most Popular
          </span>
        </div>
      )}
      <div className="flex-1">
        <h3 className="text-xl font-bold mb-2">{name} Package</h3>
        <p className="text-muted-foreground mb-4">{description}</p>
        <div className="mb-4">
          <span className="text-3xl font-bold">€{price.toFixed(2)}</span>
        </div>
        <ul className="space-y-2 mb-6">
          <li className="flex items-center">
            <Check color="#16cc59" size={20} style={{ marginRight: 6 }} />
            <span>{credits} credits included</span>
          </li>
          <li className="flex items-center">
            <Check color="#16cc59" size={20} style={{ marginRight: 6 }} />
            <span>Book up to {appointments} appointments</span>
          </li>
          <li className="flex items-center">
            <Check color="#16cc59" size={20} style={{ marginRight: 6 }} />
            <span>1 credit = 1 appointment</span>
          </li>
        </ul>
      </div>
      <Link href={`${Routes.packages}/${id}/checkout`}>
        <button
          className={`w-full py-3 px-4 rounded-md font-medium ${
            popular
              ? 'bg-primary text-primary-foreground hover:bg-primary/70'
              : 'bg-secondary text-secondary-foreground hover:bg-primary/60 hover:text-white'
          }`}
        >
          Buy Now
        </button>
      </Link>
    </div>
  );
}
