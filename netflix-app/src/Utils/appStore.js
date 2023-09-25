import { configureStore } from "@reduxjs/toolkit";
import UserSlice from "./Slice/userSlice";
const store = configureStore({
  reducer: {
    user_data: UserSlice,
  },
});

export default store;
