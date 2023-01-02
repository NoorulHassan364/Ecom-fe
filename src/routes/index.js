import React from "react";
// imporitng the packages from the react-router dom for mangae routing in our app
import { BrowserRouter, Routes, Route } from "react-router-dom";
// importing all our app routes here
import WebRoutes from "./webRoutes";

export default function Index() {
  return (
    // wraping all the routes in BrowserRouter tag so that when we will navigate from one page to another then it will not be refresh
    <BrowserRouter>
      <Routes>
        {/* all the request containg '/' will goues to webRoutes  */}
        <Route exact path="/*" element={<WebRoutes />} />
      </Routes>
    </BrowserRouter>
  );
}
