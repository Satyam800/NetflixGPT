import React, { useEffect } from 'react'
import MovieList from './MovieList'
import { popular_movie,top_rated,upcoming_movies } from '../Utils/Slice/movieSlice'
import { useDispatch,useSelector } from 'react-redux'

const SecondaryContainer = () => {
  const dispatch=useDispatch()
  const popularData=useSelector(store=>store.movies.popular)
  const topData=useSelector(store=>store.movies.top_movie)
  const upcomingData=useSelector(store=>store.movies.upcoming)

  useEffect(()=>{
    if(!topData){
      dispatch(top_rated())
    
    }
    if(!popularData){
      dispatch(popular_movie())
    }

    if(!upcomingData){
      dispatch(upcoming_movies())
    }


  },[])
  return (
  <>
    <div className='-mt-5 bg-black '>
   <MovieList/>
    </div>
  </>
  )
}

export default SecondaryContainer