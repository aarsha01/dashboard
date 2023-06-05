import { useLocation, Navigate, Outlet } from "react-router-dom";

import React from "react";
import configVariables from "../Constants/configVariables";

const RoleAuth = ({ allowedRoles }) => {
  const location = useLocation();
  console.log(localStorage.get(configVariables.USER_ROLE),allowedRoles);
  return allowedRoles.includes(localStorage.get(configVariables.USER_ROLE))? (
    <Outlet />
  ) : localStorage.get(configVariables.USER_ID) ?(
    <Navigate to="/unauthorized" state={{ from: location }} replace />
  ) : (
    <Navigate to="/signup" state={{ from: location }} replace />
  );
};

export default RoleAuth;