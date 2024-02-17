import React, { useEffect } from "react";
import Login from "./Login";
import Browse from "./Browse";
import MovieReview from "./MovieReview";
import GptmovieSuggs from "./GptmovieSuggs";
import Error from "./Error";
import Profile from "./Profile";
import {
  RouterProvider,
  createBrowserRouter,
  useNavigate,
} from "react-router-dom";


const Body = () => {
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Login />,
      errorElement:<Error/>
    },
    {
      path: "/browse",
      element: <Browse />,
    },
    {
      path:'/movieReview',
      element:<MovieReview/>
    },
    {
      path:"/profile",
      element:<Profile/>
    }
    
  ]);

 
  return (
    <>
      <RouterProvider router={appRouter} />
    </>
  );
};

export default Body;
