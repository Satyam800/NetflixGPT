import React,{useEffect} from "react";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { auth } from "../Utils/firebase_config";
import { useDispatch } from "react-redux";
import { addUser, removeUser } from "../Utils/Slice/userSlice";
import { useNavigate } from "react-router-dom";
import { Netflix_logo } from "../Utils/constant";
const Header = () => {
  const dispatch = useDispatch();
  const navigate= useNavigate()
  useEffect(() => {
    
   const unsubscribe= onAuthStateChanged(auth, (user) => {
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
        navigate("/Browse")
 
        // ...
      } else {
        // User is signed out
        // ...
        dispatch(removeUser());
        navigate("/")
      }
    });

    return()=> unsubscribe()  // Good practice
    
  }, []);
  return (
    <>
      <div>
        <div className="absolute px-8 py-2 bg-gradient-to-tr from-red-800 ">
          <img
            className="w-44"
            src={Netflix_logo}
          />
        </div>

        <div></div>
      </div>
    </>
  );
};

export default Header;
