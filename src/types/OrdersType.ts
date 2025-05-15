export interface OrderItemsType {
  name: string;
  size: string;
  toppings: string[];
  quantity: number;
}

export interface OrdersType {
  full_name: string;
  email: string;
  phone: string;
  address: string;
  city: string;
  zip_code: string;
  note: string;
  order: OrderItemsType[];
  total_price: number;
  order_id: string;
}
