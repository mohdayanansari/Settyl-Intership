import React from "react";
import TakeMeToPage from "../Templates/TakeMeToPage";

const Header = () => {
  return (
    <div className="px-3 fixed top-0 z-20 w-full md:px-20 flex h-16 justify-between items-center bg-gray-900">
      {/* col-1 */}
      <div className="text-xl  md:text-3xl  font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-blue-400 to-blue-600">
        Settyl
      </div>
      {/* col-2 */}
      <div className="text-gray-200  text-lg font-medium flex items-center  gap-5">
        <TakeMeToPage path="/" linkName="Home" />
        <TakeMeToPage path="/employee" linkName="Employee" />
        <TakeMeToPage path="/" linkName="Test" />
        <TakeMeToPage path="/asjdlaskdnflisa" linkName="Error Page" />
      </div>
    </div>
  );
};

export default Header;
