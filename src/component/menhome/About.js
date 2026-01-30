import React from "react";
import { Link } from "react-router-dom";

const mobileStyles = `
  @media (max-width: 768px) {
    .about-content {
      text-align: left !important;
    }
    .about-title {
      text-align: left !important;
    }
    .s-about-content {
      padding-left: 0 !important;
      padding-right: 0 !important;
    }
  }
`;

function About() {
  return (
    <>
      <style>{mobileStyles}</style>
      <section
        className="about-area about-p pt-120 pb-30 p-relative fix"
        style={{ backgroundColor: "#ffffff" }}
      >
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-5 col-md-12 col-sm-12">
              <div
                className="s-about-img p-relative wow fadeInLeft animated"
                data-animation="fadeInLeft"
                data-delay=".4s"
              >
                <img
                  src={require("../../assets/img/features/about_img_5.webp")}
                  alt="img"
                  style={{ borderRadius: "12px" }}
                />
                <div
                  className="about-text second-about"
                  style={{
                    background:
                      "linear-gradient(135deg, #0f3a5b 0%, #4899d2 100%)",
                    borderRadius: "12px",
                    boxShadow: "0 10px 30px rgba(15, 58, 91, 0.3)",
                  }}
                >
                  <span style={{ fontSize: "42px", fontWeight: "800" }}>
                    25<sub style={{ fontSize: "20px" }}>+</sub>
                  </span>
                  <p style={{ fontSize: "16px", marginBottom: "0" }}>
                    Years of Excellence
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-7 col-md-12 col-sm-12">
              <div
                className="about-content s-about-content wow fadeInRight animated"
                data-animation="fadeInRight"
                data-delay=".4s"
                style={{
                  paddingLeft: "50px",
                  "@media (max-width: 768px)": {
                    paddingLeft: "0px",
                  },
                }}
              >
                <div className="about-title second-title pb-25">
                  <h5
                    style={{
                      color: "#4899d2",
                      fontSize: "16px",
                      fontWeight: "700",
                      marginBottom: "15px",
                      textTransform: "uppercase",
                      letterSpacing: "1px",
                    }}
                  >
                    <i className="fas fa-book" style={{ marginRight: "8px" }} />
                    About VCMS
                  </h5>
                  <h2
                    style={{
                      fontSize: "42px",
                      fontWeight: "800",
                      color: "#0f3a5b",
                      lineHeight: "1.3",
                      marginBottom: "25px",
                    }}
                  >
                    Viswam College Of Management Studies
                  </h2>
                </div>
                <p
                  style={{
                    fontSize: "16px",
                    lineHeight: "1.8",
                    color: "#666",
                    marginBottom: "18px",
                  }}
                >
                  At VCMS, we believe in the power of education to transform
                  lives, shape futures, and build stronger communities.
                  Established with a vision to make a meaningful impact on
                  society, we have been dedicated to providing exceptional
                  learning experiences and fostering innovation.
                </p>
                <p
                  style={{
                    fontSize: "16px",
                    lineHeight: "1.8",
                    color: "#666",
                    marginBottom: "30px",
                  }}
                >
                  Our institution stands as a beacon of knowledge, creativity,
                  and excellence. We are committed to nurturing talent,
                  inspiring curiosity, and facilitating success.
                </p>

                <div className="about-content2">
                  <div className="row">
                    <div className="col-md-6 mb-30">
                      <div
                        style={{
                          backgroundColor: "#f9f9f9",
                          padding: "30px",
                          borderRadius: "10px",
                          borderLeft: "4px solid #4899d2",
                          transition: "all 0.3s ease",
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.backgroundColor = "#f0f6fb";
                          e.currentTarget.style.boxShadow =
                            "0 8px 25px rgba(72, 153, 210, 0.15)";
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.backgroundColor = "#f9f9f9";
                          e.currentTarget.style.boxShadow = "none";
                        }}
                      >
                        <div
                          style={{
                            display: "flex",
                            alignItems: "center",
                            gap: "15px",
                            marginBottom: "12px",
                          }}
                        >
                          <div
                            style={{
                              width: "50px",
                              height: "50px",
                              backgroundColor: "#4899d2",
                              borderRadius: "50%",
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "center",
                              flexShrink: 0,
                            }}
                          >
                            <i
                              className="fas fa-users"
                              style={{
                                fontSize: "24px",
                                color: "#fff",
                              }}
                            ></i>
                          </div>
                          <div>
                            <h3
                              style={{
                                fontSize: "28px",
                                fontWeight: "800",
                                color: "#0f3a5b",
                                margin: "0",
                              }}
                            >
                              1500+
                            </h3>
                          </div>
                        </div>
                        <h4
                          style={{
                            fontSize: "18px",
                            fontWeight: "700",
                            color: "#0f3a5b",
                            marginBottom: "8px",
                          }}
                        >
                          Students Enrolled
                        </h4>
                        <p
                          style={{
                            fontSize: "14px",
                            color: "#666",
                            lineHeight: "1.6",
                            margin: "0",
                          }}
                        >
                          Building futures through quality education.
                        </p>
                      </div>
                    </div>
                    <div className="col-md-6 mb-30">
                      <div
                        style={{
                          backgroundColor: "#f9f9f9",
                          padding: "30px",
                          borderRadius: "10px",
                          borderLeft: "4px solid #003D7A",
                          transition: "all 0.3s ease",
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.backgroundColor = "#fff8f3";
                          e.currentTarget.style.boxShadow =
                            "0 8px 25px rgba(255, 107, 53, 0.15)";
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.backgroundColor = "#f9f9f9";
                          e.currentTarget.style.boxShadow = "none";
                        }}
                      >
                        <div
                          style={{
                            display: "flex",
                            alignItems: "center",
                            gap: "15px",
                            marginBottom: "12px",
                          }}
                        >
                          <div
                            style={{
                              width: "50px",
                              height: "50px",
                              backgroundColor: "#003D7A",
                              borderRadius: "50%",
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "center",
                              flexShrink: 0,
                            }}
                          >
                            <i
                              className="fas fa-briefcase"
                              style={{
                                fontSize: "24px",
                                color: "#fff",
                              }}
                            ></i>
                          </div>
                          <div>
                            <h3
                              style={{
                                fontSize: "28px",
                                fontWeight: "800",
                                color: "#0f3a5b",
                                margin: "0",
                              }}
                            >
                              75%
                            </h3>
                          </div>
                        </div>
                        <h4
                          style={{
                            fontSize: "18px",
                            fontWeight: "700",
                            color: "#0f3a5b",
                            marginBottom: "8px",
                          }}
                        >
                          Placement Success
                        </h4>
                        <p
                          style={{
                            fontSize: "14px",
                            color: "#666",
                            lineHeight: "1.6",
                            margin: "0",
                          }}
                        >
                          100% placement support available.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="slider-btn mt-40">
                  <Link
                    to="/about"
                    style={{
                      display: "inline-block",
                      padding: "15px 40px",
                      backgroundColor: "#4899d2",
                      color: "#fff",
                      textDecoration: "none",
                      borderRadius: "6px",
                      fontWeight: "700",
                      fontSize: "16px",
                      transition: "all 0.3s ease",
                      border: "2px solid #4899d2",
                    }}
                    onMouseEnter={(e) => {
                      e.target.style.backgroundColor = "transparent";
                      e.target.style.color = "#4899d2";
                      e.target.style.transform = "translateY(-3px)";
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.backgroundColor = "#4899d2";
                      e.target.style.color = "#fff";
                      e.target.style.transform = "translateY(0)";
                    }}
                  >
                    Read More{" "}
                    <i
                      className="fas fa-arrow-right"
                      style={{ marginLeft: "8px" }}
                    />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default About;
