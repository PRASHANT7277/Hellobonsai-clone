import React from "react";
import { Routes, Route, useParams } from "react-router-dom";

import Projects from "../../../Pages/Projects/Projects";
import Clients from "../../../Pages/Clients/Clients";
import Dashboard from "../Dashboard/Dashboard";
import IndividualProject from "../../../Pages/Projects/IndividualProject";


const VendorRoutes = () => {
  const params = useParams();

  return (
    <Routes>

     
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/clients" element={<Clients />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/projects/:id" element={<IndividualProject />} />


    </Routes>
  );
};

export default VendorRoutes;
