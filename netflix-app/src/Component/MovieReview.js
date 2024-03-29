import React, { useState, useRef, useEffect } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import Header from "./Header";
import "react-quill/dist/quill.snow.css";
import { RxCross1 } from "react-icons/rx";
import { auth } from "../Utils/firebase_config";
import { now, daysOfWeek } from "../Utils/constant";
import StarRating from "./StarRating";
import { IoStar } from "react-icons/io5";
import { useSelector } from "react-redux";
import { FaPen } from "react-icons/fa";
import { ShareSocial } from "react-share-social";
import { TwitterShareButton } from "react-share";
import { useScreenshot } from "use-react-screenshot";
import { cancelReview, toggleReviw } from "../Utils/Slice/LanguageSlice";
import { useDispatch } from "react-redux";
import Tag from "./Tag";
import Chip from "./Chip";

const MovieReview = () => {
  const [content, Setcontent] = useState("");
  const titleRef = useRef(null);
  const descriptionRef = useRef();
  const [isPreview, SetisPreview] = useState(false);
  const currentUser = auth.currentUser;
  const rating = useSelector((store) => store.lang.star);
  const [reviewImage, SetReviewImage] = useState(null);
  const [previewUrl, setPreviewUrl] = useState(null);
  const [imageUploadIcon, SetImageUploadIcon] = useState(false);
  const parseContentRef = useRef();
  const reviewRef = useRef(null);
  const [image, takeScreenshot] = useScreenshot();
  const [down, Setdown] = useState(false);
  const dispatch = useDispatch();
  const [addTag, SetaddTag] = useState(false);
  const tag=useSelector(store=>store.lang.tag)
  const shareUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(
    titleRef.current?.value
  )}`;
  const shareText = "Check out this awesome content!";

  console.log(rating, "rating");
  const handlePreview = (e) => {
    SetisPreview(true);
  };

  const handleChange = (value) => {
    console.log(descriptionRef.current?.value, "value");
    Setcontent(descriptionRef.current.getEditor().getText());
    console.log(value, "sarta,");
  };
  const handleCancelpreview = () => {
    dispatch(cancelReview(false));
    dispatch(toggleReviw());
  };

  const cancelPreview = () => {
    SetisPreview(false);
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    SetReviewImage(file);
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setPreviewUrl(imageUrl);
      SetImageUploadIcon(true);
    }
  };

  const renderContent = () => {
    return { __html: content };
  };

  const shareToTwitter = (title, image, content) => {
    if (!descriptionRef.current) return;
    const plainText = descriptionRef.current.getEditor().getText();
    console.log(title, image, content, "hjbhjv");
    const url =
      "https://twitter.com/intent/tweet" +
      `?text=${encodeURIComponent(`${title}
                 ${plainText}
                 ${rating} ${JSON.stringify("★").replace("", "")} 
                 ${tag}
                `)}` +
      `&description=${encodeURIComponent(content)}`;
    window.open(url, "_blank");
  };

  const getImage = () => {
    takeScreenshot(reviewRef.current);
    Setdown(true);
  };

  useEffect(() => {
    if (image || down) {
      const link = document.createElement("a");
      link.href = image;
      link.download = "image.jpg";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }

    Setdown(false);
  }, [image, down]);
  const handleAddTag = () => {
    SetaddTag(true);
  };

  const handleRemoveTagList = () => {
    SetaddTag(false);
  };
  return (
    <>
      <div className="relative  w-[79%] h-[22%] ml-[6%] mt-[10%] bg-gradient-to-r from-red-400 to-blue-500 shadow-2xl rounded-lg ">
        <div className="m-2">
          <div
            className="absolute ml-[98%] w-22 h-22 bg-yellow-200 rounded-3xl cursor-pointer"
            onClick={handleCancelpreview}
          >
            <RxCross1 size={32} />
          </div>
          <div className="text-xl m-1">Movie title</div>
          <input
            className="w-[40%] h-10 outline  outline-pink-400  focus:border-blue-500 "
            placeholder="Create a title"
            ref={titleRef}
          ></input>
          <div
            className="w-24 m-1 p-1 cursor-pointer h-8 bg-teal-400 rounded-md "
            onClick={handleAddTag}
          >
            Add the tag
          </div>
          {addTag ? (
            <div className="relative">
              <Tag />
              <div
                className="absolute top-0 w-8 h-8 left-[84%] bg-slate-300 rounded-3xl cursor-pointer"
                onClick={handleRemoveTagList}
              >
                <RxCross1 size={30} />
              </div>
            </div>
          ) : null}
        </div>

        <div><Chip/></div>

        <div className=" m-1">
          <div className="text-xl m-1 ">Review</div>
          <ReactQuill
            style={{ backgroundColor: "#f0f0f0" }}
            theme="snow"
            value={content}
            onChange={Setcontent}
            ref={descriptionRef}
          />
        </div>

        <div className="text-xl m-3">Rating</div>
        <StarRating starCount={5} className="m-4" />

        {content ? (
          <button
            className=" block w-24 h-14 animate-bounce bg-amber-500 rounded-full ml-[43%] mt-4 "
            onClick={handlePreview}
          >
            Preview
          </button>
        ) : null}
      </div>

      {isPreview ? (
        <div
          className="absolute w-[81%] h-[70%] top-[9%] left-[5%] bg-gradient-to-r from-teal-400 to-yellow-200 shadow-2xl"
          ref={reviewRef}
        >
          <RxCross1
            size={32}
            className="ml-[98%]  bg-lime-800 rounded-full cursor-pointer"
            onClick={cancelPreview}
          />

          <div className="relative w-28 h-28 m-2 rounded-full  bg-slate-300 hover:bg-slate-200">
            <img
              src={previewUrl}
              className="absolute w-full h-full rounded-full"
            />

            <label htmlFor="file-upload" className="custom-file-upload">
              <FaPen className=" absolute top-[32%] left-[32%]  w-8 h-8 rounded-full cursor-pointer" />
            </label>
            <input
              id="file-upload"
              type="file"
              style={{ display: "none" }}
              onChange={handleFileChange}
            />
          </div>

          <div className="text-3xl p-1">{titleRef.current?.value}</div>
          <div className="text-sm">{`author: ${
            currentUser?.displayName
          }  ${now.getDate()}/${now.getMonth() + 1}/${now.getFullYear()} ${
            daysOfWeek[now.getDay()]
          }`}</div>
          <div className="flex m-2 text-xl font-extralight items-baseline ">
            {rating} <IoStar size={22} className=" bg-amber-400 m-1" />
          </div>
          {tag.length!=0?
          <div className="flex min-w-4 h-8 rounded-3xl bg-black text-white p-1 ml-1">Tag : {tag.map((i)=>{return <div className="w-auto bg-slate-500 rounded-3xl  p-0.5 ml-1">{i}</div>})}</div>
        :null  
        }
          <div
            dangerouslySetInnerHTML={renderContent()}
            className="m-4 p-2 text-xl"
          />

          <TwitterShareButton url="https://www.tallengestore.com/cdn/shop/products/Murlidhar_Krishna_In_The_Moonlight_-_Krishna_Flute_Painting_Poster_1_1_8667c43d-8392-4626-9ec1-b739ce55c232.jpg?v=1576845919">
            <div
              onClick={() =>
                shareToTwitter(
                  titleRef.current?.value,
                  previewUrl,
                  descriptionRef.current?.value
                )
              }
              className="absolute top-[90%] left-[35%]  p-1.5 cursor-pointer hover:bg-neutral-400 w-32 h-8 rounded-md bg-slate-500"
            >
              Share on twitter
            </div>
          </TwitterShareButton>
        </div>
      ) : null}

      {isPreview ? (
        <span
          className="absolute top-[80%] left-[40%]  w-32 h-18 rounded-md bg-yellow-400 cursor-pointer "
          onClick={getImage}
        >
          Take a screenshot
        </span>
      ) : null}
    </>
  );
};

export default MovieReview;
