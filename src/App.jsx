import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Public/Home";
import {
  ProtectAdmin,
  ProtectCompany,
  ProtectCustomer,
} from "./ProtectRoutes/ProtectRoutes";
import CustomerRoutes from "./ProtectRoutes/CustomerRoutes";
import CompanyRoutes from "./ProtectRoutes/CompanyRoutes";
import Dashboard from "./Admin/Pages/Dashboard";
import AdminRoutes from "./ProtectRoutes/AdminRoutes";
import NotFound from "./NotFound/NotFound";
import Login from "./Auth/Login";
import Register from "./Auth/Register";

function App() {
  return (
    <>
      <Routes>
        {/* ADMIN */}
        <Route path="*" element={<ProtectAdmin />}>
          <Route path="admin/*" element={<AdminRoutes />} />
        </Route>

        {/* COMPANY */}
        <Route path="*" element={<ProtectCompany />}>
          <Route path="company/*" element={<CompanyRoutes />} />
        </Route>

        {/* CUSTOMER */}
        <Route path="*" element={<ProtectCustomer />}>
          <Route path="customer/*" element={<CustomerRoutes />} />
        </Route>

        {/* PUBLIC */}
        <Route path="" element={<Home />} />
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />

        {/* Not Found Page */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
