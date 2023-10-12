import { createSlice,createAsyncThunk,extraReducers} from "@reduxjs/toolkit";
import { API_options,VideoAPI_Option } from "../constant";
export const fetchData=createAsyncThunk( "action",async ()=>{
  console.log("ccccc");
    const movie=await fetch('https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1', API_options)
    
    return movie.json()
})

export const trailer=createAsyncThunk("trailer",async (id)=>{
  console.log(id,'id');
   const trailer= await fetch('https://api.themoviedb.org/3/movie/'+id+'/videos?language=en-US', VideoAPI_Option)
   return trailer.json()
})

const movieSlice = createSlice({
  name: "movies",
  initialState: {
    movie:null,
    trailer:null,
    trialerVideo:null
  },
  reducers: {
    trailerVideo:(state,action)=>{
        state.trailerVideo=action.payload
    }
    
  },
  extraReducers:(builder)=>{
    builder.addCase(fetchData.fulfilled,(state,action)=>{
        state.movie=action.payload
        console.log(action.payload.results);
    }).addCase(trailer.fulfilled,(state,action)=>{
      console.log(action.payload,"trailer");
  state.trailer=action.payload
    })
  }
});

export const { trailerVideo } = movieSlice.actions;

export default movieSlice.reducer; 