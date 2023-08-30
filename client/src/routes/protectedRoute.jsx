import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadUser } from "../actions/authActions";
import Loader from "../components/Common/loader";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const { isAuthenticated, loading } = useSelector((state) => state.auth);

  return loading ? (
    <Loader />
  ) : !loading && isAuthenticated ? (
    children
  ) : (
    <Navigate to="/login" />
  );
};

export default ProtectedRoute;
