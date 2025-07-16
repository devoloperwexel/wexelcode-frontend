import { PackageDiscountType } from '@wexelcode/types';

/**
 * Calculates the discounted price and discount percentage based on the given discount type.
 *
 * @param {Object} params - The input parameters.
 * @param {number} params.price - The original price of the product/package.
 * @param {number} params.discount - The discount value. Can be a flat amount or a percentage.
 * @param {PackageDiscountType} params.discountType - The type of discount: 'FLAT' or 'PERCENTAGE'.
 * 
 * @returns {{ discountedPrice: number, discountPercentage: number }} 
 * An object containing the final discounted price and the calculated discount percentage.
 * 
 * - If `discountType` is `'FLAT'`, the discount is subtracted directly from the price.
 * - If `discountType` is `'PERCENTAGE'`, the discount is applied as a percentage of the price.
 * - If the price is less than or equal to 0, or the discount is negative, the original price is returned with 0% discount.
 */
export function calculateDiscount({
  price,
  discount,
  discountType,
}: {
  price: number;
  discount: number;
  discountType: PackageDiscountType;
}) {
  if (price <= 0 || discount < 0) {
    return { discountedPrice: price, discountPercentage: 0 };
  }

  let discountedPrice = price;
  let discountPercentage = 0;

  if (discountType === 'FLAT') {
    discountedPrice = Math.max(0, price - discount);
    discountPercentage = (discount / price) * 100;
  } else if (discountType === 'PERCENTAGE') {
    discountPercentage = discount;
    discountedPrice = price * (1 - discount / 100);
  }

  return {
    discountedPrice: parseFloat(discountedPrice.toFixed(2)),
    discountPercentage: parseFloat(discountPercentage.toFixed(2)),
  };
}
