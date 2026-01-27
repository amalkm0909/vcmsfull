import React from "react";
import HeaderOne from "../headerone/Main";
import Footer from "../footer/Main";

function Layout({ children, headerType = "one" }) {
  const getHeader = () => {
    return <HeaderOne />;
  };

  return (
    <>
      {getHeader()}
      {children}
      <Footer />
    </>
  );
}

export default Layout;
