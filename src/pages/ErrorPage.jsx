import React from "react";
import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <>
      <div className="h-screen flex flex-col bg-gradient-to-tr from-red-400 to-red-700 text-xl text-white font-bold gap-5 justify-center items-center">
        <p className="text-red-800">
          404 Error | The page you are requesting isn't exist!⚠️
        </p>
        <Link to="/">
          <div className="px-10 py-2 bg-gradient-to-r from-blue-400 to-blue-600 rounded-xl drop-shadow-lg hover:scale-95 transform transition ease-in-out duration-300">
            Go to Home Page
          </div>
        </Link>
      </div>
    </>
  );
};

export default ErrorPage;
