import React from "react";
import Slider from "react-slick";

function Testimonial() {
  const testimonials = [
    {
      id: 1,
      quote:
        "VCMS transformed my career. The faculty expertise and practical knowledge gained here helped me secure a position at a leading multinational company.",
      name: "Arun Kumar",
      role: "MBA | Finance & Investment",
      image:
        "https://ui-avatars.com/api/?name=Arun+Kumar&background=4899d2&color=fff&bold=true&size=128",
    },
    {
      id: 2,
      quote:
        "The placement support and industry connections at VCMS are exceptional. I landed my dream job within weeks of graduation.",
      name: "Priya Sharma",
      role: "BBA | Marketing & Sales",
      image:
        "https://ui-avatars.com/api/?name=Priya+Sharma&background=ff6b35&color=fff&bold=true&size=128",
    },
    {
      id: 3,
      quote:
        "Outstanding curriculum and mentorship. VCMS provided the perfect blend of theoretical knowledge and real-world skills.",
      name: "Rajesh Menon",
      role: "Advanced Diploma | Business Administration",
      image:
        "https://ui-avatars.com/api/?name=Rajesh+Menon&background=2b2e83&color=fff&bold=true&size=128",
    },
    {
      id: 4,
      quote:
        "The faculty's industry experience and personalized guidance made all the difference in my professional growth.",
      name: "Neha Patel",
      role: "MBA | Human Resource Management",
      image:
        "https://ui-avatars.com/api/?name=Neha+Patel&background=0f3a5b&color=fff&bold=true&size=128",
    },
    {
      id: 5,
      quote:
        "VCMS gave me the confidence and skills to start my own venture. The entrepreneurship program was truly invaluable.",
      name: "Vikram Singh",
      role: "Executive MBA | Operations & Leadership",
      image:
        "https://ui-avatars.com/api/?name=Vikram+Singh&background=4899d2&color=fff&bold=true&size=128",
    },
    {
      id: 6,
      quote:
        "A life-changing experience! VCMS is not just about academics, it's about building lifelong connections and networks.",
      name: "Deepika Nair",
      role: "BBA | Finance & Accounting",
      image:
        "https://ui-avatars.com/api/?name=Deepika+Nair&background=ff6b35&color=fff&bold=true&size=128",
    },
  ];

  let settings = {
    dots: true,
    infinite: true,
    arrows: false,
    speed: 1000,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <>
      <section
        className="testimonial-area pt-120 pb-120 p-relative fix"
        style={{
          background:
            "linear-gradient(135deg, #f5f5f5 0%, #e8f4ff 50%, #f5f5f5 100%)",
          position: "relative",
        }}
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-12 mb-70">
              <div
                className="text-center wow fadeInDown animated"
                data-animation="fadeInDown"
                data-delay=".4s"
              >
                <h5
                  style={{
                    color: "#4899d2",
                    fontSize: "16px",
                    fontWeight: "700",
                    marginBottom: "15px",
                    textTransform: "uppercase",
                    letterSpacing: "1px",
                  }}
                >
                  <i className="fas fa-star" style={{ marginRight: "8px" }} />{" "}
                  Alumni Success Stories
                </h5>

                <h2
                  style={{
                    fontSize: "42px",
                    fontWeight: "800",
                    color: "#0f3a5b",
                    marginBottom: "20px",
                  }}
                >
                  What Our Alumni Say
                </h2>
                <div
                  style={{
                    width: "60px",
                    height: "4px",
                    backgroundColor: "#ff6b35",
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
                  }}
                >
                  Hear from our successful graduates who are making an impact in
                  the industry
                </p>
              </div>
            </div>
            <div className="col-lg-12">
              <Slider
                className="testimonial-active wow fadeInUp animated"
                data-animation="fadeInUp"
                data-delay=".4s"
                {...settings}
              >
                {testimonials.map((testimonial) => (
                  <div
                    key={testimonial.id}
                    className="single-testimonial"
                    style={{
                      padding: "30px",
                      backgroundColor:
                        "linear-gradient(135deg, #ffffff 0%, #f9fafb 100%)",
                      background:
                        "linear-gradient(135deg, #ffffff 0%, #f9fafb 100%)",
                      borderRadius: "12px",
                      boxShadow: "0 4px 15px rgba(0,0,0,0.06)",
                      transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
                      border: "1px solid #efefef",
                      margin: "15px",
                      cursor: "pointer",
                      position: "relative",
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "space-between",
                      minHeight: "380px",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.boxShadow =
                        "0 20px 60px rgba(72, 153, 210, 0.2)";
                      e.currentTarget.style.transform =
                        "scale(1.05) rotateY(0deg)";
                      e.currentTarget.style.borderColor = "#4899d2";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.boxShadow =
                        "0 4px 15px rgba(0,0,0,0.06)";
                      e.currentTarget.style.transform = "scale(1)";
                      e.currentTarget.style.borderColor = "#efefef";
                    }}
                  >
                    <div style={{ flex: 1 }}>
                      <div
                        style={{
                          display: "flex",
                          gap: "5px",
                          marginBottom: "20px",
                          justifyContent: "center",
                        }}
                      >
                        {[...Array(5)].map((_, i) => (
                          <i
                            key={i}
                            className="fas fa-star"
                            style={{
                              color: "#ff6b35",
                              fontSize: "14px",
                            }}
                          ></i>
                        ))}
                      </div>
                      <p
                        className="testimonial-quote"
                        style={{
                          fontSize: "16px",
                          lineHeight: "1.8",
                          color: "#555",
                          marginBottom: "25px",
                          fontWeight: "500",
                          minHeight: "100px",
                        }}
                      >
                        "{testimonial.quote}"
                      </p>
                    </div>
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "15px",
                        paddingTop: "20px",
                        borderTop: "1px solid #e5e5e5",
                      }}
                    >
                      <div className="testi-author">
                        <img
                          src={testimonial.image}
                          alt={testimonial.name}
                          style={{
                            width: "60px",
                            height: "60px",
                            borderRadius: "50%",
                            border: "3px solid #4899d2",
                            objectFit: "cover",
                          }}
                        />
                      </div>
                      <div className="ta-info" style={{ textAlign: "left" }}>
                        <h6
                          style={{
                            fontSize: "15px",
                            fontWeight: "700",
                            color: "#0f3a5b",
                            marginBottom: "3px",
                            margin: "0 0 3px 0",
                          }}
                        >
                          {testimonial.name}
                        </h6>
                        <span
                          style={{
                            fontSize: "12px",
                            color: "#4899d2",
                            fontWeight: "600",
                          }}
                        >
                          {testimonial.role}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </Slider>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Testimonial;
