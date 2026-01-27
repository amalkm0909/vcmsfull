import React from "react";
import Bredcom from "../../Bredcom/Main";
import Redslider from "../../menhome/Redslider";
import blogbg5 from "../../../assets/img/bg/banner_all.webp"; // Updated: Added banner image

function Main() {
  const campusFeatures = [
    {
      icon: "fas fa-building",
      title: "Modern Infrastructure",
      description:
        "State-of-the-art classrooms, computer labs, and digital learning spaces designed for 21st-century education.",
    },
    {
      icon: "fas fa-people-group",
      title: "Vibrant Community",
      description:
        "Connect with diverse learners, build friendships, and collaborate on projects in a supportive environment.",
    },
    {
      icon: "fas fa-heart",
      title: "Student Support",
      description:
        "We offer mentoring, counseling, and resources to help you succeed academically and personally.",
    },
    {
      icon: "fas fa-gamepad",
      title: "Extracurricular Activities",
      description:
        "Participate in clubs, sports, cultural events, and competitions to develop skills beyond the classroom.",
    },
  ];

  return (
    <>
      <Bredcom
        title="Home"
        subtitle="Campus Life"
        bannerImg={blogbg5}
        description="Experience the vibrant culture, activities, and community that make campus an inspiring place to learn and grow."
      />{" "}
      {/* Updated: Added banner image and description */}
      {/* Hero Section */}
      <section
        className="pt-120 pb-120 p-relative"
        style={{
          background: "linear-gradient(135deg, #0f3a5b 0%, #4899d2 100%)",
          color: "#fff",
        }}
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div
                className="text-center wow fadeInUp"
                data-animation="fadeInUp"
                style={{ paddingBottom: "20px" }}
              >
                <h2
                  style={{
                    fontSize: "50px",
                    fontWeight: "800",
                    lineHeight: "1.4",
                    marginBottom: "25px",
                    letterSpacing: "-0.5px",
                  }}
                >
                  Experience Excellence Beyond Classroom
                </h2>
                <p
                  style={{
                    fontSize: "18px",
                    opacity: "0.95",
                    maxWidth: "750px",
                    margin: "0 auto",
                    lineHeight: "1.8",
                    fontWeight: "400",
                  }}
                >
                  At VCMS, we believe in nurturing not just skilled
                  professionals, but well-rounded individuals with values,
                  ethics, and social responsibility. Our campus is designed to
                  inspire growth, collaboration, and success.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Campus Features Grid */}
      <section
        className="pt-120 pb-120 p-relative fix"
        style={{ backgroundColor: "#ffffff" }}
      >
        <div className="container">
          <div className="row mb-70">
            <div className="col-lg-12">
              <div className="text-center" style={{ paddingBottom: "20px" }}>
                <h2
                  style={{
                    fontSize: "42px",
                    fontWeight: "800",
                    color: "#0f3a5b",
                    marginBottom: "20px",
                  }}
                >
                  Why Choose VCMS Campus Life
                </h2>
                <div
                  style={{
                    width: "60px",
                    height: "4px",
                    backgroundColor: "#4899d2",
                    margin: "0 auto 25px",
                    borderRadius: "2px",
                  }}
                ></div>
                <p
                  style={{
                    fontSize: "16px",
                    color: "#666",
                    maxWidth: "700px",
                    margin: "0 auto",
                    lineHeight: "1.8",
                  }}
                >
                  Discover a comprehensive learning ecosystem that supports your
                  academic, professional, and personal growth.
                </p>
              </div>
            </div>
          </div>

          <div className="row">
            {campusFeatures.map((feature, index) => (
              <div key={index} className="col-lg-4 col-md-6 mb-40">
                <div
                  className="wow fadeInUp"
                  data-animation="fadeInUp"
                  style={{
                    padding: "45px 30px",
                    backgroundColor: "#f9f9f9",
                    borderRadius: "12px",
                    transition: "all 0.35s ease",
                    border: "2px solid transparent",
                    cursor: "pointer",
                    textAlign: "center",
                    minHeight: "380px",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = "#fff";
                    e.currentTarget.style.borderColor = "#4899d2";
                    e.currentTarget.style.boxShadow =
                      "0 12px 45px rgba(72, 153, 210, 0.2)";
                    e.currentTarget.style.transform = "translateY(-8px)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = "#f9f9f9";
                    e.currentTarget.style.borderColor = "transparent";
                    e.currentTarget.style.boxShadow = "none";
                    e.currentTarget.style.transform = "translateY(0)";
                  }}
                >
                  <div>
                    <div
                      style={{
                        width: "80px",
                        height: "80px",
                        backgroundColor: "#4899d2",
                        borderRadius: "50%",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        margin: "0 auto 25px",
                        boxShadow: "0 5px 15px rgba(72, 153, 210, 0.3)",
                      }}
                    >
                      <i
                        className={feature.icon}
                        style={{
                          fontSize: "32px",
                          color: "#fff",
                        }}
                      ></i>
                    </div>
                    <h3
                      style={{
                        fontSize: "24px",
                        fontWeight: "700",
                        marginBottom: "15px",
                        color: "#0f3a5b",
                      }}
                    >
                      {feature.title}
                    </h3>
                  </div>
                  <p
                    style={{
                      fontSize: "15px",
                      lineHeight: "1.8",
                      color: "#666",
                      margin: "0",
                    }}
                  >
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Highlights Section */}
      <section
        className="pt-120 pb-120 p-relative"
        style={{
          backgroundColor: "#f5f5f5",
        }}
      >
        <div className="container">
          <div className="row mb-70">
            <div className="col-lg-12">
              <div className="text-center" style={{ paddingBottom: "30px" }}>
                <h2
                  style={{
                    fontSize: "42px",
                    fontWeight: "800",
                    color: "#0f3a5b",
                    marginBottom: "20px",
                  }}
                >
                  What Makes Us Special
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
            <div className="col-lg-6 mb-40">
              <div
                className="wow fadeInLeft"
                data-animation="fadeInLeft"
                style={{
                  backgroundColor: "#fff",
                  padding: "50px 40px",
                  borderRadius: "12px",
                  boxShadow: "0 5px 30px rgba(0,0,0,0.08)",
                  borderLeft: "5px solid #4899d2",
                  minHeight: "420px",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                }}
              >
                <div>
                  <h3
                    style={{
                      fontSize: "30px",
                      fontWeight: "800",
                      marginBottom: "30px",
                      color: "#0f3a5b",
                      display: "flex",
                      alignItems: "center",
                      gap: "12px",
                    }}
                  >
                    <i
                      className="fas fa-graduation-cap"
                      style={{
                        color: "#4899d2",
                        fontSize: "28px",
                      }}
                    ></i>
                    Academic Excellence
                  </h3>
                  <ul style={{ listStyle: "none", padding: 0 }}>
                    {[
                      "Expert faculty with industry experience",
                      "Hands-on practical learning approach",
                      "Regular workshops and skill enhancement",
                      "Industry-standard curriculum",
                      "Continuous evaluation and feedback",
                    ].map((item, i) => (
                      <li
                        key={i}
                        style={{
                          padding: "14px 0",
                          borderBottom: "1px solid #eee",
                          fontSize: "16px",
                          color: "#666",
                          display: "flex",
                          alignItems: "center",
                          gap: "12px",
                          lineHeight: "1.6",
                        }}
                      >
                        <i
                          className="fas fa-check-circle"
                          style={{
                            color: "#ff6b35",
                            fontSize: "18px",
                            flexShrink: 0,
                          }}
                        ></i>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            <div className="col-lg-6 mb-40">
              <div
                className="wow fadeInRight"
                data-animation="fadeInRight"
                style={{
                  backgroundColor: "#fff",
                  padding: "50px 40px",
                  borderRadius: "12px",
                  boxShadow: "0 5px 30px rgba(0,0,0,0.08)",
                  borderLeft: "5px solid #003D7A",
                  minHeight: "420px",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                }}
              >
                <div>
                  <h3
                    style={{
                      fontSize: "30px",
                      fontWeight: "800",
                      marginBottom: "30px",
                      color: "#0f3a5b",
                      display: "flex",
                      alignItems: "center",
                      gap: "12px",
                    }}
                  >
                    <i
                      className="fas fa-lightbulb"
                      style={{
                        color: "#003D7A",
                        fontSize: "28px",
                      }}
                    ></i>
                    Personal Development
                  </h3>
                  <ul style={{ listStyle: "none", padding: 0 }}>
                    {[
                      "Leadership development programs",
                      "Soft skills training",
                      "Personality and confidence building",
                      "Networking and mentorship opportunities",
                      "Cultural and social awareness",
                    ].map((item, i) => (
                      <li
                        key={i}
                        style={{
                          padding: "14px 0",
                          borderBottom: "1px solid #eee",
                          fontSize: "16px",
                          color: "#666",
                          display: "flex",
                          alignItems: "center",
                          gap: "12px",
                          lineHeight: "1.6",
                        }}
                      >
                        <i
                          className="fas fa-check-circle"
                          style={{
                            color: "#ff6b35",
                            fontSize: "18px",
                            flexShrink: 0,
                          }}
                        ></i>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* CTA Section */}
      <section
        className="pt-100 pb-100 p-relative"
        style={{
          backgroundColor: "#2b2e83",
          color: "#fff",
        }}
      >
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-8">
              <h3
                style={{
                  fontSize: "36px",
                  fontWeight: "800",
                  marginBottom: "18px",
                  lineHeight: "1.4",
                }}
              >
                Ready to Transform Your Future?
              </h3>
              <p
                style={{
                  fontSize: "17px",
                  opacity: "0.95",
                  lineHeight: "1.8",
                  margin: "0",
                }}
              >
                Join thousands of successful students who have shaped their
                careers at VCMS. Start your journey today and become part of our
                thriving campus community.
              </p>
            </div>
            <div className="col-lg-4" style={{ textAlign: "right" }}>
              <a
                href="/contact"
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
                Contact Us{" "}
                <i
                  className="fas fa-arrow-right"
                  style={{ marginLeft: "10px" }}
                ></i>
              </a>
            </div>
          </div>
        </div>
      </section>
      <Redslider />
      {/* <Brand/> */}
    </>
  );
}

export default Main;
