import { createAsyncThunk, createSlice, extraReducers } from "@reduxjs/toolkit";
import openai from "../OpenAI";
import { API_options } from "../constant";

export const API_call=createAsyncThunk("API",async(query)=>{
  const modify_query="Act as a Movie Recommendation system and suggest some movie for the query"+query.current.value
  +". only gives me name of 5 movies, comma seperated like the example result giving ahead. Example Result: Avenger,Thor Rangrok,Doctor Strange,Iron Man,Captain America"
  const gptResult = await openai.chat.completions.create({
    messages: [{ role: 'user', content:modify_query}],
    model: 'gpt-3.5-turbo',
  })

return gptResult.choices[0].message.content.split(",")
 
})

export const Movie_fetch=createAsyncThunk("TMDB",async(movie)=>{

  const call= async (i)=>{
 
    const Result=await fetch('https://api.themoviedb.org/3/search/movie?query='+i+'&include_adult=false&language=en-US&page=1', API_options)
    const data=await Result.json()
    return data.results
  }
console.log(movie,"movie");
const dummy= movie.map((i)=>{
 return call(i)
})

 const result= await Promise.all(dummy)
  return result

})

const GPTSlice = createSlice({
  name: "GPT",
  initialState: {
    isGPTSearchClicked:false,
    movie_array:null,
    final_result:null
  },
  reducers: {
    GPTSearchToggelButton: (state, action) => {
        console.log(state.isGPTSearchClicked,"GPT")
     state.isGPTSearchClicked=!state.isGPTSearchClicked
      
    },
  
  },
  extraReducers:(builder)=>{
    builder.addCase(API_call.fulfilled,(state,action)=>{
      console.log(action.payload,"action.payloads.kkk")
    state.movie_array=action.payload
    }).addCase(Movie_fetch.fulfilled,(state,action)=>{
      console.log(action.payload,"action.payload.json().results")
      state.final_result=action.payload.flat()
    })
  } 
})

export const { GPTSearchToggelButton} = GPTSlice.actions;
export default GPTSlice.reducer;