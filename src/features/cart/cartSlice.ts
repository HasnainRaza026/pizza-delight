import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CartItemType } from "../../types/CartItemType";

interface CartState {
  cartItems: CartItemType[];
}

const initialState: CartState = {
  cartItems: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart(state, action: PayloadAction<CartItemType>) {
      const existing = state.cartItems.find(
        (item) => item.id === action.payload.id
      );
      if (existing) {
        existing.quantity += action.payload.quantity;
        existing.size = action.payload.size;
        existing.toppings = action.payload.toppings;
      } else {
        state.cartItems.push({ ...action.payload });
      }
    },
    removeFromCart(state, action: PayloadAction<number>) {
      state.cartItems = state.cartItems.filter(
        (item) => item.id !== action.payload
      );
    },
    decrementQuantity(state, action: PayloadAction<number>) {
      const item = state.cartItems.find((item) => item.id === action.payload);
      if (item && item.quantity > 1) {
        item.quantity -= 1;
      }
    },
    clearCart(state) {
      state.cartItems = [];
    },
  },
});

export const { addToCart, removeFromCart, decrementQuantity, clearCart } =
  cartSlice.actions;
export default cartSlice.reducer;
