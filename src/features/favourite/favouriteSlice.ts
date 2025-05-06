import { createSlice } from "@reduxjs/toolkit";

type StateType = {
  favourites: number[];
};

const initialState: StateType = {
  favourites: [],
};

const favouriteSlice = createSlice({
  name: "favourites",
  initialState,
  reducers: {
    updatefavourites(state, action) {
      const id = action.payload;
      const exists = state.favourites.includes(id);
      if (exists) {
        state.favourites = state.favourites.filter((item) => item !== id);
      } else {
        state.favourites.push(id);
      }
    },
  },
});

export const { updatefavourites } = favouriteSlice.actions;
export default favouriteSlice.reducer;
