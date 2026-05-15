import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import UserLogin from "./pages/UserLogin";
import UserSignup from "./pages/UserSignup";
import Visit from "./pages/Visit";
import Home from "./pages/Home";
import Discover from "./pages/Discover";
import MyPlans from "./pages/MyPlans";
import Documentation from "./pages/Documentation";
import ErrorPage from "./pages/ErrorPage";
import { action as loginAction } from "./pages/UserLogin";
import { action as signupAction } from "./pages/UserSignup";
import { publicOnly, requireAuth } from "./utils/auth";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <ErrorPage />,
    action: loginAction,
    loader: requireAuth,
  },
  {
    path: "/discover",
    element: <Discover />,
    errorElement: <ErrorPage />,
    loader: requireAuth,
  },
  {
    path: "/my-plans",
    element: <MyPlans />,
    errorElement: <ErrorPage />,
    loader: requireAuth,
  },
  {
    path: "/login",
    element: <UserLogin />,
    errorElement: <ErrorPage />,
    action: loginAction,
    loader: publicOnly,
  },
  {
    path: "/signup",
    element: <UserSignup />,
    errorElement: <ErrorPage />,
    action: signupAction,
    loader: publicOnly,
  },
  {
    path: "/visit",
    element: <Visit />,
    errorElement: <ErrorPage />,
    loader: publicOnly,
  },
  {
    path: "/documentation",
    element: <Documentation />,
    errorElement: <ErrorPage />,
    loader: requireAuth,
  },
  {
    path: "*",
    element: <ErrorPage />,
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
