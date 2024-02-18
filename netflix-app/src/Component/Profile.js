import React from 'react'
import { signOut } from "firebase/auth";
import { addUser, removeUser } from "../Utils/Slice/userSlice";
import { auth } from "../Utils/firebase_config";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
const Profile = () => {
    const currentUser=auth.currentUser
    const dispatch=useDispatch()
    const navigate=useNavigate()
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
  return (
   <>
 <div className='absolute w-[28%] h-[28%] top-[30%] left-[38%] bg-green-100 '>
  <div className='flex flex-col'>
  <span className='ml-[28%]'>{currentUser?.displayName}</span>
  <span className='ml-[28%]'>{currentUser?.email }</span>
  </div>
  <div className='ml-[20%]'>------------------------------------------</div>
       <div className='w-22 h-12 font-semibold  text-center py-8 cursor-pointer  hover:bg-slate-100 ' onClick={handleSignOut}>Signout</div>
</div>      
   </>
  )
}

export default Profile