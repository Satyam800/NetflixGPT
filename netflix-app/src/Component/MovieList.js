import React,{useRef} from 'react'
import { useSelector } from 'react-redux'
import MovieCard from './MovieCard'
import { IMG_CDN_URL } from '../Utils/constant'
import { FaRegArrowAltCircleRight } from "react-icons/fa";
import { FaRegArrowAltCircleLeft } from "react-icons/fa";
import TrailerPopup from './TrailerPopup';



const MovieList = () => {
    const ScrollContainerRef=useRef(null)
    const ScrollContainerRef2=useRef(null)
    const ScrollContainerRef3=useRef(null)
    const ScrollContainerRef4=useRef(null)
    const ScrollContainerRef5=useRef(null)
    const movieData=useSelector((store)=>store.movies.movie)
    const popular_movie_API=useSelector((store)=>store.movies.popular)
    const upcoming_movie_API=useSelector((store)=>store.movies.upcoming)
    const top_rated_API=useSelector((store)=>store.movies.top_movie)
    const trailerOnHover=useSelector(store=>store.GPT.trailer)
   const ScrollWidthLength=200
   const isHover=useSelector(store=>store.movies.hover)
    if(!movieData||!popular_movie_API||!upcoming_movie_API||!top_rated_API) return

    const handleSlide=(direction,ref)=>{
       const container= ref.current
       if (container) {
         const scrollAmount = direction === 'next'? ScrollWidthLength: -ScrollWidthLength
         console.log(container,"scrollll");
         container.scrollLeft += scrollAmount;
       }
    
    }
    
  return (
 <>
 <div className=' sm:p-2 z-50  -mt-[20%] relative snap-mandatory snap-x  '>
<div>
<div className='pt-2 pl-4 text-xl text-white '>Latest Release</div>
<div className='w-12 h-12 rounded-full bg-red-200 absolute sm:left-[90%] left-[82%] top-[13%] cursor-pointer hover:bg-red-400 ' onClick={(e)=>handleSlide('next',ScrollContainerRef)}><FaRegArrowAltCircleRight className='m-1.5' size={34}/></div>
<div className='w-12 h-12 rounded-full bg-red-200 absolute top-[13%] cursor-pointer hover:bg-red-400 ml-8' onClick={(e)=>handleSlide("prev",ScrollContainerRef)}><FaRegArrowAltCircleLeft className='m-1.5'  size={34}/></div>
 <div className='flex   overflow-auto scrollbar-hide snap-center transition ease-in-outtransition ease-in-out cursor-pointer ' ref={ScrollContainerRef} >
 {
    movieData.results.map((i)=>{
       return <MovieCard img={i.poster_path} key={i.id} id={i.id} />
    })
 }

</div>

</div>
 <div className='pt-2 pl-4 text-xl text-white' >Top rated movies</div>
 <div className='w-12 h-12 rounded-full bg-red-200 absolute sm:left-[90%] left-[82%]  top-[37%] cursor-pointer hover:bg-red-400 'onClick={(e)=>handleSlide('next',ScrollContainerRef2)} ><FaRegArrowAltCircleRight className='m-1.5' size={34}/></div>
<div className='w-12 h-12 rounded-full bg-red-200 absolute top-[37%] cursor-pointer hover:bg-red-400 ml-8' onClick={(e)=>handleSlide("prev",ScrollContainerRef2)} ><FaRegArrowAltCircleLeft className='m-1.5'  size={34}/></div>
 <div className='flex overflow-auto scrollbar-hide-2 cursor-pointer' ref={ScrollContainerRef2}>
 {
    top_rated_API.results.map((i)=>{
       return <MovieCard img={i.poster_path} key={i.id} id={i.id} />
    })
 }
 </div>
 <div className='pt-2 pl-4 text-xl  text-white'>Popular movies</div>
 <div className='w-12 h-12 rounded-full bg-red-200 absolute sm:left-[90%] left-[82%] top-[61%] cursor-pointer hover:bg-red-400 'onClick={(e)=>handleSlide('next',ScrollContainerRef3)} ><FaRegArrowAltCircleRight className='m-1.5' size={34}/></div>
<div className='w-12 h-12 rounded-full bg-red-200 absolute top-[61%] cursor-pointer hover:bg-red-400 ml-8' onClick={(e)=>handleSlide("prev",ScrollContainerRef3)} ><FaRegArrowAltCircleLeft className='m-1.5'  size={34}/></div>
 <div className='flex overflow-x-scroll scrollbar-hide-3 cursor-pointer ' ref={ScrollContainerRef3}>
 {
    upcoming_movie_API.results.map((i)=>{
       return <MovieCard img={i.poster_path} key={i.id} id={i.id} />
    })
 }
 </div>
 <div className='pt-2 pl-4 text-xl  text-white'>Popular movies movies</div>
 <div className='w-12 h-12 rounded-full bg-red-200 absolute sm:left-[90%] left-[85%] top-[86%] cursor-pointer hover:bg-red-400 'onClick={(e)=>handleSlide('next',ScrollContainerRef4)} ><FaRegArrowAltCircleRight className='m-1.5' size={34}/></div>
<div className='w-12 h-12 rounded-full bg-red-200 absolute top-[86%] cursor-pointer hover:bg-red-400 ml-8' onClick={(e)=>handleSlide("prev",ScrollContainerRef4)} ><FaRegArrowAltCircleLeft className='m-1.5'  size={34}/></div>
 <div className='flex overflow-x-scroll scrollbar-hide-4 cursor-pointer ' ref={ScrollContainerRef4}>
 {
   popular_movie_API?.results.map((i)=>{
       return <MovieCard img={i.poster_path} key={i.id} id={i.id} />
    })
 }
 </div>

 <div className=' fixed top-[15%] w-[40%] h-[45%]'>
{isHover?<TrailerPopup data={trailerOnHover?.results}/>:null}
 </div>
 </div>
 </>
  )
}

export default MovieList