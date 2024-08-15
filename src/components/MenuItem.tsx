import {Dispatch} from 'react';
import {MenuItems} from '../interfaces';
import {OrderActions} from '../reducers/orderReducer';

interface MenuItemsProps {
  item: MenuItems;
  // addItem: (item: MenuItems) => void; //**This is a function that does not return anything */
  dispatch: Dispatch<OrderActions>;
}

export const MenuItem = ({item, dispatch}: MenuItemsProps) => {
  return (
    <button
      className="border-2 border-purple-300 hover:bg-purple-500 hover:text-white hover:shadow-2xl w-full p-3 flex justify-between"
      onClick={() => dispatch({type: 'add-item', payload: {item}})}
    >
      <p>{item.name}</p>
      <p className="font-black">${item.price}</p>
    </button>
  );
};
