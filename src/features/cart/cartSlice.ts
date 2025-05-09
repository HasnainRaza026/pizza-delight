import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CartItemType } from "../../types/CartItemType";

export interface cartItem extends CartItemType {
  basePrice: number;
}

interface CartState {
  cartItems: cartItem[];
}

const initialState: CartState = {
  cartItems: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart(state, action: PayloadAction<cartItem>) {
      const existing = state.cartItems.find(
        (item) => item.id === action.payload.id
      );
      if (existing) {
        existing.quantity += action.payload.quantity;
        existing.size = action.payload.size;
        existing.toppings = action.payload.toppings;
        existing.price += action.payload.price;
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
        item.price -= item.basePrice;
      } else if (item && item.quantity === 1) {
        state.cartItems = state.cartItems.filter(
          (i) => i.id !== action.payload
        );
      }
    },
    incrementQuantity(state, action: PayloadAction<number>) {
      const item = state.cartItems.find((item) => item.id === action.payload);
      if (item) {
        item.quantity += 1;
        item.price += item.basePrice;
      }
    },
    clearCart(state) {
      state.cartItems = [];
    },
  },
});

export const {
  addToCart,
  removeFromCart,
  decrementQuantity,
  incrementQuantity,
  clearCart,
} = cartSlice.actions;
export default cartSlice.reducer;
