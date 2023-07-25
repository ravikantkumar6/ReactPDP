import React, { Suspense, useState } from "react";
import Login from "./component/login/login";
import ProductDetails from "./component/productdisplay/ProductDetails";
import Register from "./component/register/register";

import { Routes, Route, Navigate } from "react-router-dom";

import "react-toastify/dist/ReactToastify.css";
import Pdp from "./component/productdisplay/Pdp";
import { AuthProvider } from "./component/login/AuthProvider";
import { Logout } from "./component/login/Logout";

function App() {
  function RequireAuth({ children }) {
    const islogin = localStorage.getItem("islogin");
    if (islogin === "true") {
      return children;
    } else {
      return <Navigate to="/" />;
    }
  }
  return (
    <div className="App">
      {/* <AuthProvider> */}
        <Logout />
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Register />} />

          <Route
            path="/pdp"
            element={
              <RequireAuth>
                <React.Suspense fallback={<>...</>}>
                  <Pdp />
                </React.Suspense>
              </RequireAuth>
            }
          />

          <Route
            path="/products/:id"
            element={
              <RequireAuth>
                <ProductDetails />
              </RequireAuth>
            }
          />
        </Routes>
      {/* </AuthProvider> */}
    </div>
  );
}

export default App;
