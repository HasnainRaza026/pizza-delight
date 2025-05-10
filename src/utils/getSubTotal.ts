import { cartItem } from "../features/cart/cartSlice";

const getSubTotal = (cartItems: cartItem[]) => {
  return cartItems.reduce((sum: number, item: cartItem) => sum + item.price, 0);
};

export default getSubTotal;
