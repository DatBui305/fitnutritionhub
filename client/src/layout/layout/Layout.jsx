import React from "react";

import { Outlet } from "react-router-dom";
import Footer from "../footer/Footer";
import HeaderNew from "../header/HeaderNew";

const Layout = () => {
  return (
    <>
      <HeaderNew />
      <Outlet />
      {/* <Footer /> */}
    </>
  );
};

export default Layout;
