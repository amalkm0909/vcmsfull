import React from 'react'

function Certifications() {
  return (
    <>
      <section className="about-area about-p pt-120 pb-120 p-relative fix">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-12">
              <div className="section-title center-align mb-50 wow fadeInDown animated">
                <h5>
                  <i className="fal fa-graduation-cap" /> Certifications
                </h5>
                <h2>VCMS Certificate Bodies</h2>
              </div>
              <p className="text-center mb-40" style={{ fontSize: '16px', lineHeight: '1.8' }}>
                Partnering with globally recognized certification bodies ensures your compliance with international standards and builds trust in your products, services, and processes.
              </p>
            </div>
          </div>

          <div className="row mt-60">
            <div className="col-lg-12">
              <div className="brands-slider text-center">
                <div className="brand-item">
                  <img src="assets/img/brand/brand-01.png" alt="Certification Body" style={{ height: '80px', marginBottom: '15px' }} />
                  <h5>International Certification</h5>
                </div>
                <div className="brand-item">
                  <img src="assets/img/brand/brand-02.png" alt="Certification Body" style={{ height: '80px', marginBottom: '15px' }} />
                  <h5>Industry Standards</h5>
                </div>
                <div className="brand-item">
                  <img src="assets/img/brand/brand-03.png" alt="Certification Body" style={{ height: '80px', marginBottom: '15px' }} />
                  <h5>Quality Assurance</h5>
                </div>
                <div className="brand-item">
                  <img src="assets/img/brand/brand-04.png" alt="Certification Body" style={{ height: '80px', marginBottom: '15px' }} />
                  <h5>Global Recognition</h5>
                </div>
              </div>
            </div>
          </div>

          <div className="row mt-60">
            <div className="col-lg-12 text-center">
              <p style={{ fontSize: '14px', color: '#666' }}>
                All our programs are designed and certified according to international standards, ensuring our graduates are globally competitive and recognized in their respective fields.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Certifications
