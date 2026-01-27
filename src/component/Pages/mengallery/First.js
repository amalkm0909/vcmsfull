import React, { useState } from "react";
import img01 from "../../../assets/img/gallery/protfolio-img01.webp";
import img02 from "../../../assets/img/gallery/protfolio-img02.webp";
import img03 from "../../../assets/img/gallery/protfolio-img03.webp";
import img04 from "../../../assets/img/gallery/protfolio-img04.webp";
import img06 from "../../../assets/img/gallery/protfolio-img06.webp";
import img07 from "../../../assets/img/gallery/protfolio-img07.webp";
import img08 from "../../../assets/img/gallery/protfolio-img08.webp";
import img09 from "../../../assets/img/gallery/protfolio-img09.webp";
import img10 from "../../../assets/img/gallery/protfolio-img10.webp";
import img11 from "../../../assets/img/gallery/protfolio-img11.webp";
import img12 from "../../../assets/img/gallery/protfolio-img12.webp";
import img13 from "../../../assets/img/gallery/protfolio-img13.webp";
import img14 from "../../../assets/img/gallery/protfolio-img14.webp";
import img15 from "../../../assets/img/gallery/protfolio-img15.webp";
import img16 from "../../../assets/img/gallery/protfolio-img16.webp";
import img17 from "../../../assets/img/gallery/protfolio-img17.webp";
import img18 from "../../../assets/img/gallery/protfolio-img18.webp";
import img19 from "../../../assets/img/gallery/protfolio-img19.webp";
import img20 from "../../../assets/img/gallery/protfolio-img20.webp";
// import img21 from "../../../assets/img/gallery/protfolio-img21.jpg";
import img22 from "../../../assets/img/gallery/protfolio-img22.webp";
import img23 from "../../../assets/img/gallery/protfolio-img23.webp";
import img24 from "../../../assets/img/gallery/protfolio-img24.webp";
import img25 from "../../../assets/img/gallery/protfolio-img25.webp";
import img26 from "../../../assets/img/gallery/protfolio-img26.webp";

