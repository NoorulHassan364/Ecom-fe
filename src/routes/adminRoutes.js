// Importin all the admin pages
import React, { lazy } from "react";
import { Routes, Route } from "react-router-dom";
import SideBar from "../components/sideBar/Index";
import AddProduct from "../pages/adminPages/addProduct/addProduct";
import AdminProducts from "../pages/adminPages/addProduct/adminProducts/adminProduct";
import AdminAnalytics from "../pages/adminPages/adminAnalytics/adminAnalytics";
import Categories from "../pages/adminPages/categories/categories";
// import AdminShops from "../pages/adminPages/adminProducts/adminShops";

const AdminRoutes = () => {
  return (
    //when navigating form 1 page to another take time then loading will show
    <React.Suspense fallback={"Loading.."}>
      {/* adding sidebar  */}
      <SideBar>
        {/* declaring all the routes for the admin  */}
        <Routes>
          <Route exact path="/addProduct" element={<AddProduct />} />
          <Route exact path="/products" element={<AdminProducts />} />
          <Route exact path="/categories" element={<Categories />} />
          <Route exact path="/analytics" element={<AdminAnalytics />} />
        </Routes>
      </SideBar>
    </React.Suspense>
  );
};

export default AdminRoutes;
