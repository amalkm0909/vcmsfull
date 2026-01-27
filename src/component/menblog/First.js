import React, { useState } from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import innerB1 from "../../assets/img/blog/inner_b1.webp";
import innerB2 from "../../assets/img/blog/inner_b2.webp";
import innerB3 from "../../assets/img/blog/inner_b3.webp";
import blockquoteIcon from "../../assets/img/icon/blockquote.png";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <button
      type="button"
      className={`slick-next ${className}`}
      style={{ ...style }}
      onClick={onClick}
    >
      <i className="fas fa-arrow-right"></i>
    </button>
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <button
      type="button"
      className={`slick-prev ${className}`}
      style={{ ...style }}
      onClick={onClick}
    >
      <i className="fas fa-arrow-left"></i>
    </button>
  );
}

function First() {
  const [video, setVideo] = useState();

  const settings = {
    dots: false,
    infinite: true,
    arrows: true,
    speed: 1500,
    slidestoshow: 1,
    slidesToScroll: 1,
    fade: true,
    prevArrow: <SamplePrevArrow />,
    nextArrow: <SampleNextArrow />,
  };

  return (
    <>
      <section className="inner-blog pt-120 pb-120">
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <div className="bsingle__post mb-50">
                <div className="bsingle__post-thumb">
                  <img
                    src={innerB1}
                    alt=""
                    style={{
                      borderRadius: "12px",
                      height: "350px",
                      objectFit: "cover",
                    }}
                  />
                </div>
                <div className="bsingle__content">
                  <div className="meta-info">
                    <div className="meta-info">
                      <ul>
                        <li>
                          <i className="fal fa-eye" /> 100 Views
                        </li>
                        <li>
                          <i className="fal fa-comments" /> 35 Comments
                        </li>
                        <li>
                          <i className="fal fa-calendar-alt" /> 15th January
                          2026
                        </li>
                      </ul>
                    </div>
                  </div>
                  <h2>
                    <Link to="/blog-details">
                      The Future of Vocational Training: Industry 4.0 Skills
                    </Link>
                  </h2>
                  <p>
                    Discover how vocational education is adapting to meet the
                    demands of modern industries. Learn about automation,
                    digital skills, and emerging technologies shaping the future
                    workforce. Our comprehensive training programs equip
                    students with cutting-edge competencies needed for
                    tomorrow's jobs.
                  </p>
                  <div className="blog__btn">
                    <Link to="/blog-details" className="btn">
                      Read More <i className="fal fa-long-arrow-right" />
                    </Link>
                  </div>
                </div>
              </div>
              <div className="bsingle__post mb-50">
                <div className="bsingle__post-thumb video-p">
                  <img
                    src={innerB2}
                    alt=""
                    style={{
                      borderRadius: "12px",
                      height: "350px",
                      objectFit: "cover",
                    }}
                  />
                  <Link
                    to="#"
                    className="video-i popup-video"
                    onClick={() => setVideo(true)}
                  >
                    <i className="fas fa-play" />
                  </Link>
                </div>
                <div className="bsingle__content">
                  <div className="meta-info">
                    <ul>
                      <li>
                        <i className="fal fa-eye" /> 100 Views
                      </li>
                      <li>
                        <i className="fal fa-comments" /> 35 Comments
                      </li>
                      <li>
                        <i className="fal fa-calendar-alt" /> 24th March 2023
                      </li>
                    </ul>
                  </div>
                  <h2>
                    <Link to="/blog-details">
                      Explore VCMS: Your Gateway to Industry-Ready Skills
                    </Link>
                  </h2>
                  <p>
                    At VCMS, we are dedicated to empowering students with
                    practical, hands-on training that meets the demands of
                    today’s industries. Our programs are designed in
                    collaboration with industry experts, ensuring you gain the
                    skills and knowledge that employers value most. Whether
                    you’re interested in logistics, technology, hospitality, or
                    business, VCMS provides a supportive environment,
                    experienced faculty, and real-world learning opportunities
                    to help you succeed in your chosen career path.
                  </p>
                  <div className="blog__btn">
                    <Link to="/blog-details" className="btn">
                      Read More <i className="fal fa-long-arrow-right" />
                    </Link>
                  </div>
                </div>
              </div>
              <div className="bsingle__post mb-50">
                <Slider
                  className="bsingle__post-thumb blog-active"
                  {...settings}
                >
                  <div className="slide-post">
                    <img
                      src={innerB3}
                      alt=""
                      style={{
                        borderRadius: "12px",
                        height: "400px",
                        objectFit: "cover",
                      }}
                    />
                  </div>
                  <div className="slide-post">
                    <img
                      src={innerB2}
                      alt=""
                      style={{
                        borderRadius: "12px",
                        height: "400px",
                        objectFit: "cover",
                      }}
                    />
                  </div>
                  <div className="slide-post">
                    <img
                      src={innerB1}
                      alt=""
                      style={{
                        borderRadius: "12px",
                        height: "400px",
                        objectFit: "cover",
                      }}
                    />
                  </div>
                </Slider>

                <div className="bsingle__content">
                  <div className="meta-info">
                    <ul>
                      <li>
                        <i className="fal fa-eye" /> 100 Views
                      </li>
                      <li>
                        <i className="fal fa-comments" /> 35 Comments
                      </li>
                      <li>
                        <i className="fal fa-calendar-alt" /> 10th January 2026
                      </li>
                    </ul>
                  </div>
                  <h2>
                    <Link to="/blog-details">
                      How to Choose the Right Vocational Course for Your Career
                      Path
                    </Link>
                  </h2>
                  <p>
                    Choosing a vocational course is a significant decision that
                    impacts your career trajectory. Learn about our diverse
                    course offerings in shipbuilding, automotive, HR
                    administration, logistics, hospitality, and global business.
                    Discover how to identify your interests and find the perfect
                    program that matches your goals and aspirations.
                  </p>
                  <div className="blog__btn">
                    <Link to="/blog-details" className="btn">
                      Read More <i className="fal fa-long-arrow-right" />
                    </Link>
                  </div>
                </div>
              </div>
              <div className="bsingle__post mb-50">
                <div className="bsingle__post-thumb embed-responsive embed-responsive-16by9">
                  <iframe
                    height={300}
                    allow="autoplay"
                    src="https://www.youtube.com/embed/2BgCeIEmE3k"
                    title="YouTube video player"
                    frameBorder="0"
                    allowFullScreen
                    style={{ borderRadius: "12px" }}
                  />
                </div>
                <div className="bsingle__content">
                  <div className="meta-info">
                    <ul>
                      <li>
                        <i className="fal fa-eye" /> 100 Views
                      </li>
                      <li>
                        <i className="fal fa-comments" /> 35 Comments
                      </li>
                      <li>
                        <i className="fal fa-calendar-alt" /> 24th March 2023
                      </li>
                    </ul>
                  </div>
                  <h2>
                    <Link to="/blog-details">
                      Why Choose VCMS for Your Career?
                    </Link>
                  </h2>
                  <p>
                    VCMS stands out for its commitment to student success. Our
                    curriculum is tailored to meet industry standards, and our
                    faculty brings real-world expertise to the classroom. With
                    strong placement support, modern facilities, and a focus on
                    both technical and soft skills, VCMS prepares you to excel
                    in your chosen field and adapt to the evolving demands of
                    the workforce.
                  </p>
                  <div className="blog__btn">
                    <Link to="/blog-details" className="btn">
                      Read More <i className="fal fa-long-arrow-right" />
                    </Link>
                  </div>
                </div>
              </div>
              <div className="bsingle__post mb-50">
                <div className="bsingle__content">
                  <div className="meta-info">
                    <ul>
                      <li>
                        <i className="fal fa-eye" /> 100 Views
                      </li>
                      <li>
                        <i className="fal fa-comments" /> 35 Comments
                      </li>
                      <li>
                        <i className="fal fa-calendar-alt" /> 24th March 2023
                      </li>
                    </ul>
                  </div>
                  <h2>
                    <Link to="/blog-details">
                      Workplace Skills and Soft Skills Training for Career
                      Success
                    </Link>
                  </h2>
                  <p>
                    Beyond technical expertise, employers value soft skills like
                    communication, teamwork, and problem-solving. Our
                    comprehensive training programs integrate workplace skills
                    development alongside technical instruction. Learn how VCMS
                    prepares students not just for jobs, but for successful,
                    fulfilling careers in any industry.
                  </p>
                  <div className="blog__btn">
                    <Link to="/blog-details" className="btn">
                      Read More <i className="fal fa-long-arrow-right" />
                    </Link>
                  </div>
                </div>
              </div>
              <div className="bsingle__post mb-50">
                <div
                  className="bsingle__content quote-post"
                  style={{ backgroundImage: "url(img/bg/quote_bg.png)" }}
                >
                  <div className="meta-info">
                    <ul>
                      <li>
                        <i className="fal fa-eye" /> 100 Views
                      </li>
                      <li>
                        <i className="fal fa-comments" /> 35 Comments
                      </li>
                      <li>
                        <i className="fal fa-calendar-alt" /> 5th January 2026
                      </li>
                    </ul>
                  </div>
                  <div className="quote-icon">
                    <img src={blockquoteIcon} alt="" />
                  </div>
                  <h2>
                    <Link to="/blog-details">
                      Workplace Skills and Soft Skills Training for Career
                      Success
                    </Link>
                  </h2>
                </div>
              </div>
              {/* <div className="pagination-wrap">
                <nav>
                  <ul className="pagination">
                    <li className="page-item">
                      <a href="#">
                        <i className="fas fa-angle-double-left" />
                      </a>
                    </li>
                    <li className="page-item active">
                      <a href="#">1</a>
                    </li>
                    <li className="page-item">
                      <a href="#">2</a>
                    </li>
                    <li className="page-item">
                      <a href="#">3</a>
                    </li>
                    <li className="page-item">
                      <a href="#">...</a>
                    </li>
                    <li className="page-item">
                      <a href="#">10</a>
                    </li>
                    <li className="page-item">
                      <a href="#">
                        <i className="fas fa-angle-double-right" />
                      </a>
                    </li>
                  </ul>
                </nav>
              </div> */}
            </div>
            <div className="col-sm-12 col-md-12 col-lg-4">
              <aside className="sidebar-widget">
                <section
                  id="custom_html-5"
                  className="widget_text widget widget_custom_html"
                >
                  <h2 className="widget-title">Follow Us</h2>
                  <div className="textwidget custom-html-widget">
                    <div className="widget-social">
                      <a href="#">
                        <i className="fab fa-twitter" />
                      </a>
                      <a href="#">
                        <i className="fab fa-pinterest-p" />
                      </a>
                      <a href="#">
                        <i className="fab fa-facebook-f" />
                      </a>
                      <a href="#">
                        <i className="fab fa-instagram" />
                      </a>
                      <a href="#">
                        <i className="fab fa-wordpress" />
                      </a>
                    </div>
                  </div>
                </section>
                <section
                  id="recent-posts-4"
                  className="widget widget_recent_entries"
                >
                  <h2 className="widget-title">Recent Posts</h2>
                  <ul>
                    <li>
                      <Link to="#">
                        VCMS Alumni Success: From Student to Professional
                      </Link>
                      <span className="post-date">January 10, 2026</span>
                    </li>
                    <li>
                      <Link to="#">Placement Drive: 75% Students Placed</Link>
                      <span className="post-date">December 20, 2025</span>
                    </li>
                    <li>
                      <Link to="#">
                        New Course Launch: Global Business Management
                      </Link>
                      <span className="post-date">November 15, 2025</span>
                    </li>
                  </ul>
                </section>
                <section id="tag_cloud-1" className="widget widget_tag_cloud">
                  <h2 className="widget-title">Tags</h2>
                  <div className="tagcloud">
                    <Link
                      to="#"
                      className="tag-cloud-link"
                      style={{ fontSize: "12pt" }}
                    >
                      Placement
                    </Link>
                    <Link
                      to="#"
                      className="tag-cloud-link"
                      style={{ fontSize: "10pt" }}
                    >
                      Industry
                    </Link>
                    <Link
                      to="#"
                      className="tag-cloud-link"
                      style={{ fontSize: "14pt" }}
                    >
                      Training
                    </Link>
                    <Link
                      to="#"
                      className="tag-cloud-link"
                      style={{ fontSize: "12pt" }}
                    >
                      Certification
                    </Link>
                    <Link
                      to="#"
                      className="tag-cloud-link"
                      style={{ fontSize: "16pt" }}
                    >
                      Alumni
                    </Link>
                    <Link
                      to="#"
                      className="tag-cloud-link"
                      style={{ fontSize: "10pt" }}
                    >
                      Success
                    </Link>
                    <Link
                      to="#"
                      className="tag-cloud-link"
                      style={{ fontSize: "12pt" }}
                    >
                      Kerala
                    </Link>
                  </div>
                </section>
              </aside>
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
                    src="https://www.youtube.com/embed/a8C_WR8N5gI?autoplay=1"
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
