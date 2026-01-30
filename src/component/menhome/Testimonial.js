import React, { useState, useEffect } from "react";
import Slider from "react-slick";

function Testimonial() {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 767);
  const [isTablet, setIsTablet] = useState(
    window.innerWidth > 767 && window.innerWidth <= 1024,
  );

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 767);
      setIsTablet(window.innerWidth > 767 && window.innerWidth <= 1024);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
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
      <style>
        {`
          .testimonial-active .slick-slide {
            height: auto;
          }
          .testimonial-active .slick-track {
            display: flex;
            align-items: stretch;
          }
          .testimonial-active .slick-slide > div {
            height: 100%;
          }
          .single-testimonial {
            height: 100%;
          }
          @media (min-width: 768px) {
            .single-testimonial {
              height: 380px !important;
              min-height: 380px !important;
              max-height: 380px !important;
            }
          }
          @media (min-width: 768px) and (max-width: 1024px) {
            .single-testimonial {
              height: 340px !important;
              min-height: 340px !important;
              max-height: 340px !important;
            }
          }
          @media (max-width: 767px) {
            .testimonial-area {
              padding: 30px 0 !important;
            }
            .testimonial-area .container {
              padding-left: 8px !important;
              padding-right: 8px !important;
            }
            .testimonial-active .slick-slide {
              padding: 0 2px !important;
            }
            .testimonial-active .slick-list {
              margin: 0 -2px !important;
            }
            .single-testimonial {
              margin: 3px !important;
              padding: 6px !important;
              height: 130px !important;
              min-height: 130px !important;
              max-height: 130px !important;
            }
            .testimonial-quote {
              font-size: 7px !important;
              line-height: 1.2 !important;
              min-height: auto !important;
              margin-bottom: 0 !important;
            }
            .testimonial-active .slick-dots {
              bottom: -20px !important;
            }
            .testimonial-active .slick-dots li button:before {
              font-size: 5px !important;
            }
            .testimonial-active .slick-dots li {
              margin: 0 1px !important;
            }
          }
          @media (max-width: 480px) {
            .testimonial-area {
              padding: 25px 0 !important;
            }
            .single-testimonial {
              margin: 2px !important;
              padding: 5px !important;
              height: 120px !important;
              min-height: 120px !important;
              max-height: 120px !important;
            }
            .testimonial-quote {
              font-size: 6px !important;
              line-height: 1.15 !important;
            }
          }
        `}
      </style>
      <section
        className="testimonial-area pt-120 pb-120 p-relative fix"
        style={{
          backgroundColor: "#ffffff",
          position: "relative",
          padding: isMobile ? "20px 0" : isTablet ? "60px 0" : "150px 0",
          overflow: "hidden",
        }}
      >
        <div className="container">
          <div className="row">
            <div
              className="col-lg-12"
              style={{ marginBottom: isMobile ? "15px" : "70px" }}
            >
              <div
                className="text-center wow fadeInDown animated"
                data-animation="fadeInDown"
                data-delay=".4s"
                style={{
                  textAlign: isMobile ? "left" : "center",
                  paddingLeft: isMobile ? "10px" : "0",
                }}
              >
                <h5
                  style={{
                    color: "#4899d2",
                    fontSize: isMobile ? "9px" : "16px",
                    fontWeight: "700",
                    marginBottom: isMobile ? "3px" : "15px",
                    textTransform: "uppercase",
                    letterSpacing: "1px",
                  }}
                >
                  <i className="fas fa-star" style={{ marginRight: "5px" }} />{" "}
                  Alumni Success Stories
                </h5>

                <h2
                  style={{
                    fontSize: isMobile ? "16px" : isTablet ? "32px" : "42px",
                    fontWeight: "800",
                    color: "#0f3a5b",
                    marginBottom: isMobile ? "5px" : "20px",
                    lineHeight: isMobile ? "1.1" : "1.2",
                    padding: isMobile ? "0 10px" : "0",
                    wordBreak: "break-word",
                  }}
                >
                  What Our Alumni Say
                </h2>
                <div
                  style={{
                    width: isMobile ? "30px" : "60px",
                    height: isMobile ? "2px" : "4px",
                    backgroundColor: "#ff6b35",
                    margin: isMobile ? "0 auto 8px" : "0 auto 25px",
                    borderRadius: "2px",
                  }}
                ></div>
                <p
                  style={{
                    fontSize: isMobile ? "9px" : "16px",
                    color: "#666",
                    maxWidth: "700px",
                    margin: "0 auto",
                    padding: isMobile ? "0 8px" : "0",
                    display: isMobile ? "none" : "block",
                    overflow: "hidden",
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
                      padding: isMobile ? "8px" : "30px",
                      backgroundColor:
                        "linear-gradient(135deg, #ffffff 0%, #f9fafb 100%)",
                      background:
                        "linear-gradient(135deg, #ffffff 0%, #f9fafb 100%)",
                      borderRadius: isMobile ? "0px" : "12px",
                      boxShadow: "0 4px 15px rgba(0,0,0,0.06)",
                      transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
                      border: "none",
                      margin: isMobile ? "3px" : "15px",
                      cursor: "pointer",
                      position: "relative",
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "space-between",
                      height: isMobile ? "130px" : isTablet ? "340px" : "380px",
                      overflow: "hidden",
                    }}
                    onMouseEnter={(e) => {
                      if (!isMobile) {
                        e.currentTarget.style.boxShadow =
                          "0 20px 60px rgba(72, 153, 210, 0.2)";
                        e.currentTarget.style.transform =
                          "scale(1.05) rotateY(0deg)";
                        e.currentTarget.style.borderColor = "#4899d2";
                      }
                    }}
                    onMouseLeave={(e) => {
                      if (!isMobile) {
                        e.currentTarget.style.boxShadow =
                          "0 4px 15px rgba(0,0,0,0.06)";
                        e.currentTarget.style.transform = "scale(1)";
                        e.currentTarget.style.borderColor = "#efefef";
                      }
                    }}
                  >
                    <div
                      style={{
                        flex: 1,
                        overflow: "hidden",
                        display: "flex",
                        flexDirection: "column",
                      }}
                    >
                      <div
                        style={{
                          display: isMobile ? "none" : "flex",
                          gap: isMobile ? "2px" : "5px",
                          marginBottom: isMobile ? "2px" : "20px",
                          justifyContent: "center",
                          flexShrink: 0,
                        }}
                      >
                        {[...Array(5)].map((_, i) => (
                          <i
                            key={i}
                            className="fas fa-star"
                            style={{
                              color: "#ff6b35",
                              fontSize: isMobile ? "5px" : "14px",
                            }}
                          ></i>
                        ))}
                      </div>
                      <p
                        className="testimonial-quote"
                        style={{
                          fontSize: isMobile ? "6px" : "16px",
                          lineHeight: isMobile ? "1.25" : "1.8",
                          color: "#555",
                          marginBottom: isMobile ? "8px" : "8px",
                          fontWeight: "500",
                          flex: 1,
                          maxHeight: isMobile ? "75px" : "none",
                          overflow: "hidden",
                          display: "-webkit-box",
                          WebkitLineClamp: isMobile ? 5 : 4,
                          WebkitBoxOrient: "vertical",
                        }}
                      >
                        "{testimonial.quote}"
                      </p>
                    </div>
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        gap: isMobile ? "3px" : "12px",
                        paddingTop: isMobile ? "12px" : "20px",
                        paddingBottom: isMobile ? "5px" : "8px",
                        borderTop: isMobile ? "none" : "1px solid #e5e5e5",
                        marginTop: "auto",
                      }}
                    >
                      <div
                        style={{
                          textAlign: "center",
                          flex: 1,
                          minWidth: 0,
                          overflow: "hidden",
                        }}
                      >
                        <h6
                          style={{
                            fontSize: isMobile ? "5px" : "15px",
                            fontWeight: "700",
                            color: "#0f3a5b",
                            margin: "0",
                            padding: "0",
                            lineHeight: isMobile ? "1" : "1.3",
                            whiteSpace: "nowrap",
                            overflow: "hidden",
                            textOverflow: "ellipsis",
                          }}
                        >
                          {testimonial.name}
                        </h6>
                        <span
                          style={{
                            fontSize: isMobile ? "4px" : "12px",
                            color: "#4899d2",
                            fontWeight: "600",
                            display: "block",
                            lineHeight: "1",
                            whiteSpace: "nowrap",
                            overflow: "hidden",
                            textOverflow: "ellipsis",
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
