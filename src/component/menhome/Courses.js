import React from "react";
import { Link } from "react-router-dom";
import class1 from "../../assets/img/class/class-1.jpg";
import class2 from "../../assets/img/class/class-2.jpg";
import class3 from "../../assets/img/class/class-3.jpg";
import class4 from "../../assets/img/class/class-4.jpg";
import class5 from "../../assets/img/class/class-5.jpg";
import class6 from "../../assets/img/class/class-6.jpg";

function Courses() {
  const courses = [
    {
      category: "Management",
      title: "Ship Building And Repair Management",
      description:
        "Comprehensive training in ship building and repair management with 100% placement support.",
      link: "/course-details/1",
      img: class1,
      duration: "1 YEAR",
      eligibility: "+2 & ABOVE",
    },
    {
      category: "Technology",
      title: "Advanced Automotive Technology",
      description:
        "Master advanced automotive technologies and engineering with hands-on training.",
      link: "/course-details/2",
      img: class2,
      duration: "1 YEAR",
      eligibility: "+2 & ABOVE",
    },
    {
      category: "Management",
      title: "HR And Office Administration",
      description:
        "Develop expertise in human resources and office management practices.",
      link: "/course-details/3",
      img: class3,
      duration: "1 YEAR",
      eligibility: "+2 & ABOVE",
    },
    {
      category: "Logistics",
      title: "Logistics and Shipping Management",
      description:
        "Learn logistics operations and shipping management from industry experts.",
      link: "/course-details/4",
      img: class4,
      duration: "1 YEAR",
      eligibility: "+2 & ABOVE",
    },
    {
      category: "Healthcare",
      title: "Hospital Administration & Accounting",
      description:
        "Specialized training in hospital management and financial administration.",
      link: "/course-details/5",
      img: class5,
      duration: "1 YEAR",
      eligibility: "+2 & ABOVE",
    },
    {
      category: "Business",
      title: "Global Business Management",
      description:
        "Explore international business strategies and global market trends.",
      link: "/course-details/6",
      img: class6,
      duration: "1 YEAR",
      eligibility: "DEGREE",
    },
  ];

  return (
    <>
      <section className="courses pt-120 pb-120 p-relative fix">
        
        <div className="container">
          <div className="row">
            <div className="col-lg-12 p-relative">
              <div
                className="section-title center-align mb-50 wow fadeInDown animated"
                data-animation="fadeInDown"
                data-delay=".4s"
              >
                <h5>
                  <i className="fal fa-graduation-cap" /> Explore Our Courses
                </h5>
                <h2>Professional Programs & Certifications</h2>
              </div>
            </div>
          </div>
          <div className="row">
            {courses.map((course, index) => (
              <div key={index} className="col-lg-4 col-md-6 col-sm-12 mb-30">
                <div
                  className="courses-item hover-zoomin"
                  style={{
                    border: "1px solid #e0e0e0",
                    borderRadius: "10px",
                    overflow: "hidden",
                    boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
                    transition: "all 0.3s ease",
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  <div
                    className="thumb fix"
                    style={{ height: "250px", overflow: "hidden" }}
                  >
                    <Link to={course.link}>
                      <img
                        src={course.img}
                        alt={course.title}
                        style={{
                          width: "100%",
                          height: "100%",
                          objectFit: "cover",
                        }}
                      />
                    </Link>
                  </div>
                  <div
                    className="courses-content"
                    style={{
                      padding: "20px",
                      flexGrow: 1,
                      display: "flex",
                      flexDirection: "column",
                    }}
                  >
                    <div
                      className="cat"
                      style={{
                        color: "#003D7A",
                        fontSize: "12px",
                        fontWeight: "bold",
                        marginBottom: "10px",
                      }}
                    >
                      <i className="fal fa-graduation-cap" /> {course.category}
                    </div>
                    <h3 style={{ marginBottom: "10px" }}>
                      <Link
                        to={course.link}
                        style={{ textDecoration: "none", color: "#333" }}
                      >
                        {course.title}
                      </Link>
                    </h3>
                    <p
                      style={{
                        fontSize: "14px",
                        color: "#666",
                        marginBottom: "15px",
                        flexGrow: 1,
                      }}
                    >
                      {course.description}
                    </p>
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        fontSize: "12px",
                        color: "#999",
                        marginBottom: "15px",
                        borderTop: "1px solid #eee",
                        paddingTop: "10px",
                      }}
                    >
                      <span>
                        <strong>Duration:</strong> {course.duration}
                      </span>
                      <span>
                        <strong>Eligibility:</strong> {course.eligibility}
                      </span>
                    </div>
                    <Link
                      to={course.link}
                      className="readmore"
                      style={{
                        color: "#ff6b35",
                        textDecoration: "none",
                        fontWeight: "bold",
                      }}
                    >
                      Read More <i className="fal fa-long-arrow-right" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default Courses;
