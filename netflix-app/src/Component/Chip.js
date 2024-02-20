import React, { useState } from 'react'
import { useDispatch,useSelector } from 'react-redux';
import { RxCross1 } from "react-icons/rx";
import { removeTag,filtertag,AddRemoveChip } from '../Utils/Slice/LanguageSlice';
import { tagList } from '../Utils/constant';
const Chip =() => {
    const tagAdding=useSelector(store=>store.lang.tag)
    const tagAddedList=useSelector(store=>store.lang.filtertag)
    const [tagCollection,setTagCollection]=useState(tagAddedList)
    const dispatch=useDispatch()
    const handleRemoveTag=(i)=>{
      console.log( tagAddedList,"ddd")
      dispatch(filtertag(tagAddedList))
      
      const removeTagChip=tagAdding.filter((k)=>{
        if(i!=k) return true
      })
      dispatch(removeTag(removeTagChip))
      dispatch(AddRemoveChip(i))
    }
  return (
    <>
    <div className='flex flex-wrap'>
    <div className='flex w-auto h-8  rounded-md'>
        {tagAdding?.map((i)=>{
            return <div className='flex bg-white w-auto h-8 rounded-2xl m-1 p-1'  >
                <span>{i}</span>
                <span className='ml-2 p-1 cursor-pointer ' onClick={()=>{handleRemoveTag(i)}}><RxCross1 size={18}/></span>
                </div>
        })}

     </div>
     
    </div>
    </>
  )
}

export default Chip