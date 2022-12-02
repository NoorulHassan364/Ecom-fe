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
  ProtectedAdminRoute,
  PublicRoute,
} from "./protectedAuthRoutes";
import AdminRoutes from "./adminRoutes";
import Logout from "./../pages/logout/logout";
import ProductDetail from "../pages/productDetail/productDetail";
import LandingPage from "../pages/landingPage";
import PersonalInfo from "../pages/personalInfo/personalInfo";
import CartItems from "../pages/cartItems/cartItems";
export default function AppRoutes() {
  return (
    <React.Suspense fallback="Loading...">
      <NavBar user={localStorage.getItem("user")} />
      <Routes>
        <Route
          exact
          path="/"
          element={
            <PublicRoute>
              <LandingPage />
            </PublicRoute>
          }
        />
        <Route
          exact
          path="/products"
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
        <Route
          exact
          path="/profile"
          element={
            <ProtectedLandingPage>
              <PersonalInfo />
            </ProtectedLandingPage>
          }
        />
        <Route
          exact
          path="/cartItems"
          element={
            <ProtectedLandingPage>
              <CartItems />
            </ProtectedLandingPage>
          }
        />
        <Route
          exact
          path="/admin/*"
          element={
            <ProtectedAdminRoute>
              <AdminRoutes />
            </ProtectedAdminRoute>
          }
        />
      </Routes>
    </React.Suspense>
  );
}
