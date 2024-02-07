import React, { useEffect } from "react";
import Login from "./Login";
import Browse from "./Browse";
import MovieReview from "./MovieReview";
import GptmovieSuggs from "./GptmovieSuggs";

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
    },
    {
      path: "/browse",
      element: <Browse />,
    },
    {
      path:'/movieReview',
      element:<MovieReview/>
    }
  ]);

 
  return (
    <>
      <RouterProvider router={appRouter} />
    </>
  );
};

export default Body;
