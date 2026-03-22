import React, { useState } from "react";
import { Form, Link } from "react-router-dom";

const Registration = ({ registrationInfo, errorMessage, isSubmitting }) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="h-screen w-screen bg-orange-100 flex items-center justify-center">
      {/* MAIN CONTAINER (60% WIDTH) */}
      <div className="w-240 h-full md:h-[85vh] bg-white rounded-2xl shadow-2xl flex overflow-hidden md:m-3">
        <div className="flex w-full h-full">
          {/* LEFT SIDE - FORM */}
          <div className="w-full md:w-120 flex items-center justify-center bg-orange-50 px-8">
            {/* <form onSubmit={handleSubmit} className="w-full max-w-sm"> */}
            <Form method="post" className="w-full max-w-sm">
              <div className="text-center mb-6">
                <div className="flex justify-center mb-4">
                  <img src="/FoodsterLogo3.png" alt="logo" className="w-28" />
                </div>

                <h2 className="text-2xl font-bold">
                  {registrationInfo.heading}
                </h2>
                <p className="text-gray-500 text-sm">
                  {registrationInfo.subheading}
                </p>
              </div>

              {/* Email */}
              <div className="mb-4">
                <label className="text-sm text-gray-600">Email</label>
                <input
                  type="email"
                  name="email"
                  placeholder="Enter your email"
                  // value={formData.email}
                  // onChange={handleChange}
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
                    // value={formData.password}
                    // onChange={handleChange}
                    className="w-full px-4 pr-10 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 outline-none"
                  />

                  <button
                    type="button"
                    onClick={() => setShowPassword((value) => !value)}
                    aria-label={
                      showPassword ? "Hide password" : "Show password"
                    }
                    className="absolute right-2.5 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700"
                  >
                    {showPassword ? (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.8"
                        className="w-4 h-4"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M3 3l18 18M10.58 10.58A2 2 0 0012 16a2 2 0 001.41-.59M9.88 5.09A9.77 9.77 0 0112 4c5 0 9 4.5 9 8-1 1.96-2.32 3.62-3.83 4.8M6.1 6.1C4.06 7.36 2.38 9.3 1.5 12c.54 1.06 1.2 2.05 1.95 2.94"
                        />
                      </svg>
                    ) : (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.8"
                        className="w-4 h-4"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M1.5 12C3 8 7 4 12 4s9 4 10.5 8c-1.5 4-5.5 8-10.5 8S3 16 1.5 12z"
                        />
                        <circle cx="12" cy="12" r="3" />
                      </svg>
                    )}
                  </button>
                </div>
              </div>

              {/* Forgot Password */}
              <div className="flex justify-end mb-5">
                <span className="text-sm text-orange-500 cursor-pointer hover:underline">
                  Forgot Password?
                </span>
              </div>

              {errorMessage && (
                <p className="mb-4 text-sm text-red-600">{errorMessage}</p>
              )}

              {/* Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-orange-500 text-white py-2 rounded-lg hover:bg-orange-600 transition"
              >
                {isSubmitting ? "Please wait..." : registrationInfo.button}
              </button>

              {/* Signup */}
              <p className="text-sm text-center mt-4">
                {registrationInfo.navigateTo.text}{" "}
                <Link
                  to={registrationInfo.navigateTo.to}
                  className="text-orange-500 cursor-pointer hover:underline"
                >
                  {registrationInfo.navigateTo.link}
                </Link>
              </p>
            </Form>
          </div>

          {/* RIGHT SIDE - IMAGE */}
          <div className="hidden md:block w-1/2 relative">
            <div className="h-full w-full absolute bg-black/20"></div>
            <img
              src="/food-image.jpeg" // replace with your actual image
              alt="food"
              className="w-full h-full object-cover"
            />

            {/* Overlay */}
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 bg-black/40 backdrop-blur-xs p-5 rounded-xl text-white w-[80%]">
              <h2 className="text-xl font-medium mb-2">
                Authentic Home-style Meals for PGs & Flats
              </h2>
              <p className="text-sm text-gray-200">
                Fresh, healthy, and affordable meals delivered to your doorstep
                every day.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Registration;
