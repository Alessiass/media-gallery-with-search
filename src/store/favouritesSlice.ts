import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface FavouritesType {
  favourites: number[];
}

const initialState: FavouritesType = {
  favourites: [],
};

const favouritesSlice = createSlice({
  name: "favourites",
  initialState,
  reducers: {
    toggleFav: (state, action: PayloadAction<number>) =>{
      const id = action.payload
      if (state.favourites.includes(id)) {
      state.favourites = state.favourites.filter(el => el !== id)
      } else {
        state.favourites = [...state.favourites, id]
     }
    }
  },
});

export const { toggleFav} = favouritesSlice.actions;

export default favouritesSlice.reducer;
