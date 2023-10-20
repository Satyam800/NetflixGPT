import React,{useEffect, useRef} from 'react'
import { BrowsePage_BG, IMG_CDN_URL } from '../Utils/constant'
import lang from "../Utils/languageSelect"
import { useSelector,useDispatch } from 'react-redux'
import { API_call } from '../Utils/Slice/GPTSlice'
import openai from '../Utils/OpenAI'
import { Movie_fetch } from '../Utils/Slice/GPTSlice'
import GptmovieSuggs from './GptmovieSuggs'
import MovieCard from './MovieCard'

const GPTSearchContainer = () => {
  const dispatch=useDispatch()
  const SearchText=useRef(null)
  const toggelLang=useSelector(store=>store.lang.languageChange)
  const TMDB_movie=useSelector((store)=>store.GPT.movie_array)
 
 
  const handleOpenAISearch=async()=>{   
    dispatch(API_call(SearchText)) 
    
   dispatch(Movie_fetch(TMDB_movie))
    }
 
  return (
   <>
    <div className=" fixed top-0 -z-10">
      <img className=" w-screen sm:h-[70%]    "
      alt="Img"
      src={BrowsePage_BG}
      />

 <div className=" flex absolute justify-between top-16 left-[20%] w-[50%] mt-[10%] h-14 bg-zinc-400 p-2 shadow-lg">
 <input className=" text-xl font-semibold align-baseline w-[82%] focus:outline-none focus:ring focus:border-blue-500 -500 h-[90%] p-2 mt-1 rounded-sm  " 
  placeholder={lang[toggelLang]?.GetSearchplaceholder}
  ref={SearchText}
 />
 
<div className='font-semibold text-xl w-28 text-center  bg-black  pt-1 align-center rounded-md text-red-600 cursor-pointer'
onClick={handleOpenAISearch}
>
{lang[toggelLang]?.search}
</div>
  </div>  
</div>


<GptmovieSuggs/>

 
   </>
  )
}


export default GPTSearchContainer