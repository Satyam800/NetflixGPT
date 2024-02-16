import { createSlice } from "@reduxjs/toolkit";

const LanguageSlice = createSlice({
  name: "lang",
  initialState: {
    languageChange:"English",
    star:null
  },
  reducers: {
   LanguageToggle: (state, action) => {
    state.languageChange=action.payload     
    },
    starRating:(state,action)=>{
      state.star=action.payload
    }
  
  },
});

export const {LanguageToggle,starRating } = LanguageSlice .actions;

export default LanguageSlice .reducer;