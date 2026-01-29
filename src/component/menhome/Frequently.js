import React, { useState } from "react";

const faqItems = [
  {
    question: "What are the eligibility requirements for VCMS courses?",
    answer:
      "Most of our diploma programs require +2 (12th standard) or above. However, our Global Business Management program requires a bachelor's degree. Please check individual course pages for specific eligibility criteria.",
  },
  {
    question: "How long are the courses at VCMS?",
    answer:
      "All our core diploma and training programs have a duration of 1 year. This ensures you can quickly upskill and enter the job market without a significant time commitment.",
  },
  {
    question: "Does VCMS provide placement assistance?",
    answer:
      "Yes! VCMS provides 100% placement support to all our students. We have partnerships with major companies across various sectors including logistics, automotive, healthcare, and business management.",
  },
  {
    question: "What study modes are available?",
    answer:
      "We offer flexible online learning through our Learning Management System (LMS) that is accessible 24/7 on mobile phones, tablets, and computers. This allows you to study at your own pace and convenience.",
  },
  {
    question: "How can I contact VCMS teachers and get academic support?",
    answer:
      "You can easily reach our teachers through video chats and emails. We have online forums and dedicated support channels. Our faculty is available to help you whenever you need academic guidance.",
  },
  {
    question: "How many students has VCMS trained?",
    answer:
      "VCMS has successfully trained over 1500+ students and has achieved a 75% placement rate. Our alumni are working across leading organizations in various industries.",
  },
];

