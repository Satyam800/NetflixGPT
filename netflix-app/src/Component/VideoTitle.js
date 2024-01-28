import React from 'react'
import { useSelector,useDispatch } from 'react-redux'

const VideoTitle = () => {
  const dispatch=useDispatch()
    const movieData=useSelector(store=>store.movies.movie)
    const trailerData=movieData?.results[7]
    console.log(trailerData,"title");
  return (
   <div className='  top-0 w-screen  h-[35%] sm:h-[50%] absolute  bg-gradient-to-b from-black opacity-150 hover:opacity-70  text-white'>
<div className='sm:mt-[18%] mt-4 '>
<div className='w-48 text-4xl sm:text-xl sm:ml-[2%]  text-center rounded-md font-semibold ml-[4%] '> {trailerData.title}</div>
   <div className='w-[2%] h-[2%] sm:w-[40%] ml-[2%] m:w-[40%] sm:text-sm sm:h-18  space-y-4  py-4 font-serif pl-4 sm:opacity-100 sm:text-slate-100 '>{trailerData.overview}</div>
</div>
   <div className='flex ml-[4%]'>
    <div className='w-16 h-8 bg-white text-black text-center m-1 rounded-md cursor-pointer p-1 hover:bg-opacity-20'>Play</div>
    <div className='hidden sm:block lg:hidden sm:w-20 sm:h-8 h-4 w-8  bg-slate-800 text-center m-1 rounded-md cursor-pointer p-1  hover:opacity-90'>More Info</div>
   </div>
   </div>
  )
}

export default VideoTitle