import React from "react";
import { Routes, Route } from "react-router-dom";
import Homepage from "../Pages/Homepage/Homepage";
import Vendor from "./Vendor/Vendor";
const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/vendor/*" element={<Vendor />} />
    </Routes>
  );
};

export default AllRoutes;
