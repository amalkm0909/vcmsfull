import React from "react";

function Highlights() {
  const stats = [
    {
      icon: "fal fa-book",
      number: "6",
      label: "Certified Courses",
      description: "Industry-recognized professional programs",
    },
    {
      icon: "fal fa-users",
      number: "1500+",
      label: "Students Enrolled",
      description: "Building futures through quality education",
    },
    {
      icon: "fal fa-briefcase",
      number: "75%",
      label: "Students Placed",
      description: "100% placement support with industry partnerships",
    },
  ];

  return (
    <>
      <section
        className="counter-area pt-120 pb-120 p-relative fix"
        style={{ backgroundColor: "#0f3a5b" }}
      >
        <div className="container">
          <div className="row">
            {stats.map((stat, index) => (
              <div key={index} className="col-lg-4 col-md-6 col-sm-12 mb-30">
                <div
                  className="counter-box text-center"
                  style={{ color: "#fff", padding: "40px 20px" }}
                >
                  <div className="counter-icon mb-20">
                    <i
                      className={`${stat.icon}`}
                      style={{ fontSize: "50px", color: "#4899d2" }}
                    ></i>
                  </div>
                  <h2
                    className="counter-number"
                    style={{
                      fontSize: "48px",
                      fontWeight: "bold",
                      marginBottom: "10px",
                    }}
                  >
                    {stat.number}
                  </h2>
                  <h3 style={{ fontSize: "20px", marginBottom: "10px" }}>
                    {stat.label}
                  </h3>
                  <p style={{ fontSize: "14px", opacity: "0.9" }}>
                    {stat.description}
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

export default Highlights;
