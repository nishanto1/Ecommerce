import { Navigate, Outlet } from "react-router-dom";
import { Roles } from "../Constant";
import useToken from "../hooks/useToken";
import useDetails from "../hooks/useDetail";
import useRole from "../hooks/useRole";

// PROTECT ADMIN
export const ProtectAdmin = () => {
  const token = useToken();
  const role = useRole();
  if (token) {
    if (role == Roles?.COMPANY) {
      return <Navigate to="/company/dashboard" replace={true} />;
    } else if (role == Roles?.CUSTOMER) {
      return <Navigate to="/customer/home" replace={true} />;
    } else {
      return <Outlet />;
    }
  } else {
    return <Navigate to="/login" replace={true} />;
  }
};
// PROTECT COMPANY
export const ProtectCompany = () => {
  const token = useToken();
  const role = useRole();
  if (token) {
    if (role == Roles?.ADMIN) {
      return <Navigate to="/admin/dashboard" replace={true} />;
    } else if (role == Roles?.CUSTOMER) {
      return <Navigate to="/customer/dashboard" replace={true} />;
    } else {
      return <Outlet />;
    }
  } else {
    return <Navigate to="/login" replace={true} />;
  }
};
// PROTECT CUSTOMER
export const ProtectCustomer = () => {
  const token = useToken();
  const role = useRole();
  if (token) {
    if (role == Roles?.ADMIN) {
      return <Navigate to="/admin/dashboard" replace={true} />;
    } else if (role == Roles?.COMPANY) {
      return <Navigate to="/company/dashboard" replace={true} />;
    } else {
      return <Outlet />;
    }
  } else {
    return <Navigate to="/login" replace={true} />;
  }
};
