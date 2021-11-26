import React from "react";
import Loader from "react-loader-spinner";

const LoadingSpinner = () => {
  return (
    <div className="w-full flex justify-center">
      <Loader
        type="Rings"
        color="#00BFFF"
        height={100}
        width={100}
        timeout={5000} //3 secs
      />
    </div>
  );
};

export default LoadingSpinner;
