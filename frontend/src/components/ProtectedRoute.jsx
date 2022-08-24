import React from "react";
import { Route, Navigate } from "react-router-dom";
import { getCurrentUser } from "../services/api";

const ProtectedRoute = ({ path, component: Component, render, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(props) => {
        if (!getCurrentUser())
          return <Navigate to="/login" replace={true} />;
        return <Component {...props} />;
      }}
    />
  );
};

export default ProtectedRoute;
