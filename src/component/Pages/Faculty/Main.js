import React from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";
import Header from "../../headerone/Main";
import Bredcom from "../../Bredcom/Main";
import Redslider from "../../menhome/Redslider";
import GoToTop from "../../GoToTop/GoToTop";
import blogbg6 from "../../../assets/img/bg/banner_all.webp"; // Updated: Added banner image

      <Bredcom
        title="Home"
        subtitle="Faculty"
        bannerImg={blogbg6}
        description="Meet our experienced faculty members who are dedicated to shaping the future through quality education and mentorship."
      /> {/* Updated: Added banner image and description */}
    designation: "Associate Professor",
    specialization: "Mathematics",
    experience: "12 Years",
    description: "Specialist in Applied Mathematics.",
  },
  {
    id: 3,
    name: "Mr. Ravi Nair",
    image: require("../../assets/img/team/team03.jpg"),
    designation: "Assistant Professor",
    specialization: "Physics",
    experience: "10 Years",
    description: "Focus on Quantum Physics.",
  },
  {
    id: 4,
    name: "Dr. Meera Varma",
    image: require("../../assets/img/team/team04.jpg"),
    designation: "Professor",
    specialization: "Chemistry",
    experience: "18 Years",
    description: "Organic Chemistry expert.",
  },
  {
    id: 5,
    name: "Mr. Suresh Babu",
    image: require("../../assets/img/team/team05.png"),
    designation: "Lecturer",
    specialization: "English",
    experience: "8 Years",
    description: "Literature and Communication Skills.",
  },
  {
    id: 6,
    name: "Ms. Lakshmi Pillai",
    image: require("../../assets/img/team/team06.png"),
    designation: "Lecturer",
    specialization: "Economics",
    experience: "7 Years",
    description: "Development Economics specialist.",
  },
];

function Main() {
  return (
    <>
      <Header />
      <Bredcom title="Home" subtitle="Faculty" bannerImg={blogbg6} />

      {/* Hero Section */}
      <section
        className="pt-100 pb-100 p-relative"
        style={{
          background: "linear-gradient(135deg, #0f3a5b 0%, #4899d2 100%)",
          color: "#fff",
        }}
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="text-center">
                <h2
                  style={{
                    fontSize: "48px",
                    fontWeight: "800",
                    lineHeight: "1.4",
                    marginBottom: "20px",
                  }}
                >
                  Meet Our Expert Faculty
                </h2>
                <p
                  style={{
                    fontSize: "18px",
                    opacity: "0.95",
                    maxWidth: "750px",
                    margin: "0 auto",
                    lineHeight: "1.8",
                  }}
                >
                  Our experienced faculty members bring industry expertise,
                  academic excellence, and mentoring excellence to VCMS. They
                  are committed to shaping the careers of our students.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Faculty Grid */}
      <section
        className="pt-120 pb-120 p-relative fix"
        style={{ backgroundColor: "#ffffff" }}
      >
        <div className="container">
          <div className="row">
            {facultyData.map((faculty) => (
              <div key={faculty.id} className="col-lg-4 col-md-6 mb-50">
                <div
                  style={{
                    backgroundColor: "#f8f9fa",
                    borderRadius: "12px",
                    padding: "40px 30px",
                    textAlign: "center",
                    transition: "all 0.35s ease",
                    border: "2px solid transparent",
                    cursor: "pointer",
                    height: "100%",
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
                    e.currentTarget.style.backgroundColor = "#f8f9fa";
                    e.currentTarget.style.borderColor = "transparent";
                    e.currentTarget.style.boxShadow = "none";
                    e.currentTarget.style.transform = "translateY(0)";
                  }}
                >
                  <div>
                    <div
                      style={{
                        width: "120px",
                        height: "120px",
                        borderRadius: "50%",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        margin: "0 auto 25px",
                        boxShadow: "0 5px 15px rgba(72, 153, 210, 0.3)",
                        overflow: "hidden",
                        border: "4px solid #4899d2",
                      }}
                    >
                      <img
                        src={faculty.image}
                        alt={faculty.name}
                        style={{
                          width: "100%",
                          height: "100%",
                          objectFit: "cover",
                        }}
                      />
                    </div>
                    <h3
                      style={{
                        fontSize: "22px",
                        fontWeight: "700",
                        color: "#0f3a5b",
                        marginBottom: "8px",
                      }}
                    >
                      {faculty.name}
                    </h3>
                    <p
                      style={{
                        fontSize: "14px",
                        color: "#4899d2",
                        fontWeight: "600",
                        marginBottom: "12px",
                      }}
                    >
                      {faculty.designation}
                    </p>
                    <p
                      style={{
                        fontSize: "16px",
                        color: "#666",
                        marginBottom: "15px",
                        lineHeight: "1.6",
                      }}
                    >
                      {faculty.description}
                    </p>
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        gap: "20px",
                        fontSize: "14px",
                        marginTop: "15px",
                      }}
                    >
                      <div>
                        <p style={{ color: "#999", marginBottom: "5px" }}>
                          Specialization
                        </p>
                        <p style={{ color: "#0f3a5b", fontWeight: "600" }}>
                          {faculty.specialization}
                        </p>
                      </div>
                      <div style={{ borderLeft: "1px solid #ddd" }}></div>
                      <div>
                        <p style={{ color: "#999", marginBottom: "5px" }}>
                          Experience
                        </p>
                        <p style={{ color: "#0f3a5b", fontWeight: "600" }}>
                          {faculty.experience}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* CTA Section */}
          <div className="row mt-80">
            <div className="col-lg-12">
              <div
                style={{
                  backgroundColor: "#0f3a5b",
                  borderRadius: "12px",
                  padding: "60px 40px",
                  textAlign: "center",
                  color: "#fff",
                }}
              >
                <h3
                  style={{
                    fontSize: "32px",
                    fontWeight: "700",
                    marginBottom: "20px",
                  }}
                >
                  Learn from Industry Experts
                </h3>
                <p
                  style={{
                    fontSize: "16px",
                    marginBottom: "30px",
                    opacity: "0.95",
                    maxWidth: "600px",
                    margin: "0 auto 30px",
                  }}
                >
                  Our faculty is dedicated to providing guidance and mentorship
                  to help you achieve your career goals.
                </p>
                <a
                  href="/contact"
                  style={{
                    display: "inline-block",
                    padding: "14px 50px",
                    backgroundColor: "#4899d2",
                    color: "#fff",
                    textDecoration: "none",
                    borderRadius: "50px",
                    fontWeight: "600",
                    fontSize: "15px",
                    transition: "all 0.4s ease",
                    border: "2px solid #4899d2",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = "transparent";
                    e.currentTarget.style.borderColor = "#fff";
                    e.currentTarget.style.transform = "translateY(-3px)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = "#4899d2";
                    e.currentTarget.style.borderColor = "#4899d2";
                    e.currentTarget.style.transform = "translateY(0)";
                  }}
                >
                  Contact Faculty Coordinator{" "}
                  <i
                    className="fas fa-arrow-right"
                    style={{ marginLeft: "10px" }}
                  ></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Redslider />
      <GoToTop />
    </>
  );
}

export default Main;
