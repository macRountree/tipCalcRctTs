import {formatCurrency} from '../helpers';
import {MenuItem, OrderItem} from '../interfaces';

interface OrderContentsProps {
  order: OrderItem[];
  removeItem: (id: MenuItem['id']) => void;
}
export const OrderContents = ({order, removeItem}: OrderContentsProps) => {
  return (
    <div>
      <h2 className="text-4xl font-black text-center "> Consumption</h2>

      <div className="space-y-3 mt-5">
        {order.map(item => (
          <div
            key={item.id}
            className="flex justify-between items-center border-t border-t-purple-400 py-5 "
          >
            <div>
              <p className="text-lg">
                {item.name} - {formatCurrency(item.price)}
              </p>
              <p className="font-black">
                Cantidad: {item.quantity} -
                {formatCurrency(item.price * item.quantity)}
              </p>
            </div>

            <button
              className=" bg-red-600 hover:bg-red-300 h-8 w-8 rounded-full text-white hover:text-red-600 font-black shadow-red-600"
              onClick={() => removeItem(item.id)}
            >
              X
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};
