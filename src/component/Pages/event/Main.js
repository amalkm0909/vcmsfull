import React from "react";
import Bredcom from "../../Bredcom/Main";
import First from "../menevent/First";
import Redslider from "../../menhome/Redslider";
import GoToTop from "../../GoToTop/GoToTop";
import blogbg1 from "../../../assets/img/bg/banner_all.webp"; // Updated: Added banner image

function Main() {
  return (
    <>
      <Bredcom
        title="Home"
        subtitle="Our Event"
        bannerImg={blogbg1}
        description="Stay updated with our exciting events, seminars, workshops, and conferences that bring learning and community together."
      />{" "}
      {/* Updated: Added banner image and description */}
      <First />
      <Redslider />
      <GoToTop />
      {/* <Brand/> */}
    </>
  );
}

export default Main;
