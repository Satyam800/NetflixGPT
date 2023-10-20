import React,{useEffect} from "react";
import {useDispatch,useSelector } from "react-redux";
import { fetchData } from "../Utils/Slice/movieSlice";

const useMovieList = () => {
   
  const movieData=useSelector(store=>store.movies.movie)
    const dispatch=useDispatch()
      
    useEffect(()=>{
      if(!movieData)  {
        dispatch(fetchData())
     
      }

    },[])

    
    
}

export default useMovieList