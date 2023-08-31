import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const { isAuthenticated } = useSelector((state) => state.auth);
  //store the location of user before redirecting to return him to it after login
  if (!isAuthenticated) {
    sessionStorage.setItem("intendedDestination", window.location.pathname);
    return <Navigate to="/login" />;
  }
  else {
    return children;
  }
};

export default ProtectedRoute;
