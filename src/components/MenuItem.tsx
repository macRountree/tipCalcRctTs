import {MenuItem} from '../interfaces';

interface MenuItemsProps {
  item: MenuItem;
  addItem: (item: MenuItem) => void; //**This is a function that does not return anything */
}

export const MenuItem = ({item, addItem}: MenuItemsProps) => {
  return (
    <button
      className="border-2 border-purple-300 hover:bg-purple-500 hover:text-white hover:shadow-2xl w-full p-3 flex justify-between"
      onClick={() => addItem(item)}
    >
      <p>{item.name}</p>
      <p className="font-black">${item.price}</p>
    </button>
  );
};
