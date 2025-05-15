import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface OrderState {
  orderId: number;
  address: string;
}

const initialState: OrderState = {
  orderId: 0,
  address: "",
};

const orderSlice = createSlice({
  name: "order",
  initialState,
  reducers: {
    updateOrder(state, action: PayloadAction<OrderState>) {
      state.orderId = action.payload.orderId;
      state.address = action.payload.address;
    },
  },
});

export const { updateOrder } = orderSlice.actions;
export default orderSlice.reducer;
