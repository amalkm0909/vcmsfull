import React, { useState } from "react";
import { Link } from "react-router-dom";
import campusImage from "../../../assets/img/bg/faqvideo.webp";

const faqData = [
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

function First() {
  const [video, setVideo] = useState();

  const [activeIndex, setActiveIndex] = useState(null);

  const handleToggle = (index) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <>
      <section
        className="event event03 pt-150 pb-120 p-relative fix"
        style={{
          backgroundImage: "url(/assets/img/bg/faq-bg.png)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="container">
          <div className="row">
            <div
              className="col-lg-5 col-md-5  wow fadeInUp animated"
              data-animation="fadeInUp"
              data-delay=".4s"
            >
              <div
                className="s-video-wrap2"
                style={{
                  backgroundImage: `url(${campusImage})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",
                  minHeight: "400px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  borderRadius: "50px",
                  overflow: "hidden",
                }}
              >
                <div className="s-video-content text-center">
                  <h6>
                    <Link
                      to="#"
                      className="popup-video mb-50"
                      onClick={() => setVideo(true)}
                    >
                      <img
                        src="assets/img/bg/play-button.png"
                        alt="circle_right"
                      />
                    </Link>
                  </h6>
                </div>
              </div>
            </div>
            <div
              className="col-lg-7 col-md-7  wow fadeInUp animated"
              data-animation="fadeInUp"
              data-delay=".4s"
            >
              <div
                className="faq-wrap pl-30 wow fadeInUp animated"
                data-animation="fadeInUp"
                data-delay=".4s"
              >
                <div className="accordion" id="accordionExample">
                  {faqData.map((item, index) => (
                    <div className="card" key={index}>
                      <div className="card-header" id={item.id}>
                        <h2 className="mb-0">
                          <button
                            className={`faq-btn${activeIndex === index ? "" : " collapsed"}`}
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
                        className={`collapse${activeIndex === index ? " show" : ""}`}
                        data-bs-parent="#accordionExample"
                      >
                        <div className="card-body">{item.answer}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {video && (
        <>
          <div className="mfp-bg mfp-ready"></div>
          <div
            className="mfp-wrap mfp-close-btn-in mfp-auto-cursor mfp-ready"
            tabIndex="-1"
            style={{ overflow: "hidden" }}
          >
            <div className="mfp-container mfp-s-ready mfp-iframe-holder">
              <div className="mfp-content">
                <div className="mfp-iframe-scaler">
                  <button
                    title="Close (Esc)"
                    type="button"
                    className="mfp-close"
                    onClick={() => setVideo(false)}
                  >
                    ×
                  </button>
                  <iframe
                    className="mfp-iframe"
                    src="https://www.youtube.com/embed/DWCBQOHnQvM?autoplay=1"
                    frameBorder="0"
                    allowFullScreen
                  ></iframe>
                </div>
              </div>
              <div className="mfp-preloader">Loading...</div>
            </div>
          </div>
        </>
      )}
    </>
  );
}

export default First;
