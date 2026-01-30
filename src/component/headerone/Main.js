import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

function Main() {
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  // Function to check if a link is active
  const isActive = (path) => {
    return location.pathname === path ? "active-nav-link" : "";
  };

  const [isScrolled, setIsScrolled] = useState(false);

  const getMobileMenuItemStyle = () => ({
    display: "block",
    padding: windowWidth <= 576 ? "8px 8px" : "10px 10px",
    fontSize: windowWidth <= 576 ? "10px" : "11px",
    fontWeight: "500",
    color: "#333",
    textDecoration: "none",
    transition: "all 0.3s ease",
    borderRadius: "6px",
  });

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
      if (window.innerWidth > 1024) {
        setMobileMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop =
        window.pageYOffset || document.documentElement.scrollTop;
      setIsScrolled(scrollTop > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <header className="header-area header-three">
        {/* <div className="header-top second-header d-none d-md-block">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-4 col-md-4 d-none d-lg-block ">
                <div className="header-social">
                  <span>
                    Follow us:-
                    <Link to="#" title="Facebook">
                      <i className="fab fa-facebook-f" />
                    </Link>
                    <Link to="#" title="LinkedIn">
                      <i className="fab fa-instagram" />
                    </Link>
                    <Link to="#" title="Twitter">
                      <i className="fab fa-twitter" />
                    </Link>
                    <Link to="#" title="Twitter">
                      <i className="fab fa-youtube" />
                    </Link>
                  </span>
                </div>
              </div>
              <div className="col-lg-8 col-md-8 d-none d-lg-block text-right">
                <div className="header-cta">
                  <ul>
                    <li>
                      <div className="call-box">
                        <div className="icon">
                          <img src="assets/img/icon/phone-call.png" alt="img" />
                        </div>
                        <div className="text">
                          <span>Call Now !</span>
                          <strong>
                            <Link to="tel:+918593977877">+91-8593977877</Link>
                          </strong>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className="call-box">
                        <div className="icon">
                          <img src="assets/img/icon/mailing.png" alt="img" />
                        </div>
                        <div className="text">
                          <span>Email Now</span>
                          <strong>
                            <Link to="mailto:info@vcmskerala.in">
                              {" "}
                              info@vcmskerala.in
                            </Link>
                          </strong>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div> */}
        <div
          id="header-sticky"
          className={`menu-area${isScrolled ? "menu-area sticky-menu" : ""}`}
        >
          <div
            className="container-fluid"
            style={{ padding: windowWidth <= 576 ? "0 10px" : "0 20px" }}
          >
            <div
              className="second-menu"
              style={{
                position: "relative",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                minHeight: windowWidth <= 576 ? "60px" : "70px",
                padding: windowWidth <= 576 ? "10px 0" : "0",
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: windowWidth <= 768 ? "10px" : "15px",
                  width: "100%",
                  flexWrap: "nowrap",
                  justifyContent: "space-between",
                }}
              >
                <div style={{ flexShrink: 0 }}>
                  <div
                    className="logo"
                    style={{
                      position: "relative",
                      left: 0,
                      top: "auto",
                      transform: "none",
                    }}
                  >
                    <Link to="/">
                      <img
                        src="/assets/img/logo/vcms_logo.png"
                        alt="VCMS Logo"
                        style={{
                          maxHeight:
                            windowWidth <= 480
                              ? "40px"
                              : windowWidth <= 768
                                ? "50px"
                                : "60px",
                          width: "auto",
                        }}
                      />
                    </Link>
                  </div>
                </div>
                <div
                  style={{
                    flex: 1,
                    display: windowWidth > 1024 ? "flex" : "none",
                    justifyContent: "center",
                    minWidth: "300px",
                  }}
                >
                  <div className="main-menu w-100">
                    <nav id="mobile-menu">
                      <ul
                        style={{
                          display: windowWidth > 1024 ? "flex" : "none",
                          flexDirection: "row",
                          justifyContent: "center",
                          gap: "20px",
                          flexWrap: "nowrap",
                          listStyle: "none",
                          margin: 0,
                          padding: 0,
                          overflowX: "auto",
                          backgroundColor: "transparent",
                          position: "static",
                          top: "auto",
                          left: 0,
                          right: 0,
                          zIndex: 1000,
                          boxShadow: "none",
                          maxHeight: "auto",
                          overflowY: "visible",
                        }}
                      >
                        <li
                          className={isActive("/")}
                          style={{
                            display: "flex",
                          }}
                        >
                          <Link
                            to="/"
                            style={{
                              transition: "all 0.3s ease",
                              fontSize: "16px",
                              fontWeight: "400",
                              color: "#333",
                            }}
                          >
                            Home
                          </Link>
                        </li>
                        <li
                          className={isActive("/courses")}
                          style={{
                            display: "flex",
                          }}
                        >
                          <Link
                            to="/courses"
                            style={{
                              transition: "all 0.3s ease",
                              fontSize: "16px",
                              fontWeight: "400",
                              color: "#333",
                            }}
                          >
                            Courses
                          </Link>
                        </li>
                        <li
                          className={isActive("/about")}
                          style={{
                            display: "flex",
                          }}
                        >
                          <Link
                            to="/about"
                            style={{
                              transition: "all 0.3s ease",
                              fontSize: "16px",
                              fontWeight: "400",
                              color: "#333",
                            }}
                          >
                            About Us
                          </Link>
                        </li>
                        <li
                          className={isActive("/event")}
                          style={{
                            display: "flex",
                          }}
                        >
                          <Link
                            to="/event"
                            style={{
                              transition: "all 0.3s ease",
                              fontSize: "16px",
                              fontWeight: "400",
                              color: "#333",
                            }}
                          >
                            Event
                          </Link>
                        </li>
                        <li
                          className={isActive("/projects")}
                          style={{
                            display: "flex",
                          }}
                        >
                          <Link
                            to="/projects"
                            style={{
                              transition: "all 0.3s ease",
                              fontSize: "16px",
                              fontWeight: "400",
                              color: "#333",
                            }}
                          >
                            Gallery
                          </Link>
                        </li>
                        <li
                          className={isActive("/campus-life")}
                          style={{
                            display: "flex",
                          }}
                        >
                          <Link
                            to="/campus-life"
                            style={{
                              transition: "all 0.3s ease",
                              fontSize: "16px",
                              fontWeight: "400",
                              color: "#333",
                            }}
                          >
                            Campus Life
                          </Link>
                        </li>
                        <li
                          className={isActive("/team")}
                          style={{
                            display: "flex",
                          }}
                        >
                          <Link
                            to="/team"
                            style={{
                              transition: "all 0.3s ease",
                              fontSize: "16px",
                              fontWeight: "400",
                              color: "#333",
                            }}
                          >
                            Faculty
                          </Link>
                        </li>
                        <li
                          className={isActive("/blog")}
                          style={{
                            display: "flex",
                          }}
                        >
                          <Link
                            to="/blog"
                            style={{
                              transition: "all 0.3s ease",
                              fontSize: "16px",
                              fontWeight: "400",
                              color: "#333",
                            }}
                          >
                            Blog
                          </Link>
                        </li>
                        <li
                          className={isActive("/faq")}
                          style={{
                            display: "flex",
                          }}
                        >
                          <Link
                            to="/faq"
                            style={{
                              transition: "all 0.3s ease",
                              fontSize: "16px",
                              fontWeight: "400",
                              color: "#333",
                            }}
                          >
                            FAQ
                          </Link>
                        </li>
                        <li
                          className={isActive("/contact")}
                          style={{
                            display: "flex",
                          }}
                        >
                          <Link
                            to="/contact"
                            style={{
                              transition: "all 0.3s ease",
                              fontSize: "16px",
                              fontWeight: "400",
                              color: "#333",
                            }}
                          >
                            Contact
                          </Link>
                        </li>
                      </ul>
                    </nav>
                  </div>
                </div>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "15px",
                    flexShrink: 0,
                  }}
                >
                  <div
                    className="login"
                    style={{
                      display: "flex",
                      justifyContent:
                        windowWidth <= 768 ? "flex-end" : "flex-end",
                      alignItems: "center",
                      position: "relative",
                      zIndex: 100,
                      width: windowWidth <= 768 ? "auto" : "auto",
                      marginTop: 0,
                      padding: 0,
                      gap: windowWidth <= 768 ? "8px" : "15px",
                      flexShrink: 0,
                    }}
                  >
                    <ul
                      style={{
                        display: "flex",
                        justifyContent:
                          windowWidth <= 768 ? "flex-end" : "flex-end",
                        alignItems: "center",
                        marginBottom: 0,
                        gap: windowWidth <= 768 ? "6px" : "10px",
                        width: "auto",
                      }}
                    >
                      <li
                        style={{
                          width: "auto",
                        }}
                      >
                        <div className="second-header-btn">
                          <a
                            href="https://wa.me/918593977877"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn"
                            style={{
                              borderRadius: "25px",
                              padding:
                                windowWidth <= 480
                                  ? "8px 10px"
                                  : windowWidth <= 576
                                    ? "10px 12px"
                                    : windowWidth <= 768
                                      ? "11px 16px"
                                      : "12px 26px",
                              fontSize:
                                windowWidth <= 480
                                  ? "10px"
                                  : windowWidth <= 576
                                    ? "11px"
                                    : windowWidth <= 768
                                      ? "12px"
                                      : "13px",
                              fontWeight: "400",
                              display: "block",
                              textAlign: "center",
                              width: "auto",
                              whiteSpace: "nowrap",
                            }}
                          >
                            admission open
                          </a>
                        </div>
                      </li>
                    </ul>
                  </div>
                  {windowWidth <= 1024 && (
                    <button
                      onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                      style={{
                        background: "none",
                        border: "none",
                        cursor: "pointer",
                        fontSize: windowWidth <= 576 ? "14px" : "18px",
                        padding: windowWidth <= 576 ? "6px 6px" : "8px 8px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        color: "#333",
                        transition: "all 0.3s ease",
                        flexShrink: 0,
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.color = "#4899d2";
                        e.currentTarget.style.transform = "scale(1.15)";
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.color = "#333";
                        e.currentTarget.style.transform = "scale(1)";
                      }}
                    >
                      <i
                        className={`fas ${mobileMenuOpen ? "fa-times" : "fa-bars"}`}
                      ></i>
                    </button>
                  )}
                </div>
              </div>
            </div>
            {windowWidth <= 1024 && mobileMenuOpen && (
              <div
                style={{
                  position: "absolute",
                  right: 0,
                  top: "100%",
                  backgroundColor: "#f8f9fa",
                  background:
                    "linear-gradient(135deg, #ffffff 0%, #f0f7ff 100%)",
                  boxShadow:
                    "-8px 8px 24px rgba(72, 153, 210, 0.15), -4px 4px 12px rgba(0, 0, 0, 0.08)",
                  zIndex: 999,
                  padding: windowWidth <= 576 ? "10px 8px" : "14px",
                  maxHeight: `calc(100vh - ${windowWidth <= 576 ? 60 : 70}px)`,
                  overflowY: "auto",
                  maxWidth: "fit-content",
                  minWidth: windowWidth <= 576 ? "160px" : "190px",
                  borderRadius: "8px",
                  marginTop: "4px",
                  border: "1px solid rgba(72, 153, 210, 0.1)",
                }}
              >
                <nav id="mobile-menu-dropdown">
                  <ul
                    style={{
                      listStyle: "none",
                      margin: 0,
                      padding: 0,
                      display: "flex",
                      flexDirection: "column",
                      gap: "2px",
                    }}
                  >
                    <li style={{ borderBottom: "none" }}>
                      <Link
                        to="/"
                        onClick={() => setMobileMenuOpen(false)}
                        style={getMobileMenuItemStyle()}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.color = "#fff";
                          e.currentTarget.style.backgroundColor = "#4899d2";
                          e.currentTarget.style.paddingLeft = "12px";
                          e.currentTarget.style.borderRadius = "6px";
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.color = "#333";
                          e.currentTarget.style.backgroundColor = "transparent";
                          e.currentTarget.style.paddingLeft = "0";
                          e.currentTarget.style.borderRadius = "0";
                        }}
                      >
                        Home
                      </Link>
                    </li>
                    <li style={{ borderBottom: "1px solid #e0e0e0" }}>
                      <Link
                        to="/courses"
                        onClick={() => setMobileMenuOpen(false)}
                        style={{
                          display: "block",
                          padding: windowWidth <= 576 ? "6px 0" : "8px 0",
                          fontSize: windowWidth <= 576 ? "10px" : "11px",
                          fontWeight: "400",
                          color: "#333",
                          textDecoration: "none",
                          transition: "all 0.3s ease",
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.color = "#4899d2";
                          e.currentTarget.style.paddingLeft = "10px";
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.color = "#333";
                          e.currentTarget.style.paddingLeft = "0";
                        }}
                      >
                        Courses
                      </Link>
                    </li>
                    <li style={{ borderBottom: "1px solid #e0e0e0" }}>
                      <Link
                        to="/about"
                        onClick={() => setMobileMenuOpen(false)}
                        style={{
                          display: "block",
                          padding: windowWidth <= 576 ? "6px 0" : "8px 0",
                          fontSize: windowWidth <= 576 ? "10px" : "11px",
                          fontWeight: "400",
                          color: "#333",
                          textDecoration: "none",
                          transition: "all 0.3s ease",
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.color = "#4899d2";
                          e.currentTarget.style.paddingLeft = "10px";
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.color = "#333";
                          e.currentTarget.style.paddingLeft = "0";
                        }}
                      >
                        About Us
                      </Link>
                    </li>
                    <li style={{ borderBottom: "1px solid #e0e0e0" }}>
                      <Link
                        to="/event"
                        onClick={() => setMobileMenuOpen(false)}
                        style={{
                          display: "block",
                          padding: windowWidth <= 576 ? "6px 0" : "8px 0",
                          fontSize: windowWidth <= 576 ? "10px" : "11px",
                          fontWeight: "400",
                          color: "#333",
                          textDecoration: "none",
                          transition: "all 0.3s ease",
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.color = "#4899d2";
                          e.currentTarget.style.paddingLeft = "10px";
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.color = "#333";
                          e.currentTarget.style.paddingLeft = "0";
                        }}
                      >
                        Event
                      </Link>
                    </li>
                    <li style={{ borderBottom: "1px solid #e0e0e0" }}>
                      <Link
                        to="/projects"
                        onClick={() => setMobileMenuOpen(false)}
                        style={{
                          display: "block",
                          padding: windowWidth <= 576 ? "6px 0" : "8px 0",
                          fontSize: windowWidth <= 576 ? "10px" : "11px",
                          fontWeight: "400",
                          color: "#333",
                          textDecoration: "none",
                          transition: "all 0.3s ease",
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.color = "#4899d2";
                          e.currentTarget.style.paddingLeft = "10px";
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.color = "#333";
                          e.currentTarget.style.paddingLeft = "0";
                        }}
                      >
                        Gallery
                      </Link>
                    </li>
                    <li style={{ borderBottom: "1px solid #e0e0e0" }}>
                      <Link
                        to="/campus-life"
                        onClick={() => setMobileMenuOpen(false)}
                        style={{
                          display: "block",
                          padding: windowWidth <= 576 ? "6px 0" : "8px 0",
                          fontSize: windowWidth <= 576 ? "10px" : "11px",
                          fontWeight: "400",
                          color: "#333",
                          textDecoration: "none",
                          transition: "all 0.3s ease",
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.color = "#4899d2";
                          e.currentTarget.style.paddingLeft = "10px";
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.color = "#333";
                          e.currentTarget.style.paddingLeft = "0";
                        }}
                      >
                        Campus Life
                      </Link>
                    </li>
                    <li style={{ borderBottom: "1px solid #e0e0e0" }}>
                      <Link
                        to="/team"
                        onClick={() => setMobileMenuOpen(false)}
                        style={{
                          display: "block",
                          padding: windowWidth <= 576 ? "6px 0" : "8px 0",
                          fontSize: windowWidth <= 576 ? "10px" : "11px",
                          fontWeight: "400",
                          color: "#333",
                          textDecoration: "none",
                          transition: "all 0.3s ease",
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.color = "#4899d2";
                          e.currentTarget.style.paddingLeft = "10px";
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.color = "#333";
                          e.currentTarget.style.paddingLeft = "0";
                        }}
                      >
                        Faculty
                      </Link>
                    </li>
                    <li style={{ borderBottom: "1px solid #e0e0e0" }}>
                      <Link
                        to="/blog"
                        onClick={() => setMobileMenuOpen(false)}
                        style={{
                          display: "block",
                          padding: windowWidth <= 576 ? "6px 0" : "8px 0",
                          fontSize: windowWidth <= 576 ? "10px" : "11px",
                          fontWeight: "400",
                          color: "#333",
                          textDecoration: "none",
                          transition: "all 0.3s ease",
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.color = "#4899d2";
                          e.currentTarget.style.paddingLeft = "10px";
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.color = "#333";
                          e.currentTarget.style.paddingLeft = "0";
                        }}
                      >
                        Blog
                      </Link>
                    </li>
                    <li style={{ borderBottom: "1px solid #e0e0e0" }}>
                      <Link
                        to="/faq"
                        onClick={() => setMobileMenuOpen(false)}
                        style={{
                          display: "block",
                          padding: windowWidth <= 576 ? "6px 0" : "8px 0",
                          fontSize: windowWidth <= 576 ? "10px" : "11px",
                          fontWeight: "400",
                          color: "#333",
                          textDecoration: "none",
                          transition: "all 0.3s ease",
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.color = "#4899d2";
                          e.currentTarget.style.paddingLeft = "10px";
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.color = "#333";
                          e.currentTarget.style.paddingLeft = "0";
                        }}
                      >
                        FAQ
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/contact"
                        onClick={() => setMobileMenuOpen(false)}
                        style={{
                          display: "block",
                          padding: windowWidth <= 576 ? "6px 0" : "8px 0",
                          fontSize: windowWidth <= 576 ? "10px" : "11px",
                          fontWeight: "400",
                          color: "#333",
                          textDecoration: "none",
                          transition: "all 0.3s ease",
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.color = "#4899d2";
                          e.currentTarget.style.paddingLeft = "10px";
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.color = "#333";
                          e.currentTarget.style.paddingLeft = "0";
                        }}
                      >
                        Contact
                      </Link>
                    </li>
                  </ul>
                </nav>
              </div>
            )}
          </div>
        </div>
      </header>
    </>
  );
}

export default Main;
