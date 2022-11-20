import React, { useContext, useState } from "react";
import { Routes, Route } from "react-router-dom";
import NavBar from "../components/NavBar";
import HomePage from "../pages/Home";
import SignIn from "../pages/SignIn/index";
import SignUp from "../pages/Signup/index";
import {
  ProtectedAuthRoute,
  ProtectedRoute,
  ProtectedLandingPage,
} from "./protectedAuthRoutes";
import Logout from "./../pages/logout/logout";
import ProductDetail from "../pages/productDetail/productDetail";
export default function AppRoutes() {
  return (
    <React.Suspense fallback="Loading...">
      <NavBar user={localStorage.getItem("user")} />
      <Routes>
        <Route
          exact
          path="/"
          element={
            <ProtectedLandingPage>
              <HomePage />
            </ProtectedLandingPage>
          }
        />

        <Route
          exact
          path="/signin"
          element={
            <ProtectedAuthRoute>
              <SignIn />
            </ProtectedAuthRoute>
          }
        />
        <Route
          exact
          path="/logout"
          element={
            // <ProtectedAuthRoute>
            <Logout />
            // </ProtectedAuthRoute>
          }
        />
        <Route
          exact
          path="/signup"
          element={
            <ProtectedAuthRoute>
              <SignUp />
            </ProtectedAuthRoute>
          }
        />
        <Route
          exact
          path="/product/:id"
          element={
            <ProtectedLandingPage>
              <ProductDetail />
            </ProtectedLandingPage>
          }
        />
      </Routes>
    </React.Suspense>
  );
}
