import { useLocation, Navigate, Outlet } from "react-router-dom";

import React from "react";
import storageService from "../util/storageService";
import configVariables from "../util/constants";

const RoleAuth = ({ allowedRoles }) => {
  const location = useLocation();
  console.log(storageService.get(configVariables.USER_ROLE),allowedRoles);
  return allowedRoles.includes(storageService.get(configVariables.USER_ROLE))? (
    <Outlet />
  ) : storageService.get(configVariables.USER_ID) ?(
    <Navigate to="/unauthorized" state={{ from: location }} replace />
  ) : (
    <Navigate to="/signup" state={{ from: location }} replace />
  );
};

export default RoleAuth;