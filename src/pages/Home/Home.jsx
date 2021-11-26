import React from "react";
import { Header } from "../../components";

const Home = () => {
  return (
    <>
      <Header />
      <div className="h-screen flex justify-center items-center bg-gradient-to-tr from-blue-400 to-blue-900">
        <h1 className="text-2xl md:text-4xl font-extrabold text-white">Home Page</h1>
      </div>
    </>
  );
};

export default Home;
