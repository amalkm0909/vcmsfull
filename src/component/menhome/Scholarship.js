import React from "react";
import { Link } from "react-router-dom";

function Scholarship() {
  return (
    <>
      <section
        className="cta-area cta-bg pt-120 pb-120"
        style={{
          background: "linear-gradient(135deg, #0f3a5b 0%, #4899d2 100%)",
          borderRadius: "20px",
          margin: "0 20px",
        }}
      >
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-8">
              <div
                className="section-title cta-title wow fadeInLeft animated"
                data-animation="fadeInDown animated"
                data-delay=".2s"
              >
                <h2
                  style={{
                    fontSize: "42px",
                    fontWeight: "800",
                    lineHeight: "1.4",
                    marginBottom: "20px",
                    color: "#fff",
                  }}
                >
                  Latest News & Updates
                </h2>
                <p
                  style={{
                    fontSize: "16px",
                    lineHeight: "1.8",
                    color: "#fff",
                    opacity: "0.95",
                  }}
                >
                  Stay informed with the latest news, updates, and announcements
                  from VCMS Kerala. Discover industry insights, course launches,
                  placement success stories, and important institutional
                  updates.
                </p>
              </div>
            </div>
            <div className="col-lg-4" style={{ textAlign: "right" }}>
              <div
                className="cta-btn s-cta-btn wow fadeInRight animated"
                data-animation="fadeInDown animated"
                data-delay=".2s"
              >
                <Link
                  to="/view-all-news"
                  style={{
                    display: "inline-block",
                    padding: "16px 45px",
                    backgroundColor: "#fff",
                    color: "#0f3a5b",
                    textDecoration: "none",
                    borderRadius: "50px",
                    fontWeight: "700",
                    fontSize: "16px",
                    transition: "all 0.3s ease",
                    border: "none",
                    boxShadow: "0 8px 25px rgba(0,0,0,0.2)",
                    cursor: "pointer",
                    letterSpacing: "0.5px",
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.backgroundColor = "#ff6b35";
                    e.target.style.color = "#fff";
                    e.target.style.transform = "translateY(-5px)";
                    e.target.style.boxShadow =
                      "0 12px 35px rgba(255, 107, 53, 0.4)";
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.backgroundColor = "#fff";
                    e.target.style.color = "#0f3a5b";
                    e.target.style.transform = "translateY(0)";
                    e.target.style.boxShadow = "0 8px 25px rgba(0,0,0,0.2)";
                  }}
                >
                  View All News{" "}
                  <i
                    className="fas fa-arrow-right"
                    style={{ marginLeft: "8px" }}
                  />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Scholarship;
