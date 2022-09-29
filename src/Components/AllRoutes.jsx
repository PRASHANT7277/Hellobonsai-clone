import React from "react";
import { Routes, Route } from "react-router-dom";
import Homepage from "../Pages/Homepage/Homepage";
import { Sign } from "../Pages/Login/sign-up";
import Vendor from "./Vendor/Vendor";
import Pricing from "../Pages/Price/Pricing"
const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/vendor/*" element={<Vendor />} />
      <Route path="/sign-up" element={<Sign />} />
      <Route path="/pricing" element={<Pricing />} />
      {/* <Route path="/reviews" element={<Reviews />} /> */}
    </Routes>
  );
};

export default AllRoutes;
