import React from "react";
import { Routes, Route } from "react-router-dom";
import { Home, Employee, Dashboard, ErrorPage } from "./pages";

const TheRoutes = () => {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/employee" element={<Employee />} />
        <Route path="/dashboard" element={<Dashboard />} />

        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </>
  );
};

export default TheRoutes;
