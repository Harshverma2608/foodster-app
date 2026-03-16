import React from "react";
import { BrowserRouter, RouterProvider } from "react-router-dom";
import { Routes, Route, Navigate } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import UserLogin from "./pages/UserLogin";
import UserSignup from "./pages/UserSignup";
import Home from "./pages/Home";
import { createBrowserRouter } from "react-router-dom";
import Documentation from "./pages/Documentation";
import RegistrationLayout from "./layout/RegistrationLayout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RegistrationLayout />,
    children: [
      {
        path: "/login",
        element: <UserLogin />,
      },
      {
        path: "/signup",
        element: <UserSignup />,
      },
    ],
  },
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/documentation",
    element: <Documentation />,
  },
]);

const App = () => {
  return (
    <>
      <Toaster position="top-right" reverseOrder={false} />
      <RouterProvider router={router} />  
    </>
  );
};

export default App;
