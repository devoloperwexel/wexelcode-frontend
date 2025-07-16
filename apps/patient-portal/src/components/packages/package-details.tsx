interface PackageDetailsProps {
  name: string;
  description: string;
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
  return (
    <div className="bg-card rounded-lg border border-border p-6 shadow-sm">
      <h2 className="text-2xl font-bold mb-4">Order Summary</h2>
      <div className="mb-6 pb-6 border-b border-border">
        <h3 className="text-xl font-bold mb-2">{name} Package</h3>
        <p className="text-muted-foreground mb-4">{description}</p>
      </div>
      <div className="space-y-3 mb-6">
        <div className="flex justify-between">
          <span className="text-muted-foreground">Package</span>
          <span>{name}</span>
        </div>
        <div className="flex justify-between">
          <span className="text-muted-foreground">Credits</span>
          <span>{credits}</span>
        </div>
        <div className="flex justify-between">
          <span className="text-muted-foreground">Price per credit</span>
          <span>€{(price / credits).toFixed(2)}</span>
        </div>
      </div>
      <div className="flex justify-between pt-4 border-t border-border">
        <span className="font-bold">Total</span>
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
