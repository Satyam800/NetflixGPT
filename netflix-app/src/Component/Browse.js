import React, { useEffect } from "react";
import Header from "./Header";
import { BrowsePage_BG } from "../Utils/constant";
import { fetchData } from "../Utils/Slice/movieSlice";
import { useDispatch,useSelector } from "react-redux";
import useMovieList from "../hooks/useMovieList";
import MainConatainer from "./MainConatainer";
import SecondaryContainer from "./SecondaryContainer";
import GPTSearchContainer from "./GPTSearchContainer";
const Browse = () => {
   useMovieList()
  const Movies=useSelector(store=>store.movies.movie)
 const isGPTComponent=useSelector((store)=>store.GPT.isGPTSearchClicked)
 
  return (
    <>
    <Header/>
    
 


<div>
{
  isGPTComponent?(<GPTSearchContainer/>)
  :
 (

<>
<MainConatainer/>
  <SecondaryContainer/>
  </>
 )
}
</div>

  

    
    </>
  )
};

export default Browse;
