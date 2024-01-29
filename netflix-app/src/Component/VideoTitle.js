import React from 'react'
import { useSelector,useDispatch } from 'react-redux'

const VideoTitle = () => {
  const dispatch=useDispatch()
    const movieData=useSelector(store=>store.movies.movie)
    const trailerData=movieData?.results[6]
    console.log(trailerData,"title");
  return (
   <div className='  top-0 w-screen  h-[35%] sm:h-[50%] absolute  bg-gradient-to-b from-black opacity-150 hover:opacity-70 hidden'>
<div className='sm:mt-[10%] mt-4 '>
<div className='w-48 text-sm sm:ml-[2%]  text-center rounded-md font-semibold ml-[4%]  '> {trailerData.title}</div>
   <div className='w-[2%] h-[2%] sm:w-[40%] ml-[2%] m:w-[40%] sm:text-sm sm:h-18  space-y-4  py-4 font-serif pl-4 sm:opacity-100 sm:text-slate-100 '>{trailerData.overview}</div>
</div>
   
   </div>
  )
}

export default VideoTitle