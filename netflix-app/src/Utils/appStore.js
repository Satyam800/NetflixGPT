import { configureStore } from "@reduxjs/toolkit";
import UserSlice from "./Slice/userSlice";
import movieSlice from "./Slice/movieSlice";
const store = configureStore({
  reducer: {
    user_data: UserSlice,
    movies:movieSlice,
  },
});

export default store;
