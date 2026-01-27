import React from "react";

function Touch() {
  const cardStyle = {
    background: "linear-gradient(135deg, #ffffff 0%, #f8f9fa 100%)",
    border: "none",
    borderRadius: "12px",
    padding: "40px 30px",
    boxShadow: "0 5px 20px rgba(0, 0, 0, 0.1)",
    transition: "all 0.3s ease",
    cursor: "pointer",
    minHeight: "280px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  };

  const cardHoverStyle = {
    ...cardStyle,
    transform: "translateY(-10px)",
    boxShadow: "0 15px 40px rgba(0, 0, 0, 0.15)",
  };

  const iconStyle = {
    width: "auto",
    height: "auto",
    margin: "0 auto 25px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  };

  const iconStyleSecond = {
    ...iconStyle,
  };

  const iconStyleThird = {
    ...iconStyle,
  };

  const titleStyle = {
    fontSize: "20px",
    fontWeight: "600",
    color: "#333",
    marginBottom: "10px",
  };

  const labelStyle = {
    fontSize: "14px",
    color: "#999",
    fontWeight: "500",
    letterSpacing: "0.5px",
    textTransform: "uppercase",
  };

  const linkStyle = {
    color: "#333",
    textDecoration: "none",
    transition: "color 0.3s ease",
  };

  return (
    <>
      <section id="services" className="services-area pt-120 pb-90 fix">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div
                className="section-title text-center mb-50 wow fadeInDown animated"
                data-animation="fadeInDown"
                data-delay=".4s"
              >
                <h5>
                  <i className="fal fa-graduation-cap" /> Contact Info
                </h5>
                <h2>Get In Touch</h2>
              </div>
            </div>
          </div>
          <div
            className="row"
            style={{
              gap: "30px",
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <div
              className="col-lg-4"
              style={{ flex: "1 1 calc(33.333% - 20px)" }}
            >
              <div
                className="services-box text-center"
                style={cardStyle}
                onMouseEnter={(e) => {
                  Object.assign(e.currentTarget.style, cardHoverStyle);
                }}
                onMouseLeave={(e) => {
                  Object.assign(e.currentTarget.style, cardStyle);
                }}
              >
                <div className="services-icon" style={iconStyle}>
                  <i
                    className="fas fa-phone"
                    style={{ fontSize: "32px", color: "#667eea" }}
                  />
                </div>
                <div className="services-content2">
                  <h5 style={titleStyle}>
                    <a href="tel:+918593977877" style={linkStyle}>
                      +91-8593977877
                    </a>
                  </h5>
                  <p style={labelStyle}>Phone Support</p>
                </div>
              </div>
            </div>
            <div
              className="col-lg-4"
              style={{ flex: "1 1 calc(33.333% - 20px)" }}
            >
              <div
                className="services-box text-center"
                style={cardStyle}
                onMouseEnter={(e) => {
                  Object.assign(e.currentTarget.style, cardHoverStyle);
                }}
                onMouseLeave={(e) => {
                  Object.assign(e.currentTarget.style, cardStyle);
                }}
              >
                <div className="services-icon" style={iconStyleSecond}>
                  <i
                    className="fas fa-envelope"
                    style={{ fontSize: "32px", color: "#f5576c" }}
                  />
                </div>
                <div className="services-content2">
                  <h5 style={titleStyle}>
                    <a href="mailto:info@vcmskerala.in" style={linkStyle}>
                      info@vcmskerala.in
                    </a>
                  </h5>
                  <p style={labelStyle}>Email Address</p>
                </div>
              </div>
            </div>
            <div
              className="col-lg-4"
              style={{ flex: "1 1 calc(33.333% - 20px)" }}
            >
              <div
                className="services-box text-center"
                style={cardStyle}
                onMouseEnter={(e) => {
                  Object.assign(e.currentTarget.style, cardHoverStyle);
                }}
                onMouseLeave={(e) => {
                  Object.assign(e.currentTarget.style, cardStyle);
                }}
              >
                <div className="services-icon" style={iconStyleThird}>
                  <i
                    className="fas fa-map-marker-alt"
                    style={{ fontSize: "32px", color: "#00f2fe" }}
                  />
                </div>
                <div className="services-content2">
                  <h5 style={titleStyle}>
                    First Floor, Amicus Building, Desabhimani Rd, Kaloor,
                    Ernakulam, Kerala 682017
                  </h5>
                  <p style={labelStyle}>Office Address</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Touch;
