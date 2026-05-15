import React, { useEffect } from "react";
import { toast } from "react-hot-toast";
import Registration from "../components/Registration";
import { redirect, useActionData, useNavigation } from "react-router-dom";
import { signupUser } from "../services/authService";

const registrationInfo = {
  heading: "Signup your account",
  subheading: "Welcome to Foodster! Please enter your details",
  button: "Signup",
  type: "signup",
  navigateTo: {
    text: "Already have an account?",
    link: "Login",
    to: "/login",
  },
};

const UserSignup = () => {
  const actionData = useActionData();
  const navigation = useNavigation();

  useEffect(() => {
    if (actionData?.message) {
      toast.error(actionData.message);
    }
  }, [actionData]);

  // const [formData, setFormData] = useState({
  //   name: "",
  //   email: "",
  //   phone: "",
  //   password: "",
  // });

  // const [showPassword, setShowPassword] = useState(false);

  // const handleChange = (e) => {
  //   setFormData({
  //     ...formData,
  //     [e.target.name]: e.target.value,
  //   });
  // };

  // const handleSubmit = (e) => {
  //   e.preventDefault();

  //   if (!formData.name || !formData.email || !formData.phone || !formData.password) {
  //     toast.error("Please fill all fields");
  //     return;
  //   }

  //   console.log("Signup Data:", formData);
  //   toast.success("Account Created Successfully ");
  // };

  return (
    // <div className="flex w-full h-full">

    //   {/* LEFT SIDE - FORM */}
    //   <div className="w-1/2 flex items-center justify-center bg-orange-50 px-8">
    //     <form
    //       onSubmit={handleSubmit}
    //       className="w-full max-w-sm"
    //     >

    //       {/* Logo + Heading */}
    //       <div className="text-center mb-4">
    //         <div className="flex justify-center ">
    //           <img
    //             src="/FoodsterLogo3.png"
    //             alt="logo"
    //             className="w-30"
    //           />
    //         </div>

    //         <h2 className="text-2xl font-bold">
    //           Create your account
    //         </h2>
    //         <p className="text-gray-500 text-sm">
    //           Join Foodster and enjoy fresh meals
    //         </p>
    //       </div>

    //       {/* Full Name */}
    //       <div className="mb-4">
    //         <label className="text-sm text-gray-600">Full Name</label>
    //         <input
    //           type="text"
    //           name="name"
    //           placeholder="Enter your name"
    //           value={formData.name}
    //           onChange={handleChange}
    //           className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 outline-none"
    //         />
    //       </div>

    //       {/* Email */}
    //       <div className="mb-4">
    //         <label className="text-sm text-gray-600">Email</label>
    //         <input
    //           type="email"
    //           name="email"
    //           placeholder="Enter your email"
    //           value={formData.email}
    //           onChange={handleChange}
    //           className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 outline-none"
    //         />
    //       </div>

    //       {/* Phone */}
    //       <div className="mb-4">
    //         <label className="text-sm text-gray-600">Phone Number</label>
    //         <input
    //           type="tel"
    //           name="phone"
    //           placeholder="Enter phone number"
    //           value={formData.phone}
    //           onChange={handleChange}
    //           className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 outline-none"
    //         />
    //       </div>

    //       {/* Password */}
    //       <div className="mb-4">
    //         <label className="text-sm text-gray-600">Password</label>

    //         <div className="relative mt-1">
    //           <input
    //             type={showPassword ? "text" : "password"}
    //             name="password"
    //             placeholder="Enter password"
    //             value={formData.password}
    //             onChange={handleChange}
    //             className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 outline-none"
    //           />

    //           <span
    //             onClick={() => setShowPassword(!showPassword)}
    //             className="absolute right-3 top-2 text-sm text-gray-500 cursor-pointer"
    //           >
    //             {showPassword ? "Hide" : "Show"}
    //           </span>
    //         </div>
    //       </div>

    //       {/* Button */}
    //       <button
    //         type="submit"
    //         className="w-full bg-orange-500 text-white py-2 rounded-lg hover:bg-orange-600 transition mt-5"
    //       >
    //         Sign Up
    //       </button>

    //       {/* Login Link */}
    //       <p className="text-sm text-center mt-4">
    //         Already have an account?{" "}
    //         <span className="text-orange-500 cursor-pointer hover:underline">
    //           Login
    //         </span>
    //       </p>

    //     </form>
    //   </div>

    //   {/* RIGHT SIDE - IMAGE */}
    //   <div className="w-1/2 relative">
    //     <img
    //       src="/food-image.jpeg"
    //       alt="food"
    //       className="w-full h-full object-cover"
    //     />

    //     {/* Overlay */}
    //     <div className="absolute bottom-6 left-6 bg-black/40 backdrop-blur-md p-5 rounded-xl text-white max-w-xs">
    //       <h2 className="text-lg font-semibold mb-2">
    //         Fresh & Healthy Meals Daily
    //       </h2>
    //       <p className="text-sm text-gray-200">
    //         Join thousands enjoying home-style food delivered daily.
    //       </p>
    //     </div>
    //   </div>

    // </div>
    <>
      <Registration
        registrationInfo={registrationInfo}
        errorMessage={actionData?.message}
        isSubmitting={navigation.state === "submitting"}
      />
    </>
  );
};

export default UserSignup;

export async function action({ request }) {
  const formData = await request.formData();
  const email = formData.get("email")?.toString().trim() || "";
  const password = formData.get("password")?.toString() || "";

  if (!email || !password) {
    return { message: "Please enter both email and password" };
  }

  try {
    const { ok, data } = await signupUser({ email, password });

    if (!ok) {
      return { message: data?.message || "Signup failed. Please try again." };
    }

    // Auto-login: save credentials immediately so user doesn't have to log in again
    localStorage.setItem("email", data?.user?.email || email);
    localStorage.setItem("authToken", data?.token || "");

    toast.success("Account created successfully! Welcome to Foodster 🎉");
    return redirect("/");
  } catch {
    return {
      message: "Cannot reach server. Please check your connection and try again.",
    };
  }
}
