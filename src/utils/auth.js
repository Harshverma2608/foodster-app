import { redirect } from "react-router-dom";

export const isAuthenticated = () => {
  const email = localStorage.getItem("email");
  const authToken = localStorage.getItem("authToken");

  return Boolean(email && authToken);
};

export const requireAuth = () => {
  if (!isAuthenticated()) {
    return redirect("/login");
  }

  return null;
};

export const publicOnly = () => {
  if (isAuthenticated()) {
    return redirect("/");
  }

  return null;
};
