import React, { useState } from "react";
import { HomeIcon, UserAddIcon, UserGroupIcon } from "@heroicons/react/outline";
import { Link } from "react-router-dom";

const SelectedLine = ({ showSelect }) => {
  return (
    <>
      {showSelect ? (
        <span
          className="absolute inset-y-0 left-0 w-1 bg-purple-600 rounded-tr-lg rounded-br-lg"
          aria-hidden="true"
        ></span>
      ) : (
        ""
      )}
    </>
  );
};

const SideBar = () => {
  const [showSelect1, setShowSelect1] = useState(false);
  const [showSelect2, setShowSelect2] = useState(false);
  const [showSelect3, setShowSelect3] = useState(false);

  const showSelectHandler1 = () => {
    setShowSelect1(true);
    setShowSelect2(false);
    setShowSelect3(false);
  };
  const showSelectHandler2 = () => {
    setShowSelect2(true);
    setShowSelect1(false);
    setShowSelect3(false);
  };
  const showSelectHandler3 = () => {
    setShowSelect3(true);
    setShowSelect2(false);
    setShowSelect1(false);
  };

  return (
    <div className="bg-gray-800 text-gray-400 font-semibold text-sm flex flex-col sticky left-0 h-screen col-span-2">
      <div className="h-16 pl-10 flex items-center text-white font-bold text-xl">
        Settyl Dashboard
      </div>

      <Link to="home">
        <div
          className="relative pl-10 py-3 cursor-pointer"
          onClick={showSelectHandler1}
        >
          <SelectedLine showSelect={showSelect1} />
          <div className="flex items-center gap-4 ">
            <HomeIcon
              className={
                showSelect1
                  ? `text-white w-6 h-6 transition ease-in-out duration-300`
                  : `text-gray-400 w-6 h-6 transition ease-in-out duration-300`
              }
            />
            <h1 className={showSelect1 ? `text-white` : `text-gray-400`}>
              Dashboard
            </h1>
          </div>
        </div>
      </Link>
      {/* col-2 */}
      <div
        className="relative pl-10 py-3 cursor-pointer"
        onClick={showSelectHandler2}
      >
        <SelectedLine showSelect={showSelect2} />
        <div className="flex items-center gap-4 ">
          <UserGroupIcon
            className={
              showSelect2
                ? `text-white w-6 h-6 transition ease-in-out duration-300`
                : `text-gray-400 w-6 h-6 transition ease-in-out duration-300`
            }
          />
          <h1 className={showSelect2 ? `text-white` : `text-gray-400`}>
            Employees
          </h1>
        </div>
      </div>
      {/* col-3 */}
      <div
        className="relative pl-10 py-3 cursor-pointer"
        onClick={showSelectHandler3}
      >
        <SelectedLine showSelect={showSelect3} />
        <div className="flex items-center gap-4 ">
          <UserAddIcon
            className={
              showSelect3
                ? `text-white w-6 h-6 transition ease-in-out duration-300`
                : `text-gray-400 w-6 h-6 transition ease-in-out duration-300`
            }
          />
          <h1 className={showSelect3 ? `text-white` : `text-gray-400`}>
            Add Employee
          </h1>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
