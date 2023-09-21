import React,{useState} from "react";
import Header from "./Header";
import { Link } from "react-router-dom";
const Login = () => {

    const [isLoginform,setisLoginform]=useState(true)

    const handleSignIn=()=>{
        setisLoginform(!isLoginform)
    }
  return (
    <>
      <div className="absolute">
        <Header />
        <div>
          <img
            className="z-10"
            alt="logo"
            src="https://assets.nflxext.com/ffe/siteui/vlv3/f85718e8-fc6d-4954-bca0-f5eaf78e0842/ea44b42b-ba19-4f35-ad27-45090e34a897/IN-en-20230918-popsignuptwoweeks-perspective_alpha_website_large.jpg"
          />
        </div>
      </div>

      <div className=" fixed mt-[15%] ml-[35%] h-[65%] w-[28%] bg-gradient-to-t from-black z-40">
        <div className="h-8 w-full bg-gradient-to-r from-red-400"></div>
        <div className="text-3xl text-white font-semibold ml-24 pt-4">
       {isLoginform? "Sign In":"Sign Up"}
        </div>
        <form>
        {(!isLoginform) && <input
            className="focus:outline-none focus:border-sky-500 w-1/2 h-12 ml-[20%] my-4 px-8 bg-slate-800 text-white"
            type="text"
            placeholder="Name"
          />}
          <input
            className="focus:outline-none focus:border-sky-500 w-1/2 h-12 ml-[20%] my-4 px-8 bg-slate-800 text-white"
            type="email"
            placeholder="Email"
          />
          <input
            className="focus:outline-none focus:border-sky-500 w-1/2 h-12 ml-[20%] my-4 px-8 bg-slate-800 text-white"
            type="password"
            placeholder="Password"
          />

          <input
            className=" w-1/2 h-12 ml-[20%] my-4 px-8 bg-red-600 cursor-pointer font-semibold"
            type="submit"
            name="Sign In"
            value="Sign In"
          />
        </form>

        <div className="text-yellow-200 ml-[20%] font-mono">
          {isLoginform?"New to Netflix?":"Already registerd?"}
          <Link>
            <span onClick={handleSignIn} className="font-bold text-white">{isLoginform?"Sign up now.":"Sign In Now"}</span>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Login;
