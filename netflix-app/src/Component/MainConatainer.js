import React, { useEffect } from 'react'
import VideoTitle from './VideoTitle'
import VideoBackground from './VideoBackground'
import { useSelector,useDispatch } from 'react-redux'
import { trailer } from '../Utils/Slice/movieSlice'

const MainConatainer = () => {
  const dispatch=useDispatch()
    const movieData=useSelector(store=>store.movies.movie)
    const trailerData=movieData?.results[6]
   
useEffect(()=>{
   
    dispatch(trailer(trailerData?.id))
   },[])
   
   if(!movieData) return
  return (

<>
<div className='  '>
<VideoBackground/>
 <VideoTitle/>
</div>
</>
  
  )
}

export default MainConatainer