import { createSlice } from "@reduxjs/toolkit";
import { tagList } from "../constant";
const LanguageSlice = createSlice({
  name: "lang",
  initialState: {
    languageChange:"English",
    star:null,
    iscancel:"",
    toggle:false,
    tag:[],
    removeTag:null,
    filtertag:tagList
  },
  reducers: {
   LanguageToggle: (state, action) => {
    state.languageChange=action.payload     
    },
    starRating:(state,action)=>{
      state.star=action.payload
    },
    cancelReview:(state,action)=>{
      console.log(action.payload,"ggg");
      state.iscancel=action.payload
    },
    toggleReviw:(state,action)=>{
      state.toggle=!state.toggle
    },
    Addtag:(state,action)=>{
   state.tag.push(action.payload)
    },
    removeTag:(state,action)=>{
      state.tag=action.payload
        
    },
    
      filtertag:(state,action)=>{
        state.filtertag=action.payload
      },
      AddRemoveChip:(state,action)=>{
        state.filtertag.push(action.payload)
      }
    
  
  },
});

export const {LanguageToggle,starRating,cancelReview,toggleReviw,Addtag,removeTag,filtertag,AddRemoveChip } = LanguageSlice .actions;

export default LanguageSlice .reducer;