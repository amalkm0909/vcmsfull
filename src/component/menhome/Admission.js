import React from "react";
import { Link } from "react-router-dom";
import admissionImg from "../../assets/img/features/about_img_5.webp";

function Admission() {
  return (
    <>
      <section
        className="about-area about-p pt-120 pb-120 p-relative fix"
        style={{
          backgroundColor: "#ffffff",
        }}
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
                  src={admissionImg}
                  alt="img"
                  style={{ borderRadius: "12px" }}
                />
              </div>
            </div>
            <div className="col-lg-7 col-md-12 col-sm-12">
              <div
                className="about-content s-about-content wow fadeInRight animated"
                data-animation="fadeInRight"
                data-delay=".4s"
                style={{ paddingLeft: "50px" }}
              >
                <div className="about-title second-title pb-25">
                  {/* <h5
                    style={{
                      color: "#4899d2",
                      fontSize: "16px",
                      fontWeight: "700",
                      marginBottom: "15px",
                      textTransform: "uppercase",
                      letterSpacing: "1px",
                    }}
                  >
                    <i
                      className="fas fa-door-open"
                      style={{ marginRight: "8px" }}
                    />
                    Admission Process
                  </h5> */}
                  <h2
                    style={{
                      fontSize: "42px",
                      fontWeight: "800",
                      color: "#0f3a5b",
                      lineHeight: "1.3",
                      marginBottom: "25px",
                    }}
                  >
                    Join <span style={{ color: "#4899d2" }}>VCMS</span> Today
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
                  Join Viswam College of Management Studies and unlock your
                  potential. We offer comprehensive admission processes designed
                  to identify talented individuals who are passionate about
                  management education and professional growth.
                </p>
                <p
                  style={{
                    fontSize: "16px",
                    lineHeight: "1.8",
                    color: "#666",
                    marginBottom: "30px",
                  }}
                >
                  Our admission criteria are rigorous yet fair, ensuring we
                  select students who have the drive and aptitude to succeed.
                </p>

                <div
                  style={{
                    backgroundColor: "#f9f9f9",
                    padding: "30px",
                    borderRadius: "10px",
                    borderLeft: "4px solid #003D7A",
                    marginBottom: "30px",
                  }}
                >
                  <h4
                    style={{
                      fontSize: "18px",
                      fontWeight: "700",
                      color: "#0f3a5b",
                      marginBottom: "15px",
                      display: "flex",
                      alignItems: "center",
                      gap: "12px",
                    }}
                  >
                    <i
                      className="fas fa-check-circle"
                      style={{ color: "#4899d2", fontSize: "20px" }}
                    ></i>
                    Why <span style={{ color: "#4899d2" }}>VCMS</span>?
                  </h4>
                  <ul style={{ listStyle: "none", padding: 0 }}>
                    {[
                      "Industry-aligned curriculum and experienced faculty",
                      "Flexible learning modes (Online & Offline)",
                      "100% placement support with industry partnerships",
                      "Affordable education with scholarship options",
                    ].map((item, i) => (
                      <li
                        key={i}
                        style={{
                          padding: "8px 0",
                          fontSize: "15px",
                          color: "#666",
                          display: "flex",
                          alignItems: "center",
                          gap: "10px",
                        }}
                      >
                        <i
                          className="fas fa-chevron-right"
                          style={{
                            color: "#4899d2",
                            fontSize: "12px",
                            flexShrink: 0,
                          }}
                        ></i>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="slider-btn">
                  <Link
                    to="/contact-us"
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
                    Explore Programs{" "}
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

export default Admission;
