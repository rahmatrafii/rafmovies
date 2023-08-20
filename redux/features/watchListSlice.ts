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

const listID = parseString(localStorage.getItem("watchListId"));
const initialState = {
  id: listID,
} as InitialState;

const watchList = createSlice({
  name: "watchList",
  initialState: initialState,
  reducers: {
    addWatchList: (state, action: PayloadAction<string>) => {
      const id = action.payload;
      state.id.push(Number(id));
    },
    RemoveWatchList: (state, action: PayloadAction<string>) => {
      const id = state.id.filter(
        (stateId) => stateId !== Number(action.payload)
      );
      state.id = id;
    },
  },
});

export const { addWatchList, RemoveWatchList } = watchList.actions;
export default watchList.reducer;
