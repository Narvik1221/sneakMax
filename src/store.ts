import { configureStore } from "@reduxjs/toolkit";
import sneakersSlice from "./slices/sneakersSlice";
import { basketReducer } from "./slices/basketSlice";
import { teamReducer } from "./slices/teamSlice";
import dataSlice from "./slices/dataSlice.ts";

export const store = configureStore({
  reducer: {
    data: dataSlice,
    sneakers: sneakersSlice,
    basket: basketReducer,
    team: teamReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
