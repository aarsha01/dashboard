import { useLocation, Navigate, Outlet } from "react-router-dom";

import React from "react";
import configVariables from "../Constants/configVariables";

const RoleAuth = ({ allowedRoles }) => {
  const location = useLocation();
  console.log(localStorage.getItem(configVariables.user_role),allowedRoles);
  return allowedRoles.includes(localStorage.getItem(configVariables.user_role))? (
    <Outlet />
  ) : localStorage.getItem(configVariables.user_id) ?(
    <Navigate to="/unauthorized" state={{ from: location }} replace />
  ) : (
    <Navigate to="/login_page" state={{ from: location }} replace />
  );
};

export default RoleAuth;