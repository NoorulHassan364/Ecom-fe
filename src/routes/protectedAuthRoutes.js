import React from "react";
import { Navigate, Route } from "react-router-dom";
// when refresh the page this funtion will check if the user will be logged in then it will return home page otherwise will return signin page

function ProtectedAuthRoute({ children }) {
  const user = localStorage.getItem("user");
  if (user) {
    return <Navigate to="/" replace />;
  }
  return children;
}
// when refresh the page this funtion will check if the user will be logged in then it will return specific page that we are requesting otherwise will return signin page
function ProtectedRoute({ children }) {
  const user = localStorage.getItem("user");
  if (user) {
    return children;
  }
  return <Navigate to="/signin" replace />;
}
// when refresh the page this funtion will check if the user will be logged in and also check if the user is admin or not if not then if will return specific page otherwise will return admin dashboard
function ProtectedLandingPage({ children }) {
  const user = JSON.parse(localStorage.getItem("user"));
  if (!user || user.userType == "user") {
    return children;
  }
  return <Navigate to="/admin/addProduct" replace />;
}
function PublicRoute({ children }) {
  const user = JSON.parse(localStorage.getItem("user"));
  if (!user) {
    return children;
  }
  return <Navigate to="/products" replace />;
}

// protecing admin routes those only admin can access
function ProtectedAdminRoute({ children }) {
  const user = JSON.parse(localStorage.getItem("user"));
  if (user?.userType == "admin") {
    return children;
  } else {
    return <Navigate to="/" replace />;
  }
}

export {
  ProtectedAuthRoute,
  ProtectedRoute,
  ProtectedLandingPage,
  ProtectedAdminRoute,
  PublicRoute,
};
