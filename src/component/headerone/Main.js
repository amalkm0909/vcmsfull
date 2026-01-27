import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

function Main() {
  const location = useLocation();
  const [Btnshow, setBtnshow] = useState(false);
  const [mobile, setmobile] = useState(false);
  const [Events, setEvent] = useState(false);
  const [News, setNews] = useState(false);
  const [Services, setServices] = useState(false);
  const [Blog, setblog] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Function to check if a link is active
  const isActive = (path) => {
    return location.pathname === path ? "active-nav-link" : "";
  };

  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 1486) {
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
          <div className="container-fluid">
            <div
              className="second-menu"
              style={{
                position: "relative",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                minHeight: "70px",
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "30px",
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
                          maxHeight: "60px",
                          width: "auto",
                        }}
                      />
                    </Link>
                  </div>
                </div>
                <div
                  style={{
                    flex: 1,
                    display: "flex",
                    justifyContent: "center",
                    minWidth: "300px",
                    "@media (maxWidth: 768px)": {
                      display: mobileMenuOpen ? "block" : "none",
                    },
                  }}
                >
                  <div className="main-menu w-100">
                    <nav id="mobile-menu">
                      <ul
                        style={{
                          display:
                            window.innerWidth > 1486
                              ? "flex"
                              : mobileMenuOpen
                                ? "flex"
                                : "none",
                          flexDirection:
                            window.innerWidth > 1486 ? "row" : "column",
                          justifyContent: "center",
                          gap: window.innerWidth > 1486 ? "20px" : "0",
                          flexWrap: "nowrap",
                          listStyle: "none",
                          margin: 0,
                          padding: window.innerWidth > 1486 ? 0 : "15px 0",
                          overflowX: "auto",
                          backgroundColor:
                            window.innerWidth <= 1486 && mobileMenuOpen
                              ? "#fff"
                              : "transparent",
                          position:
                            window.innerWidth <= 1486 && mobileMenuOpen
                              ? "absolute"
                              : "static",
                          top:
                            window.innerWidth <= 1486 && mobileMenuOpen
                              ? "70px"
                              : "auto",
                          left: 0,
                          right: 0,
                          zIndex: 1000,
                          boxShadow:
                            window.innerWidth <= 1486 && mobileMenuOpen
                              ? "0 4px 6px rgba(0,0,0,0.1)"
                              : "none",
                        }}
                      >
                        <li
                          className={isActive("/")}
                          style={{ display: "flex" }}
                        >
                          <Link
                            to="/"
                            style={{
                              transition: "all 0.3s ease",
                              fontSize: "18px",
                              fontWeight: "600",
                            }}
                          >
                            Home
                          </Link>
                        </li>
                        <li
                          className={isActive("/courses")}
                          style={{ display: "flex" }}
                        >
                          <Link
                            to="/courses"
                            style={{
                              transition: "all 0.3s ease",
                              fontSize: "18px",
                              fontWeight: "600",
                            }}
                          >
                            Courses
                          </Link>
                        </li>
                        <li
                          className={isActive("/about")}
                          style={{ display: "flex" }}
                        >
                          <Link
                            to="/about"
                            style={{
                              transition: "all 0.3s ease",
                              fontSize: "18px",
                              fontWeight: "600",
                            }}
                          >
                            About Us
                          </Link>
                        </li>
                        <li
                          className={isActive("/event")}
                          style={{ display: "flex" }}
                        >
                          <Link
                            to="/event"
                            style={{
                              transition: "all 0.3s ease",
                              fontSize: "18px",
                              fontWeight: "600",
                            }}
                          >
                            Event
                          </Link>
                        </li>
                        <li
                          className={isActive("/projects")}
                          style={{ display: "flex" }}
                        >
                          <Link
                            to="/projects"
                            style={{
                              transition: "all 0.3s ease",
                              fontSize: "18px",
                              fontWeight: "600",
                            }}
                          >
                            Gallery
                          </Link>
                        </li>
                        <li
                          className={isActive("/campus-life")}
                          style={{ display: "flex" }}
                        >
                          <Link
                            to="/campus-life"
                            style={{
                              transition: "all 0.3s ease",
                              fontSize: "18px",
                              fontWeight: "600",
                            }}
                          >
                            Campus Life
                          </Link>
                        </li>
                        <li
                          className={isActive("/team")}
                          style={{ display: "flex" }}
                        >
                          <Link
                            to="/team"
                            style={{
                              transition: "all 0.3s ease",
                              fontSize: "18px",
                              fontWeight: "600",
                            }}
                          >
                            Faculty
                          </Link>
                        </li>
                        <li
                          className={isActive("/blog")}
                          style={{ display: "flex" }}
                        >
                          <Link
                            to="/blog"
                            style={{
                              transition: "all 0.3s ease",
                              fontSize: "18px",
                              fontWeight: "600",
                            }}
                          >
                            Blog
                          </Link>
                        </li>
                        <li
                          className={isActive("/faq")}
                          style={{ display: "flex" }}
                        >
                          <Link
                            to="/faq"
                            style={{
                              transition: "all 0.3s ease",
                              fontSize: "18px",
                              fontWeight: "600",
                            }}
                          >
                            FAQ
                          </Link>
                        </li>
                        <li
                          className={isActive("/contact")}
                          style={{ display: "flex" }}
                        >
                          <Link
                            to="/contact"
                            style={{
                              transition: "all 0.3s ease",
                              fontSize: "18px",
                              fontWeight: "600",
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
                  {window.innerWidth <= 1486 && (
                    <button
                      onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                      style={{
                        background: "none",
                        border: "none",
                        cursor: "pointer",
                        fontSize: "24px",
                        padding: "10px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <i
                        className={`fas ${mobileMenuOpen ? "fa-times" : "fa-bars"}`}
                      ></i>
                    </button>
                  )}
                  <div
                    className="login"
                    style={{
                      display: "flex",
                      justifyContent: "flex-end",
                      alignItems: "center",
                      position: "relative",
                      zIndex: 100,
                    }}
                  >
                    <ul
                      style={{
                        display: "flex",
                        justifyContent: "flex-end",
                        alignItems: "center",
                        marginBottom: 0,
                        gap: "10px",
                      }}
                    >
                      <li>
                        <div className="second-header-btn">
                          <a
                            href="https://wa.me/918593977877"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn"
                            style={{
                              borderRadius: "25px",
                              padding: "12px 26px",
                              fontSize: "13px",
                              fontWeight: "600",
                            }}
                          >
                            {" "}
                            admission open{" "}
                          </a>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="mobile-menu mean-container">
              <div className="mean-bar">
                <a
                  href="#nav"
                  onClick={() => setmobile(!mobile)}
                  className={`meanmenu-reveal ${mobile && "meanclose"}`}
                  style={{
                    right: 0,
                    left: "auto",
                    textAlign: "center",
                    textIndent: 0,
                    fontSize: 18,
                  }}
                >
                  {mobile ? (
                    "X"
                  ) : (
                    <span>
                      <span>
                        <span></span>
                      </span>
                    </span>
                  )}
                </a>
                {mobile && (
                  <nav className="mean-nav">
                    <ul style={{ display: "block" }}>
                      <li className="has-sub">
                        <a href="/">Home</a>
                        {Events && (
                          <ul className="display-block">
                            <li>
                              <Link to="/">University</Link>
                            </li>
                          </ul>
                        )}
                        <a
                          className={`mean-expand ${mobile && "mean-clicked"}`}
                          onClick={() => {
                            setEvent(!Events);
                          }}
                          href="#"
                          style={{ fontSize: 18 }}
                        >
                          {Events ? "-" : "+"}
                        </a>
                      </li>
                      <li>
                        <Link to="/about">About Us</Link>
                      </li>
                      <li className="has-sub">
                        <Link to="/courses">Courses</Link>
                        {News && (
                          <ul className="display-block">
                            <li>
                              <Link to="/courses">Courses</Link>
                            </li>
                            <li>
                              {" "}
                              <Link to="/courses-2">Courses 02</Link>
                            </li>
                            <li>
                              {" "}
                              <Link to="/single-courses">Course Details</Link>
                            </li>
                            <li>
                              {" "}
                              <Link to="/single-courses-2">
                                Course Details 02
                              </Link>
                            </li>
                          </ul>
                        )}

                        <a
                          className={`mean-expand ${mobile && "mean-clicked"}`}
                          onClick={() => {
                            setNews(!News);
                          }}
                          href="#"
                          style={{ fontSize: 18 }}
                        >
                          {News ? "-" : "+"}
                        </a>
                      </li>
                      <li className="has-sub">
                        <Link to="/blog">Blog</Link>
                        {Blog && (
                          <ul className="display-block">
                            <li>
                              <Link to="/blog">Blog</Link>
                            </li>
                            <li>
                              <Link to="/blog-details">Blog Details</Link>
                            </li>
                          </ul>
                        )}
                        <a
                          className={`mean-expand ${mobile && "mean-clicked"}`}
                          onClick={() => {
                            setblog(!Blog);
                          }}
                          href="#"
                          style={{ fontSize: 18 }}
                        >
                          {Blog ? "-" : "+"}
                        </a>
                      </li>
                      <li className="mean-last">
                        <Link to="/contact">Contact</Link>
                      </li>
                    </ul>
                  </nav>
                )}
              </div>
            </div>
          </div>
        </div>
      </header>

      {Btnshow && (
        <>
          <div className={`offcanvas-menu ${"active"}`}>
            <span className="menu-close" onClick={() => setBtnshow(false)}>
              <i className="fas fa-times" onClick={() => setBtnshow(false)} />
            </span>
            <form
              role="search"
              method="get"
              id="searchform"
              className="searchform"
              action="http://wordpress.zcube.in/xconsulta/"
            >
              <input type="text" name="s" id="search" placeholder="Search" />
              <button>
                <i className="fa fa-search" />
              </button>
            </form>
            <div id="cssmenu3" className="menu-one-page-menu-container">
              <ul className="menu">
                <li className="menu-item menu-item-type-custom menu-item-object-custom">
                  <Link to="/">Home</Link>
                </li>
                <li className="menu-item menu-item-type-custom menu-item-object-custom">
                  <Link to="/about">About Us</Link>
                </li>
                <li className="menu-item menu-item-type-custom menu-item-object-custom">
                  <Link to="/courses">Courses</Link>
                </li>
                <li className="menu-item menu-item-type-custom menu-item-object-custom">
                  <Link to="/team">Teacher</Link>
                </li>
                <li className="menu-item menu-item-type-custom menu-item-object-custom">
                  <Link to="/projects">Gallery</Link>
                </li>
                <li className="menu-item menu-item-type-custom menu-item-object-custom">
                  <Link to="/campus-life">Campus Life</Link>
                </li>
                <li className="menu-item menu-item-type-custom menu-item-object-custom">
                  <Link to="/blog">Blog</Link>
                </li>
                <li className="menu-item menu-item-type-custom menu-item-object-custom">
                  <Link to="/contact">Contact</Link>
                </li>
              </ul>
            </div>
            <div id="cssmenu2" className="menu-one-page-menu-container">
              <ul id="menu-one-page-menu-12" className="menu">
                <li className="menu-item menu-item-type-custom menu-item-object-custom">
                  <Link to="#home">
                    <span>+8 12 3456897</span>
                  </Link>
                </li>
                <li className="menu-item menu-item-type-custom menu-item-object-custom">
                  <Link to="#howitwork">
                    <span>info@example.com</span>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className={`offcanvas-overly ${"active"}`}> </div>
        </>
      )}
    </>
  );
}

export default Main;
