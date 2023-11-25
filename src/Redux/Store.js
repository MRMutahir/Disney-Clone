import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import userReducer from "../features/User/UserSlice";
import movieReducer from "../features/movie/movieSlice";
// console.log(movieReducer,">>>>>>>>>>>>>>>>movieReducer");
// console.log(userReducer,">>>>>>>>>>>>>>>>userReducer");

export default configureStore({
  reducer: {
    user: userReducer,
    movie: movieReducer,
  },
  middleware: getDefaultMiddleware({
    serializableCheck: false,
  }),
});
