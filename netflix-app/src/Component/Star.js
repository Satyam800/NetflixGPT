import React from 'react'
import { IoMdStarOutline } from "react-icons/io";
import { IoStar } from "react-icons/io5";


const Star = ({selected,onClick}) => {
  return (
    <>
    <span onClick={onClick} className='cursor-pointer'>
    {selected ?  <IoStar size={30}/>:<IoMdStarOutline size={30}/>}
    </span>
    </>
  )
}

export default Star