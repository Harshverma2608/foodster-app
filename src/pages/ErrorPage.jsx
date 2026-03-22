import React from "react";
import { isRouteErrorResponse, useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError();

  let title = "An error occurred";
  let message = "Something went wrong while loading this page.";

  if (isRouteErrorResponse(error)) {
    title = `${error.status} ${error.statusText}`;
    if (typeof error.data === "string") {
      message = error.data;
    }
  } else if (error instanceof Error) {
    message = error.message;
  }

  return (
    <div className="min-h-screen w-screen bg-orange-50 flex items-center justify-center px-4">
      <div className="max-w-lg w-full bg-white rounded-xl p-8 text-center shadow-lg">
        <h1 className="text-2xl font-bold text-gray-900 mb-2">{title}</h1>
        <p className="text-gray-600 mb-6">{message}</p>
        <a
          href="/login"
          className="inline-block bg-orange-500 text-white px-4 py-2 rounded-lg hover:bg-orange-600 transition"
        >
          Go to Login
        </a>
      </div>
    </div>
  );
};

export default ErrorPage;
