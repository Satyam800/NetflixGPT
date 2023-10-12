import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { trailerVideo } from "../Utils/Slice/movieSlice";

const VideoBackground = () => {
  const dispatch = useDispatch();
  const Trailer = useSelector((store) => store.movies.trailer);

  const filterData = Trailer?.results?.filter((item) => item.type === "Trailer");
  const key_Object__Trailer = filterData?.length
    ? filterData?.filter((video) => video.name === "Official Final Trailer")
    : Trailer[0];

 
  const FinallyTrailerKey = useSelector((store) => store.movies.trailerVideo);

  useEffect(()=>{
    dispatch(trailerVideo(key_Object__Trailer));
  },[])

  return (
    <div className=" mt-15 sm:mt-18  ">
      <iframe
      className="w-screen  h-[80%] sm:h-[32rem] lg:aspect-video   "
         h="800"
         w="1000"
        src={"https://www.youtube.com/embed/4wxyy8Rcz4k?si="+FinallyTrailerKey?.key+"?&autoplay=1&mute=1"}    
       
      
      ></iframe>
    </div>
  );
};

export default VideoBackground;
