import React from "react";
import { Link } from "react-router-dom";
import bDetails01 from "../../assets/img/blog/b_details01.webp";
import bDetails02 from "../../assets/img/blog/inner_b1.webp";
import bDetails03 from "../../assets/img/blog/inner_b2.webp";
import bDetails04 from "../../assets/img/blog/inner_b3.webp";
import avatarImg from "../../assets/img/blog/comment/avatar.png";
import c01 from "../../assets/img/blog/comment/c_01.png";
import c02 from "../../assets/img/blog/comment/c_02.png";
import c03 from "../../assets/img/blog/comment/c_03.png";

function First() {
  return (
    <>
      <section className="inner-blog b-details-p pt-120 pb-120">
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <div className="blog-details-wrap">
                <div className="details__content pb-30">
                  <h2>
                    The Future of Vocational Training: Industry 4.0 Skills
                  </h2>
                  <div className="meta-info">
                    <ul>
                      <li>
                        <i className="fal fa-eye" /> 250 Views
                      </li>
                      <li>
                        <i className="fal fa-comments" /> 42 Comments
                      </li>
                      <li>
                        <i className="fal fa-calendar-alt" /> 15th January 2026
                      </li>
                    </ul>
                  </div>
                  <p>
                    The landscape of vocational training is undergoing a
                    significant transformation as industries adopt Industry 4.0
                    technologies. From automation and robotics to data analytics
                    and cybersecurity, the skills demanded by employers are
                    evolving rapidly. At VCMS, we recognize these changes and
                    continuously update our curriculum to stay ahead of industry
                    trends.
                  </p>
                  <p>
                    Our comprehensive training programs integrate cutting-edge
                    technologies with hands-on practical experience. Whether
                    you're studying shipbuilding, automotive manufacturing, HR
                    administration, or logistics management, you'll gain
                    exposure to the latest tools and methodologies used in these
                    fields. We partner with leading industry players to ensure
                    our students are not just learning theory, but acquiring
                    real-world, market-ready skills that employers are actively
                    seeking.
                  </p>
                  <blockquote>
                    <footer>By VCMS Training Team</footer>
                    <h3>
                      The professionals of tomorrow need to be adaptable,
                      tech-savvy, and ready to embrace continuous learning.
                      That's what we provide at VCMS.
                    </h3>
                  </blockquote>
                  <p>
                    Our career support services extend beyond graduation. We
                    provide job placement assistance, interview preparation, and
                    ongoing professional development opportunities. Many of our
                    graduates have become industry leaders and mentors, helping
                    shape the next generation of skilled professionals. Join us
                    and become part of a thriving community of successful
                    vocational professionals.
                  </p>
                  <div className="details__content-img">
                    <img
                      src={bDetails01}
                      alt=""
                      style={{
                        borderRadius: "12px",
                        width: "100%",
                        height: "350px",
                        objectFit: "cover",
                      }}
                    />
                  </div>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.Duis
                    aute irure dolor in reprehenderit in voluptate velit esse
                    cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat non proident, sunt in culpa qui officia
                    deser unt mollit anim id est laborum. Sed ut perspiciatis
                    unde omnis iste natus error sit voluptatem accusan tium
                    doloremque laudantium, totam rem aperiam, eaque ipsa quae ab
                    illo inventore veritatis et quasi archi tecto beatae vitae
                    dicta sunt explicabo. Nemo enim ipsam voluptatem quia
                    voluptas sit asperna tur aut odit aut fugit, sed quia
                    consequuntur magni dolores eos qui ratione voluptatem sequi
                    nesciunt. Neque porro quisquam est, qui dolorem ipsum quia
                    dolor sit amet, consectetur, adipisci velit, sed quia non
                    num quam eius modi tempora incidunt ut labore et dolore
                    magnam aliquam quaerat voluptatem. Lorem ipsum dolor sit
                    amet,consectetur adipisicing elit, sed do eiusmod
                    incididunt.
                  </p>
                  <div className="row">
                    <div className="col-xl-12 col-md-12">
                      <div className="post__tag">
                        <h5>Related Tags</h5>
                        <ul>
                          <li>
                            <a href="#">Vocational Training</a>
                          </li>
                          <li>
                            <a href="#">Industry 4.0</a>
                          </li>
                          <li>
                            <a href="#">Skill Development</a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="related__post mt-45 mb-85">
                  <div className="post-title">
                    <h4>Related Post</h4>
                  </div>
                  <div className="row">
                    <div className="col-md-6">
                      <div
                        className="related-post-wrap mb-30"
                        style={{
                          display: "flex",
                          flexDirection: "column",
                          height: "100%",
                        }}
                      >
                        <div
                          className="post-thumb"
                          style={{ flex: "0 0 auto" }}
                        >
                          <img
                            src={bDetails03}
                            alt=""
                            style={{
                              borderRadius: "12px",
                              width: "100%",
                              height: "250px",
                              objectFit: "cover",
                              display: "block",
                            }}
                          />
                        </div>
                        <div
                          className="rp__content"
                          style={{ flex: "1 1 auto", padding: "15px 0" }}
                        >
                          <h3>
                            <a href="#">
                              How to Choose the Right Vocational Course
                            </a>
                          </h3>
                          <p>
                            Discover how to identify the perfect course that
                            matches your career goals, interests, and long-term
                            aspirations in vocational education.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div
                        className="related-post-wrap mb-30"
                        style={{
                          display: "flex",
                          flexDirection: "column",
                          height: "100%",
                        }}
                      >
                        <div
                          className="post-thumb"
                          style={{ flex: "0 0 auto" }}
                        >
                          <img
                            src={bDetails04}
                            alt=""
                            style={{
                              borderRadius: "12px",
                              width: "100%",
                              height: "250px",
                              objectFit: "cover",
                              display: "block",
                            }}
                          />
                        </div>
                        <div
                          className="rp__content"
                          style={{ flex: "1 1 auto", padding: "15px 0" }}
                        >
                          <h3>
                            <a href="#">
                              Industry Partnerships and Career Opportunities
                            </a>
                          </h3>
                          <p>
                            Learn how our strong industry partnerships create
                            internship opportunities, mentorship, and direct
                            placement pathways for our graduates.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="avatar__wrap text-center mb-45">
                  <div className="avatar__info">
                    <h5>VCMS Training Team</h5>
                    <div className="avatar__info-social">
                      <a href="#">
                        <i className="fab fa-facebook-f" />
                      </a>
                      <a href="#">
                        <i className="fab fa-twitter" />
                      </a>
                      <a href="#">
                        <i className="fab fa-instagram" />
                      </a>
                      <a href="#">
                        <i className="fab fa-linkedin" />
                      </a>
                    </div>
                  </div>
                  <div className="avatar__wrap-content">
                    <p>
                      The VCMS Training Team comprises industry experts,
                      experienced educators, and career counselors dedicated to
                      providing world-class vocational education. With years of
                      experience in their respective fields, our team is
                      committed to helping students achieve their career goals
                      and excel in their chosen professions.
                    </p>
                  </div>
                </div>
                <div className="comment__wrap pb-45">
                  <div className="comment__wrap-title">
                    <h5>Comments</h5>
                  </div>
                  <div className="single__comment mb-35">
                    <div className="comment-text">
                      <div className="avatar-name mb-15">
                        <h6>Rajesh Kumar</h6>
                        <span>14th January 2026</span>
                      </div>
                      <p>
                        Excellent article! The training program at VCMS has
                        truly transformed my career. The hands-on experience and
                        industry partnerships are unmatched. I'm now working as
                        a logistics manager at a leading company.
                      </p>
                      <a
                        href="#reply-title"
                        className="comment-reply mt-15"
                        onClick={(e) => {
                          e.preventDefault();
                          document
                            .getElementById("reply-title")
                            .scrollIntoView({ behavior: "smooth" });
                        }}
                      >
                        <i className="fas fa-reply" /> Reply
                      </a>
                    </div>
                  </div>
                  <div className="single__comment children mb-35">
                    <div className="comment-text">
                      <div className="avatar-name mb-15">
                        <h6>
                          Priya Sharma <i className="fas fa-bookmark" />
                        </h6>
                        <span>13th January 2026</span>
                      </div>
                      <p>
                        Great insights! I'm currently enrolled in the HR
                        Administration course and can confirm everything
                        mentioned here is accurate. The curriculum is
                        comprehensive and very industry-relevant.
                      </p>
                      <a
                        href="#reply-title"
                        className="comment-reply mt-15"
                        onClick={(e) => {
                          e.preventDefault();
                          document
                            .getElementById("reply-title")
                            .scrollIntoView({ behavior: "smooth" });
                        }}
                      >
                        <i className="fas fa-reply" /> Reply
                      </a>
                    </div>
                  </div>
                  <div className="single__comment">
                    <div className="comment-text">
                      <div className="avatar-name mb-15">
                        <h6>Arjun Patel</h6>
                        <span>12th January 2026</span>
                      </div>
                      <p>
                        The automotive course at VCMS prepared me brilliantly
                        for the industry. The trainers are highly experienced
                        and the facilities are world-class. Highly recommend
                        this institute.
                      </p>
                      <a
                        href="#reply-title"
                        className="comment-reply mt-15"
                        onClick={(e) => {
                          e.preventDefault();
                          document
                            .getElementById("reply-title")
                            .scrollIntoView({ behavior: "smooth" });
                        }}
                      >
                        <i className="fas fa-reply" /> Reply
                      </a>
                    </div>
                  </div>
                </div>
                <div id="comments" className="comments-area  mt-45">
                  <div id="respond" className="comment-respond">
                    <h3 id="reply-title" className="comment-reply-title">
                      Leave a Reply{" "}
                      <small>
                        <a
                          rel="nofollow"
                          id="cancel-comment-reply-link"
                          href="/finco/?p=2112#respond"
                          style={{ display: "none" }}
                        >
                          Cancel reply
                        </a>
                      </small>
                    </h3>
                    <form
                      action="http://wordpress.zcube.in/finco/wp-comments-post.php"
                      method="post"
                      id="commentform"
                      className="comment-form"
                      noValidate=""
                    >
                      <p className="comment-notes">
                        <span id="email-notes">
                          Your email address will not be published.
                        </span>{" "}
                        Required fields are marked{" "}
                        <span className="required">*</span>
                      </p>
                      <p className="comment-field">
                        <i className="fas fa-user" />
                        <input
                          id="author"
                          placeholder="Your Name"
                          name="author"
                          type="text"
                        />
                      </p>
                      <p className="comment-field">
                        <i className="fas fa-envelope" />
                        <input
                          id="email"
                          placeholder="your-real-email@example.com"
                          name="email"
                          type="text"
                        />
                      </p>
                      <p className="comment-form-comment">
                        <label htmlFor="comment">Comment</label>{" "}
                        <textarea
                          id="comment"
                          name="comment"
                          cols={45}
                          rows={8}
                          maxLength={65525}
                          required="required"
                          defaultValue={""}
                        />
                      </p>
                      <p className="form-submit">
                        <input
                          name="submit"
                          type="submit"
                          id="submit"
                          className="submit"
                          defaultValue="Post Comment"
                        />{" "}
                        <input
                          type="hidden"
                          name="comment_post_ID"
                          defaultValue={2112}
                          id="comment_post_ID"
                        />
                        <input
                          type="hidden"
                          name="comment_parent"
                          id="comment_parent"
                          defaultValue={0}
                        />
                      </p>
                    </form>
                  </div>
                </div>
              </div>
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
                      <a href="https://www.facebook.com/p/Viswam-College-of-Management-Studies-100091354450765">
                        <i className="fab fa-facebook-f" />
                      </a>
                      <a href="https://www.youtube.com/@ViswamCollageOfMangementStudie">
                        <i className="fab fa-youtube" />
                      </a>
                      <a href="https://www.instagram.com/vcms_cochin?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==">
                        <i className="fab fa-instagram" />
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
                      <a href="#">
                        User Experience Psychology And Performance Smshing
                      </a>
                      <span className="post-date">August 19, 2020</span>
                    </li>
                    <li>
                      <a href="#">
                        Monthly Web Development Up Cost Of JavaScript
                      </a>
                      <span className="post-date">August 19, 2020</span>
                    </li>
                    <li>
                      <a href="#">
                        There are many variation passages of like available.
                      </a>
                      <span className="post-date">August 19, 2020</span>
                    </li>
                  </ul>
                </section>
                <section id="tag_cloud-1" className="widget widget_tag_cloud">
                  <h2 className="widget-title">Tag</h2>
                  <div className="tagcloud">
                    <a
                      href="#"
                      className="tag-cloud-link tag-link-28 tag-link-position-1"
                      style={{ fontSize: "8pt" }}
                      aria-label="app (1 item)"
                    >
                      app
                    </a>
                    <a
                      href="#"
                      className="tag-cloud-link tag-link-17 tag-link-position-2"
                      style={{ fontSize: "8pt" }}
                      aria-label="Branding (1 item)"
                    >
                      Branding
                    </a>
                    <a
                      href="#"
                      className="tag-cloud-link tag-link-20 tag-link-position-3"
                      style={{ fontSize: "8pt" }}
                      aria-label="corporat (1 item)"
                    >
                      corporat
                    </a>
                    <a
                      href="#"
                      className="tag-cloud-link tag-link-24 tag-link-position-4"
                      style={{ fontSize: "16.4pt" }}
                      aria-label="Design (2 items)"
                    >
                      Design
                    </a>
                    <a
                      href="#"
                      className="tag-cloud-link tag-link-25 tag-link-position-5"
                      style={{ fontSize: "22pt" }}
                      aria-label="gallery (3 items)"
                    >
                      gallery
                    </a>
                    <a
                      href="#"
                      className="tag-cloud-link tag-link-26 tag-link-position-6"
                      style={{ fontSize: "8pt" }}
                      aria-label="video (1 item)"
                    >
                      video
                    </a>
                    <a
                      href="#"
                      className="tag-cloud-link tag-link-29 tag-link-position-7"
                      style={{ fontSize: "16.4pt" }}
                      aria-label="web design (2 items)"
                    >
                      web design
                    </a>
                  </div>
                </section>
              </aside>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default First;
