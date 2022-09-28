import React from "react";
import { Routes, Route, useParams } from "react-router-dom";
import Dashboard from "../Dashboard/Dashboard";
const VendorRoutes = () => {
  const params = useParams();

  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/clients" element={<p>client</p>} />
      <Route path="/projects" element={<p>Projects</p>} />
    </Routes>
  );
};

export default VendorRoutes;
