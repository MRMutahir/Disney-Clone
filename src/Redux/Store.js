import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { useReducer } from "../features/User/UserSlice.js";

export const store = configureStore({
  reducer: {
    user: useReducer,
  },
  middleware: getDefaultMiddleware({
    serializableCheck: false,
  }),
});
