import React from "react";
import Bredcom from "../Bredcom/Main";
import Redslider from "../menhome/Redslider";
import Touch from "../mencontact/Touch";
import Map from "../mencontact/Map";
import Form from "../mencontact/Form";
import blogbg9 from "../../assets/img/bg/banner_all.webp"; // Updated: Added banner image

function Main() {
  return (
    <>
      <Bredcom
        title="Home"
        subtitle="Contact Us"
        bannerImg={blogbg9}
        description="Reach out to us anytime. We're here to answer your questions and provide the support you need."
      />{" "}
      {/* Updated: Added banner image and description */}
      <Touch />
      <Map />
      <Form />
      <Redslider />
      {/* <Brand/> */}
    </>
  );
}

export default Main;
