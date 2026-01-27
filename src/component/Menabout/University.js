import React from "react";
import aboutImg from "../../assets/img/features/about_img_02.webp";

function University() {
  return (
    <>
      <section className="about-area about-p pt-120 pb-30 p-relative fix">
        <div className="animations-02">
          <img src="assets/img/bg/an-img-02.png" alt="img" />
        </div>
        <div className="container">
          <div className="row justify-content-center align-items-center">
            <div className="col-lg-6 col-md-12 col-sm-12">
              <div
                className="about-img"
                data-animation="fadeInLeft"
                data-delay=".4s"
              >
                <img src={aboutImg} alt="img" />
                <div
                  className="about-text second-about three-about"
                  style={{
                    position: "absolute",
                    top: "130px",
                    right: "780px",
                    zIndex: "1",
                  }}
                >
                  <span>
                    25 <sub>+</sub>
                  </span>
                  <p>Years of Experience</p>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-12 col-sm-12">
              <div
                className="about-content s-about-content pl-15 wow fadeInRight animated"
                data-animation="fadeInRight"
                data-delay=".4s"
              >
                <div className="about-title second-title pb-25">
                  <h5 style={{ fontSize: "18px" }}>
                    <i className="fal fa-graduation-cap" /> About VCMS
                  </h5>
                  <h2>Viswam College of Management Studies</h2>
                </div>
                <p className="txt-clr">
                  VCMS is a transformative educational hub, dedicated to
                  empowering individuals and strengthening communities. Since
                  its founding, the institution has provided exceptional
                  learning experiences, fostering innovation and shaping
                  futures. As a center for personal and professional growth,
                  VCMS nurtures talent, ignites curiosity, and champions the
                  pursuit of excellence across diverse disciplines.
                </p>
                <p className="txt">
                  The institution believes education is a powerful force for
                  positive change, enriching lives and building a better
                  tomorrow. VCMS strives to be a beacon of knowledge, inspiring
                  creativity and fostering a lifelong love of learning. We are
                  committed to providing quality diploma and training programs
                  across diverse fields including management, logistics,
                  technology, and healthcare.
                </p>
                <div className="about-content2">
                  <div className="row">
                    <div className="col-md-12">
                      <ul className="green2">
                        <li>
                          <div className="abcontent">
                            <div className="ano">
                              <span>1500+</span>
                            </div>
                            <div className="text">
                              <h3>Students Enrolled</h3>
                              <p>
                                Quality education transforming careers across
                                multiple industries.
                              </p>
                            </div>
                          </div>
                        </li>
                        <li>
                          <div className="abcontent">
                            <div className="ano">
                              <span>75%</span>
                            </div>
                            <div className="text">
                              <h3>Placement Success Rate</h3>
                              <p>
                                Highest placement support with industry
                                partnerships.
                              </p>
                            </div>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default University;
