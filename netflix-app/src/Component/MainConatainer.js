import React, { useEffect } from 'react'
import VideoTitle from './VideoTitle'
import VideoBackground from './VideoBackground'
import { useSelector,useDispatch } from 'react-redux'
import { trailer } from '../Utils/Slice/movieSlice'

const MainConatainer = () => {
  const dispatch=useDispatch()
    const movieData=useSelector(store=>store.movies.movie)
    const trailerData=movieData?.results[6]
    const trailerapi=useSelector(store=>store.movies.trailer)
   
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