import React from "react";
import directorImg from "../../assets/img/features/director-img.webp";

function DirectorMessage() {
  return (
    <>
      <section className="about-area about-p pt-120 pb-120 p-relative fix">
        <div className="container">
          <div className="row justify-content-center align-items-center">
            <div className="col-lg-6 col-md-12 col-sm-12">
              <div
                className="s-about-img p-relative wow fadeInLeft animated"
                data-animation="fadeInLeft"
                data-delay=".4s"
              >
                <img
                  src={directorImg}
                  alt="Director"
                  style={{
                    borderRadius: "10px",
                    boxShadow: "0 10px 30px rgba(0,0,0,0.2)",
                    width: "100%",
                    height: "auto",
                    cursor: "pointer",
                  }}
                />
                <div
                  className="about-text second-about"
                  style={{
                    marginTop: "30px",
                    position: "relative",
                    zIndex: "1",
                    background: "transparent",
                    padding: "20px 30px",
                    borderRadius: "12px",
                    textAlign: "center",
                    boxShadow: "none",
                    width: "100%",
                    opacity: 1,
                    transform: "translateY(0)",
                    transition: "all 0.4s ease",
                    pointerEvents: "auto",
                  }}
                >
                  <h5
                    style={{
                      fontSize: "26px",
                      fontWeight: "900",
                      color: "#2b2e83",
                      marginBottom: "8px",
                      letterSpacing: "0.5px",
                      textTransform: "uppercase",
                      margin: "0 0 8px 0",
                    }}
                  >
                    Aneesh Viswam
                  </h5>
                  <p
                    style={{
                      fontSize: "14px",
                      fontWeight: "700",
                      color: "#2b2e83",
                      letterSpacing: "1px",
                      marginBottom: "8px",
                      textTransform: "uppercase",
                    }}
                  >
                    Chairman & Managing Director
                  </p>
                  <p
                    style={{
                      fontSize: "12px",
                      fontWeight: "600",
                      color: "#555555",
                      letterSpacing: "0.3px",
                      lineHeight: "1.8",
                      marginBottom: "0",
                    }}
                  >
                    B-Tech in Mechanical Engineering
                    <br />
                    M-Tech in Industrial Engineering and Management
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-12 col-sm-12">
              <div
                className="about-content s-about-content pl-15 wow fadeInRight animated"
                data-animation="fadeInRight"
                data-delay=".4s"
              >
                <div className="about-title second-title pb-25">
                  <h5>
                    <i className="fal fa-graduation-cap" /> Director's Message
                  </h5>
                  <h2>A Word from Our Leadership</h2>
                </div>
                <p className="txt-clr">
                  It gives me immense pleasure to share one milestone of a great
                  journey. The joy is heightened when the journey is towards a
                  vision. In response to the rapidly changing economic
                  environment and the process of globalization, the institute
                  has made a humble beginning to bring quality perspective to
                  all its activities. Learning and growth at VCMS are not
                  confined to classroom and academic experience. Students
                  participate in rich and varied extracurricular and co-
                  curricular activities too. While we feel proud of our
                  achievements, we are not content. Our vision is to emerge as a
                  top ranking management school in India more focusing to
                  national and international placements.
                </p>
                <p>
                  Our aim is to achieve global reorganization as a leading
                  player in the field of management education. Our success in
                  this endeavor has the potential of making our institute one of
                  the most attractive destinations in the world for acquiring
                  management education.
                </p>
                <p>
                  Excellence and Ethics are important elements of VCMS DNA and
                  they should also become part of the DNA of all of you, who
                  pass through the portals of VCMS. This cannot be achieved by
                  us, the faculty alone; it cannot be taught in the classroom.
                  We can help you to develop these attitudes, values and beliefs
                  that form a manager's world view and a professional identity.
                  We can show you the direction; but, you need to take
                  responsibility to learn, to grow and to become responsible,
                  committed and competent leaders.
                </p>
                <p className="mt-20">
                  We at VCMS believe in providing not just placement
                  opportunities and services for our students, rather we believe
                  in 'Career Services' which include Quality Placements, Higher
                  Studies Support, Internship Opportunities, Entrepreneur
                  Support as well as Career Guidance. VCMS P-Cell also focuses
                  on strong Alumni Relations.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default DirectorMessage;
