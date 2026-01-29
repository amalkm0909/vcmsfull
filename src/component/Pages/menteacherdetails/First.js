import React from "react";
import { Link, useSearchParams } from "react-router-dom";
import GoToTop from "../../GoToTop/GoToTop";

function First() {
  const [searchParams] = useSearchParams();
  const teacherId = searchParams.get("id") || 1;

  const teacherProfiles = {
    1: {
      name: "Dr. Ravi Kumar",
      designation: "Head - Management Programs",
      image: "assets/img/team/team01.jpg",
      experience: "20+ Years",
      specialization: "Business Management",
      courses: [
        "Management Fundamentals",
        "Strategic Planning",
        "Leadership Development",
      ],
      students: "150+",
      about:
        "Dr. Ravi Kumar is an accomplished academic with extensive corporate experience. He specializes in Business Management and has led multiple successful initiatives in the corporate sector. His teaching methodology combines theoretical knowledge with practical industry insights.",
      education: "Ph.D. in Business Administration",
      expertise: [
        "Strategic Management",
        "Organizational Development",
        "Business Planning",
        "Leadership Skills",
      ],
      contact: "+91-8593977877",
      email: "ravi.kumar@vcms.in",
    },
    2: {
      name: "Prof. Anjali Sharma",
      designation: "Senior Faculty - Logistics",
      image: "assets/img/team/team02.jpg",
      experience: "18+ Years",
      specialization: "Supply Chain & Logistics",
      courses: [
        "Supply Chain Management",
        "Logistics Operations",
        "Warehouse Management",
      ],
      students: "130+",
      about:
        "Prof. Anjali Sharma brings international expertise in Supply Chain and Logistics. She has worked with leading multinational companies and possesses deep knowledge of logistics operations across various industries.",
      education: "Master's in Logistics Management",
      expertise: [
        "Supply Chain Design",
        "Inventory Management",
        "Distribution Networks",
        "Logistics Technology",
      ],
      contact: "+91-8593977877",
      email: "anjali.sharma@vcms.in",
    },
    3: {
      name: "Mr. Vikram Singh",
      designation: "Faculty - Technology",
      image: "assets/img/team/team03.jpg",
      experience: "16+ Years",
      specialization: "Automotive Technology",
      courses: [
        "Advanced Automotive Technology",
        "Vehicle Mechanics",
        "Automotive Systems",
      ],
      students: "120+",
      about:
        "Mr. Vikram Singh is a technology expert with hands-on experience in the automotive industry. He is passionate about teaching the latest automotive technologies and has conducted numerous training programs.",
      education: "B.Tech in Automotive Engineering",
      expertise: [
        "Automotive Technology",
        "Engine Systems",
        "Vehicle Diagnostics",
        "Hybrid & Electric Vehicles",
      ],
      contact: "+91-8593977877",
      email: "vikram.singh@vcms.in",
    },
  };

  const teacher = teacherProfiles[teacherId] || teacherProfiles[1];

  return (
    <>
      <section
        className="about-area pt-120 pb-120 p-relative fix"
        style={{ background: "#f8f9fa" }}
      >
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-5 col-md-12 mb-30">
              <div className="team-img-box" style={{ textAlign: "center" }}>
                <div
                  style={{
                    width: "100%",
                    height: "400px",
                    borderRadius: "12px",
                    boxShadow: "0 10px 30px rgba(0,0,0,0.10)",
                    background:
                      "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    overflow: "hidden",
                    position: "relative",
                  }}
                >
                  <img
                    src={teacher.image}
                    alt={teacher.name}
                    className="img-fluid"
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      borderRadius: "12px",
                    }}
                    onError={(e) => {
                      e.target.style.display = "none";
                    }}
                  />
                  <div
                    style={{
                      position: "absolute",
                      textAlign: "center",
                      color: "white",
                    }}
                  >
                    <i
                      className="fal fa-user-circle"
                      style={{
                        fontSize: "120px",
                        opacity: 0.8,
                      }}
                    />
                    <p
                      style={{
                        marginTop: "10px",
                        fontSize: "16px",
                        fontWeight: "600",
                      }}
                    >
                      Profile Image
                    </p>
                    <p style={{ fontSize: "12px", opacity: 0.8 }}>
                      (Coming Soon)
                    </p>
                  </div>
                </div>
                <div className="card mt-4 p-3" style={{ borderRadius: "16px" }}>
                  <h4 className="mb-2" style={{ color: "#0f3a5b" }}>
                    Quick Contact
                  </h4>
                  <p className="mb-1">
                    <i
                      className="fal fa-phone"
                      style={{ color: "#4899d2", marginRight: "10px" }}
                    />
                    {teacher.contact}
                  </p>
                  <p className="mb-0">
                    <i
                      className="fal fa-envelope"
                      style={{ color: "#4899d2", marginRight: "10px" }}
                    />
                    {teacher.email}
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-7 col-md-12">
              <div className="s-about-content pl-30">
                <h2 className="mb-2" style={{ color: "#0f3a5b" }}>
                  {teacher.name}
                </h2>
                <p
                  className="mb-3"
                  style={{ color: "#4899d2", fontWeight: "600" }}
                >
                  {teacher.designation}
                </p>
                <div className="row mb-4">
                  <div className="col-md-4 mb-2">
                    <div className="card p-2 text-center">
                      <strong style={{ color: "#0f3a5b" }}>Experience</strong>
                      <p className="mb-0" style={{ color: "#666" }}>
                        {teacher.experience}
                      </p>
                    </div>
                  </div>
                  <div className="col-md-4 mb-2">
                    <div className="card p-2 text-center">
                      <strong style={{ color: "#0f3a5b" }}>Students</strong>
                      <p className="mb-0" style={{ color: "#666" }}>
                        {teacher.students}
                      </p>
                    </div>
                  </div>
                  <div className="col-md-4 mb-2">
                    <div className="card p-2 text-center">
                      <strong style={{ color: "#0f3a5b" }}>
                        Specialization
                      </strong>
                      <p className="mb-0" style={{ color: "#666" }}>
                        {teacher.specialization}
                      </p>
                    </div>
                  </div>
                </div>
                <h3 className="mb-2" style={{ color: "#0f3a5b" }}>
                  About
                </h3>
                <p className="mb-4" style={{ color: "#666" }}>
                  {teacher.about}
                </p>
                <h3 className="mb-2" style={{ color: "#0f3a5b" }}>
                  Education
                </h3>
                <p className="mb-4" style={{ color: "#666" }}>
                  <strong>{teacher.education}</strong>
                </p>
                <Link
                  to="/team"
                  className="btn ss-btn smoth-scroll"
                  style={{
                    background: "#4899d2",
                    color: "#fff",
                    borderRadius: "6px",
                  }}
                >
                  Back to Faculty <i className="fal fa-long-arrow-left ml-2" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      <GoToTop />
    </>
  );
}

export default First;
