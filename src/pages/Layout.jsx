import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Whatsapp from "../components/Whatsapp";
import Footer from "../components/Footer";

const Layout = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Whatsapp />
      <Footer />
    </>
  );
};

export default Layout;
