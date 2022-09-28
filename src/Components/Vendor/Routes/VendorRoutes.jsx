import React from "react";
import { Routes, Route, useParams } from "react-router-dom";
import Projects from "../../../Pages/Projects/Projects";
import Dashboard from "../Dashboard/Dashboard";


const VendorRoutes = () => {
  const params = useParams();

  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/clients" element={<p>client</p>} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/projects/:id" element={<h1>ID</h1>} />
    </Routes>
  );
};

export default VendorRoutes;
