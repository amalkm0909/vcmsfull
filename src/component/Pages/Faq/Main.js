import React from "react";
import Bredcom from "../../Bredcom/Main";
import Redslider from "../../menhome/Redslider";
import First from "../menfaq/First";
import blogbg7 from "../../../assets/img/bg/banner_all.webp"; // Updated: Added banner image

function Main() {
  return (
    <>
      <Bredcom
        title="Home"
        subtitle="FAQs"
        bannerImg={blogbg7}
        description="Find answers to common questions about our programs, admissions, and services. We're here to help clarify any concerns."
      />{" "}
      {/* Updated: Added banner image and description */}
      <First />
      <Redslider />
      {/* <Brand/> */}
    </>
  );
}

export default Main;