function Frequently() {
  const [activeIndex, setActiveIndex] = useState(null);
  const [formData, setFormData] = useState({
    firstn: "",
    email: "",
    phone: "",
    message: "",
  });
  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});

  const handleToggle = (index) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.firstn.trim()) {
      newErrors.firstn = "Name is required";
    }
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is invalid";
    }
    if (!formData.phone.trim()) {
      newErrors.phone = "Phone is required";
    }
    return newErrors;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (touched[name]) {
      const newErrors = { ...errors };
      if (name === "firstn" && !value.trim()) {
        newErrors.firstn = "Name is required";
      } else if (name === "firstn") {
        delete newErrors.firstn;
      }
      if (name === "email" && !value.trim()) {
        newErrors.email = "Email is required";
      } else if (name === "email" && !/\S+@\S+\.\S+/.test(value)) {
        newErrors.email = "Email is invalid";
      } else if (name === "email") {
        delete newErrors.email;
      }
      if (name === "phone" && !value.trim()) {
        newErrors.phone = "Phone is required";
      } else if (name === "phone") {
        delete newErrors.phone;
      }
      setErrors(newErrors);
    }
  };

  const handleBlur = (e) => {
    const { name } = e.target;
    setTouched((prev) => ({ ...prev, [name]: true }));
    const newErrors = { ...errors };
    if (name === "firstn" && !formData.firstn.trim()) {
      newErrors.firstn = "Name is required";
    }
    if (name === "email") {
      if (!formData.email.trim()) {
        newErrors.email = "Email is required";
      } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
        newErrors.email = "Email is invalid";
      }
    }
    if (name === "phone" && !formData.phone.trim()) {
      newErrors.phone = "Phone is required";
    }
    setErrors(newErrors);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = validateForm();
    if (Object.keys(newErrors).length === 0) {
      alert("Form submitted successfully!");
      setFormData({ firstn: "", email: "", phone: "", message: "" });
      setTouched({});
    } else {
      setErrors(newErrors);
      setTouched({ firstn: true, email: true, phone: true });
    }
  };

  return (
    <>
      <section className="faq-area pt-120 pb-120 p-relative fix">
        <div className="container">
          <div className="row justify-content-center  align-items-center">
            <div className="col-lg-7">
              <div className="section-title">
                <h2>Frequently Asked Questions</h2>
                <p>
                  Find answers to common questions about VCMS courses,
                  admission, placement support, and our learning experience.
                </p>
              </div>
              <div className="faq-wrap mt-30 pr-30">
                <div className="accordion" id="accordionExample">
                  {faqItems.map((item, index) => (
                    <div className="card" key={index}>
                      <div className="card-header" id={`heading${index}`}>
                        <h2 className="mb-0">
                          <button
                            className={`faq-btn${
                              activeIndex === index ? "" : " collapsed"
                            }`}
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target={`#collapse${index}`}
                            onClick={() => handleToggle(index)}
                            style={{
                              display: "flex",
                              alignItems: "center",
                              width: "100%",
                              position: "relative",
                            }}
                          >
                            <span style={{ flex: 1 }}>{item.question}</span>
                            <i
                              className="fas fa-chevron-down"
                              style={{
                                width: "36px",
                                height: "36px",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                border: "2px solid #4899d2",
                                borderRadius: "50%",
                                color: "#4899d2",
                                fontSize: "14px",
                                transition: "all 0.3s ease",
                                transform:
                                  activeIndex === index
                                    ? "rotate(-180deg)"
                                    : "rotate(0deg)",
                                flexShrink: 0,
                                backgroundColor:
                                  activeIndex === index
                                    ? "rgba(72, 153, 210, 0.1)"
                                    : "transparent",
                              }}
                            />
                          </button>
                        </h2>
                      </div>
                      <div
                        id={`collapse${index}`}
                        className={`collapse${
                          activeIndex === index ? " show" : ""
                        }`}
                        data-bs-parent="#accordionExample"
                        style={{
                          transition: "all 0.5s cubic-bezier(0.4, 0, 0.2, 1)",
                          maxHeight: activeIndex === index ? "1000px" : "0",
                          overflow: "hidden",
                          opacity: activeIndex === index ? 1 : 0,
                          visibility:
                            activeIndex === index ? "visible" : "hidden",
                          transform:
                            activeIndex === index
                              ? "translateY(0)"
                              : "translateY(-10px)",
                        }}
                      >
                        <div
                          className="card-body"
                          style={{
                            padding: "20px 20px",
                            transition: "all 0.5s cubic-bezier(0.4, 0, 0.2, 1)",
                            backgroundColor:
                              activeIndex === index ? "#f9f9f9" : "transparent",
                            borderLeft:
                              activeIndex === index
                                ? "4px solid #4899d2"
                                : "4px solid transparent",
                            borderRadius: "8px",
                            fontSize: "15px",
                            lineHeight: "1.7",
                            color: "#666",
                          }}
                        >
                          {item.answer}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="col-lg-5">
              <div className="contact-bg02">
                <div className="section-title">
                  <h2>Make An Contact</h2>
                </div>
                <form
                  action="mail.php"
                  method="post"
                  className="contact-form mt-30"
                  onSubmit={handleSubmit}
                >
                  <div className="row">
                    <div className="col-lg-12">
                      <div className="contact-field p-relative c-name mb-20">
                        <input
                          type="text"
                          id="firstn"
                          name="firstn"
                          placeholder="First Name"
                          value={formData.firstn}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          style={{
                            borderColor:
                              errors.firstn && touched.firstn
                                ? "#dc2626"
                                : "#ccc",
                          }}
                        />
                        {errors.firstn && touched.firstn && (
                          <div
                            style={{
                              color: "#dc2626",
                              fontSize: "0.8rem",
                              marginTop: "5px",
                              display: "flex",
                              alignItems: "center",
                              gap: "4px",
                            }}
                          >
                            <i
                              className="fas fa-exclamation-circle"
                              style={{ fontSize: "0.75rem" }}
                            />
                            {errors.firstn}
                          </div>
                        )}
                      </div>
                    </div>
                    <div className="col-lg-12">
                      <div className="contact-field p-relative c-email mb-20">
                        <input
                          type="email"
                          id="email"
                          name="email"
                          placeholder="Email"
                          value={formData.email}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          style={{
                            borderColor:
                              errors.email && touched.email
                                ? "#dc2626"
                                : "#ccc",
                          }}
                        />
                        {errors.email && touched.email && (
                          <div
                            style={{
                              color: "#dc2626",
                              fontSize: "0.8rem",
                              marginTop: "5px",
                              display: "flex",
                              alignItems: "center",
                              gap: "4px",
                            }}
                          >
                            <i
                              className="fas fa-exclamation-circle"
                              style={{ fontSize: "0.75rem" }}
                            />
                            {errors.email}
                          </div>
                        )}
                      </div>
                    </div>
                    <div className="col-lg-12">
                      <div className="contact-field p-relative c-subject mb-20">
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          placeholder="Phone No."
                          value={formData.phone}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          style={{
                            borderColor:
                              errors.phone && touched.phone
                                ? "#dc2626"
                                : "#ccc",
                          }}
                        />
                        {errors.phone && touched.phone && (
                          <div
                            style={{
                              color: "#dc2626",
                              fontSize: "0.8rem",
                              marginTop: "5px",
                              display: "flex",
                              alignItems: "center",
                              gap: "4px",
                            }}
                          >
                            <i
                              className="fas fa-exclamation-circle"
                              style={{ fontSize: "0.75rem" }}
                            />
                            {errors.phone}
                          </div>
                        )}
                      </div>
                    </div>
                    <div className="col-lg-12">
                      <div className="contact-field p-relative c-message mb-30">
                        <textarea
                          name="message"
                          id="message"
                          cols={30}
                          rows={10}
                          placeholder="Write comments"
                          value={formData.message}
                          onChange={(e) =>
                            setFormData((prev) => ({
                              ...prev,
                              message: e.target.value,
                            }))
                          }
                        />
                      </div>
                      <div className="slider-btn">
                        <button className="btn ss-btn" type="submit">
                          <span>Submit Now</span>{" "}
                          <i className="fal fa-long-arrow-right" />
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

export default Frequently;
