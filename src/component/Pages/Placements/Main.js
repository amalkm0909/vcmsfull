import React from "react";
import Header from "../../headerone/Main";
import Bredcom from "../../Bredcom/Main";

function Main() {
  return (
    <>
      <Header />
      <Bredcom title="Home" subtitle="Placements" />
      <section className="about-area about-p pt-120 pb-120 p-relative fix">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="section-title center-align mb-50 wow fadeInDown animated">
                <h2>Placement Corner</h2>
              </div>
              <p className="text-center mb-30">
                At VCMS, we are committed to ensuring 100% placement support for
                our students. Through partnerships with leading companies and
                organizations, we create opportunities for career growth.
              </p>
            </div>
          </div>
          <div className="row mt-50">
            <div className="col-lg-6 col-md-12 mb-30">
              <div className="cta-content">
                <h3>Our Placement Success</h3>
                <ul style={{ marginLeft: "20px" }}>
                  <li>✓ 75% placement rate</li>
                  <li>✓ 1500+ students successfully placed</li>
                  <li>✓ Partnerships with industry leaders</li>
                  <li>✓ 100% placement support and guidance</li>
                  <li>✓ Mock interviews and skill development</li>
                </ul>
              </div>
            </div>
            <div className="col-lg-6 col-md-12 mb-30">
              <div className="cta-content">
                <h3>Recruiting Companies</h3>
                <p className="mb-20">
                  VCMS has placement partnerships with major organizations in:
                </p>
                <ul style={{ marginLeft: "20px" }}>
                  <li>✓ Logistics & Shipping Industry</li>
                  <li>✓ Automotive Sector</li>
                  <li>✓ Healthcare Administration</li>
                  <li>✓ HR & Business Management</li>
                  <li>✓ Global Business Services</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Brand />
    </>
  );
}

export default Main;
