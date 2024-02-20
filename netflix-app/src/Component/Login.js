import React, { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Header from "./Header";
import { Link } from "react-router-dom";
import { validateForm } from "../Utils/validate";
import { auth } from "../Utils/firebase_config";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { useDispatch } from "react-redux";
import { addUser } from "../Utils/Slice/userSlice";
import { LoginPage_backgrd } from "../Utils/constant";
const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  // Either u can use state variable to store value of form or use reference of that thats why we r using useRef hook

  const name = useRef();
  const [animate,SetAnimate]=useState(false)
  const email = useRef();
  const password = useRef();

  const [isLoginform, setisLoginform] = useState(true);
  const [errormessage, SeterrorMessage] = useState();

  const handleSignIn = () => {
    SetAnimate(true)
    setisLoginform(!isLoginform);
  };

  const handleSubmitbutton = (e) => {

    e.preventDefault();
    SeterrorMessage(
      validateForm(
        name.current?.value,
        email.current.value,
        password.current.value
      )
    );
    

    if (errormessage) return;
    // Sign In Sign Up Logic

    if (!isLoginform) {
      //Sign Up form

      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          console.log(user);
          updateProfile(user, {
            displayName: name.current.value,
            photoURL: "",
          })
            .then(() => {
              const { uid, displayName, email, photoURL } = auth.currentUser;
              dispatch(
                addUser({
                  uid: uid,
                  displayName: displayName,
                  email: email,
                  photoURL: photoURL,
                })
              );
             
            })
            .catch((error) => {
              // An error occurred
              // ...
            });

          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          console.log("error");
          // ..
        });
    } else {
      //Sign In form

      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          console.log(user);
         
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          SeterrorMessage(errorCode + errorMessage);
        });
    }
  };
  
  return (
    <>
      <div className="absolute">
        <Header />
        <div>
          <img
            className="z-10"
            alt="logo"
            src={LoginPage_backgrd}
          />
        </div>
      </div>

      <div className=" fixed  mt-[28%]  ml-[0]   h-[68%] w-[52%] sm:ml-[20%]  sm:mt-[12%]  bg-gradient-to-t from-black z-40">
        <div className="h-8 w-full bg-gradient-to-r from-red-400"></div>
        <div className={` text-3xl text-white font-semibold ml-[30%] pt-4 cursor-pointer`} onClick={()=>SetAnimate(true)}>
          {isLoginform ? "Sign In" : "Sign Up"}
        </div>
        <form >
          {!isLoginform && (
            <input
              ref={name}
              className="focus:outline-none focus:border-sky-500 sm:w-1/2 sm:h-12 sm:ml-[20%] w-full h-16 sm:my-4 my-2 sm:px-8 px-2 bg-slate-800 text-white"
              type="text"
              placeholder="Name"
            />
          )}
          <input
            ref={email}
            className="focus:outline-none focus:border-sky-500 sm:w-1/2 sm:h-12 sm:ml-[20%] w-full h-16 sm:my-4 my-2 sm:px-8 px-2 bg-slate-800 text-white"
            type="email"
            placeholder="Email"
          />
          <input
            ref={password}
            className="focus:outline-none focus:border-sky-500 w-1/2 h-12 ml-[20%] my-4 px-8 bg-slate-800 text-white"
            type="password"
            placeholder="Password"
          />
          <p className=" text-red-700 font-bold ml-[2np0%]">{errormessage}</p>

          <input
            onClick={handleSubmitbutton}
            className="w-1/2 h-12 ml-[20%] my-4 px-8 bg-red-600 cursor-pointer font-semibold"
            type="submit"
            name="Sign In"
            value={isLoginform ? "Sign In" : "Sign Up"}
          />
        </form>
                
        <div className="text-yellow-200 ml-[20%] font-mono">
          {isLoginform ? "New to Netflix?" : "Already registerd?"}
          <span onClick={handleSignIn} className={`${animate && "bg-yellow-100 "} font-bold text-white cursor-pointer`} >
            {isLoginform ? "Sign up now." : "Sign In Now"}
          </span>
        </div>
      </div>
    </>
  );
};

export default Login;
