import React, { useEffect } from 'react'
import MovieCard from './MovieCard'
import { useSelector } from 'react-redux'
const GptmovieSuggs = () => {
    const TMDB_SearchResult=useSelector(store=>store.GPT.final_result)
    
  return (
   <>  
   <div className=' fixed overflow-y-scroll  mt-[20%] bg-gradient-to-r from-black from-10% via-sky-200 via-30% to-orange-100 to-90% opacity-80 m-4 p-3'>
  {
    <div className='  flex flex-wrap '>

{TMDB_SearchResult?.map(i=><MovieCard img={i?.poster_path} title={i.title} key={i.id} />)}
    </div>
  }

</div>

   </>
  )
}

export default GptmovieSuggs