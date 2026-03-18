import React, { useState } from "react";
import { toast } from "react-hot-toast";

const UserLogin = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.email || !formData.password) {
      toast.error("Please fill all fields");
      return;
    }

    console.log("Login Data:", formData);
    toast.success("Login Successful!!");
  };

  return (
    <div className="flex w-full h-full">
      {/* LEFT SIDE - FORM */}
      <div className="w-1/2 flex items-center justify-center bg-orange-50 px-8">
        <form onSubmit={handleSubmit} className="w-full max-w-sm">
          <div className="text-center mb-6">
            <div className="flex justify-center mb-4">
              <img src="/FoodsterLogo3.png" alt="logo" className="w-28" />
            </div>

            <h2 className="text-2xl font-bold">Login to your account</h2>
            <p className="text-gray-500 text-sm">
              Welcome back! Please enter your details
            </p>
          </div>

          {/* Email */}
          <div className="mb-4">
            <label className="text-sm text-gray-600">Email</label>
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleChange}
              className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 outline-none"
            />
          </div>

          {/* Password */}
          <div className="mb-2">
            <label className="text-sm text-gray-600">Password</label>

            <div className="relative mt-1">
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                placeholder="Enter password"
                value={formData.password}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 outline-none"
              />

              <span
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-2 text-sm text-gray-500 cursor-pointer"
              >
                {showPassword ? "Hide" : "Show"}
              </span>
            </div>
          </div>

          {/* Forgot Password */}
          <div className="flex justify-end mb-5">
            <span className="text-sm text-orange-500 cursor-pointer hover:underline">
              Forgot Password?
            </span>
          </div>

          {/* Button */}
          <button
            type="submit"
            className="w-full bg-orange-500 text-white py-2 rounded-lg hover:bg-orange-600 transition"
          >
            Login
          </button>

          {/* Signup */}
          <p className="text-sm text-center mt-4">
            Don’t have an account?{" "}
            <span className="text-orange-500 cursor-pointer hover:underline">
              Sign up
            </span>
          </p>
        </form>
      </div>

      {/* RIGHT SIDE - IMAGE */}
      <div className="w-1/2 relative">
        <img
          src="/food-image.jpeg" // replace with your actual image
          alt="food"
          className="w-full h-full object-cover"
        />

        {/* Overlay */}
        <div className="absolute bottom-6 left-44 bg-black/40 backdrop-blur-x p-5 rounded-xl text-white max-w-xs">
          <h2 className="text-lg font-semibold mb-2">
            Authentic Home-style Meals for PGs & Flats
          </h2>
          <p className="text-sm text-gray-200">
            Fresh, healthy, and affordable meals delivered to your doorstep
            every day.
          </p>
        </div>
      </div>
    </div>
  );
};

export default UserLogin;
