import {MenuItems} from '../interfaces';
import {OrderItem} from '../interfaces/index';
export type OrderActions =
  | {type: 'add-item'; payload: {item: MenuItems}}
  | {type: 'remove-item'; payload: {id: MenuItems['id']}}
  | {type: 'place-order'}
  | {type: 'add-tip'; payload: {value: number}};

export interface OrderState {
  order: OrderItem[];
  tip: number;
}

export const initialState = {
  order: [],
  tip: 0,
};

export const orderReducer = (state: OrderState, action: OrderActions) => {
  if (action.type === 'add-item') {
    const itemExist = state.order.find(
      orderItem => orderItem.id === action.payload.item.id
    );
    let updatedOrder: OrderItem[] = [];
    if (itemExist) {
      updatedOrder = state.order.map(orderItem =>
        orderItem.id === action.payload.item.id
          ? {...orderItem, quantity: orderItem.quantity + 1}
          : orderItem
      );
    } else {
      const newTypeItem: OrderItem = {...action.payload.item, quantity: 1}; //*This is a new item with a quantity of 1 */
      updatedOrder = [...state.order, newTypeItem];
      //   return{...state, newTypeItem}
      //   setOrder(); //*...order is <OrderItem[] type> but item is <MenuItems>type */
    }

    return {...state, order: updatedOrder};
  }
  if (action.type === 'remove-item') {
    const removeItem = state.order.filter(
      item => item.id !== action.payload.id
    );

    return {...state, order: removeItem};
  }
  if (action.type === 'place-order') {
    // setOrder([]);
    // setTip(0);
    return {order: [], tip: 0};
  }
  if (action.type === 'add-tip') {
    const tip = action.payload.value;
    console.log('tip', tip);
    return {...state, tip};
  }

  return state;
};
