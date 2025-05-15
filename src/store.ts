import { configureStore } from "@reduxjs/toolkit";
import menuReducer from "./features/menu/menuSlice";
import cartReducer from "./features/cart/cartSlice";
import favouritesReducer from "./features/favourite/favouriteSlice";
import orderReducer from "./features/order/orderSlice";

// Read the saved cart (if any) from localStorage
const savedCart = localStorage.getItem("cartItems");
const preloadedCartItems = savedCart ? JSON.parse(savedCart) : [];

// Read the saved favourites (if any) from localStorage
const savedFavourites = localStorage.getItem("favourites");
const preloadedFavourites = savedFavourites ? JSON.parse(savedFavourites) : [];

export const store = configureStore({
  reducer: {
    menu: menuReducer,
    cart: cartReducer,
    favourites: favouritesReducer,
    order: orderReducer,
  },
  // Preload the slices
  preloadedState: {
    cart: { cartItems: preloadedCartItems },
    favourites: { favourites: preloadedFavourites },
  },
});

// Subscribe and persist any updates back to localStorage
store.subscribe(() => {
  const state = store.getState();
  localStorage.setItem("cartItems", JSON.stringify(state.cart.cartItems));
  localStorage.setItem(
    "favourites",
    JSON.stringify(state.favourites.favourites)
  );
});

export type RootState = ReturnType<typeof store.getState>;
