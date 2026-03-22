import React from "react";
import { redirect, RouterProvider } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import UserLogin from "./pages/UserLogin";
import UserSignup from "./pages/UserSignup";
import Home from "./pages/Home";
import { createBrowserRouter } from "react-router-dom";
import Documentation from "./pages/Documentation";
import ErrorPage from "./pages/ErrorPage";
import { action as loginAction } from "./pages/UserLogin";
import { action as signupAction } from "./pages/UserSignup";

const isAuthenticated = () => {
  const email = localStorage.getItem("email");
  const authToken = localStorage.getItem("authToken");
  return Boolean(email && authToken);
};

const requireAuth = () => {
  if (!isAuthenticated()) {
    return redirect("/login");
  }

  return null;
};

const publicOnly = () => {
  if (isAuthenticated()) {
    return redirect("/");
  }

  return null;
};

const router = createBrowserRouter([
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
    path: "/",
    element: <Home />,
    errorElement: <ErrorPage />,
    loader: requireAuth,
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
