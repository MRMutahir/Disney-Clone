import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import userReducer from "../features/User/UserSlice";

export const store = configureStore({
  reducer: {
    user: userReducer,
  },
  middleware: getDefaultMiddleware({
    serializableCheck: false,
  }),
});

export default store;
