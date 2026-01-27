import React from "react";
import { Link } from "react-router-dom";
import class1 from "../../assets/img/class/class-1.jpg";
import class2 from "../../assets/img/class/class-2.jpg";
import class3 from "../../assets/img/class/class-3.jpg";
import class4 from "../../assets/img/class/class-4.jpg";
import class5 from "../../assets/img/class/class-5.jpg";
import class6 from "../../assets/img/class/class-6.jpg";

function First() {
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
      <section
        className="shop-area pt-120 pb-120 p-relative "
        data-animation="fadeInUp animated"
        data-delay=".2s"
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-sm-6">
              <h6 className="mt-20 mb-50">Showing 1–6 of 6 results</h6>
            </div>
            {/* <div className="col-lg-6 col-sm-6 text-right">
              <select name="orderby" className="orderby" aria-label="Shop order">
                <option value="menu_order">Default sorting</option>
                <option value="popularity">Sort by popularity</option>
                <option value="rating">Sort by average rating</option>
                <option value="date">Sort by latest</option>
                <option value="price">Sort by price: low to high</option>
                <option value="price-desc">Sort by price: high to low</option>
              </select>
            </div> */}
          </div>
          <div className="row align-items-center">
            {courses.map((course, index) => (
              <div className="col-lg-4 col-md-6" key={index}>
                <div
                  className="courses-item mb-30 hover-zoomin"
                  style={{
                    height: "350px",
                    display: "flex",
                    flexDirection: "column",
                    borderRadius: "12px",
                    overflow: "hidden",
                  }}
                >
                  <div
                    className="thumb fix"
                    style={{
                      height: "200px",
                      overflow: "hidden",
                      borderRadius: "12px 12px 0 0",
                      position: "relative",
                    }}
                  >
                    <Link to="/single-courses">
                      <img
                        src={course.img}
                        alt="course-img"
                        style={{
                          width: "100%",
                          height: "50%",
                          objectFit: "cover",
                        }}
                      />
                    </Link>
                  </div>
                  <div
                    className="courses-content"
                    style={{
                      flex: 1,
                      display: "flex",
                      flexDirection: "column",
                      padding: "20px",
                      background: "rgba(43, 46, 131, 0.15)",
                      backdropFilter: "blur(10px)",
                      border: "1px solid rgba(255, 255, 255, 0.3)",
                    }}
                  >
                    <div className="cat">
                      <i className="fal fa-graduation-cap" /> {course.category}
                    </div>
                    <h3
                      style={{
                        fontSize: "16px",
                        marginTop: "8px",
                        marginBottom: "8px",
                        minHeight: "40px",
                      }}
                    >
                      <Link to="/single-courses">{course.title}</Link>
                    </h3>
                    <p
                      style={{
                        fontSize: "13px",
                        lineHeight: "1.4",
                        flex: 1,
                        marginBottom: "10px",
                      }}
                    >
                      {course.description}
                    </p>
                    <Link
                      to={course.link}
                      className="readmore"
                      style={{ marginTop: "auto" }}
                    >
                      Read More <i className="fal fa-long-arrow-right" />
                    </Link>
                  </div>
                  <div className="icon" style={{ display: "none" }}>
                    <img src="assets/img/icon/cou-icon.png" alt="icon" />
                  </div>
                </div>
              </div>
            ))}
          </div>
          {/* <div className="row">
            <div className="col-12">
              <div className="pagination-wrap mt-20 text-center">
                <nav>
                  <ul className="pagination">
                    <li className="page-item">
                      <Link to="#">
                        <i className="fas fa-angle-double-left" />
                      </Link>
                    </li>
                    <li className="page-item active">
                      <Link to="#">1</Link>
                    </li>
                    <li className="page-item">
                      <Link to="#">2</Link>
                    </li>
                    <li className="page-item">
                      <Link to="#">3</Link>
                    </li>
                    <li className="page-item">
                      <Link to="#">...</Link>
                    </li>
                    <li className="page-item">
                      <Link to="#">10</Link>
                    </li>
                    <li className="page-item">
                      <Link to="#">
                        <i className="fas fa-angle-double-right" />
                      </Link>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
            <div /> */}
          {/* </div> */}
        </div>
      </section>
    </>
  );
}

export default First;
