import React from "react";
import { useParams } from "react-router-dom";
import Bredcom from "../Bredcom/Main";
import First from "../mencoursedetails/First";
import Redslider from "../menhome/Redslider";
import GoToTop from "../GoToTop/GoToTop";
import blogbg from "../../assets/img/bg/banner_all.webp"; // Updated: Added banner image

function Main() {
  const { courseId } = useParams();
  const actualCourseId = courseId ? parseInt(courseId) : 1;

  return (
    <>
      <Bredcom
        title="Home"
        subtitle="Course Details"
        bannerImg={blogbg}
        description="Get comprehensive information about course structure, curriculum, requirements, and learning outcomes."
      />{" "}
      {/* Updated: Added banner image and description */}
      {/* Updated: Added banner image */}
      {/* <Redslider /> */}
      <First key={actualCourseId} courseId={actualCourseId} />
      {/* <Brand /> */}
      <Redslider />
      <GoToTop />
    </>
  );
}

export default Main;
