import React from 'react'
import { useSelector } from 'react-redux'
import MovieCard from './MovieCard'
import { IMG_CDN_URL } from '../Utils/constant'

const MovieList = () => {
   
    const movieData=useSelector((store)=>store.movies.movie)
    const popular_movie_API=useSelector((store)=>store.movies.popular)
    const upcoming_movie_API=useSelector((store)=>store.movies.upcoming)
    const top_rated_API=useSelector((store)=>store.movies.top_movie)
   
    if(!movieData||!popular_movie_API||!upcoming_movie_API||!top_rated_API) return
   
  return (
 <>
 <div className=' sm:p-2 z-50  -mt-[20%]  '>

<div className='pt-2 pl-4 text-xl text-white'>Latest Release</div>
 <div className='flex   overflow-auto '>
 {
    movieData.results.map((i)=>{
       return <MovieCard img={i.poster_path} key={i.id}/>
    })
 }


</div>
 <div className='pt-2 pl-4 text-xl text-white'>Top rated movies</div>
 <div className='flex  overflow-x-scroll   '>
 {
    top_rated_API.results.map((i)=>{
       return <MovieCard img={i.poster_path} key={i.id} />
    })
 }
 </div>
 <div className='pt-2 pl-4 text-xl  text-white'>Popular movies</div>
 <div className='flex overflow-x-scroll   '>
 {
    upcoming_movie_API.results.map((i)=>{
       return <MovieCard img={i.poster_path} key={i.id} />
    })
 }
 </div>
 <div className='pt-2 pl-4 text-xl  text-white'>Popular movies movies</div>
 <div className='flex overflow-x-scroll   '>
 {
   popular_movie_API?.results.map((i)=>{
       return <MovieCard img={i.poster_path} key={i.id} />
    })
 }
 </div>
 </div>
 </>
  )
}

export default MovieList