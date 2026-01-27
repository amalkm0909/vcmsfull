import React from "react";
import { Link } from "react-router-dom";

function First() {
  const teamMembers = [
    {
      id: 1,
      name: "Dr. Ravi Kumar",
      role: "Head - Management Programs",
      specialization: "Business Management",
      experience: "20+ Years",
      description:
        "Expert in Business Management with extensive corporate and academic experience.",
      icon: "fas fa-briefcase",
    },
    {
      id: 2,
      name: "Prof. Anjali Sharma",
      role: "Senior Faculty - Logistics",
      specialization: "Supply Chain & Logistics",
      experience: "18+ Years",
      description:
        "Specialized in Logistics and Supply Chain Management with international exposure.",
      icon: "fas fa-ship",
    },
    {
      id: 3,
      name: "Mr. Vikram Singh",
      role: "Faculty - Technology",
      specialization: "Automotive Technology",
      experience: "16+ Years",
      description: "Expert in Advanced Automotive Technology and IT solutions.",
      icon: "fas fa-car",
    },
    {
      id: 4,
      name: "Dr. Priya Patel",
      role: "Faculty - Healthcare",
      specialization: "Hospital Administration",
      experience: "15+ Years",
      description:
        "Specialized in Hospital Administration and Healthcare Management.",
      icon: "fas fa-hospital-user",
    },
    {
      id: 5,
      name: "Mr. Arun Kumar",
      role: "Faculty - Placement",
      specialization: "Career Development",
      experience: "14+ Years",
      description:
        "Dedicated to placement assistance and student career development.",
      icon: "fas fa-handshake",
    },
    {
      id: 6,
      name: "Ms. Divya Nair",
      role: "Faculty - Global Business",
      specialization: "International Business",
      experience: "12+ Years",
      description:
        "Expert in Global Business Management and international markets.",
      icon: "fas fa-globe",
    },
  ];

  return (
    <>
      <section
        className="team-area fix p-relative pt-120 pb-120"
        style={{ background: "#ffffff" }}
      >
        <div className="container">
          <div className="row mb-70">
            <div className="col-lg-12">
              <div className="text-center">
                <h2
                  style={{
                    fontSize: "42px",
                    fontWeight: "800",
                    color: "#0f3a5b",
                    marginBottom: "20px",
                  }}
                >
                  Meet Our Expert Faculty
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
                  Our experienced faculty members bring industry expertise,
                  academic excellence, and dedicated mentoring to shape the
                  careers of our students.
                </p>
              </div>
            </div>
          </div>

          <div className="row">
            {teamMembers.map((member) => (
              <div key={member.id} className="col-lg-4 col-md-6 mb-50">
                <Link
                  to={`/team-single?id=${member.id}`}
                  style={{ textDecoration: "none" }}
                >
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
                          className={member.icon}
                          style={{
                            fontSize: "36px",
                            color: "#fff",
                          }}
                        ></i>
                      </div>
                      <h3
                        style={{
                          fontSize: "22px",
                          fontWeight: "700",
                          color: "#0f3a5b",
                          marginBottom: "8px",
                        }}
                      >
                        {member.name}
                      </h3>
                      <p
                        style={{
                          fontSize: "14px",
                          color: "#4899d2",
                          fontWeight: "600",
                          marginBottom: "12px",
                        }}
                      >
                        {member.role}
                      </p>
                      <p
                        style={{
                          fontSize: "16px",
                          color: "#666",
                          marginBottom: "15px",
                          lineHeight: "1.6",
                        }}
                      >
                        {member.description}
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
                            {member.specialization}
                          </p>
                        </div>
                        <div style={{ borderLeft: "1px solid #ddd" }}></div>
                        <div>
                          <p style={{ color: "#999", marginBottom: "5px" }}>
                            Experience
                          </p>
                          <p style={{ color: "#0f3a5b", fontWeight: "600" }}>
                            {member.experience}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default First;
