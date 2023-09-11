import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { toast } from "react-toastify";

const ProtectedRoute = ({ children, allowedRules }) => {
  const { isAuthenticated, user } = useSelector((state) => state.auth);
  //store the location of user before redirecting to return him to it after login
  if (!isAuthenticated) {
    sessionStorage.setItem("intendedDestination", window.location.pathname);
    toast.error("login first to access this resource");
    return (
      <>
        <h1 className="text-danger text-center">
          login first to access this resource
        </h1>
        <Navigate to="/login" />;
      </>
    );
  }
  // check if the user not authorized for routes that needing authorization and store intended destination
  if (allowedRules && !allowedRules.includes(user.role)) {
    sessionStorage.setItem("intendedDestination", window.location.pathname);
    toast.error("unAuthorized to access this resource");
    return (
      <>
        <Navigate to="/login" />;
      </>
    );
  }

  const intendedDestination = sessionStorage.getItem("intendedDestination");
  sessionStorage.removeItem("intendedDestination");
  return intendedDestination ? <Navigate to={intendedDestination} /> : children;
};

export default ProtectedRoute;
