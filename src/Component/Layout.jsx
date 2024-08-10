import React from "react";
import { Outlet, useLocation } from "react-router-dom";

import Navbar from "./Navbar";
import Footer from "./Footer";
import ScrollToTopButton from "./ScrollToTopButton";

const Layout = () => {
  const location = useLocation();

  // Check if the current path is the appointment page
  const isAppointmentPage = location.pathname === "/appointment";

  return (
    <>
      <Navbar />
      <Outlet />
      <ScrollToTopButton />
      {/* Conditionally render Footer only if not on the appointment page */}
      {!isAppointmentPage && <Footer />}
    </>
  );
};

export default Layout;
