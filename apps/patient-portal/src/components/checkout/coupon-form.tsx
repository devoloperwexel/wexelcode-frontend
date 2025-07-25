import { Button } from '@wexelcode/components';
import { Tag, X } from 'lucide-react';
interface CouponFormProps {
  couponCode: string;
  setCouponCode: (code: string) => void;
  applyCoupon: () => void;
  appliedCoupon?: string;
  removeCoupon: () => void;
  couponError: string;
  discountPercentage: number;
  isValidating: boolean;
}
export const CouponForm = ({
  couponCode,
  setCouponCode,
  applyCoupon,
  appliedCoupon,
  removeCoupon,
  couponError,
  discountPercentage,
  isValidating = false,
}: CouponFormProps) => {
  return (
    <div className="mt-4 mb-6">
      <p className="text-sm font-medium mb-2">Have a coupon?</p>
      {appliedCoupon ? (
        <div className="flex items-center justify-between bg-green-50 border border-green-200 rounded-md p-3">
          <div className="flex items-center">
            <Tag size={16} className="text-green-600 mr-2" />
            <div>
              <p className="text-sm font-medium text-green-800">
                {appliedCoupon}
              </p>
              <p className="text-xs text-green-600">
                {discountPercentage}% discount applied
              </p>
            </div>
          </div>
          <button
            onClick={removeCoupon}
            className="text-green-700 hover:text-green-800"
          >
            <X size={18} />
          </button>
        </div>
      ) : (
        <div className="mt-1">
          <div className="flex space-x-2">
            <input
              type="text"
              value={couponCode}
              onChange={(e) => setCouponCode(e.target.value)}
              placeholder="Enter coupon code"
              className="flex-1 border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
            />
            <Button
              disabled={isValidating}
              loading={isValidating}
              onClick={applyCoupon}
            >
              Apply
            </Button>
          </div>
          {couponError && (
            <p className="mt-1 text-xs text-red-600">{couponError}</p>
          )}
        </div>
      )}
    </div>
  );
};
