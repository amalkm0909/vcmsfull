import React from "react";
import { Link } from "react-router-dom";
import "@fortawesome/fontawesome-free/css/all.min.css";
import Slider from "react-slick";
import Background from "../../assets/img/slider/slider_bg.webp";
import Backgroundsix from "../../assets/img/slider/slider_bg_02.webp";
import Backgroundtwo from "../../assets/img/slider/slider_bg_01.webp";
import BackgroundThree from "../../assets/img/slider/slider_bg_03.webp";
import BackgroundFour from "../../assets/img/slider/slider_bg_04.webp";
import BackgroundFive from "../../assets/img/slider/slider_bg_05.webp";
import coursesData from "../../data/coursesData";

function SampleNextArrow(props) {
  const { className, onClick } = props;
  return (
    <button
      type="button"
      className={`slick-next ${className}`}
      onClick={onClick}
    >
      <i className="fas fa-angle-right"></i>
    </button>
  );
}

function SamplePrevArrow(props) {
  const { className, onClick } = props;
  return (
    <button
      type="button"
      className={`slick-prev ${className}`}
      onClick={onClick}
    >
      <i className="fas fa-angle-left"></i>
    </button>
  );
}

function Sliderone() {
  const settings = {
    autoplay: true,
    autoplaySpeed: 10000,
    dots: false,
    fade: true,
    arrows: true,
    prevArrow: <SamplePrevArrow />,
    nextArrow: <SampleNextArrow />,
    responsive: [
      {
        breakpoint: 1200,
        settings: { arrows: false },
      },
    ],
  };

  // Convert coursesData object to array
  const coursesArray = Object.values(coursesData);

  // Array of background images for each slide
  const backgroundImages = [
    Background, // Course 1: Ship Building
    Backgroundtwo, // Course 2: Automotive Technology
    BackgroundThree, // Course 3: HR And Office Administration
    BackgroundFour, // Course 4: Logistics and Shipping
    BackgroundFive, // Course 5: Hospital Administration
    Backgroundsix, // Course 6: Global Business Management (repeating Background)
  ];

  return (
    <>
      {/* ================= SLIDER SECTION ================= */}
      <section id="home" className="slider-area fix p-relative">
        <Slider className="slider-active" {...settings}>
          {coursesArray.map((course, index) => (
            <div key={course.id}>
              <div
                className="single-slider slider-bg"
                style={{
                  backgroundImage: `url(${backgroundImages[index] || Background})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  minHeight: "180px",
                }}
              >
                <div className="container">
                  <div className="row">
                    <div className="col-lg-7 col-md-7">
                      <div className="slider-content mt-130 slider-card-highlight">
                        <h5>welcome To VCMS</h5>
                        <h2>{course.title}</h2>
                        <p>{course.overview.substring(0, 150)}...</p>
                        <div className="slider-btn mt-30">
                          <Link
                            to={`/course-details/${course.id}`}
                            className="btn ss-btn mr-15"
                          >
                            Explore Course{" "}
                            <i className="fal fa-long-arrow-right" />
                          </Link>
                          <Link
                            to="/contact"
                            className="btn ss-btn active contact-highlight"
                          >
                            Apply Now <i className="fal fa-long-arrow-right" />
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </section>
    </>
  );
}

export default Sliderone;
