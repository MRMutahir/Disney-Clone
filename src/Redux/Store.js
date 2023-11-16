import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import userReducer from "../features/User/UserSlice.js";
import movieReducer from "../features/movie/movieSlice.js";

export const store = configureStore({
  reducer: {
    user: userReducer,
    movie: movieReducer,
  },
  middleware: getDefaultMiddleware({
    serializableCheck: false,
  }),
});

export default store;
