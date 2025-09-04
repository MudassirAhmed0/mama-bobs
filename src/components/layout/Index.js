import React from "react";
import Header from "./header/Header";
import Footer from "./footer/Footer";

const Layout = ({ children, footerSecondLogo }) => {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer footerSecondLogo={footerSecondLogo} />
    </>
  );
};

export default Layout;
