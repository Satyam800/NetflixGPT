import React, { useState,useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { starRating } from "../Utils/Slice/LanguageSlice";
import Star from "./Star";
import { IoStar } from "react-icons/io5";
const StarRating = ({starCount}) => {
  const dispatch= useDispatch()
  const [starNo,setStarNo]=useState(0)
  const [numberOfStar,SetnumberOfStar]=useState(false)
  const handleRating=(i)=>{
   setStarNo(i+1)
   SetnumberOfStar(true)
  }
  useEffect(()=>{
    dispatch(starRating(starNo))
  },[starNo])
   
  return (
    <>
      <div className="flex ml-2">
      {Array(starCount)
        .fill("")
        .map((i,index) =>(
          <Star
          key={index}
          selected={index<starNo}
          onClick={()=>handleRating(index)}
          />
        ))}
      </div>
     {numberOfStar?<span className="flex m-2 text-xl font-extralight items-baseline ">{starNo} <IoStar size={22} className=" bg-amber-400 m-1"/></span> :null}
    </>
  );
};

export default StarRating
