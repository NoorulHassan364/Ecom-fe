// importing all the pages
import React, { useContext, useState } from "react";
import { Routes, Route } from "react-router-dom";
import NavBar from "../components/NavBar";
import HomePage from "../pages/Home";
import SignIn from "../pages/SignIn/index";
import SignUp from "../pages/Signup/index";
// importing protected routes
import {
  ProtectedAuthRoute,
  ProtectedRoute,
  ProtectedLandingPage,
  ProtectedAdminRoute,
  PublicRoute,
} from "./protectedAuthRoutes";
// Importin other pages
import AdminRoutes from "./adminRoutes";
import Logout from "./../pages/logout/logout";
import ProductDetail from "../pages/productDetail/productDetail";
import LandingPage from "../pages/landingPage";
import PersonalInfo from "../pages/personalInfo/personalInfo";
import CartItems from "../pages/cartItems/cartItems";
import ForgotPassword from "../pages/ForgotPassword/forgotPassword";
import Bookings from "../pages/bookings/bookings";
export default function AppRoutes() {
  return (
    //when navigating form 1 page to another take time then loading will show
    <React.Suspense fallback="Loading...">
      {/* adding navbar on the top  */}
      <NavBar user={localStorage.getItem("user")} />
      {/* making routes to handle different pages  */}
      <Routes>
        <Route
          exact
          path="/"
          element={
            // protecting the LandingPage page means when user will be not logged in then we will not show LandingPage page
            <PublicRoute>
              <LandingPage />
            </PublicRoute>
          }
        />
        <Route
          exact
          path="/products"
          element={
            // protecting the home page means when user will be not logged in then we will not show home page
            <ProtectedLandingPage>
              <HomePage />
            </ProtectedLandingPage>
          }
        />

        <Route
          exact
          path="/signin"
          element={
            // protecting the SignIn page means when user will be logged in then we will not show SignIn page
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
            // protecting the SignIn page means when user will be logged in then we will not show signup page
            <ProtectedAuthRoute>
              <SignUp />
            </ProtectedAuthRoute>
          }
        />
        <Route
          exact
          path="/product/:id"
          element={
            // protecting the home page means when user will be not logged in then we will not show ProductDetail page
            <ProtectedLandingPage>
              <ProductDetail />
            </ProtectedLandingPage>
          }
        />
        <Route
          exact
          path="/profile"
          element={
            // protecting the home page means when user will be not logged in then we will not show PersonalInfo page
            <ProtectedLandingPage>
              <PersonalInfo />
            </ProtectedLandingPage>
          }
        />
        <Route
          exact
          path="/cartItems"
          element={
            // protecting the home page means when user will be not logged in then we will not show Protected Landing page
            <ProtectedLandingPage>
              <CartItems />
            </ProtectedLandingPage>
          }
        />
        <Route
          exact
          path="/bookings"
          element={
            <ProtectedLandingPage>
              <Bookings />
            </ProtectedLandingPage>
          }
        />
        <Route
          exact
          path="/forgotPassword/:id"
          element={
            <ProtectedLandingPage>
              <ForgotPassword />
            </ProtectedLandingPage>
          }
        />
        {/* routes for the admin  */}
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
