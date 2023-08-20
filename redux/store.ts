"use client";
import { configureStore } from "@reduxjs/toolkit";
import WatchListSlice from "./features/watchListSlice";
import FavoriteSlice from "./features/FavoriteSlice";
import { TypedUseSelectorHook, useSelector } from "react-redux";
export const store = configureStore({
  reducer: {
    watchList: WatchListSlice,
    FavoriteList: FavoriteSlice,
  },
});

store.subscribe(() => {
  const id = store.getState().watchList.id;
  localStorage.setItem("watchListId", JSON.stringify(id));
});
store.subscribe(() => {
  const id = store.getState().FavoriteList.id;
  localStorage.setItem("favoriteList", JSON.stringify(id));
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
