import React from "react";
import { Navigate, Route } from "react-router-dom";

function ProtectedAuthRoute({ children }) {
  const user = localStorage.getItem("user");
  if (user) {
    return <Navigate to="/" replace />;
  }
  return children;
}

function ProtectedRoute({ children }) {
  const user = localStorage.getItem("user");
  if (user) {
    return children;
  }
  return <Navigate to="/signin" replace />;
}

function ProtectedLandingPage({ children }) {
  const user = JSON.parse(localStorage.getItem("user"));
  if (!user || user.userType == "user") {
    return children;
  }
  return <Navigate to="/admin/stats" replace />;
}

export { ProtectedAuthRoute, ProtectedRoute, ProtectedLandingPage };
