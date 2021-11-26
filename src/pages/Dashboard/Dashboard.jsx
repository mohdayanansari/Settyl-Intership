import React from "react";
import { DashHeader, SideBar } from "../../components";
import { Routes, Route } from "react-router-dom";

import { DashboardHome, DashEmployee, DashAddEmployee } from "..";

const Dashboard = () => {
  return (
    <>
      <div className="w-full grid grid-cols-1 md:grid-cols-12">
        {/* col-1 */}
        <SideBar />
        {/* col-2 */}
        <div className="col-span-10">
          <DashHeader />

          <Routes>
            <Route  path="/dashboard/home" element={<DashboardHome />} />
            <Route path="dashboard-employee" element={<DashEmployee />} />
            <Route
              path="dashboard-add-employee"
              element={<DashAddEmployee />}
            />
          </Routes>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
