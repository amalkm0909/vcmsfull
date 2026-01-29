import React from "react";
import Bredcom from "../Bredcom/Main";
import First from "../mencourses/First";
import Redslider from "../menhome/Redslider";
import GoToTop from "../GoToTop/GoToTop";
import blogbg from "../../assets/img/bg/banner_all.webp"; // Updated: Added banner image

function Main() {
  return (
    <>
      <Bredcom
        title="Home"
        subtitle="Our courses"
        bannerImg={blogbg}
        description="Explore our diverse range of professional programs and certifications designed to empower your career."
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
