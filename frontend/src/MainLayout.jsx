import { useEffect } from "react";
import { useLocation, Outlet } from "react-router-dom";
import Navbar from "../src/landing_page/Navbar";
import Footer from "../src/landing_page/Footer";

export default function MainLayout() {
  const { pathname } = useLocation();

useEffect(() => {
  document.documentElement.scrollTop = 0;
  document.body.scrollTop = 0;
}, [pathname]);

  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
}
