import React from "react";

function Shep() {
  const features = [
    {
      icon: "fas fa-clock",
      title: "Flexible Study Time",
      description:
        "Study material available online 24/7. Study in your free time with no time management issues. Perfect balance between work and study.",
    },
    {
      icon: "fas fa-briefcase",
      title: "Placement Assistance",
      description:
        "VCMS Kerala has partnerships with major companies through which thousands of job opportunities are generated. 100% placement support.",
    },
    {
      icon: "fas fa-handshake",
      title: "Easy To Access",
      description:
        "Easy accessibility to online help in terms of online teachers and forums. Teachers can be contacted via video chats and e-mails.",
    },
    {
      icon: "fas fa-mobile-alt",
      title: "Study on the Go",
      description:
        "LMS easily accessible on mobile phones, iPads, computers and other devices for seamless learning anytime, anywhere.",
    },
    {
      icon: "fas fa-lightbulb",
      title: "Innovative Learning",
      description:
        "Multiple sources of learning available including text books, power-point presentations, and story boards on various subjects.",
    },
    {
      icon: "fas fa-laptop",
      title: "Practical & Interactive",
      description:
        "Assessments and interactivities at the end of every session to gauge practical application of theory learnt.",
    },
  ];

  return (
    <>
      <section
        className="steps-area p-relative pt-120 pb-10"
        style={{ backgroundColor: "#ffffff" }}
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-12 mb-70">
              <div
                className="text-center wow fadeInDown animated"
                data-animation="fadeInDown"
                data-delay=".4s"
              >
                <h2
                  style={{
                    fontSize: "42px",
                    fontWeight: "800",
                    color: "#0f3a5b",
                    marginBottom: "20px",
                  }}
                >
                  Why Choose <span style={{ color: "#4899d2" }}>VCMS</span>?
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
                  Discover world-class education with industry-focused training
                  programs, flexible learning, and exceptional placement
                  support.
                </p>
              </div>
            </div>
          </div>

          <div className="row">
            {features.map((feature, index) => (
              <div
                key={`${feature.title}-${index}`}
                className="col-lg-4 col-md-6 mb-40"
              >
                <div
                  className="wow fadeInUp animated"
                  data-animation="fadeInUp"
                  data-delay=".4s"
                  style={{
                    padding: "40px 30px",
                    backgroundColor: "#f9f9f9",
                    borderRadius: "12px",
                    transition: "all 0.35s ease",
                    border: "2px solid #e0e0e0",
                    cursor: "pointer",
                    textAlign: "center",
                    minHeight: "340px",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = "#fff";
                    e.currentTarget.style.borderColor = "#4899d2";
                    e.currentTarget.style.boxShadow =
                      "0 15px 50px rgba(72, 153, 210, 0.35)";
                    e.currentTarget.style.transform =
                      "translateY(-10px) scale(1.15)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = "#f9f9f9";
                    e.currentTarget.style.borderColor = "#e0e0e0";
                    e.currentTarget.style.boxShadow = "none";
                    e.currentTarget.style.transform = "translateY(0) scale(1)";
                  }}
                >
                  <div>
                    <div
                      style={{
                        width: "70px",
                        height: "70px",
                        backgroundColor: "#4899d2",
                        borderRadius: "50%",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        margin: "0 auto 20px",
                        boxShadow: "0 5px 15px rgba(72, 153, 210, 0.3)",
                      }}
                    >
                      <i
                        className={feature.icon}
                        style={{
                          fontSize: "30px",
                          color: "#fff",
                        }}
                      ></i>
                    </div>
                    <h3
                      style={{
                        fontSize: "22px",
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
                      lineHeight: "1.7",
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
    </>
  );
}

export default Shep;
