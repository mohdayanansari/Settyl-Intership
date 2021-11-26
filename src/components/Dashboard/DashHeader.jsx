import React from "react";
import { SunIcon, MoonIcon, BellIcon } from "@heroicons/react/solid";

const DashHeader = () => {
  return (
    <div className="flex px-5 md:px-10 sticky top-0 h-16 shadow-md justify-between items-center bg-gray-800 text-white">
      {/* col-1 */}
      {/* <div>Settyl Dashboard</div> */}
      {/* col-2 */}
      <div className="w-4/5 justify-center flex">
        <input
          type="search"
          name="search"
          id="search"
          placeholder="search for employee"
          className="w-96 border-none focus:outline-none outline-none bg-gray-700 py-2 px-4 text-sm rounded-xl"
        />
      </div>
      {/* col-3 */}
      <div className="flex gap-5">
        <SunIcon className="w-6 h-6" />
        <BellIcon className="w-6 h-6" />
        <img
          src="https://avatars.githubusercontent.com/u/84264814?v=4"
          alt=""
          className="w-6 h-6"
        />
      </div>
    </div>
  );
};

export default DashHeader;
