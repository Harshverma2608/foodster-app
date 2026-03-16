import React, { useState } from "react";
import { toast } from "react-hot-toast";


const UserLogin = () => {

  const [formData, setFormData] = useState({
    email: "",
    password: ""
  });

  const [showPassword, setShowPassword] = useState(false);

  // input change hoga
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  // handle submit
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.email || !formData.password) {
      toast.error("Please fill all fields");
      return;
    }

    console.log("Login Data:", formData);

    toast.success("Login Successful");
  };

  return (
    <div className="flex items-center justify-center h-full">

      <form
        onSubmit={handleSubmit}
        className="w-full max-w-md bg-orange-100 p-8 rounded-lg shadow-lg"
      >

        {/* Logo */}

        <div className="flex justify-center mb-4">
         <img src="/FoodsterLogo3.png" alt="logo" className="w-55" />
        </div>

        <h2 className="text-3xl font-bold text-center mb-6">
          Login to Foodster
        </h2>

        {/* Email */}

        <div className="mb-4">
          <label className="block text-gray-700 mb-2">
            Email
          </label>

          <input
            type="email"
            name="email"
            placeholder="Enter your email"
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
          />
        </div>

        {/* Password */}

        <div className="mb-4">
          <label className="block text-gray-700 mb-2">
            Password
          </label>

          <div className="relative">

            <input
              type={showPassword ? "text" : "password"}
              name="password"
              placeholder="Enter your password"
              value={formData.password}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
            />

            <span
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-2 cursor-pointer text-sm text-gray-500"
            >
              {showPassword ? "Hide" : "Show"}
            </span>

          </div>
        </div>

        {/* Forgot Password */}

        <div className="flex justify-end mb-4">
          <a href="#" className="text-sm text-orange-600 hover:underline">
            Forgot Password?
          </a>
        </div>

        {/* Login Button */}

        <button
          type="submit"
          className="w-full bg-orange-500 text-white py-2 rounded-lg hover:bg-orange-700 transition"
        >
          Login
        </button>

        {/* Signup link */}

        <p className="text-center mt-4 text-sm">
          Don't have an account?{" "}
          <span className="text-orange-500 cursor-pointer">
            Sign Up
          </span>
        </p>

      </form>

    </div>
  );
};

export default UserLogin;