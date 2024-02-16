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
 const handleOnline=()=>{
  Setonlinestate(true)
 }

 const handleOffline=()=>{
  Setonlinestate(false)
 }

 window.addEventListener('online',handleOnline)
 window.addEventListener('offline',handleOffline)

 return ()=>{
  window.removeEventListener('online', handleOnline);
  window.removeEventListener('offline', handleOffline);
 }
},[])

useEffect(()=>{
  
  if(!trailerapi) {
    dispatch(trailer(trailerData?.id))
  }
   },[])
  
   if(!movieData) return
  return (

<>
{onlinestate?
<div className=' mb-4 '>
<VideoBackground/>
 <VideoTitle/>
</div>
:
<Offline/>
}
</>
  
  )
}

export default MainConatainer