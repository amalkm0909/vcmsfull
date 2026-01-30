import React from "react";
import { Link } from "react-router-dom";
import "@fortawesome/fontawesome-free/css/all.min.css";

const mobileStyles = `
  @media (max-width: 768px) {
    .footer-top .row {
      display: grid !important;
      grid-template-columns: repeat(2, 1fr) !important;
      gap: 15px !important;
    }
    .footer-widget {
      padding: 10px 8px !important;
    }
    .f-widget-title h2 {
      font-size: 14px !important;
    }
    .f-contact p {
      font-size: 12px !important;
    }
  }
  
  @media (max-width: 576px) {
    .footer-top .row {
      display: grid !important;
      grid-template-columns: 1fr !important;
      gap: 10px !important;
    }
    .col-sm-12 {
      min-width: auto;
      width: 100%;
      max-width: 100%;
    }
    .footer-widget {
      padding: 8px 5px !important;
    }
    .f-widget-title h2 {
      font-size: 12px !important;
      margin-bottom: 8px !important;
    }
    .f-contact p {
      font-size: 11px !important;
      margin-bottom: 8px !important;
    }
    .footer-link ul li {
      margin-bottom: 5px !important;
    }
    .footer-link ul li a {
      font-size: 10px !important;
    }
    .copyright-wrap > div {
      flex-wrap: nowrap !important;
      gap: 10px !important;
    }
  }
`;

