import { OrdersType } from "../types/OrdersType";
import supabase from "./supabase";

export async function placeOrder(orderData: OrdersType) {
  const { data, error } = await supabase.from("orders").insert([orderData]);
  // .select(); // Removing this, to allow anonymous users to insert row (if not removed, it will cause RLS error)

  if (error) {
    console.log(error);
    throw new Error("Something went wrong while placing order!");
  }

  return data;
}
