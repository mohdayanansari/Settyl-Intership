import React, { useEffect, useState } from "react";
import { Header, LoadingSpinner } from "../../components";
import EmployeeCard from "./EmployeeCard";

const Employee = () => {
  const [employeeData, setEmployeeData] = useState([]);
  const [loading, setLoading] = useState(true);

  const getEmployeeData = async () => {
    try {
      const res = await fetch("https://settylapi.herokuapp.com/employee-data", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await res.json();

      // console.table(data);
      setEmployeeData(data);
      setLoading(false);
      if (!res.status === 200) {
        const error = new Error(res.error);
        throw error;
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getEmployeeData();
  }, []);

  return (
    <>
      <Header />
      <div className="w-full mt-16 text-center text-xl md:text-4xl font-bold text-gray-700 bg-gray-100 py-5">
        Our Employees
      </div>

      {loading ? (
        <LoadingSpinner />
      ) : (
        <div className="w-full  py-10 px-3 md:px-20 grid grid-cols-1 md:grid-cols-4 gap-10 bg-gray-100">
          {employeeData.map((item, index) => (
            <EmployeeCard
              key={index}
              name={item.employee_name}
              image={item.profile_image}
              email={item.employee_email}
              age={item.employee_age}
              salary={item.employee_salary}
            />
          ))}
        </div>
      )}
    </>
  );
};

export default Employee;
