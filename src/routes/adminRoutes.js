import React, { lazy } from "react";
import { Routes, Route } from "react-router-dom";
import SideBar from "../components/sideBar/Index";
import AddProduct from "../pages/adminPages/addProduct/addProduct";
import AdminProducts from "../pages/adminPages/addProduct/adminProducts/adminProduct";
import Categories from "../pages/adminPages/categories/categories";
// import AdminShops from "../pages/adminPages/adminProducts/adminShops";

const AdminRoutes = () => {
  return (
    <React.Suspense fallback={"Loading.."}>
      <SideBar>
        <Routes>
          <Route exact path="/addProduct" element={<AddProduct />} />
          <Route exact path="/products" element={<AdminProducts />} />
          <Route exact path="/categories" element={<Categories />} />
        </Routes>
      </SideBar>
    </React.Suspense>
  );
};

export default AdminRoutes;
