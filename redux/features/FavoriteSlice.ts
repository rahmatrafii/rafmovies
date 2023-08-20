"use client";

import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type InitialState = {
  id: number[];
};

function parseString(props: any): any {
  if (props !== null) {
    const array = JSON.parse(props);
    return array;
  }
  {
    return [];
  }
}

const listID = parseString(localStorage.getItem("favoriteList"));
const initialState = {
  id: listID,
} as InitialState;

const Favorite = createSlice({
  name: "Favorite",
  initialState: initialState,
  reducers: {
    addFavorite: (state, action: PayloadAction<string>) => {
      const id = action.payload;
      state.id.push(Number(id));
    },
    RemoveFavorite: (state, action: PayloadAction<string>) => {
      const id = state.id.filter(
        (stateId) => stateId !== Number(action.payload)
      );
      state.id = id;
    },
  },
});

export const { addFavorite, RemoveFavorite } = Favorite.actions;
export default Favorite.reducer;
