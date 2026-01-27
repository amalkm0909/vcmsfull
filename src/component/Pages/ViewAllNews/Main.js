import React from "react";
import Bredcom from "../../Bredcom/Main";
import { Link } from "react-router-dom";

function ViewAllNews() {
  const newsItems = [
    {
      id: 1,
      title: "VCMS Announces New Advanced Automotive Technology Program",
      description:
        "We are excited to launch our latest advanced automotive technology program designed for working professionals seeking career growth in the automotive industry.",
      date: "15 January, 2026",
      views: "250",
      comments: "45",
      image: "assets/img/blog/inner_b1.jpg",
    },
    {
      id: 2,
      title: "100% Placement Achievement in Logistics Management Course",
      description:
        "Our flagship Logistics and Shipping Management program has achieved 100% placement for its batch. Congratulations to all our graduates!",
      date: "12 January, 2026",
      views: "180",
      comments: "32",
      image: "assets/img/blog/inner_b2.jpg",
    },
    {
      id: 3,
      title:
        "Industry Partnership: New Opportunities with Fortune 500 Companies",
      description:
        "VCMS has partnered with leading Fortune 500 companies to provide internship and placement opportunities for our students.",
      date: "10 January, 2026",
      views: "320",
      comments: "58",
      image: "assets/img/blog/inner_b3.jpg",
    },
    {
      id: 4,
      title: "Virtual Campus Tour: Explore VCMS Facilities Online",
      description:
        "Take a comprehensive virtual tour of VCMS Kerala campus and discover our state-of-the-art facilities and learning environment.",
      date: "8 January, 2026",
      views: "145",
      comments: "28",
      image: "assets/img/blog/inner_b4.jpg",
    },
    {
      id: 5,
      title: "Scholarship Program Extended for 2026: Apply Now",
      description:
        "We are extending our scholarship program for deserving students. Apply now and avail up to 50% discount on course fees.",
      date: "5 January, 2026",
      views: "290",
      comments: "51",
      image: "assets/img/blog/inner_b5.jpg",
    },
    {
      id: 6,
      title: "Alumni Success Story: From VCMS to International Career",
      description:
        "One of our alumni shares his journey from VCMS to landing a senior management position at an international company.",
      date: "2 January, 2026",
      views: "215",
      comments: "42",
      image: "assets/img/blog/inner_b6.jpg",
    },
  ];

  return (
    <>
      <Bredcom title="Home" subtitle="View All News" />
      <section className="inner-blog pt-120 pb-120">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 offset-lg-2">
              <div className="news-list">
                {newsItems.map((news) => (
                  <div
                    key={news.id}
                    style={{
                      borderBottom: "1px solid #e0e0e0",
                      paddingBottom: "40px",
                      marginBottom: "40px",
                      paddingLeft: "25px",
                      paddingRight: "25px",
                      paddingTop: "25px",
                      borderRadius: "10px",
                      transition: "all 0.3s ease",
                      cursor: "pointer",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.backgroundColor = "#f0f7ff";
                      e.currentTarget.style.boxShadow =
                        "0 15px 40px rgba(72, 153, 210, 0.3)";
                      e.currentTarget.style.transform = "translateY(-8px)";
                      e.currentTarget.style.borderColor = "#4899d2";
                      e.currentTarget.style.borderWidth = "2px";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.backgroundColor = "transparent";
                      e.currentTarget.style.boxShadow = "none";
                      e.currentTarget.style.transform = "translateY(0)";
                      e.currentTarget.style.borderColor = "#e0e0e0";
                      e.currentTarget.style.borderWidth = "1px";
                    }}
                  >
                    <div className="meta-info" style={{ marginBottom: "12px" }}>
                      <span
                        style={{
                          fontSize: "13px",
                          color: "#999",
                        }}
                      >
                        <i className="fal fa-calendar-alt" /> {news.date}
                      </span>
                    </div>
                    <h3
                      style={{
                        fontSize: "24px",
                        fontWeight: "700",
                        marginBottom: "15px",
                        color: "#0f3a5b",
                        lineHeight: "1.4",
                      }}
                    >
                      {news.title}
                    </h3>
                    <p
                      style={{
                        fontSize: "15px",
                        color: "#666",
                        lineHeight: "1.7",
                        marginBottom: "18px",
                      }}
                    >
                      {news.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default ViewAllNews;
