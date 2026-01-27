import React from "react";
import Slider from "react-slick";
import cert1 from "../../assets/img/brand/certification1.jpg";
import cert2 from "../../assets/img/brand/certification2.png";
import cert3 from "../../assets/img/brand/certification3.png";
import cert4 from "../../assets/img/brand/certification4.jpg";
import cert5 from "../../assets/img/brand/certification5.png";
import cert6 from "../../assets/img/brand/certification6.jpg";
import cert7 from "../../assets/img/brand/certification7.jpg";
import cert8 from "../../assets/img/brand/certification8.png";
import cert9 from "../../assets/img/brand/certification9.jpg";
import cert10 from "../../assets/img/brand/certification10.png";
import cert11 from "../../assets/img/brand/certification11.jpg";

function Redslider() {
  const images = [
    cert1,
    cert2,
    cert3,
    cert4,
    cert5,
    cert6,
    cert7,
    cert8,
    cert9,
    cert10,
    cert11,
  ];

  const settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 1500,
    arrows: false,
    speed: 1000,
    slidesToShow: 4,
    slidesToScroll: 2,
    responsive: [
      {
        breakpoint: 1500,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 3,
          infinite: true,
        },
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div
      className="brand-area pt-60 pb-60"
      style={{ backgroundColor: "#ffffff" }}
    >
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="section-title text-center mb-50">
              <h2>Our Certifications & Partnerships</h2>
              <p>Recognized by industry-leading organizations</p>
            </div>
          </div>
        </div>
        <Slider className="row brand-active" {...settings}>
          {images.map((image, index) => (
            <div key={index} className="col-xl-2">
              <div className="single-brand">
                <img src={image} alt="img" />
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}

export default Redslider;
