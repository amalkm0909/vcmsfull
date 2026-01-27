import React from "react";
import Bredcom from "../../Bredcom/Main";
import Redslider from "../../menhome/Redslider";
import First from "../menpricing/First";

function Main() {
  return (
    <>
      <Bredcom title="Home" subtitle="Pricing" />
      <Redslider />
      <First />
      {/* <Brand/> */}
    </>
  );
}

export default Main;
