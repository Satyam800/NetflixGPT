import { createSlice,createAsyncThunk,extraReducers} from "@reduxjs/toolkit";
import { API_options,VideoAPI_Option,Popular_options } from "../constant";
import { FaRegArrowAltCircleLeft } from "react-icons/fa";
import { FaArrowCircleRight } from "react-icons/fa";

export const fetchData=createAsyncThunk( "action",async ()=>{
    const movie=await fetch('https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1', API_options)
    return movie.json()
})
export const trailer=createAsyncThunk("trailer",async (id)=>{
  console.log(id,'id');
   const trailer= await fetch('https://api.themoviedb.org/3/movie/'+id+'/videos?language=en-US', VideoAPI_Option)
   return trailer.json()
})

export const popular_movie=createAsyncThunk("popular",async ()=>{
  const movie=await fetch('https://api.themoviedb.org/3/movie/popular?language=en-US&page=1', API_options)
  return movie.json()
})
    
export const upcoming_movies=createAsyncThunk("upcoming",async ()=>{
  const movie=await fetch('https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1', API_options)
  return movie.json()

})


export const top_rated=createAsyncThunk("top_rated",async ()=>{
  const movie=await fetch('https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1',API_options)
  return movie.json()

})

const movieSlice = createSlice({
  name: "movies",
  initialState: {
    movie:null,
    trailer:null,
    trialerVideo:null,
    popular:null,
    upcoming:null,
    top_movie:null,
    hover:false

  },
  reducers: {
    trailerVideo:(state,action)=>{
        state.trailerVideo=action.payload
    },
    ishover:(state,action)=>{
      console.log(action.payload,"false");
      state.hover=action.payload
    }
  },
  extraReducers:(builder)=>{
    builder.addCase(fetchData.fulfilled,(state,action)=>{
        state.movie=action.payload
    }).addCase(trailer.fulfilled,(state,action)=>{
      console.log(action?.payload,"trailer");
  state.trailer=action?.payload
    }).addCase(popular_movie.fulfilled,(state,action)=>{
      console.log(action.payload,"popoular");
      state.popular=action.payload
    }).addCase(upcoming_movies.fulfilled,(state,action)=>{
      console.log(action.payload,"upcoming");
      state.upcoming=action.payload
    }).addCase(top_rated.fulfilled,(state,action)=>{
      console.log(action.payload,"top");
      state.top_movie=action.payload
    })
  }
});

export const { trailerVideo,ishover } = movieSlice.actions;
export default movieSlice.reducer; 