function Main() {
  return (
    <>
      <style>{mobileStyles}</style>
      <footer
        className="footer-bg footer-p pt-50"
        style={{
          backgroundColor: "#0f3a5b",
          backgroundImage: "url(/assets/img/bg/footer-bg.png)",
        }}
      >
        <div className="footer-top pb-40">
          <div className="container">
            <div
              className="row"
              style={{
                gap: "30px",
                display: "flex",
                flexWrap: "wrap",
                justifyContent: "flex-start",
              }}
            >
              <div className="col-xl-3 col-lg-4 col-md-6 col-sm-12 mb-40">
                <div className="footer-widget">
                  <div className="f-widget-title mb-20">
                    <h2
                      style={{
                        fontSize: "18px",
                        fontWeight: "700",
                        color: "#fff",
                        marginBottom: "15px",
                      }}
                    >
                      About Us
                    </h2>
                  </div>
                  <div className="f-contact">
                    <p
                      style={{
                        color: "#bbb",
                        fontSize: "14px",
                        lineHeight: "1.8",
                        marginBottom: "15px",
                      }}
                    >
                      Viswam College of Management Studies is committed to
                      providing exceptional learning experiences and fostering
                      innovation. We nurture talent, inspire curiosity, and
                      facilitate the pursuit of excellence in a diverse range of
                      fields.
                    </p>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      gap: "20px",
                      alignItems: "flex-start",
                    }}
                  >
                    <div className="f-logo" style={{ minWidth: "100px" }}>
                      <Link to="/">
                        <img
                          src="/assets/img/logo/logo.png"
                          alt="VCMS Logo"
                          style={{
                            maxHeight: "80px",
                            width: "auto",
                            display: "block",
                          }}
                        />
                      </Link>
                    </div>
                    <div
                      className="footer-social"
                      style={{
                        display: "flex",
                        gap: "10px",
                        paddingTop: "10px",
                      }}
                    >
                      <a
                        href="https://www.facebook.com/p/Viswam-College-of-Management-Studies-100091354450765"
                        style={{
                          width: "40px",
                          height: "40px",
                          borderRadius: "50%",
                          backgroundColor: "#4899d2",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          color: "#fff",
                          transition: "all 0.3s ease",
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.backgroundColor = "#ff6b35";
                          e.currentTarget.style.transform = "scale(1.1)";
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.backgroundColor = "#4899d2";
                          e.currentTarget.style.transform = "scale(1)";
                        }}
                      >
                        <i className="fab fa-facebook-f" />
                      </a>
                      <a
                        href="https://www.instagram.com/vcms_cochin?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
                        style={{
                          width: "40px",
                          height: "40px",
                          borderRadius: "50%",
                          backgroundColor: "#4899d2",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          color: "#fff",
                          transition: "all 0.3s ease",
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.backgroundColor = "#ff6b35";
                          e.currentTarget.style.transform = "scale(1.1)";
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.backgroundColor = "#4899d2";
                          e.currentTarget.style.transform = "scale(1)";
                        }}
                      >
                        <i className="fab fa-instagram" />
                      </a>
                      <a
                        href="https://www.youtube.com/@ViswamCollageOfMangementStudie"
                        style={{
                          width: "40px",
                          height: "40px",
                          borderRadius: "50%",
                          backgroundColor: "#4899d2",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          color: "#fff",
                          transition: "all 0.3s ease",
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.backgroundColor = "#ff6b35";
                          e.currentTarget.style.transform = "scale(1.1)";
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.backgroundColor = "#4899d2";
                          e.currentTarget.style.transform = "scale(1)";
                        }}
                      >
                        <i className="fab fa-youtube" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-2 col-lg-3 col-md-6 col-sm-12 mb-40">
                <div className="footer-widget">
                  <div className="f-widget-title mb-20">
                    <h2
                      style={{
                        fontSize: "18px",
                        fontWeight: "700",
                        color: "#fff",
                        marginBottom: "15px",
                      }}
                    >
                      Quick Links
                    </h2>
                  </div>
                  <div className="footer-link">
                    <ul style={{ listStyle: "none", padding: 0 }}>
                      <li style={{ marginBottom: "10px" }}>
                        <Link
                          to="/"
                          style={{
                            color: "#bbb",
                            textDecoration: "none",
                            transition: "all 0.3s ease",
                          }}
                          onMouseEnter={(e) => {
                            e.currentTarget.style.color = "#4899d2";
                            e.currentTarget.style.paddingLeft = "5px";
                          }}
                          onMouseLeave={(e) => {
                            e.currentTarget.style.color = "#bbb";
                            e.currentTarget.style.paddingLeft = "0";
                          }}
                        >
                          Home
                        </Link>
                      </li>
                      <li style={{ marginBottom: "10px" }}>
                        <Link
                          to="/about"
                          style={{
                            color: "#bbb",
                            textDecoration: "none",
                            transition: "all 0.3s ease",
                          }}
                          onMouseEnter={(e) => {
                            e.currentTarget.style.color = "#4899d2";
                            e.currentTarget.style.paddingLeft = "5px";
                          }}
                          onMouseLeave={(e) => {
                            e.currentTarget.style.color = "#bbb";
                            e.currentTarget.style.paddingLeft = "0";
                          }}
                        >
                          About
                        </Link>
                      </li>
                      <li style={{ marginBottom: "10px" }}>
                        <Link
                          to="/courses"
                          style={{
                            color: "#bbb",
                            textDecoration: "none",
                            transition: "all 0.3s ease",
                          }}
                          onMouseEnter={(e) => {
                            e.currentTarget.style.color = "#4899d2";
                            e.currentTarget.style.paddingLeft = "5px";
                          }}
                          onMouseLeave={(e) => {
                            e.currentTarget.style.color = "#bbb";
                            e.currentTarget.style.paddingLeft = "0";
                          }}
                        >
                          Courses
                        </Link>
                      </li>
                      <li style={{ marginBottom: "10px" }}>
                        <Link
                          to="/contact"
                          style={{
                            color: "#bbb",
                            textDecoration: "none",
                            transition: "all 0.3s ease",
                          }}
                          onMouseEnter={(e) => {
                            e.currentTarget.style.color = "#4899d2";
                            e.currentTarget.style.paddingLeft = "5px";
                          }}
                          onMouseLeave={(e) => {
                            e.currentTarget.style.color = "#bbb";
                            e.currentTarget.style.paddingLeft = "0";
                          }}
                        >
                          Contact
                        </Link>
                      </li>
                      <li style={{ marginBottom: "10px" }}>
                        <Link
                          to="/blog"
                          style={{
                            color: "#bbb",
                            textDecoration: "none",
                            transition: "all 0.3s ease",
                          }}
                          onMouseEnter={(e) => {
                            e.currentTarget.style.color = "#4899d2";
                            e.currentTarget.style.paddingLeft = "5px";
                          }}
                          onMouseLeave={(e) => {
                            e.currentTarget.style.color = "#bbb";
                            e.currentTarget.style.paddingLeft = "0";
                          }}
                        >
                          Blog
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-lg-4 col-md-6 col-sm-12 mb-40">
                <div className="footer-widget">
                  <div className="f-widget-title mb-20">
                    <h2
                      style={{
                        fontSize: "18px",
                        fontWeight: "700",
                        color: "#fff",
                        marginBottom: "15px",
                      }}
                    >
                      Latest Updates
                    </h2>
                  </div>
                  <div className="recent-blog-footer">
                    <ul style={{ listStyle: "none", padding: 0 }}>
                      <li
                        style={{
                          marginBottom: "15px",
                          paddingBottom: "15px",
                          borderBottom: "1px solid rgba(72, 153, 210, 0.2)",
                        }}
                      >
                        <Link
                          to="/blog-details"
                          style={{
                            color: "#bbb",
                            textDecoration: "none",
                            fontSize: "14px",
                            lineHeight: "1.6",
                            transition: "all 0.3s ease",
                          }}
                          onMouseEnter={(e) => {
                            e.currentTarget.style.color = "#4899d2";
                          }}
                          onMouseLeave={(e) => {
                            e.currentTarget.style.color = "#bbb";
                          }}
                        >
                          VCMS Announces New Advanced Automotive Program
                        </Link>
                        <div
                          style={{
                            color: "#888",
                            fontSize: "12px",
                            marginTop: "8px",
                            whiteSpace: "nowrap",
                            display: "flex",
                            alignItems: "center",
                            gap: "6px",
                          }}
                        >
                          <i className="fas fa-calendar-alt" /> 10th Jan 2026
                        </div>
                      </li>
                      <li style={{ marginBottom: "15px" }}>
                        <Link
                          to="/blog-details"
                          style={{
                            color: "#bbb",
                            textDecoration: "none",
                            fontSize: "14px",
                            lineHeight: "1.6",
                            transition: "all 0.3s ease",
                          }}
                          onMouseEnter={(e) => {
                            e.currentTarget.style.color = "#4899d2";
                          }}
                          onMouseLeave={(e) => {
                            e.currentTarget.style.color = "#bbb";
                          }}
                        >
                          Partnership with Fortune 500 Companies
                        </Link>
                        <div
                          style={{
                            color: "#888",
                            fontSize: "12px",
                            marginTop: "8px",
                            whiteSpace: "nowrap",
                            display: "flex",
                            alignItems: "center",
                            gap: "6px",
                          }}
                        >
                          <i className="fas fa-calendar-alt" /> 5th Jan 2026
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-lg-4 col-md-6 col-sm-12 mb-40">
                <div className="footer-widget">
                  <div className="f-widget-title mb-20">
                    <h2
                      style={{
                        fontSize: "18px",
                        fontWeight: "700",
                        color: "#fff",
                        marginBottom: "15px",
                      }}
                    >
                      Get In Touch
                    </h2>
                  </div>
                  <div className="f-contact">
                    <ul style={{ listStyle: "none", padding: 0 }}>
                      <li
                        style={{
                          marginBottom: "18px",
                          display: "flex",
                          gap: "12px",
                          alignItems: "flex-start",
                        }}
                      >
                        <i
                          className="fas fa-phone"
                          style={{
                            color: "#4899d2",
                            fontSize: "16px",
                            flexShrink: 0,
                            marginTop: "2px",
                          }}
                        />
                        <Link
                          to="tel:+918593977877"
                          style={{
                            color: "#bbb",
                            textDecoration: "none",
                            fontSize: "14px",
                            transition: "all 0.3s ease",
                          }}
                          onMouseEnter={(e) => {
                            e.currentTarget.style.color = "#4899d2";
                          }}
                          onMouseLeave={(e) => {
                            e.currentTarget.style.color = "#bbb";
                          }}
                        >
                          +91-8593977877
                        </Link>
                      </li>
                      <li
                        style={{
                          marginBottom: "18px",
                          display: "flex",
                          gap: "12px",
                          alignItems: "flex-start",
                        }}
                      >
                        <i
                          className="fas fa-envelope"
                          style={{
                            color: "#4899d2",
                            fontSize: "16px",
                            flexShrink: 0,
                            marginTop: "2px",
                          }}
                        />
                        <Link
                          to="mailto:info@vcmskerala.in"
                          style={{
                            color: "#bbb",
                            textDecoration: "none",
                            fontSize: "14px",
                            transition: "all 0.3s ease",
                          }}
                          onMouseEnter={(e) => {
                            e.currentTarget.style.color = "#4899d2";
                          }}
                          onMouseLeave={(e) => {
                            e.currentTarget.style.color = "#bbb";
                          }}
                        >
                          info@vcmskerala.in
                        </Link>
                      </li>
                      <li
                        style={{
                          display: "flex",
                          gap: "12px",
                          alignItems: "flex-start",
                        }}
                      >
                        <i
                          className="fas fa-map-marker-alt"
                          style={{
                            color: "#4899d2",
                            fontSize: "16px",
                            flexShrink: 0,
                            marginTop: "2px",
                          }}
                        />
                        <span
                          style={{
                            color: "#bbb",
                            fontSize: "13px",
                            lineHeight: "1.8",
                          }}
                        >
                          First Floor, Amicus Building,
                          <br /> Desabhimani Rd, Kaloor,
                          <br /> Ernakulam, Kerala 682017
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className="copyright-wrap"
          style={{
            background:
              "linear-gradient(90deg, #d4aaaa 0%, #f9fbfd 50%, #ffffff 100%)",
            padding: window.innerWidth <= 768 ? "2px 0" : "8px 0",
            borderTop: "2px solid #4899d2",
            position: "relative",
            overflow: "hidden",
          }}
        >
          {/* Decorative background elements */}
          <div
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              opacity: 0.05,
              background:
                "radial-gradient(circle at 20% 50%, #4899d2 0%, transparent 50%), radial-gradient(circle at 80% 50%, #ff6b35 0%, transparent 50%)",
              pointerEvents: "none",
            }}
          ></div>

          <div
            className="container"
            style={{ position: "relative", zIndex: 1 }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: window.innerWidth <= 768 ? "column" : "row",
                gap: window.innerWidth <= 768 ? "5px" : "350px",
                alignItems: "center",
                justifyContent: "center",
                marginBottom: "0",
                flexWrap: "wrap",
              }}
            >
              <div
                style={{
                  display: "flex",
                  gap: window.innerWidth <= 576 ? "10px" : "350px",
                  alignItems: "center",
                  justifyContent: "center",
                  width: window.innerWidth <= 768 ? "100%" : "auto",
                  flexWrap: "wrap",
                }}
              >
                {/* Logo Section */}
                <div style={{ textAlign: "center" }}>
                  <Link
                    to="/"
                    style={{
                      display: "inline-block",
                      transition: "all 0.3s ease",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = "scale(1.08)";
                      e.currentTarget.style.filter =
                        "drop-shadow(0 5px 15px rgba(72, 153, 210, 0.4))";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = "scale(1)";
                      e.currentTarget.style.filter = "drop-shadow(none)";
                    }}
                  >
                    <img
                      src={
                        window.innerWidth <= 576
                          ? "/assets/img/logo/logo.png"
                          : "/assets/img/logo/vcms_logo.png"
                      }
                      alt="VCMS Logo"
                      style={{
                        height: window.innerWidth <= 576 ? "40px" : "55px",
                      }}
                    />
                  </Link>
                </div>

                {/* Copyright Text */}
                <div
                  style={{
                    textAlign: "center",
                    display: "flex",
                    alignItems: "center",
                    gap: "5px",
                  }}
                >
                  <div
                    style={{
                      color: "#0f3a5b",
                      fontSize: "13px",
                      fontWeight: "500",
                      letterSpacing: "0.3px",
                    }}
                  >
                    © 2026{" "}
                    <span
                      style={{
                        color: "#4899d2",
                        fontWeight: "700",
                        fontSize: "14px",
                      }}
                    >
                      VCMS
                    </span>{" "}
                    Kerala
                  </div>
                  <div
                    style={{
                      color: "#0f3a5b",
                      fontSize: "10px",
                    }}
                  >
                    All rights reserved.
                  </div>
                </div>
              </div>

              {/* Policy Links - Below copyright */}
              <div
                style={{
                  display: "flex",
                  gap: "15px",
                  justifyContent: "center",
                  flexWrap: "wrap",
                }}
              >
                <Link
                  to="/privacy"
                  style={{
                    color: "#0f3a5b",
                    textDecoration: "none",
                    fontSize: "11px",
                    fontWeight: "400",
                    transition: "all 0.3s ease",
                    position: "relative",
                    paddingBottom: "2px",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = "#4899d2";
                    e.currentTarget.style.transform = "translateY(-1px)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = "#0f3a5b";
                    e.currentTarget.style.transform = "translateY(0)";
                  }}
                >
                  Privacy
                </Link>
                <div
                  style={{ color: "rgba(72, 153, 210, 0.3)", fontSize: "10px" }}
                >
                  |
                </div>
                <Link
                  to="/terms-conditions"
                  style={{
                    color: "#0f3a5b",
                    textDecoration: "none",
                    fontSize: "11px",
                    fontWeight: "400",
                    transition: "all 0.3s ease",
                    position: "relative",
                    paddingBottom: "2px",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = "#4899d2";
                    e.currentTarget.style.transform = "translateY(-1px)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = "#0f3a5b";
                    e.currentTarget.style.transform = "translateY(0)";
                  }}
                >
                  Terms
                </Link>
                <div
                  style={{ color: "rgba(72, 153, 210, 0.3)", fontSize: "10px" }}
                >
                  |
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom stats/features row */}
        {/* <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))",
                gap: "20px",
                textAlign: "center",
              }}
            >
              <div
                style={{
                  padding: "12px",
                  borderRadius: "8px",
                  backgroundColor: "rgba(72, 153, 210, 0.08)",
                  transition: "all 0.3s ease",
                  cursor: "default",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor =
                    "rgba(72, 153, 210, 0.15)";
                  e.currentTarget.style.transform = "translateY(-3px)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor =
                    "rgba(72, 153, 210, 0.08)";
                  e.currentTarget.style.transform = "translateY(0)";
                }}
              >
                <div
                  style={{
                    color: "#4899d2",
                    fontWeight: "700",
                    fontSize: "16px",
                  }}
                >
                  1500+
                </div>
                <div
                  style={{ color: "#888", fontSize: "11px", marginTop: "4px" }}
                >
                  Students Trained
                </div>
              </div>
              <div
                style={{
                  padding: "12px",
                  borderRadius: "8px",
                  backgroundColor: "rgba(72, 153, 210, 0.08)",
                  transition: "all 0.3s ease",
                  cursor: "default",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor =
                    "rgba(72, 153, 210, 0.15)";
                  e.currentTarget.style.transform = "translateY(-3px)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor =
                    "rgba(72, 153, 210, 0.08)";
                  e.currentTarget.style.transform = "translateY(0)";
                }}
              >
                <div
                  style={{
                    color: "#ff6b35",
                    fontWeight: "700",
                    fontSize: "16px",
                  }}
                >
                  75%
                </div>
                <div
                  style={{ color: "#888", fontSize: "11px", marginTop: "4px" }}
                >
                  Placement Rate
                </div>
              </div>
              <div
                style={{
                  padding: "12px",
                  borderRadius: "8px",
                  backgroundColor: "rgba(72, 153, 210, 0.08)",
                  transition: "all 0.3s ease",
                  cursor: "default",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor =
                    "rgba(72, 153, 210, 0.15)";
                  e.currentTarget.style.transform = "translateY(-3px)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor =
                    "rgba(72, 153, 210, 0.08)";
                  e.currentTarget.style.transform = "translateY(0)";
                }}
              >
                <div
                  style={{
                    color: "#4899d2",
                    fontWeight: "700",
                    fontSize: "16px",
                  }}
                >
                  25+
                </div>
                <div
                  style={{ color: "#888", fontSize: "11px", marginTop: "4px" }}
                >
                  Courses Offered
                </div>
              </div>
            </div> */}
      </footer>
    </>
  );
}

export default Main;
