import React from "react";
import { useParams } from "react-router-dom";
import Bredcom from "../Bredcom/Main";
import First from "../mencoursedetailstwo/First";
import Redslider from "../menhome/Redslider";
import GoToTop from "../GoToTop/GoToTop";
import blogbg from "../../assets/img/bg/banner_all.webp"; // Updated: Added banner image

function Main() {
  const { courseId } = useParams();
  const actualCourseId = courseId ? parseInt(courseId) : 2;

  return (
    <>
      <Bredcom
        title="Home"
        subtitle="Course Details"
        bannerImg={blogbg}
        description="Explore detailed course information including modules, assessments, and career prospects."
      />{" "}
      {/* Updated: Added banner image and description */}
      <Redslider />
      <First courseId={actualCourseId} />
      <GoToTop />
    </>
  );
}

export default Main;
