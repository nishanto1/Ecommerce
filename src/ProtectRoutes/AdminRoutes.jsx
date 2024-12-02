import React from "react";
import { Route, Routes } from "react-router-dom";
import Dashboard from "../Admin/Pages/Dashboard";
import NotFound from "../NotFound/NotFound";
import ViewUser from "../Admin/Pages/ViewUser";

function AdminRoutes() {
  return (
    <Routes>
      {/* admin routes */}
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/view/:id?" element={<ViewUser />} />
      {/* 404 page */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default AdminRoutes;
