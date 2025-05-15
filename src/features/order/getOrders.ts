import { OrderItemsType } from "../../types/OrdersType";
import { cartItem } from "../cart/cartSlice";

export default function getOrders(cartItems: cartItem[]): OrderItemsType[] {
  const order = cartItems.map((item) => {
    return {
      name: item.name,
      size: item.size,
      toppings: item.toppings,
      quantity: item.quantity,
    };
  });

  return order;
}
