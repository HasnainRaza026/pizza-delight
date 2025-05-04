export type CartItemType = {
  id: number;
  image: string;
  name: string;
  size: string;
  toppings: string[] | null;
  quantity: number;
  price: number;
};
