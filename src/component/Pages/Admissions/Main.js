import React from "react";
import Header from "../../headerone/Main";
import Bredcom from "../../Bredcom/Main";
import Redslider from "../../menhome/Redslider";

function Main() {
  return (
    <>
      <Header />
      <Bredcom title="Home" subtitle="Admissions" />
      <Redslider />
      <section className="about-area about-p pt-120 pb-120 p-relative fix">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="section-title center-align mb-50 wow fadeInDown animated">
                <h2>Admissions at VCMS</h2>
              </div>
              <p className="text-center mb-30">
                Viswam College of Management Studies offers diverse diploma and
                training programs designed to meet industry standards and career
                aspirations. Our admissions process is simple and transparent.
              </p>
            </div>
          </div>
          <div className="row mt-50">
            <div className="col-lg-6 col-md-12 mb-30">
              <div className="cta-content">
                <h3>Eligibility Criteria</h3>
                <ul style={{ marginLeft: "20px" }}>
                  <li>✓ +2 and above for diploma programs</li>
                  <li>✓ Degree holders for advanced programs</li>
                  <li>✓ Interest in professional development</li>
                  <li>✓ Valid educational certificates</li>
                </ul>
              </div>
            </div>
            <div className="col-lg-6 col-md-12 mb-30">
              <div className="cta-content">
                <h3>Application Process</h3>
                <ul style={{ marginLeft: "20px" }}>
                  <li>✓ Submit online application</li>
                  <li>✓ Upload required documents</li>
                  <li>✓ Receive admission confirmation</li>
                  <li>✓ Register and begin your journey</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="row mt-50">
            <div className="col-lg-12 text-center">
              <p className="mb-20">
                For more information, please contact our admissions office.
              </p>
              <a href="tel:+918593977877" className="btn">
                Call Now
              </a>
              <a
                href="mailto:info@vcmskerala.in"
                className="btn btn-secondary"
                style={{ marginLeft: "10px" }}
              >
                Email Us
              </a>
            </div>
          </div>
        </div>
      </section>
      {/* <Brand/> */}
    </>
  );
}

export default Main;
