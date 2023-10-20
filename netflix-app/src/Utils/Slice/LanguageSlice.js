import { createSlice } from "@reduxjs/toolkit";

const LanguageSlice = createSlice({
  name: "lang",
  initialState: {
    languageChange:"English"
  },
  reducers: {
   LanguageToggle: (state, action) => {
       
    state.languageChange=action.payload
      
    },
  
  },
});

export const {LanguageToggle } = LanguageSlice .actions;

export default LanguageSlice .reducer;