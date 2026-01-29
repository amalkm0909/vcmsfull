import React from "react";
import Bredcom from "../../Bredcom/Main";
import Redslider from "../../menhome/Redslider";
import First from "../meneventdeatils/First";
import GoToTop from "../../GoToTop/GoToTop";

function Main() {
  return (
    <>
      <Bredcom title="Home" subtitle="Event Details" />
      <First />
      <Redslider />
      <GoToTop />
      {/* <Brand/> */}
    </>
  );
}

export default Main;
