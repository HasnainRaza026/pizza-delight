import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ActivePizzaDetailType {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
  size: string;
  toppings: string[];
  quantity: number;
}

interface StateType {
  ActivePizzaDetail: ActivePizzaDetailType;
}

const initialState: StateType = {
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
    updateActivePizzaDetail(
      state,
      action: PayloadAction<ActivePizzaDetailType>
    ) {
      state.ActivePizzaDetail = action.payload;
    },
    updateActivePizzaDetailSize(state, action: PayloadAction<string>) {
      state.ActivePizzaDetail.size = action.payload;
    },
    updateActivePizzaDetailToppings(state, action: PayloadAction<string>) {
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
