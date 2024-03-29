import React, { useEffect, useState } from 'react'
import VideoTitle from './VideoTitle'
import VideoBackground from './VideoBackground'
import { useSelector,useDispatch } from 'react-redux'
import { trailer } from '../Utils/Slice/movieSlice'
import Offline from './Offline'

const MainConatainer = () => {
  const dispatch=useDispatch()
    const movieData=useSelector(store=>store.movies?.movie)
    console.log(movieData,"movieData");
    const trailerData=movieData?.results[6]
    console.log(trailerData,"trailerData");
    const trailerapi=useSelector(store=>store.movies.trailer)
   console.log(trailerapi,"trailerapi");
   const [onlinestate,Setonlinestate]=useState(navigator.online)



useEffect(()=>{
  
  if(!trailerapi) {
    dispatch(trailer(trailerData?.id))
  }
   },[])
  
   if(!movieData) return
  return (

<>

<div className=' mb-4 '>
<VideoBackground/>
 <VideoTitle/>
</div>


</>
  
  )
}

export default MainConatainer