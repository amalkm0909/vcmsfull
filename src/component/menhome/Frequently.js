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

  const handleToggle = (index) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <>
      <section className="faq-area pt-120 pb-120 p-relative fix">
        <div className="animations-10">
          <img src="assets/img/bg/an-img-04.png" alt="an-img-01" />
        </div>
        <div className="animations-08">
          <img src="assets/img/bg/an-img-05.png" alt="contact-bg-an-01" />
        </div>
        <div className="container">
          <div className="row justify-content-center  align-items-center">
            <div className="col-lg-7">
              <div
                className="section-title wow fadeInLeft animated"
                data-animation="fadeInDown animated"
                data-delay=".2s"
              >
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
                          >
                            {item.question}
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
                <div
                  className="section-title wow fadeInDown animated"
                  data-animation="fadeInDown"
                  data-delay=".4s"
                >
                  <h2>Make An Contact</h2>
                </div>
                <form
                  action="mail.php"
                  method="post"
                  className="contact-form mt-30 wow fadeInUp animated"
                  data-animation="fadeInUp"
                  data-delay=".4s"
                >
                  <div className="row">
                    <div className="col-lg-12">
                      <div className="contact-field p-relative c-name mb-20">
                        <input
                          type="text"
                          id="firstn"
                          name="firstn"
                          placeholder="First Name"
                          required=""
                        />
                      </div>
                    </div>
                    <div className="col-lg-12">
                      <div className="contact-field p-relative c-subject mb-20">
                        <input
                          type="text"
                          id="email"
                          name="email"
                          placeholder="Email"
                          required=""
                        />
                      </div>
                    </div>
                    <div className="col-lg-12">
                      <div className="contact-field p-relative c-subject mb-20">
                        <input
                          type="text"
                          id="phone"
                          name="phone"
                          placeholder="Phone No."
                          required=""
                        />
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
                          defaultValue={""}
                        />
                      </div>
                      <div className="slider-btn">
                        <button
                          className="btn ss-btn"
                          data-animation="fadeInRight"
                          data-delay=".8s"
                        >
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
