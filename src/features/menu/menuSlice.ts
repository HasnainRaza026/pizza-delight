import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  ActivePizzaDetail: {},
};

const menuSlice = createSlice({
  name: "menu",
  initialState,
  reducers: {
    updateActivePizzaDetail(state, action) {
      state.ActivePizzaDetail = action.payload;
    },
  },
});

export const { updateActivePizzaDetail } = menuSlice.actions;
export default menuSlice.reducer;
