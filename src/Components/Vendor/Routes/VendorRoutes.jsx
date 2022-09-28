import React from "react";
import { Routes, Route, useParams } from "react-router-dom";
import Clients from "../../../Pages/Clients/Clients";
import Dashboard from "../Dashboard/Dashboard";
const VendorRoutes = () => {
  const params = useParams();

  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/clients" element={<Clients />} />
      <Route path="/projects" element={<p>Projects</p>} />
    </Routes>
  );
};

export default VendorRoutes;
