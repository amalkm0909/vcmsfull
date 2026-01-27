import React from "react";
import Header from "../../headerone/Main";
import Bredcom from "../../Bredcom/Main";
import Redslider from "../../menhome/Redslider";

function Main() {
  return (
    <>
      <Header />
      <Bredcom title="Home" subtitle="News & Events" />
      <Redslider />
      <section className="about-area about-p pt-120 pb-120 p-relative fix">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="section-title center-align mb-50 wow fadeInDown animated">
                <h2>News & Events</h2>
              </div>
              <p className="text-center mb-30">
                Stay updated with the latest news, upcoming events, and
                important announcements from VCMS.
              </p>
            </div>
          </div>
          <div className="row mt-50">
            <div className="col-lg-6 col-md-12 mb-30">
              <div className="courses-item mb-30 hover-zoomin">
                <div className="courses-content">
                  <h3>Upcoming Events</h3>
                  <ul style={{ marginLeft: "20px" }}>
                    <li>✓ Monthly Webinars</li>
                    <li>✓ Industry Expert Sessions</li>
                    <li>✓ Placement Drives</li>
                    <li>✓ Campus Tours</li>
                    <li>✓ Admission Counseling</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-12 mb-30">
              <div className="courses-item mb-30 hover-zoomin">
                <div className="courses-content">
                  <h3>Latest News</h3>
                  <ul style={{ marginLeft: "20px" }}>
                    <li>✓ New Course Launches</li>
                    <li>✓ Student Achievements</li>
                    <li>✓ Industry Partnerships</li>
                    <li>✓ Alumni Updates</li>
                    <li>✓ Placement Highlights</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="row mt-50">
            <div className="col-lg-12 text-center">
              <p className="mb-20">
                Subscribe to our newsletter for regular updates on events and
                news.
              </p>
              <a href="mailto:info@vcmskerala.in" className="btn">
                Subscribe Now
              </a>
            </div>
          </div>
        </div>
      </section>
      {/* <Brand/> */}
    </>
  );
}

export default Main;
