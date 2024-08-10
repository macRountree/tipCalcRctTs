export interface MenuItems {
  id: number;
  name: string;
  price: number;
}
export interface OrderItem extends MenuItems {
  quantity: number;
}
