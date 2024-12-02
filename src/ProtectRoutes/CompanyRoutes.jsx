import React from "react";
import { Route, Routes } from "react-router-dom";
import Dashboard from "../Company/pages/Dashboard";
import NotFound from "../NotFound/NotFound";

function CompanyRoutes() {
  return (
    <Routes>
        {/* company routes */}
      <Route path="/dashboard" element={<Dashboard />} />
      {/* 404 page */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default CompanyRoutes;
