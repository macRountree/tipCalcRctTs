import {useState} from 'react';
import {MenuItem, OrderItem} from '../interfaces/index';
export default function useOrder() {
  const [order, setOrder] = useState<OrderItem[]>([]);
  const [tip, setTip] = useState(0);

  const addItem = (item: MenuItem) => {
    //*Check if the item is already in the order */

    const itemExist = order.find(orderItem => orderItem.id === item.id);
    if (itemExist) {
      const updatedOrder = order.map(orderItem =>
        orderItem.id === item.id
          ? {...orderItem, quantity: orderItem.quantity + 1}
          : orderItem
      );
      setOrder(updatedOrder);
    } else {
      const newTypeItem: OrderItem = {...item, quantity: 1}; //*This is a new item with a quantity of 1 */

      setOrder([...order, newTypeItem]); //*...order is <OrderItem[] type> but item is <MenuItem>type */
    }
  };

  const removeItem = (id: MenuItem['id']) => {
    setOrder(order.filter(item => item.id !== id));
  };

  const placeOrder = () => {
    console.log('Order placed', order, tip);
    setOrder([]);
    setTip(0);
  };

  //   console.log(order);
  return {order, tip, setTip, addItem, removeItem, placeOrder};
}
