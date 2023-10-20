import { configureStore } from "@reduxjs/toolkit";
import UserSlice from "./Slice/userSlice";
import movieSlice from "./Slice/movieSlice";
import GPTSlice from "./Slice/GPTSlice";
import LanguageSlice from "./Slice/LanguageSlice";
const store = configureStore({
  reducer: {
    user_data: UserSlice,
    movies:movieSlice,
    GPT:GPTSlice,
    lang:LanguageSlice
  },
});
export default store;
