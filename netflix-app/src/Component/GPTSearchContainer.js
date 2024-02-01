import React, { useEffect, useRef, useState } from "react";
import { BrowsePage_BG, IMG_CDN_URL } from "../Utils/constant";
import lang from "../Utils/languageSelect";
import { useSelector, useDispatch } from "react-redux";
import { API_call } from "../Utils/Slice/GPTSlice";
import openai from "../Utils/OpenAI";
import { Movie_fetch } from "../Utils/Slice/GPTSlice";
import GptmovieSuggs from "./GptmovieSuggs";
import MovieCard from "./MovieCard";
import { ColorRing } from "react-loader-spinner";
import { IoMdMic } from "react-icons/io";
import { RxCross1 } from "react-icons/rx";
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition'
import * as Tone from 'tone'
import { log } from "tone/build/esm/core/util/Debug";
const GPTSearchContainer = () => {
  const dispatch = useDispatch();
  const SearchText = useRef(null);
  const toggelLang = useSelector((store) => store.lang.languageChange);
  const TMDB_movie = useSelector((store) => store.GPT.movie_array);
  const TMDB_SearchResult = useSelector((store) => store.GPT.final_result);
  const [loader, Setloader] = useState(false);
 const [isSpeech,SetisSpeech]= useState(null)
  const {
    transcript,
    listening,
      resetTranscript,
    browserSupportsSpeechRecognition
  } = useSpeechRecognition();
  

  const handleOpenAISearch = () => {
    Setloader(true);

   
    dispatch(API_call(SearchText));
  };
  const handleSpeech=()=>{
    dispatch(API_call(isSpeech))
  }
  useEffect(() => {
    dispatch(Movie_fetch(TMDB_movie));
    Setloader(false);
  }, [TMDB_movie]);

  useEffect(()=>{
    console.log(transcript,"hfcfcx");
  SetisSpeech(transcript)
   },[transcript])

  const [isMicOn,SetisMicOn]=useState(false)
  const removeSpeechPopUp=()=>{
    
    SetisMicOn(false)   
    SpeechRecognition.stopListening() 
    resetTranscript()
    const synth = new Tone.Synth().toDestination();

//play a middle 'C' for the duration of an 8th note
synth.triggerAttackRelease("E4","9n");
  }
  
const speechToText = function(){
  const synth = new Tone.Synth().toDestination();

//play a middle 'C' for the duration of an 8th note
synth.triggerAttackRelease("A4","9n");
  SetisMicOn(true)
  SpeechRecognition.startListening({continuous: true,language:'en-IN' })
  console.log(isSpeech,"llll");
  setTimeout(()=>{
  handleSpeech()
  removeSpeechPopUp()
},8000)
}

  

 

if(!browserSupportsSpeechRecognition) {
  return <span> Browser doesn't support speech recognition </span>
}

  return (
    <>
      <div className=" fixed top-0 -z-10">
        <img
          className=" w-screen sm:h-[70%]    "
          alt="Img"
          src={BrowsePage_BG}
        />

        <div className=" flex absolute justify-between top-16 left-[20%] w-[50%] mt-[10%] h-14 bg-zinc-400 p-2 shadow-lg">
          <input
            className=" text-xl font-semibold align-baseline w-[82%] focus:outline-none focus:ring focus:border-blue-500 -500 h-[90%] p-2 mt-1 rounded-sm  "
            placeholder={lang[toggelLang]?.GetSearchplaceholder}
            ref={SearchText}
          />

          <div
            className="font-semibold text-xl w-28 text-center  bg-black  pt-1 align-center rounded-md text-red-600 cursor-pointer"
            onClick={handleOpenAISearch}
          >
            {!loader ? (
              lang[toggelLang]?.search
            ) : (
              <ColorRing className="ml-[30%]" height="30" width="30" />
            )}
          </div>
        
        </div>
        <div className=" absolute md:top-[25%] left-[72%] top-[38%] w-14 h-14 rounded-full bg-white p-3 cursor-pointer hover:w-16 hover:h-16 hover:p-4 hover:bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% " onClick={speechToText}><IoMdMic  size={32} /></div>
      </div>

      {TMDB_SearchResult?.length ? <GptmovieSuggs /> : null}

      {isMicOn?
    <div className=" absolute w-[30%] h-[35%] top-[38%] left-[33%] bg-slate-100 rounded-md shadow-lg ">
    <div className="w-12 h-12 bg-slate-300 rounded-full hover:bg-slate-500 p-2 absolute  left-[90%] cursor-pointer " onClick={removeSpeechPopUp}><RxCross1 size={30} /></div>
  <div className="animate-ping w-12 h-12 bg-red-300 rounded-full  p-2 absolute top-[80%] left-[44%] " ><IoMdMic  size={32} /></div>
  <div className="text-2xl">{transcript}</div>
  </div>
  :null  
    }
    </>
  );
};

export default GPTSearchContainer;
