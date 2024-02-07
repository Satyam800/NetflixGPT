import React, { useState } from "react";
import Star from "./Star";
const StarRating = ({starCount}) => {
  const [starNo,setStarNo]=useState(0)
  const handleRating=(i)=>{
   setStarNo(i+1)
  }
   
  return (
    <>
      <div className="flex">
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
    </>
  );
};

export default StarRating
