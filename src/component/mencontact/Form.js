import React from "react";

function Form() {
  return (
    <>
      <section
        id="contact"
        className="contact-area after-none pt-120 pb-120 p-relative fix"
        style={{
          background: "linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)",
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
        }}
      >
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-10">
              <div className="section-title center-align text-center mb-60">
                <h5
                  style={{
                    color: "#2b2e83",
                    fontSize: "1.1rem",
                    fontWeight: 600,
                  }}
                >
                  <i className="fal fa-graduation-cap" /> Get in Touch
                </h5>
                <h2
                  style={{
                    color: "#1a1a2e",
                    fontSize: "2.5rem",
                    fontWeight: 700,
                    marginTop: "15px",
                  }}
                >
                  Enquire Now
                </h2>
                <p
                  style={{
                    color: "#555",
                    fontSize: "1.1rem",
                    marginTop: "15px",
                    maxWidth: "600px",
                    margin: "15px auto",
                  }}
                >
                  Fill out the form below and our team will get in touch with
                  you soon to help you choose the right course.
                </p>
              </div>
            </div>
          </div>

          <div className="row justify-content-center">
            <div className="col-lg-9">
              <div
                className="contact-bg w-100 wow fadeInUp animated"
                data-animation="fadeInUp"
                data-delay=".4s"
                style={{
                  background: "#fff",
                  borderRadius: "20px",
                  boxShadow: "0 20px 60px 0 rgba(60, 120, 216, 0.15)",
                  padding: "50px 45px",
                  backdropFilter: "blur(10px)",
                  border: "1px solid rgba(255, 255, 255, 0.7)",
                }}
              >
                <form action="#" method="post" className="contact-form">
                  <div className="row">
                    <div className="col-lg-6">
                      <div className="contact-field p-relative c-name mb-30">
                        <label
                          style={{
                            display: "block",
                            marginBottom: "8px",
                            color: "#333",
                            fontWeight: 500,
                            fontSize: "0.95rem",
                          }}
                        >
                          First Name *
                        </label>
                        <input
                          type="text"
                          id="firstn"
                          name="firstn"
                          placeholder="Enter your first name"
                          required
                          style={{
                            width: "100%",
                            background:
                              "linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)",
                            border: "2px solid #e0e7ff",
                            borderRadius: "10px",
                            fontSize: "1rem",
                            padding: "14px 16px",
                            transition: "all 0.3s ease",
                            outline: "none",
                            boxSizing: "border-box",
                          }}
                          onFocus={(e) => {
                            e.target.style.borderColor = "#2563eb";
                            e.target.style.boxShadow =
                              "0 0 0 3px rgba(37, 99, 235, 0.1)";
                          }}
                          onBlur={(e) => {
                            e.target.style.borderColor = "#e0e7ff";
                            e.target.style.boxShadow = "none";
                          }}
                        />
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="contact-field p-relative c-name mb-30">
                        <label
                          style={{
                            display: "block",
                            marginBottom: "8px",
                            color: "#333",
                            fontWeight: 500,
                            fontSize: "0.95rem",
                          }}
                        >
                          Last Name *
                        </label>
                        <input
                          type="text"
                          id="lastn"
                          name="lastn"
                          placeholder="Enter your last name"
                          required
                          style={{
                            width: "100%",
                            background:
                              "linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)",
                            border: "2px solid #e0e7ff",
                            borderRadius: "10px",
                            fontSize: "1rem",
                            padding: "14px 16px",
                            transition: "all 0.3s ease",
                            outline: "none",
                            boxSizing: "border-box",
                          }}
                          onFocus={(e) => {
                            e.target.style.borderColor = "#2563eb";
                            e.target.style.boxShadow =
                              "0 0 0 3px rgba(37, 99, 235, 0.1)";
                          }}
                          onBlur={(e) => {
                            e.target.style.borderColor = "#e0e7ff";
                            e.target.style.boxShadow = "none";
                          }}
                        />
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="contact-field p-relative c-email mb-30">
                        <label
                          style={{
                            display: "block",
                            marginBottom: "8px",
                            color: "#333",
                            fontWeight: 500,
                            fontSize: "0.95rem",
                          }}
                        >
                          Email *
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          placeholder="Enter your email"
                          required
                          style={{
                            width: "100%",
                            background:
                              "linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)",
                            border: "2px solid #e0e7ff",
                            borderRadius: "10px",
                            fontSize: "1rem",
                            padding: "14px 16px",
                            transition: "all 0.3s ease",
                            outline: "none",
                            boxSizing: "border-box",
                          }}
                          onFocus={(e) => {
                            e.target.style.borderColor = "#2563eb";
                            e.target.style.boxShadow =
                              "0 0 0 3px rgba(37, 99, 235, 0.1)";
                          }}
                          onBlur={(e) => {
                            e.target.style.borderColor = "#e0e7ff";
                            e.target.style.boxShadow = "none";
                          }}
                        />
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="contact-field p-relative c-subject mb-30">
                        <label
                          style={{
                            display: "block",
                            marginBottom: "8px",
                            color: "#333",
                            fontWeight: 500,
                            fontSize: "0.95rem",
                          }}
                        >
                          Phone No. *
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          placeholder="Enter your phone number"
                          required
                          style={{
                            width: "100%",
                            background:
                              "linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)",
                            border: "2px solid #e0e7ff",
                            borderRadius: "10px",
                            fontSize: "1rem",
                            padding: "14px 16px",
                            transition: "all 0.3s ease",
                            outline: "none",
                            boxSizing: "border-box",
                          }}
                          onFocus={(e) => {
                            e.target.style.borderColor = "#2563eb";
                            e.target.style.boxShadow =
                              "0 0 0 3px rgba(37, 99, 235, 0.1)";
                          }}
                          onBlur={(e) => {
                            e.target.style.borderColor = "#e0e7ff";
                            e.target.style.boxShadow = "none";
                          }}
                        />
                      </div>
                    </div>
                    <div className="col-lg-12">
                      <div className="contact-field p-relative c-subject mb-30">
                        <label
                          style={{
                            display: "block",
                            marginBottom: "8px",
                            color: "#333",
                            fontWeight: 500,
                            fontSize: "0.95rem",
                          }}
                        >
                          Interested Course *
                        </label>
                        <select
                          id="course"
                          name="course"
                          className="form-control"
                          required
                          style={{
                            width: "100%",
                            background:
                              "linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)",
                            border: "2px solid #e0e7ff",
                            borderRadius: "10px",
                            fontSize: "1rem",
                            padding: "14px 16px",
                            transition: "all 0.3s ease",
                            outline: "none",
                            boxSizing: "border-box",
                            cursor: "pointer",
                          }}
                          onFocus={(e) => {
                            e.target.style.borderColor = "#2563eb";
                            e.target.style.boxShadow =
                              "0 0 0 3px rgba(37, 99, 235, 0.1)";
                          }}
                          onBlur={(e) => {
                            e.target.style.borderColor = "#e0e7ff";
                            e.target.style.boxShadow = "none";
                          }}
                        >
                          <option value="">-- Select a Course --</option>
                          <option value="Ship Building And Repair Management">
                            Ship Building And Repair Management
                          </option>
                          <option value="Advanced Automotive Technology">
                            Advanced Automotive Technology
                          </option>
                          <option value="HR & Office Administration">
                            HR & Office Administration
                          </option>
                          <option value="Logistics & Shipping Management">
                            Logistics & Shipping Management
                          </option>
                          <option value="Hospital Administration & Accounting">
                            Hospital Administration & Accounting
                          </option>
                          <option value="Global Business Management">
                            Global Business Management
                          </option>
                        </select>
                      </div>
                    </div>
                    <div className="col-lg-12">
                      <div className="contact-field p-relative c-message mb-30">
                        <label
                          style={{
                            display: "block",
                            marginBottom: "8px",
                            color: "#333",
                            fontWeight: 500,
                            fontSize: "0.95rem",
                          }}
                        >
                          Message
                        </label>
                        <textarea
                          name="message"
                          id="message"
                          cols={30}
                          rows={5}
                          placeholder="Tell us about your interest and background"
                          style={{
                            width: "100%",
                            background:
                              "linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)",
                            border: "2px solid #e0e7ff",
                            borderRadius: "10px",
                            fontSize: "1rem",
                            padding: "14px 16px",
                            transition: "all 0.3s ease",
                            outline: "none",
                            boxSizing: "border-box",
                            fontFamily: "inherit",
                            resize: "none",
                          }}
                          onFocus={(e) => {
                            e.target.style.borderColor = "#2563eb";
                            e.target.style.boxShadow =
                              "0 0 0 3px rgba(37, 99, 235, 0.1)";
                          }}
                          onBlur={(e) => {
                            e.target.style.borderColor = "#e0e7ff";
                            e.target.style.boxShadow = "none";
                          }}
                        />
                      </div>
                    </div>
                    <div className="col-lg-12">
                      <div className="slider-btn text-center mt-4">
                        <button
                          className="btn ss-btn"
                          type="submit"
                          style={{
                            background:
                              "linear-gradient(135deg, #2563eb 0%, #1d4ed8 100%)",
                            color: "#fff",
                            fontWeight: 600,
                            fontSize: "1.05rem",
                            borderRadius: "12px",
                            padding: "16px 50px",
                            border: "none",
                            boxShadow: "0 8px 24px 0 rgba(37, 99, 235, 0.3)",
                            transition: "all 0.3s ease",
                            cursor: "pointer",
                          }}
                          onMouseEnter={(e) => {
                            e.target.style.boxShadow =
                              "0 12px 32px 0 rgba(37, 99, 235, 0.4)";
                            e.target.style.transform = "translateY(-2px)";
                          }}
                          onMouseLeave={(e) => {
                            e.target.style.boxShadow =
                              "0 8px 24px 0 rgba(37, 99, 235, 0.3)";
                            e.target.style.transform = "translateY(0)";
                          }}
                        >
                          Submit Enquiry{" "}
                          <i
                            className="fal fa-long-arrow-right"
                            style={{ marginLeft: "8px" }}
                          />
                        </button>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Form;
