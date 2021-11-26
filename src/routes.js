import React from "react";
import { Routes, Route } from "react-router-dom";
import { Home, Employee, ErrorPage } from "./pages";

const TheRoutes = () => {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/employee" element={<Employee />} />

        <Route path='*' element={<ErrorPage />} />
      </Routes>
    </>
  );
};

export default TheRoutes;
