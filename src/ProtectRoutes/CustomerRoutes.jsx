import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../Customer/Pages/Home";
import NotFound from "../NotFound/NotFound";

function CustomerRoutes() {
  return (
    <Routes>
      {/* customer routes */}
      <Route path="/home" element={<Home />} />
      {/* 404 page */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default CustomerRoutes;
