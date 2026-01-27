import React from "react";
import Bredcom from "../Bredcom/Main";
import First from "../menblog/First";
import blogbg from "../../assets/img/bg/banner_all.webp"; // Updated: Added banner image

function Main() {
  return (
    <>
      <Bredcom
        title="Home"
        subtitle="Blog"
        bannerImg={blogbg}
        description="Discover stories, news, and insights from VCMS. Dive into our latest articles and updates."
      />{" "}
      {/* Updated: Added banner image and description */}
      <First />
    </>
  );
}

export default Main;
