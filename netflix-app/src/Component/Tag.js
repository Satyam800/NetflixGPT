import React, { useEffect, useState } from 'react'
import { useDispatch,useSelector } from 'react-redux'
import { Addtag,filtertag } from '../Utils/Slice/LanguageSlice'
import { tagList } from '../Utils/constant'
const Tag = () => {
    const tagAdded=useSelector(store=>store.lang.filtertag)
    const [tagCollection,setTagCollection]=useState(tagList)
    const dispatch=useDispatch()
    const handletag=(i)=>{
   
    const TagSwipe=tagCollection.filter((j)=>{
      if(i!=j) return true
      
    })
    setTagCollection(TagSwipe)
  dispatch(Addtag(i))
    
    }
    useEffect(()=>{
      dispatch(filtertag(tagCollection))
    },[tagCollection])

  return (
    <>
     <div className='z-20 w-[85%] h-[5%] bg-white rounded-lg flex flex-wrap shadow-md'>
       {tagAdded.map((i,j)=>{
            return <div className='w-24 h-8 m-2 p-1 cursor-pointer bg-black text-white rounded-lg' onClick={()=>{handletag(i,j)}}> {i} </div>
        })}
     </div>
    </>
  )
}

export default Tag