import React,{useEffect} from "react";
import {useDispatch,useSelector } from "react-redux";
import { fetchData } from "../Utils/Slice/movieSlice";

const useMovieList = () => {
   

    const dispatch=useDispatch()
      
    useEffect(()=>{
      dispatch(fetchData())

    },[])

    
    
}

export default useMovieList