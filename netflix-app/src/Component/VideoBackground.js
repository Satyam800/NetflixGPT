import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { trailerVideo } from "../Utils/Slice/movieSlice";

const VideoBackground = () => {
  const dispatch = useDispatch();
  const Trailer = useSelector((store) => store.movies.trailer);
  console.log(Trailer,"Trailer");
  const filterData = Trailer?.results?.filter(
    (item) => item.type === "Trailer"
  );
  console.log(filterData,"filterData")
  const key_Object__Trailer = filterData?.length
    ? filterData?.filter((video) => video.name === "Official Final Trailer")
    : null

   const FinallyTrailerKey = useSelector((store) => store.movies.trailerVideo);
  useEffect(() => {
    dispatch(trailerVideo(key_Object__Trailer))
  },[])
  return (
    <div className="sm:w-screen w-[98%] mt-[18%] sm:mt-0 h-40% sm:h-[50%] md:h-[70%]  ">
      <iframe
        className=" w-screen  aspect-video"
        src={
          "https://www.youtube.com/embed/4wxyy8Rcz4k?si=" +
          FinallyTrailerKey?.key +
          "?&autoplay=1&mute=1"
        }
      ></iframe>    
    </div>
  );
};

export default VideoBackground;
