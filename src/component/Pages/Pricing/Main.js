import React from "react";
import Bredcom from "../../Bredcom/Main";
import Redslider from "../../menhome/Redslider";
import First from "../menpricing/First";
import GoToTop from "../../GoToTop/GoToTop";

function Main() {
  return (
    <>
      <Bredcom title="Home" subtitle="Pricing" />
      <Redslider />
      <First />
      <GoToTop />
      {/* <Brand/> */}
    </>
  );
}

export default Main;
