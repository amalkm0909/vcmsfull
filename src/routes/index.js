import React, { useEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import Layout from "../component/Layout/Main";
import Hometwo from "../component/hometwo/Main";
import Homethree from "../component/homethree/Main";
import About from "../component/About/Main";
import Courses from "../component/Courses/Main";
import Coursesdeatils from "../component/coursedetails/Main";
import Coursesdeatilstwo from "../component/coursedetailstwo/Main";
import Event from "../component/Pages/event/Main";
import Eventdeatils from "../component/Pages/eventdeatils/Main";
import Gallery from "../component/Pages/gallery/Main";
import Faq from "../component/Pages/Faq/Main";
import Teacher from "../component/Pages/Teacher/Main";
import Teacherdeatils from "../component/Pages/teacherdetails/Main";
import Error from "../component/Pages/error/Main";
import Blog from "../component/Blog/Main";
import Blogdeatils from "../component/Blogdeatils/Main";
import Contact from "../component/contact/Main";
import Projectdeatils from "../component/Pages/Projectdeatils/Main";
import CampusLife from "../component/Pages/CampusLife/Main";
import ViewAllNews from "../component/Pages/ViewAllNews/Main";
import Home from "../component/home/Main";

function Index() {
  const location = useLocation();
  const path = location.pathname;

  useEffect(() => {
    window.scroll(0, 0);
  }, [path]);

  // Determine header type based on route
  const getHeaderType = () => {
    if (path === "/home-two") return "two";
    if (path === "/home-three") return "three";
    return "one";
  };

  return (
    <Layout headerType={getHeaderType()}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home-two" element={<Hometwo />} />
        <Route path="/home-three" element={<Homethree />} />
        <Route path="/about" element={<About />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/courses-2" element={<Courses />} />
        <Route path="/course-details/:courseId" element={<Coursesdeatils />} />
        <Route path="/single-courses" element={<Coursesdeatils />} />
        <Route path="/single-courses-2" element={<Coursesdeatilstwo />} />
        <Route path="/event" element={<Event />} />
        <Route path="/single-event/:eventId" element={<Eventdeatils />} />
        <Route path="/single-event" element={<Eventdeatils />} />
        <Route path="/projects" element={<Gallery />} />
        <Route path="/single-projects" element={<Projectdeatils />} />
        <Route path="/faq" element={<Faq />} />
        <Route path="/team" element={<Teacher />} />
        <Route path="/team-single" element={<Teacherdeatils />} />
        <Route path="/404-error" element={<Error />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog-details" element={<Blogdeatils />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/view-all-news" element={<ViewAllNews />} />
        <Route path="/campus-life" element={<CampusLife />} />
      </Routes>
    </Layout>
  );
}

export default Index;
