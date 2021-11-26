import React from "react";

const EmployeeCard = ({ name, image, email, age, salary }) => {
  return (
    <div className="bg-white flex flex-col border border-gray-200 items-center rounded-2xl drop-shadow-lg p-2 md:p-5">
      <img
        src={image}
        alt="profile-pic"
        className="w-28 h-28 rounded-full shadow-md"
      />
      <h1 className="text-gray-600 font-bold text-xl md:text-2xl mt-5">
        {name}
      </h1>
      <hr className="w-full h-1 mt-2" />
      <p className="text-gray-400 font-medium text-xs mb-5">
        Full-Stack Developer
      </p>
      <p className="text-gray-400 font-medium text-xs">{email}</p>
      <p className="text-gray-400 font-medium text-xs">Age : {age}</p>
      <p className="text-gray-500 font-bold mt-5 text-lg">
        Salary : ₹ {salary}
      </p>
    </div>
  );
};

export default EmployeeCard;
