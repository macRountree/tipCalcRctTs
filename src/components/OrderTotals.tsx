import {useMemo} from 'react';
import {OrderItem} from '../interfaces';
import {formatCurrency} from '../helpers';

interface OrderTotalsProps {
  order: OrderItem[];
  tip: number;
  placeOrder: () => void;
}

export const OrderTotals = ({order, tip, placeOrder}: OrderTotalsProps) => {
  const subTotalAmount = useMemo(
    () => order.reduce((total, item) => total + item.quantity * item.price, 0),
    [order]
  );
  const tipAmount = useMemo(() => subTotalAmount * tip, [tip, order]);
  const totalAmount = useMemo(() => subTotalAmount + tipAmount, [tip, order]);
  return (
    <>
      <div className="space-y-3 ">
        <h2 className="text-2xl font-black">Total and Tip</h2>
        <p>
          Subtotal:{''}{' '}
          <span className="font-bold"> {formatCurrency(subTotalAmount)} </span>
        </p>
        <p>
          Tip:{''}{' '}
          <span className="font-bold">{formatCurrency(tipAmount)} </span>
        </p>
        <p>
          Total Amount:{''}{' '}
          <span className="font-bold">{formatCurrency(totalAmount)} </span>
        </p>
      </div>
      <button
        className="px-5 py-2 border border-purple-400 bg-purple-500 text-white rounded-lg w-full disabled:opacity-10"
        disabled={totalAmount === 0}
        onClick={placeOrder}
      >
        Place Order
      </button>
    </>
  );
};
