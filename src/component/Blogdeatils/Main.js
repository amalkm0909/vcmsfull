import React from "react";
import Bredcom from "../Bredcom/Main";
import First from "../menblogdeatils/First";
import blogbg from "../../assets/img/bg/banner_all.webp"; // Updated: Added banner image

function Main() {
  return (
    <>
      <Bredcom
        title="Home"
        subtitle="Blog Details"
        bannerImg={blogbg}
        description="Read in-depth articles and explore detailed insights on education, career development, and campus news."
      />{" "}
      {/* Updated: Added banner image and description */}
      <First />
    </>
  );
}

export default Main;
