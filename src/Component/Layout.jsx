// src/Component/Layout.js
import React from "react";
import { Outlet, useLocation } from "react-router-dom";

import Navbar from "./Navbar";

const Layout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
};

export default Layout;
