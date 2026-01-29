import React from "react";
import Bredcom from "../../Bredcom/Main";
import Redslider from "../../menhome/Redslider";
import First from "../mengallery/First";
import GoToTop from "../../GoToTop/GoToTop";
import blogbg4 from "../../../assets/img/bg/banner_all.webp"; // Updated: Added banner image

function Main() {
  return (
    <>
      <Bredcom
        title="Home"
        subtitle="Our Gallery"
        bannerImg={blogbg4}
        description="Explore our visual collection showcasing campus life, events, and memorable moments from our educational community."
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
