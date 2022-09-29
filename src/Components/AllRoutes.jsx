import React from "react";
import { Routes, Route } from "react-router-dom";
import Homepage from "../Pages/Homepage/Homepage";
import { Sign } from "../Pages/Login/sign-up";
import Vendor from "./Vendor/Vendor";
const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/vendor/*" element={<Vendor />} />
      <Route path="/sign-up" element={<Sign />} />
    </Routes>
  );
};

export default AllRoutes;
