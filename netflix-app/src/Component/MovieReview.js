import React, { useState, useRef } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import Header from "./Header";
import "react-quill/dist/quill.snow.css";
import { RxCross1 } from "react-icons/rx";
import { auth } from "../Utils/firebase_config";
import { now, daysOfWeek } from "../Utils/constant";
import StarRating from "./StarRating";

const MovieReview = () => {
  const [content, Setcontent] = useState("");
  const titleRef = useRef(null);
  const descriptionRef = useRef();
  const [isPreview, SetisPreview] = useState(false);
  const currentUser = auth.currentUser;
  const handlePreview = (e) => {
    SetisPreview(true);
  };

  const handleChange = (value) => {
    console.log(descriptionRef.current?.value, "value");
    Setcontent(value);
  };

  const cancelPreview = () => {
    SetisPreview(false);
  };

  const renderContent = () => {
    return { __html: content };
  };
  return (
    <>
      <div className="w-[80%] h-[85%]">
        <div className="m-6">
          <div className="text-xl m-1">Create a title</div>
          <input
            className="w-[40%] h-10 outline  outline-pink-400  focus:border-blue-500 "
            placeholder="Create a title"
            ref={titleRef}
          ></input>
        </div>

        <div className=" m-2">
          <div className="text-xl m-4">Description</div>
          <ReactQuill
            theme="snow"
            value={content}
            onChange={handleChange}
            className="shadow-lg m-4"
            ref={descriptionRef}
          />
        </div>

        {content ? (
          <button
            className="w-24 h-14 bg-slate-500 rounded-full ml-[50%] "
            onClick={handlePreview}
          >
            Preview
          </button>
        ) : null}
      </div>

      {isPreview ? (
        <div className="absolute w-[80%] h-[70%] top-[7%] left-[5%] bg-slate-200 shadow-2xl ">
          <RxCross1
            size={32}
            className="ml-[98%] bg-lime-800 rounded-full cursor-pointer"
            onClick={cancelPreview}
          />

          <div className="text-3xl p-1">{titleRef.current?.value}</div>
          <div className="text-sm">{`author: ${
            currentUser.displayName
          }  ${now.getDate()}/${
            now.getMonth() + 1
          }/${now.getFullYear()}    ${daysOfWeek[now.getDay()]}`}</div>

          <div
            dangerouslySetInnerHTML={renderContent()}
            className="m-4 p-2 text-xl"
          />
        </div>
      ) : null}

      <StarRating starCount={5}/>
    </>
  );
};

export default MovieReview;
