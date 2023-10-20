import React from 'react'
import { IMG_CDN_URL } from '../Utils/constant'

const MovieCard = ({img,title}) => {
  
  if(!img) return null
  return (
    <>
   
  

  <img
      className='w-32 h-48 m-2 rounded-md'
        alt="Movie_IMG"
        src={IMG_CDN_URL + img}
        
        />
 
     
  
     

    </>
  )
}

export default MovieCard