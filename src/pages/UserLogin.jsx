import React, { useEffect } from "react";
import { toast } from "react-hot-toast";
import Registration from "../components/Registration";
import { redirect, useActionData, useNavigation } from "react-router-dom";
import { loginUser } from "../services/authService";

const registrationInfo = {
  heading: "Login to your account",
  subheading: "Welcome back! Please enter your details",
  button: "Login",
  type: "login",
  navigateTo: {
    text: "Don’t have an account?",
    link: "Sign up",
    to: "/signup",
  },
};

const UserLogin = () => {
  const actionData = useActionData();
  const navigation = useNavigation();

  useEffect(() => {
    if (actionData?.message) {
      toast.error(actionData.message);
    }
  }, [actionData]);

  return ( 
    <>
      <Registration
        registrationInfo={registrationInfo}
        errorMessage={actionData?.message}
        isSubmitting={navigation.state === "submitting"}
      />
    </>
  );
};

export default UserLogin;

export async function action({ request }) {
  const formData = await request.formData();
  const email = formData.get("email")?.toString().trim() || "";
  const password = formData.get("password")?.toString() || "";

  if (!email || !password) {
    return { message: "Please enter both email and password" };
  }

  try {
    const { ok, data } = await loginUser({ email, password });

    if (!ok) {
      return { message: data?.message || "Login failed. Please try again." };
    }

    localStorage.setItem("email", data?.user?.email || email);
    localStorage.setItem("authToken", data?.token || "");

    toast.success(data?.message || "Login successful");
    return redirect("/");
  } catch {
    return {
      message: "Cannot reach server. Please check your connection and try again.",
    };
  }
}
