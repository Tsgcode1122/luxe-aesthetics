// src/Component/Layout.js
import React from "react";
import { Outlet, useLocation } from "react-router-dom";

import Navbar from "./Navbar";
import Footer from "./Footer";
import ScrollToTopButton from "./ScrollToTopButton";

const Layout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <ScrollToTopButton />
      <Footer />
    </>
  );
};

export default Layout;
