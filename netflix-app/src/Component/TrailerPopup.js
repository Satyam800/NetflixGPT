import React from 'react'

const TrailerPopup = ({data}) => {
  
    const item=data?.filter((i)=>i.type==="Trailer")

  return (
   <>
   <div className='w-full h-full '>
   <iframe
        className="  w-full h-full"
        src={
           `https://www.youtube.com/embed/${item[0]?.key}`+"?&autoplay=1&mute=1"
        }
      ></iframe>  
   </div>
   </>
  )
}

export default TrailerPopup