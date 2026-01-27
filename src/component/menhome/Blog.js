import React from "react";
import { Link } from "react-router-dom";
import blogImg1 from "../../assets/img/blog/inner_b4.webp";
import blogImg2 from "../../assets/img/blog/inner_b5.webp";
import blogImg3 from "../../assets/img/blog/inner_b6.webp";

function Blog() {
  return (
    <>
      <section
        id="blog"
        className="blog-area p-relative fix pt-120 pb-90"
        style={{
          backgroundImage: "url(assets/img/bg/blog_bg.png)",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "top",
        }}
      >
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-12">
              <div
                className="section-title center-align mb-50 text-center wow fadeInDown animated"
                data-animation="fadeInDown"
                data-delay=".4s"
              >
                <h5>
                  <i className="fal fa-graduation-cap" /> Our Blog
                </h5>
                <h2>Latest Blog </h2>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-4 col-md-6">
              <div
                className="single-post2 hover-zoomin mb-30 wow fadeInUp animated"
                data-animation="fadeInUp"
                data-delay=".4s"
                style={{
                  height: "550px",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <div
                  className="blog-thumb2"
                  style={{
                    height: "250px",
                    overflow: "hidden",
                  }}
                >
                  <Link to="/blog-details">
                    <img
                      src={blogImg1}
                      alt="img"
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                      }}
                    />
                  </Link>
                  <div className="date-home">
                    <i className="fal fa-calendar-alt" /> 10th January 2026
                  </div>
                </div>
                <div
                  className="blog-content2"
                  style={{
                    flex: 1,
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  <div className="b-meta">
                    <div className="meta-info">
                      <ul>
                        <li>
                          <i className="fal fa-user" /> By Admin{" "}
                        </li>
                        <li>
                          <i className="fal fa-comments" /> 3 Comments
                        </li>
                      </ul>
                    </div>
                  </div>
                  <h4 style={{ minHeight: "50px" }}>
                    <Link to="/blog-details">
                      VCMS Integration: Streamlining Campus Operations
                    </Link>
                  </h4>
                  <p style={{ flex: 1 }}>
                    Discover how Virtual Campus Management System enhances
                    administrative efficiency and improves student engagement
                    across all departments.
                  </p>
                  <div className="blog-btn" style={{ marginTop: "auto" }}>
                    <Link to="/blog-details">
                      Read More <i className="fal fa-long-arrow-right" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div
                className="single-post2 mb-30 hover-zoomin wow fadeInUp animated"
                data-animation="fadeInUp"
                data-delay=".4s"
                style={{
                  height: "550px",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <div
                  className="blog-thumb2"
                  style={{
                    height: "250px",
                    overflow: "hidden",
                  }}
                >
                  <Link to="/blog-details">
                    <img
                      src={blogImg2}
                      alt="img"
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                      }}
                    />
                  </Link>
                  <div className="date-home">
                    <i className="fal fa-calendar-alt" /> 5th January 2026
                  </div>
                </div>
                <div
                  className="blog-content2"
                  style={{
                    flex: 1,
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  <div className="b-meta">
                    <div className="meta-info">
                      <ul>
                        <li>
                          <i className="fal fa-user" /> By Admin{" "}
                        </li>
                        <li>
                          <i className="fal fa-comments" /> 3 Comments
                        </li>
                      </ul>
                    </div>
                  </div>
                  <h4 style={{ minHeight: "50px" }}>
                    <Link to="/blog-details">
                      Benefits of Digital Learning Management via VCMS
                    </Link>
                  </h4>
                  <p style={{ flex: 1 }}>
                    Explore how Virtual Campus Management System provides
                    seamless access to courses, resources, and student services
                    24/7 from anywhere.
                  </p>
                  <div className="blog-btn" style={{ marginTop: "auto" }}>
                    <Link to="/blog-details">
                      Read More <i className="fal fa-long-arrow-right" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div
                className="single-post2 mb-30 hover-zoomin wow fadeInUp animated"
                data-animation="fadeInUp"
                data-delay=".4s"
                style={{
                  height: "550px",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <div
                  className="blog-thumb2"
                  style={{
                    height: "250px",
                    overflow: "hidden",
                  }}
                >
                  <Link to="/blog-details">
                    <img
                      src={blogImg3}
                      alt="img"
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                      }}
                    />
                  </Link>
                  <div className="date-home">
                    <i className="fal fa-calendar-alt" /> 1st January 2026
                  </div>
                </div>
                <div
                  className="blog-content2"
                  style={{
                    flex: 1,
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  <div className="b-meta">
                    <div className="meta-info">
                      <ul>
                        <li>
                          <i className="fal fa-user" /> By Admin{" "}
                        </li>
                        <li>
                          <i className="fal fa-comments" /> 3 Comments
                        </li>
                      </ul>
                    </div>
                  </div>
                  <h4 style={{ minHeight: "50px" }}>
                    <Link to="/blog-details">
                      Student Success Stories Through VCMS Platform
                    </Link>
                  </h4>
                  <p style={{ flex: 1 }}>
                    Learn how students are achieving their academic goals using
                    the comprehensive tools and features of Virtual Campus
                    Management System.
                  </p>
                  <div className="blog-btn" style={{ marginTop: "auto" }}>
                    <Link to="/blog-details">
                      Read More <i className="fal fa-long-arrow-right" />
                    </Link>
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

export default Blog;
