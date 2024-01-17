import React, { useEffect, useState } from 'react'
import { IMG_CDN_URL } from '../Utils/constant'
import { useDispatch } from 'react-redux'
import TrailerPopup from './TrailerPopup'
import {Trailer} from "../Utils/Slice/GPTSlice"
import { ishover } from '../Utils/Slice/movieSlice'


const MovieCard = ({img,title,id}) => {
  
  const [isHover,SetisHover]=useState(false)
  const dispatch=useDispatch()
  
  useEffect(()=>{
    let timer
    dispatch(ishover(isHover))
   const run=()=>{
    dispatch(Trailer(id))
    
   }
   if(ishover) {
    timer = setTimeout(run, 2000);
  }
  return () => clearTimeout(timer);

  },[isHover])
  

  if(!img) return null
  return (
    <>
  <img
      className='w-32 h-48 m-2 rounded-md'
        alt="Movie_IMG"
        src={IMG_CDN_URL + img}
        onMouseEnter={()=>SetisHover(true)}
        onMouseLeave={()=>SetisHover(false)}
        />
       
    </>
    
  )
}

export default MovieCard