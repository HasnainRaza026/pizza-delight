import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  ActivePizzaDetail: {
    id: 0,
    name: "",
    description: "",
    price: 0,
    image: "",
    size: "",
    toppings: [],
    quantity: 1,
  },
};

const menuSlice = createSlice({
  name: "menu",
  initialState,
  reducers: {
    updateActivePizzaDetail(state, action) {
      state.ActivePizzaDetail = action.payload;
    },
    updateActivePizzaDetailSize(state, action) {
      state.ActivePizzaDetail.size = action.payload;
    },
    updateActivePizzaDetailToppings(state, action) {
      const topping = action.payload;
      const exists = state.ActivePizzaDetail.toppings.includes(topping);
      if (exists) {
        state.ActivePizzaDetail.toppings =
          state.ActivePizzaDetail.toppings.filter((item) => item !== topping);
      } else {
        state.ActivePizzaDetail.toppings.push(topping);
      }
    },
    incrementQuatity(state) {
      state.ActivePizzaDetail.quantity += 1;
    },
    decrementQuatity(state) {
      if (state.ActivePizzaDetail.quantity > 1)
        state.ActivePizzaDetail.quantity -= 1;
    },
  },
});

export const {
  updateActivePizzaDetail,
  updateActivePizzaDetailSize,
  updateActivePizzaDetailToppings,
  incrementQuatity,
  decrementQuatity,
} = menuSlice.actions;
export default menuSlice.reducer;
