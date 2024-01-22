import React, { useEffect, useState, useRef } from "react";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { auth } from "../Utils/firebase_config";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../Utils/Slice/userSlice";
import { useNavigate } from "react-router-dom";
import { Netflix_logo } from "../Utils/constant";
import { signOut } from "firebase/auth";
import { GPTSearchToggelButton } from "../Utils/Slice/GPTSlice";
import { LanguageToggle } from "../Utils/Slice/LanguageSlice";
import { Supported_Language } from "../Utils/constant";
import { Logo } from "../Utils/constant";

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user_exist = useSelector((store) => store.user_data);
  const [isSignOut, SetisSignOut] = useState(false);
  const UserDataRef = useRef();
  const [headerbg,Setheaderbg]=useState(null)
  const [dp,Setdp]=useState(false)
  const UserRef=useRef(null)
  const ShowGPTSearch=useSelector((store)=>store.GPT.isGPTSearchClicked)

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
   
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user

        const { uid, displayName, email, photoURL } = user;
        dispatch(
          addUser({
            uid: uid,
            displayName: displayName,
            email: email,
            photoURL: photoURL,
          })
        );
        navigate("/Browse");

        // ...
      } else {
        // User is signed out
        // ...
        dispatch(removeUser());
        navigate("/");
      }
    });

    return () => unsubscribe(); // Good practice
  }, []);


useEffect(()=>{
  const handleOutsideClick=(e)=>{   
    console.log(UserRef.current,"dataRed");
    if(!UserDataRef.current?.contains(e.target) && !UserRef.current?.contains(e.target)){
      console.log("callewed");
      SetisSignOut(false)
    }  
  }
 window.addEventListener("click",handleOutsideClick)
},[])
 
// useEffect(()=>{
// window.addEventListener(scroll,()=>{
//   if(scrollY>=window.screen){
//     Setheaderbg("bg-gradient-to-tr from-slate-100")
//   }
// })
// },[])


  const handleUser = () => {
    SetisSignOut(true);
  }

  const handleSignOut = (event) => {
    signOut(auth)
      .then(() => {
        dispatch(removeUser());
      })
      .catch((error) => {
        console.log("Error in Signout", error);
      });
    navigate("/");
  };
 const handleGPTSearch=(e)=>{
    e.stopPropagation()
  dispatch(GPTSearchToggelButton())
  }
  const handleLangChange=(e)=>{
    dispatch(LanguageToggle(e.target.value))
    console.log(e.target.value,"hbhkigbihbhib");
  }

  const handlePicture=()=>{
    console.log("hellodp");
    Setdp(true)
  }
  return (
    <>
      {!user_exist ? (
        <div>
          <div className="absolute px-8 py-2 bg-gradient-to-tr from-red-800 ">
            <img className="w-44" src={Netflix_logo} />
          </div>
        </div>
      ) : (
        <div className=" fixed top-0 z-40 flex justify-between bg-gradient-to-tr from-slate-100  w-full h-16  opacity-100"     
        >
          <div className=" w-26 px-24 py-2  ">
            <img className="w-16" src={Netflix_logo} />
          </div>
          <div  className="flex w-[30%] justify-evenly ">
          <div className=" cursor-pointer mr-12 ">
          <div className=" text-xl pl-1 font-semibold text-yellow-50 w-18 rounded-md border-red-500 bg-gradient-to-r from-pink-700 hover:opacity-60 shadow-md text-center  mt-5 mr-4"
             onClick={handleGPTSearch}
          >{ShowGPTSearch?"Homepage":"GPTSearch"}</div>
          </div>

{
  ShowGPTSearch &&
  <div className="mt-5 sm:align-baseline ">        
  <select className="bg-black text-red-500 rounded-3xl font-serif"
  onChange={handleLangChange}
  >
    {Supported_Language.map((i)=> 
      <option key={i.identifier} value={i.identifier}>{i.name}</option>
    )}
  </select>
  </div>
}         
          <div
           ref={UserDataRef}
            className=" absolute h-12 w-12 rounded-3xl bg-zinc-200 sm:left-[2%] left:[70%]  mt-2 cursor-pointer"
            
            onClick={handleUser}
          >   
            <div className="absolute w-full h-full rounded-full"> <img className="rounded-full" src={Logo}/></div>     
            {isSignOut ? (       
          <div
               className=" absolute z-20 flex flex-col top-14 sm:top-18 right-2 w-32 h-22 left-[5%] bg-slate-300 rounded-md"
               ref={UserRef}
               
             >             
               <div
                 className="w-22 h-12 font-semibold  text-center py-8  hover:bg-slate-100"
                 onClick={handleSignOut}
               >
                 Sign Out
               </div>
               <div className="font-semibold text-center w-22 h-22 cursor-pointer hover:bg-slate-50" onClick={handlePicture}></div>
             </div>           
            ) : null}
          </div>
        </div>

      
        </div>
        
      )}

{
dp?<div className=" absolute top-[40%] left-[40%] w-[20%] h-[30%] bg-black z-40 rounded-md shadow-lg ">
           jdjf
        </div>
        :null
        }
    </>
  );
}

export default Header;
