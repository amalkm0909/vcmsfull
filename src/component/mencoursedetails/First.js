import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import coursesData from "../../data/coursesData";

function First({ courseId = 1 }) {
  const [course, setCourse] = useState(coursesData[courseId]);
  const [activeIndex, setActiveIndex] = useState(null);

  useEffect(() => {
    setCourse(coursesData[courseId]);
    setActiveIndex(null); // Reset FAQ accordion when course changes
  }, [courseId]);

  const handleToggle = (index) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  const handleDownloadBrochure = () => {
    const link = document.createElement("a");
    link.href = "/VCMSBrochure.pdf";
    link.download = `${course.shortTitle}-Brochure.pdf`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <>
      <section className="project-detail">
        <div className="container">
          <div className="lower-content">
            <div className="row">
              <div className="text-column col-lg-9 col-md-9 col-sm-12">
                <h2>{course.title}</h2>
                <div className="upper-box">
                  <div className="single-item-carousel owl-carousel owl-theme">
                    <figure className="image">
                      <img
                        src={course.image}
                        alt={course.title}
                        style={{ borderRadius: "12px" }}
                      />
                    </figure>
                  </div>
                </div>
                <div className="inner-column">
                  <h3>Course Overview</h3>
                  <p>{course.overview}</p>
                  <p>{course.overview2}</p>

                  <h3 style={{ marginTop: "30px" }}>Course Highlights</h3>
                  <ul className="pr-ul">
                    {course.highlights.map((highlight, index) => (
                      <li key={index}>
                        <div className="icon">
                          <i className="fal fa-check" />
                        </div>
                        <div className="text">{highlight}</div>
                      </li>
                    ))}
                  </ul>

                  <h4 style={{ marginTop: "30px" }}>What You Will Learn</h4>
                  <ul className="pr-ul">
                    {course.learnings.map((learning, index) => (
                      <li key={index}>
                        <div className="icon">
                          <i className="fal fa-check" />
                        </div>
                        <div className="text">{learning}</div>
                      </li>
                    ))}
                  </ul>

                  <h3 style={{ marginTop: "30px" }}>
                    Available Course Options
                  </h3>
                  <table
                    className="table table-bordered mb-40"
                    style={{ borderRadius: "12px", overflow: "hidden" }}
                  >
                    <thead>
                      <tr>
                        <th>Course Title</th>
                        <th>Duration</th>
                      </tr>
                    </thead>
                    <tbody>
                      {course.courseOptions.map((courseOpt, index) => (
                        <tr key={index}>
                          <td>{courseOpt.title}</td>
                          <td>{courseOpt.duration}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>

                  <h3 style={{ marginTop: "30px" }}>Career Opportunities</h3>
                  <p>
                    Upon successful completion of this course, you'll be
                    equipped for various professional roles in the maritime and
                    shipbuilding industry:
                  </p>
                  <div
                    className="career-opportunities"
                    style={{
                      display: "grid",
                      gridTemplateColumns: "repeat(2, 1fr)",
                      gap: "15px",
                      marginBottom: "30px",
                    }}
                  >
                    {course.careerOpportunities.map((career, index) => (
                      <div
                        key={index}
                        style={{
                          padding: "12px",
                          backgroundColor: "#f5f5f5",
                          borderRadius: "12px",
                          borderLeft: "4px solid #4899d2",
                        }}
                      >
                        <h5 style={{ margin: "0", color: "#333" }}>{career}</h5>
                      </div>
                    ))}
                  </div>

                  <h3>Frequently Asked Questions</h3>
                  <div
                    className="faq-wrap pt-30 wow fadeInUp animated"
                    data-animation="fadeInUp"
                    data-delay=".4s"
                  >
                    <div className="accordion" id="accordionExample">
                      {course.faqItems.map((item, index) => (
                        <div
                          className="card"
                          key={index}
                          style={{
                            borderRadius: "12px",
                            overflow: "hidden",
                            marginBottom: "10px",
                          }}
                        >
                          <div className="card-header" id={item.id}>
                            <h2 className="mb-0">
                              <button
                                className={`faq-btn${
                                  activeIndex === index ? "" : " collapsed"
                                }`}
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target={`#collapse${index}`}
                                onClick={() => handleToggle(index)}
                              >
                                {item.question}
                              </button>
                            </h2>
                          </div>
                          <div
                            id={`collapse${index}`}
                            className={`collapse${
                              activeIndex === index ? " show" : ""
                            }`}
                            data-bs-parent="#accordionExample"
                          >
                            <div className="card-body">{item.answer}</div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-3">
                <aside className="sidebar-widget info-column">
                  <div className="inner-column3">
                    <h3>Course Information</h3>
                    <ul className="project-info clearfix">
                      <li>
                        <span className="icon fal fa-graduation-cap" />{" "}
                        <strong>Eligibility:</strong>{" "}
                        <span>{course.eligibility}</span>
                      </li>
                      <li>
                        <span className="icon fal fa-clock" />{" "}
                        <strong>Duration:</strong>{" "}
                        <span>{course.duration}</span>
                      </li>
                      <li>
                        <span className="icon fal fa-certificate" />{" "}
                        <strong>Certification:</strong>{" "}
                        <span>{course.certification}</span>
                      </li>
                      <li>
                        <span className="icon fal fa-globe" />{" "}
                        <strong>Embassy Attestation:</strong>{" "}
                        <span>{course.embassyAttestation}</span>
                      </li>
                      <li>
                        <span className="icon fal fa-handshake" />{" "}
                        <strong>Placement Support:</strong>{" "}
                        <span>{course.placementSupport}</span>
                      </li>
                      <li>
                        <span className="icon fal fa-laptop" />{" "}
                        <strong>Mode:</strong> <span>{course.mode}</span>
                      </li>
                      <li style={{ marginTop: "20px" }}>
                        <div
                          className="slider-btn"
                          style={{
                            display: "flex",
                            flexDirection: "column",
                            gap: "10px",
                          }}
                        >
                          <Link
                            to="/contact"
                            className="btn ss-btn smoth-scroll"
                            style={{ borderRadius: "12px" }}
                          >
                            Enroll Now <i className="fal fa-long-arrow-right" />
                          </Link>
                          <a
                            href="#"
                            onClick={(e) => {
                              e.preventDefault();
                              handleDownloadBrochure();
                            }}
                            className="btn ss-btn smoth-scroll"
                            style={{
                              textAlign: "center",
                              background: "#f5f5f5",
                              color: "#333",
                              borderColor: "#ddd",
                              borderRadius: "12px",
                              cursor: "pointer",
                            }}
                          >
                            Download Brochure <i className="fal fa-download" />
                          </a>
                        </div>
                      </li>
                    </ul>
                  </div>
                </aside>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default First;
