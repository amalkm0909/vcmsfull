import React from "react";
import Header from "../../headerone/Main";
import Bredcom from "../../Bredcom/Main";
import Redslider from "../../menhome/Redslider";

function Main() {
  return (
    <>
      <Header />
      <Bredcom title="Home" subtitle="Alumni" />
      <Redslider />
      <section className="about-area about-p pt-120 pb-120 p-relative fix">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="section-title center-align mb-50 wow fadeInDown animated">
                <h2>Alumni Network</h2>
              </div>
              <p className="text-center mb-30">
                Our alumni are our greatest asset. VCMS graduates work across
                industries, making meaningful contributions to society and their
                organizations.
              </p>
            </div>
          </div>
          <div className="row mt-50">
            <div className="col-lg-4 col-md-6 mb-30">
              <div className="courses-item mb-30 hover-zoomin">
                <div className="courses-content">
                  <h3>Success Stories</h3>
                  <p className="txt-clr">
                    Read inspiring stories from our alumni who have achieved
                    great success in their careers and contributions to society.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 mb-30">
              <div className="courses-item mb-30 hover-zoomin">
                <div className="courses-content">
                  <h3>Networking Events</h3>
                  <p className="txt-clr">
                    Join our regular alumni networking events to reconnect with
                    peers and explore professional opportunities.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 mb-30">
              <div className="courses-item mb-30 hover-zoomin">
                <div className="courses-content">
                  <h3>Career Support</h3>
                  <p className="txt-clr">
                    VCMS provides ongoing career guidance and mentorship
                    opportunities for our alumni throughout their professional
                    journey.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="row mt-50">
            <div className="col-lg-12">
              <div className="cta-content">
                <h3>Share Your Story</h3>
                <p className="mb-20">
                  Are you an alumnus of VCMS? We'd love to hear about your
                  journey and achievements. Share your success story with our
                  community.
                </p>
                <a href="mailto:info@vcmskerala.in" className="btn">
                  Share Your Story
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <Brand/> */}
    </>
  );
}

export default Main;