function First() {
  // Add fade-in animation styles
  const [videoModalIndex, setVideoModalIndex] = useState(null);
  const animationStyles = `
    @keyframes fadeIn {
      from {
        opacity: 0;
        transform: translateY(20px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }
    
    @keyframes shimmer {
      0% {
        left: -100%;
      }
      100% {
        left: 100%;
      }
    }
    
    .gallery-shimmer {
      position: absolute;
      top: 0;
      left: -100%;
      width: 100%;
      height: 100%;
      background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.3), transparent);
      animation: shimmer 2s infinite;
      pointer-events: none;
      z-index: 1;
    }
  `;
  const Data = [
    // {
    //   img: img01,
    //   category: "Campus Life",
    //   title: "Campus Facilities",
    //   details: "Explore our world-class campus infrastructure",
    //   type: "image",
    // },
    // {
    //   img: img02,
    //   category: "Campus Life",
    //   title: "Campus Grounds",
    //   details: "Beautiful campus environment",
    //   type: "image",
    // },
    // {
    //   img: img03,
    //   category: "Academics",
    //   title: "Classroom Learning",
    //   details: "Interactive classroom sessions",
    //   type: "image",
    // },
    // {
    //   img: img04,
    //   category: "Academics",
    //   title: "Academic Programs",
    //   details: "Comprehensive learning experience",
    //   type: "image",
    // },
    // {
    //   img: img06,
    //   category: "Campus Life",
    //   title: "Campus Infrastructure",
    //   details: "Modern facilities and resources",
    //   type: "image",
    // },
    {
      category: "Student Events",
      title: "Event Highlights",
      details: "Memorable moments from our events",
      videoId: "xaJnc2g9gPQ",
      type: "video",
    },
    // {
    //   img: "assets/img/gallery/protfolio-img03.jpg",
    //   category: "Academics",
    //   title: "Classroom Learning",
    //   type: "image",
    // },
    // {
    //   img: "assets/img/gallery/protfolio-img04.jpg",
    //   category: "Placements",
    //   title: "Success Stories",
    //   type: "image",
    // },
    // {
    //   img: "assets/img/gallery/protfolio-img05.jpg",
    //   category: "Campus Life",
    //   title: "Campus Experience",
    //   type: "image",
    // },
    // {
    //   img: "assets/img/gallery/protfolio-img06.jpg",
    //   category: "Campus Life",
    //   title: "Campus Infrastructure",
    //   type: "image",
    // },
    {
      category: "Campus Life",
      title: "Campus Life Highlights",
      details: "Experience our vibrant campus community",
      videoId: "WXhj5oyj-BU",
      type: "video",
    },
    {
      category: "Campus Life",
      title: "campus life",
      details: "Explore our beautiful campus",
      videoId: "zciNPEHV4nk",
      type: "video",
    },
    {
      category: "Campus Life",
      title: "campus life",
      details: "Explore our beautiful campus",
      videoId: "tw2Q0p1AzPo",
      type: "video",
    },
    {
      category: "Campus Life",
      title: "campus life",
      details: "Explore our beautiful campus",
      videoId: "2BgCeIEmE3k",
      type: "video",
    },
    {
      img: img07,
      category: "Placements",
      title: "MASOUDH M P",
      details: "Insurance Coordinator",
      type: "image",
    },
    {
      img: img08,
      category: "Placements",
      title: "NAVEEN JOSEPH JOJI",
      details: "Warehouse Supervisor",
      type: "image",
    },
    {
      img: img09,
      category: "Placements",
      title: "ASIYA BEEVI",
      details: "Guest Relation Executive",
      type: "image",
    },
    {
      img: img10,
      category: "Placements",
      title: "JOVEEN JOHN",
      details: "Warehouse Supervisor",
      type: "image",
    },
    {
      img: img11,
      category: "Placements",
      title: "SAJJAD V T",
      details: "Inventory Supervisor",
      type: "image",
    },
    {
      img: img12,
      category: "Placements",
      title: "NAZEEL N",
      details: "Warehouse Supervisor",
      type: "image",
    },
    {
      img: img13,
      category: "Placements",
      title: "ALAN KUNJUMON",
      details: "NDT Supervisor",
      type: "image",
    },
    {
      img: img14,
      category: "Placements",
      title: "MEGHA AJI",
      details: "Patient Relation Officer",
      type: "image",
    },
    {
      img: img15,
      category: "Placements",
      title: "FASIL T S",
      details: "Container Clearance Supervisor",
      type: "image",
    },
    {
      img: img16,
      category: "Placements",
      title: "FEMINA",
      details: "Public Relation Executive",
      type: "image",
    },
    {
      img: img17,
      category: "Placements",
      title: "NITHEESHA VINCENT",
      details: "Insurance Department",
      type: "image",
    },
    {
      img: img18,
      category: "Placements",
      title: "ATHULYA",
      details: "HR Executive",
      type: "image",
    },
    {
      img: img19,
      category: "Placements",
      title: "PRETTY MATHEW",
      details: "Finance Department",
      type: "image",
    },
    {
      img: img20,
      category: "Placements",
      title: "NAJEEM E N",
      details: "Transportation Coordinator",
      type: "image",
    },
    // {
    //   img: img21,
    //   category: "Placements",
    //   title: "PREETHI",
    //   details: "Patient Care Coordinator",
    //   type: "image",
    // },
    {
      img: img22,
      category: "Placements",
      title: "PARVATHY P",
      details: "Finance Department",
      type: "image",
    },
    {
      img: img23,
      category: "Placements",
      title: "ALFIYA P I",
      details: "Junior Accountant",
      type: "image",
    },
    {
      img: img24,
      category: "Placements",
      title: "SAJNA",
      details: "Business Administrator",
      type: "image",
    },
    {
      img: img25,
      category: "Placements",
      title: "JOSEPH FRANCIS",
      details: "Hull Supervisor",
      type: "image",
    },
    {
      img: img26,
      category: "Placements",
      title: "ARAVIND AV",
      details: "Piping Supervisor",
      type: "image",
    },
    {
      category: "Placements",
      title: "Success Stories",
      details: "Watch our placements in action",
      videoId: "1CyUTyQari8",
      type: "video",
    },
    {
      category: "Placements",
      title: "Student Testimonials",
      details: "Hear from our successful graduates",
      videoId: "vVYnhXNrxjk",
      type: "video",
    },
  ];

  const [current, setcurrent] = useState(Data);
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const Filter = (category) => {
    const arr = [];
    if (category === "View All") {
      setcurrent(Data);
    } else {
      Data.forEach((item) => {
        if (item.category === category) {
          arr.push(item);
        }
      });
      setcurrent(arr);
    }
  };

  return (
    <>
      <style>{animationStyles}</style>
      <section
        id="work"
        className="pt-120 pb-120"
        style={{ backgroundColor: "#f5f5f5" }}
      >
        <div className="container">
          <div className="row mb-70">
            <div className="col-lg-12">
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
                  <i className="fas fa-images" style={{ marginRight: "8px" }} />{" "}
                  Our Gallery
                </h5>
                <h2
                  style={{
                    fontSize: "42px",
                    fontWeight: "800",
                    color: "#0f3a5b",
                    marginBottom: "20px",
                  }}
                >
                  VCMS Campus & Events
                </h2>
                <div
                  style={{
                    width: "60px",
                    height: "4px",
                    backgroundColor: "#003D7A",
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
                    lineHeight: "1.8",
                  }}
                >
                  Explore our vibrant campus life, student activities, academic
                  programs, and placement success stories
                </p>
              </div>
            </div>
          </div>

          <div className="row mb-50">
            <div className="col-lg-12">
              <div
                className="text-center mb-50 wow fadeInUp animated"
                data-animation="fadeInUp"
                data-delay=".4s"
              >
                <div
                  className="button-group filter-button-group"
                  style={{
                    display: "flex",
                    gap: "12px",
                    justifyContent: "center",
                    flexWrap: "wrap",
                  }}
                >
                  <button
                    className="active"
                    data-filter="*"
                    onClick={() => Filter("View All")}
                    style={{
                      padding: "12px 28px",
                      backgroundColor: "#4899d2",
                      color: "#fff",
                      border: "2px solid #4899d2",
                      borderRadius: "6px",
                      fontWeight: "700",
                      fontSize: "14px",
                      cursor: "pointer",
                      transition: "all 0.3s ease",
                    }}
                    onMouseEnter={(e) => {
                      e.target.style.backgroundColor = "transparent";
                      e.target.style.color = "#4899d2";
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.backgroundColor = "#4899d2";
                      e.target.style.color = "#fff";
                    }}
                  >
                    View All
                  </button>
                  <button
                    data-filter=".campus"
                    onClick={() => Filter("Campus Life")}
                    style={{
                      padding: "12px 28px",
                      backgroundColor: "#fff",
                      color: "#4899d2",
                      border: "2px solid #4899d2",
                      borderRadius: "6px",
                      fontWeight: "700",
                      fontSize: "14px",
                      cursor: "pointer",
                      transition: "all 0.3s ease",
                    }}
                    onMouseEnter={(e) => {
                      e.target.style.backgroundColor = "#4899d2";
                      e.target.style.color = "#fff";
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.backgroundColor = "#fff";
                      e.target.style.color = "#4899d2";
                    }}
                  >
                    Campus Life
                  </button>
                  <button
                    data-filter=".events"
                    onClick={() => Filter("Student Events")}
                    style={{
                      padding: "12px 28px",
                      backgroundColor: "#fff",
                      color: "#4899d2",
                      border: "2px solid #4899d2",
                      borderRadius: "6px",
                      fontWeight: "700",
                      fontSize: "14px",
                      cursor: "pointer",
                      transition: "all 0.3s ease",
                    }}
                    onMouseEnter={(e) => {
                      e.target.style.backgroundColor = "#4899d2";
                      e.target.style.color = "#fff";
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.backgroundColor = "#fff";
                      e.target.style.color = "#4899d2";
                    }}
                  >
                    Student Events
                  </button>
                  <button
                    data-filter=".academics"
                    onClick={() => Filter("Academics")}
                    style={{
                      padding: "12px 28px",
                      backgroundColor: "#fff",
                      color: "#4899d2",
                      border: "2px solid #4899d2",
                      borderRadius: "6px",
                      fontWeight: "700",
                      fontSize: "14px",
                      cursor: "pointer",
                      transition: "all 0.3s ease",
                    }}
                    onMouseEnter={(e) => {
                      e.target.style.backgroundColor = "#4899d2";
                      e.target.style.color = "#fff";
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.backgroundColor = "#fff";
                      e.target.style.color = "#4899d2";
                    }}
                  >
                    Academics
                  </button>
                  <button
                    data-filter=".placement"
                    onClick={() => Filter("Placements")}
                    style={{
                      padding: "12px 28px",
                      backgroundColor: "#fff",
                      color: "#4899d2",
                      border: "2px solid #4899d2",
                      borderRadius: "6px",
                      fontWeight: "700",
                      fontSize: "14px",
                      cursor: "pointer",
                      transition: "all 0.3s ease",
                    }}
                    onMouseEnter={(e) => {
                      e.target.style.backgroundColor = "#4899d2";
                      e.target.style.color = "#fff";
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.backgroundColor = "#fff";
                      e.target.style.color = "#4899d2";
                    }}
                  >
                    Placements
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="portfolio">
            <div
              className="grid col3 row wow fadeInUp animated"
              data-animation="fadeInUp"
              data-delay=".4s"
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
                gap: "30px",
                padding: "20px",
              }}
            >
              {current.map((item, Index) => (
                <div
                  key={Index}
                  style={{
                    position: "relative",
                    overflow: "hidden",
                    borderRadius: "16px",
                    boxShadow:
                      "0 8px 32px rgba(0, 0, 0, 0.12), 0 2px 8px rgba(0, 0, 0, 0.08)",
                    transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
                    cursor: "pointer",
                    border: "1px solid rgba(255, 255, 255, 0.1)",
                    animation: `fadeIn 0.6s ease-out ${Index * 0.1}s both`,
                  }}
                  onMouseEnter={(e) => {
                    setHoveredIndex(Index);
                  }}
                  onMouseLeave={(e) => {
                    setHoveredIndex(null);
                  }}
                >
                  <div style={{ textDecoration: "none", display: "block" }}>
                    <figure
                      className="gallery-image"
                      style={{
                        margin: "0",
                        position: "relative",
                        overflow: "hidden",
                      }}
                    >
                      {item.type === "video" ? (
                        <div
                          style={{
                            width: "100%",
                            height: "300px",
                            backgroundColor: "#000",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            position: "relative",
                            borderRadius: "12px",
                          }}
                        >
                          <img
                            src="assets/img/bg/play-button.png"
                            alt="Play Button"
                            style={{
                              width: "80px",
                              height: "80px",
                              position: "absolute",
                              top: "50%",
                              left: "50%",
                              transform: "translate(-50%, -50%)",
                              cursor: "pointer",
                              zIndex: 2,
                              opacity: 0.9,
                            }}
                            onClick={() => setVideoModalIndex(Index)}
                          />
                          <img
                            src={`https://img.youtube.com/vi/${item.videoId}/hqdefault.jpg`}
                            alt={item.title}
                            style={{
                              width: "100%",
                              height: "300px",
                              objectFit: "cover",
                              borderRadius: "12px",
                              filter: "brightness(0.7)",
                            }}
                          />
                        </div>
                      ) : (
                        <img
                          src={item.img}
                          alt={item.title}
                          className="img"
                          style={{
                            width: "100%",
                            height: "300px",
                            objectFit: "cover",
                            transition: "transform 0.4s ease",
                            cursor: "pointer",
                            borderRadius: "16px",
                          }}
                          onMouseEnter={(e) => {
                            e.target.style.transform = "scale(1.1)";
                          }}
                          onMouseLeave={(e) => {
                            e.target.style.transform = "scale(1)";
                          }}
                        />
                      )}
                      {hoveredIndex === Index && (
                        <div className="gallery-shimmer"></div>
                      )}
                      <div
                        style={{
                          position: "absolute",
                          top: "0",
                          left: "0",
                          right: "0",
                          bottom: "0",
                          backgroundColor: "transparent",
                          display: "flex",
                          flexDirection: "column",
                          justifyContent: "flex-end",
                          alignItems: "center",
                          opacity: hoveredIndex === Index ? "1" : "0",
                          transition: "opacity 0.3s ease",
                          gap: "8px",
                          padding: "30px",
                          textAlign: "center",
                        }}
                      >
                        <h4
                          style={{
                            color: "#ffffff",
                            margin: "0",
                            fontSize: "24px",
                            fontWeight: "800",
                            letterSpacing: "0.5px",
                            lineHeight: "1.3",
                            textShadow:
                              "0 2px 8px rgba(0, 0, 0, 0.8), 0 2px 4px rgba(0, 0, 0, 0.6)",
                          }}
                        >
                          {item.title}
                        </h4>
                        {item.details && (
                          <p
                            style={{
                              color: "#ffffff",
                              fontSize: "18px",
                              fontWeight: "700",
                              margin: "8px 0",
                              letterSpacing: "0.3px",
                              textShadow:
                                "0 2px 8px rgba(0, 61, 122, 0.9), 0 2px 4px rgba(0, 0, 0, 0.7)",
                            }}
                          >
                            {item.details}
                          </p>
                        )}
                        <span
                          style={{
                            color: "#ffffff",
                            fontSize: "14px",
                            fontWeight: "600",
                            letterSpacing: "1px",
                            textTransform: "uppercase",
                            textShadow: "0 2px 6px rgba(0, 0, 0, 0.8)",
                          }}
                        >
                          {item.category}
                        </span>
                      </div>
                    </figure>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Video Modal */}
      {videoModalIndex !== null &&
        Data[videoModalIndex] &&
        Data[videoModalIndex].type === "video" && (
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
                      onClick={() => setVideoModalIndex(null)}
                    >
                      ×
                    </button>
                    <iframe
                      className="mfp-iframe"
                      src={`https://www.youtube.com/embed/${Data[videoModalIndex].videoId}`}
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
