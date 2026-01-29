import React from "react";
import { Link } from "react-router-dom";
import "@fortawesome/fontawesome-free/css/all.min.css";
import GoToTop from "../../GoToTop/GoToTop";
import eventImg1 from "../../../assets/img/bg/evn-img-1.webp";
import eventImg2 from "../../../assets/img/bg/evn-img-02.webp";
import eventImg3 from "../../../assets/img/bg/evn-img-3.webp";
import eventImg4 from "../../../assets/img/bg/evn-img-4.webp";
import eventImg5 from "../../../assets/img/bg/evn-img-5.webp";
import eventImg6 from "../../../assets/img/bg/evn-img-6.webp";

const events = [
  {
    id: 1,
    date: "16 January, 2026",
    title: "Industry Expert Webinar: Logistics Excellence",
    image: eventImg1,
    description:
      "Learn from industry leaders about modern logistics and supply chain management best practices.",
    time: "2:00 pm - 3:30 pm",
    location: "Online",
  },
  {
    id: 2,
    date: "19 January, 2026",
    title: "Workshop: Career Advancement in Automotive Sector",
    image: eventImg2,
    description:
      "Discover opportunities and skills needed for career growth in the automotive industry.",
    time: "10:00 am - 12:00 pm",
    location: "VCMS, Kochi",
  },
  {
    id: 3,
    date: "23 January, 2026",
    title: "Placement Drive: Top Companies Hiring",
    image: eventImg3,
    description:
      "Meet leading companies and explore job opportunities across various sectors.",
    time: "3:00 pm - 5:00 pm",
    location: "VCMS, Kochi",
  },
  {
    id: 4,
    date: "26 January, 2026",
    title: "Seminar: Digital Transformation in Business",
    image: eventImg4,
    description:
      "Understand how digital technologies are reshaping business operations and career prospects.",
    time: "11:00 am - 1:00 pm",
    location: "Online",
  },
  {
    id: 5,
    date: "30 January, 2026",
    title: "Alumni Success Talk: Real-World Career Insights",
    image: eventImg5,
    description:
      "Hear from VCMS alumni about their journey and success stories in various industries.",
    time: "4:00 pm - 5:30 pm",
    location: "VCMS, Kochi",
  },
  {
    id: 6,
    date: "03 February, 2026",
    title: "Skill Enhancement Session: Interview Preparation",
    image: eventImg6,
    description:
      "Master interview techniques and learn how to showcase your skills effectively to employers.",
    time: "2:30 pm - 4:00 pm",
    location: "VCMS, Kochi",
  },
];

function First() {
  return (
    <>
      <section
        className="shop-area pt-120 pb-120 p-relative "
        data-animation="fadeInUp animated"
        data-delay=".2s"
      >
        <div className="container">
          <div className="row">
            {events.map((event) => (
              <div
                className="col-lg-4 col-md-6 wow fadeInUp animated"
                data-animation="fadeInUp"
                data-delay=".4s"
                key={event.id}
              >
                <div
                  className="event-item mb-30 hover-zoomin"
                  style={{
                    borderRadius: "12px",
                    overflow: "hidden",
                    background: "#f0f7ff",
                    transition: "all 0.3s ease",
                  }}
                >
                  <div className="thumb">
                    <Link to={`/single-event/${event.id}`}>
                      <img src={event.image} alt="contact-bg-an-01" />
                    </Link>
                  </div>
                  <div className="event-content">
                    <div className="date">{event.date}</div>
                    <h3>
                      <Link to={`/single-event/${event.id}`}>
                        {event.title}
                      </Link>
                    </h3>
                    <p>{event.description}</p>
                    <div className="time">
                      {event.time} <i className="fal fa-long-arrow-right" />{" "}
                      <strong>{event.location}</strong>
                    </div>
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
            <div />
          </div> */}
        </div>
      </section>
      <GoToTop />
    </>
  );
}

export default First;
