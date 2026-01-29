import React from "react";
import University from "../Menabout/University";
import Bredcom from "../Bredcom/Main";
import Mission from "../Menabout/Mission";
import DirectorMessage from "../Menabout/DirectorMessage";
import Testimonial from "../menhome/Testimonial";
import Redslider from "../menhome/Redslider";
import GoToTop from "../GoToTop/GoToTop";
import blogbg3 from "../../assets/img/bg/banner_all.webp"; // Updated: Added banner image

function Main() {
  return (
    <>
      <Bredcom
        title="Home"
        subtitle="About Us"
        bannerImg={blogbg3}
        description="Discover our institution's mission, values, and commitment to providing excellence in education and student development."
      />{" "}
      {/* Updated: Added banner image and description */}
      <University />
      <Mission />
      <DirectorMessage />
      <Testimonial />
      {/* <Brand /> */}
      <Redslider />
      <GoToTop />
    </>
  );
}

export default Main;
