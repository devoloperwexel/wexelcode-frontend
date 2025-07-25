import React from 'react';
interface CheckoutSummaryProps {
  subtotal: number;
  discountAmount: number;
  total: number;
}
export const CheckoutSummary = ({
  subtotal,
  discountAmount,
  total,
}: CheckoutSummaryProps) => {
  return (
    <div className="mt-6 space-y-4">
      <div className="flex justify-between">
        <p className="text-sm text-gray-600">Subtotal</p>
        <p className="text-sm font-medium">€{subtotal?.toFixed(2)}</p>
      </div>
      {discountAmount > 0 && (
        <div className="flex justify-between text-green-600">
          <p className="text-sm">Discount</p>
          <p className="text-sm font-medium">-€{discountAmount?.toFixed(2)}</p>
        </div>
      )}
      <div className="border-t pt-4 flex justify-between">
        <p className="text-base font-medium">Total</p>
        <p className="text-base font-bold">€{total?.toFixed(2)}</p>
      </div>
    </div>
  );
};
