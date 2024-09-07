import React from "react";
import { useLocation } from "react-router-dom";
import Navbar from "./Navbar";

function Layout({ children }: { children: React.ReactNode }) {
  const location = useLocation();

  // Pages where you want the Navbar and Footer to be hidden
  const noNavAndFooter = ["/profile", "/login"]; // add your routes here

  const showNavbarAndFooter = !noNavAndFooter.includes(location.pathname);

  return (
    <>
      {showNavbarAndFooter && <Navbar />}
      {children}
      {/* {showNavbarAndFooter && <Footer />} */}
    </>
  );
}

export default Layout;
