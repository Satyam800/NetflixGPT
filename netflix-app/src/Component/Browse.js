import React, { useEffect } from "react";
import Header from "./Header";
import { BrowsePage_BG } from "../Utils/constant";
import { fetchData } from "../Utils/Slice/movieSlice";
import { useDispatch,useSelector } from "react-redux";
import useMovieList from "../hooks/useMovieList";
import MainConatainer from "./MainConatainer";
import SecondaryContainer from "./SecondaryContainer";
const Browse = () => {
   useMovieList()
  const Movies=useSelector(store=>store.movies.movie)
 console.log(Movies);
  return (
    <>
    <Header/>
    
    {/* <div className="relative">
      <img className="sm:w-full sm:h-full"
      alt={"image"}
      src={BrowsePage_BG}
      />


 <div className=" flex absolute top-16 left-[25%] w-[60%] h-12 bg-black">
 <input className=" w-[70%] sm:w-[60%] h-[70%] m-2 p-1 placeholder:Enter to search movies" />
 <span></span>
  </div>  

   </div> */}


  
<MainConatainer/>
<SecondaryContainer/>
  

    
    </>
  )
};

export default Browse;
