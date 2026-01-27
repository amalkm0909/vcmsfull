import React from "react";
import { Link } from "react-router-dom";
import eventImg1 from "../../assets/img/bg/evn-img-1.webp";
import eventImg2 from "../../assets/img/bg/evn-img-02.webp";
import eventImg3 from "../../assets/img/bg/evn-img-3.webp";
import eventImg4 from "../../assets/img/bg/evn-img-4.webp";
import eventImg5 from "../../assets/img/bg/evn-img-5.webp";
import eventImg6 from "../../assets/img/bg/evn-img-6.webp";

function Event() {
  return (
    <>
      <section
        className="event pt-120 pb-90 p-relative fix"
        style={{ backgroundColor: "#f5f5f5" }}
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-12 p-relative mb-70">
              <div
                className="text-center wow fadeInDown animated"
                data-animation="fadeInDown"
                data-delay=".4s"
              >
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
                  <i
                    className="fas fa-calendar-alt"
                    style={{ marginRight: "8px" }}
                  />{" "}
                  Our Events
                </h5>
                <h2
                  style={{
                    fontSize: "42px",
                    fontWeight: "800",
                    color: "#0f3a5b",
                    marginBottom: "20px",
                  }}
                >
                  Upcoming Events & Webinars
                </h2>
                <div
                  style={{
                    width: "60px",
                    height: "4px",
                    backgroundColor: "#003D7A",
                    margin: "0 auto",
                    borderRadius: "2px",
                  }}
                ></div>
              </div>
            </div>
          </div>
          <div className="row">
            <div
              className="col-lg-4 col-md-6  wow fadeInUp animated"
              data-animation="fadeInUp"
              data-delay=".4s"
            >
              <div
                className="event-item mb-30 hover-zoomin"
                style={{ borderRadius: "15px", overflow: "hidden" }}
              >
                <div className="thumb">
                  <Link to="/single-event">
                    <img src={eventImg1} alt="Ship Building Course" />
                  </Link>
                </div>
                <div className="event-content">
                  <div className="date">
                    <strong>15</strong> January, 2026
                  </div>
                  <h3>
                    <Link to="/single-event">
                      Industry Expert Webinar: Logistics Excellence
                    </Link>
                  </h3>
                  <p>
                    Learn from industry leaders about modern logistics and
                    supply chain management best practices.
                  </p>
                  <div className="time">
                    2:00 pm - 3:30 pm <i className="fal fa-long-arrow-right" />{" "}
                    <strong>Online</strong>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="col-lg-4 col-md-6  wow fadeInUp animated"
              data-animation="fadeInUp"
              data-delay=".4s"
            >
              <div
                className="event-item mb-30 hover-zoomin"
                style={{ borderRadius: "15px", overflow: "hidden" }}
              >
                <div className="thumb">
                  <Link to="/single-event">
                    <img src={eventImg2} alt="Automotive Technology" />
                  </Link>
                </div>
                <div className="event-content">
                  <div className="date">
                    <strong>18</strong> January, 2026
                  </div>
                  <h3>
                    <Link to="/single-event">
                      Workshop: Career Advancement in Automotive Sector
                    </Link>
                  </h3>
                  <p>
                    Discover opportunities and skills needed for career growth
                    in the automotive industry.
                  </p>
                  <div className="time">
                    10:00 am - 12:00 pm{" "}
                    <i className="fal fa-long-arrow-right" />{" "}
                    <strong style={{ color: "#4899d2" }}>VCMS, Kochi</strong>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="col-lg-4 col-md-6  wow fadeInUp animated"
              data-animation="fadeInUp"
              data-delay=".4s"
            >
              <div
                className="event-item mb-30 hover-zoomin"
                style={{ borderRadius: "15px", overflow: "hidden" }}
              >
                <div className="thumb">
                  <Link to="/single-event">
                    <img src={eventImg3} alt="HR Administration" />
                  </Link>
                </div>
                <div className="event-content">
                  <div className="date">
                    <strong>22</strong> January, 2026
                  </div>
                  <h3>
                    <Link to="/single-event">
                      Placement Drive: Top Companies Hiring
                    </Link>
                  </h3>
                  <p>
                    Meet leading companies and explore job opportunities across
                    various sectors.
                  </p>
                  <div className="time">
                    3:00 pm - 5:00 pm <i className="fal fa-long-arrow-right" />{" "}
                    <strong style={{ color: "#4899d2" }}>VCMS, Kochi</strong>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="col-lg-4 col-md-6  wow fadeInUp animated"
              data-animation="fadeInUp"
              data-delay=".4s"
            >
              <div
                className="event-item mb-30 hover-zoomin"
                style={{ borderRadius: "15px", overflow: "hidden" }}
              >
                <div className="thumb">
                  <Link to="/single-event">
                    <img src={eventImg4} alt="Logistics Management" />
                  </Link>
                </div>
                <div className="event-content">
                  <div className="date">
                    <strong>25</strong> January, 2026
                  </div>
                  <h3>
                    <Link to="/single-event">
                      Seminar: Digital Transformation in Business
                    </Link>
                  </h3>
                  <p>
                    Understand how digital technologies are reshaping business
                    operations and career prospects.
                  </p>
                  <div className="time">
                    11:00 am - 1:00 pm <i className="fal fa-long-arrow-right" />{" "}
                    <strong>Online</strong>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="col-lg-4 col-md-6  wow fadeInUp animated"
              data-animation="fadeInUp"
              data-delay=".4s"
            >
              <div
                className="event-item mb-30 hover-zoomin"
                style={{ borderRadius: "15px", overflow: "hidden" }}
              >
                <div className="thumb">
                  <Link to="/single-event">
                    <img src={eventImg5} alt="Hospital Administration" />
                  </Link>
                </div>
                <div className="event-content">
                  <div className="date">
                    <strong>29</strong> January, 2026
                  </div>
                  <h3>
                    <Link to="/single-event">
                      Alumni Success Talk: Real-World Career Insights
                    </Link>
                  </h3>
                  <p>
                    Hear from VCMS alumni about their journey and success
                    stories in various industries.
                  </p>
                  <div className="time">
                    4:00 pm - 5:30 pm <i className="fal fa-long-arrow-right" />{" "}
                    <strong style={{ color: "#4899d2" }}>VCMS, Kochi</strong>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="col-lg-4 col-md-6  wow fadeInUp animated"
              data-animation="fadeInUp"
              data-delay=".4s"
            >
              <div
                className="event-item mb-30 hover-zoomin"
                style={{ borderRadius: "15px", overflow: "hidden" }}
              >
                <div className="thumb">
                  <Link to="/single-event">
                    <img src={eventImg6} alt="Global Business Management" />
                  </Link>
                </div>
                <div className="event-content">
                  <div className="date">
                    <strong>02</strong> February, 2026
                  </div>
                  <h3>
                    <Link to="/single-event">
                      Skill Enhancement Session: Interview Preparation
                    </Link>
                  </h3>
                  <p>
                    Master interview techniques and learn how to showcase your
                    skills effectively to employers.
                  </p>
                  <div className="time">
                    2:30 pm - 4:00 pm <i className="fal fa-long-arrow-right" />{" "}
                    <strong style={{ color: "#4899d2" }}>VCMS, Kochi</strong>
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

export default Event;
