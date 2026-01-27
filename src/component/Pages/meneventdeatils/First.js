import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import eventImg1 from "../../../assets/img/bg/evn-img-1.webp";
import eventImg2 from "../../../assets/img/bg/evn-img-02.webp";
import eventImg3 from "../../../assets/img/bg/evn-img-3.webp";
import eventImg4 from "../../../assets/img/bg/evn-img-4.webp";
import eventImg5 from "../../../assets/img/bg/evn-img-5.webp";
import eventImg6 from "../../../assets/img/bg/evn-img-6.webp";

const eventsData = [
  {
    id: 1,
    date: "16 January, 2026",
    title: "Industry Expert Webinar: Logistics Excellence",
    image: eventImg1,
    description:
      "Learn from industry leaders about modern logistics and supply chain management best practices.",
    time: "2:00 pm - 3:30 pm",
    location: "Online",
    fullDescription:
      "The world of search engine optimization is complex and ever-changing, but you can easily understand the basics, and even a small amount of SEO knowledge can make a big difference. Free SEO education is also widely available on the web, including in guides like this! (Woohoo!) This guide is designed to describe all major aspects of SEO, from finding the terms and phrases (keywords) that can generate qualified traffic to your website, to making your site friendly to search engines, to building links and marketing the unique value of your site.Etiam pharetra erat sed fermentum feugiat velit mauris egestas quam ut erat justo.",
  },
  {
    id: 2,
    date: "19 January, 2026",
    title: "Workshop: Career Advancement in Automotive Sector",
    image: eventImg2,
    description:
      "Discover opportunities and skills needed for career growth in the automotive industry.",
    time: "10:00 am - 12:00 pm",
    location: "VCMS, Kochi",
    fullDescription:
      "The automotive industry is rapidly evolving with new technologies and opportunities. This workshop covers the latest trends, career paths, and skills required to excel in the automotive sector. Learn from industry professionals about emerging technologies like electric vehicles, autonomous driving, and smart manufacturing.",
  },
  {
    id: 3,
    date: "23 January, 2026",
    title: "Placement Drive: Top Companies Hiring",
    image: eventImg3,
    description:
      "Meet leading companies and explore job opportunities across various sectors.",
    time: "3:00 pm - 5:00 pm",
    location: "VCMS, Kochi",
    fullDescription:
      "Our annual placement drive brings together leading companies from various industries looking to hire talented professionals. This is a golden opportunity to network with recruiters, learn about job openings, and potentially secure your dream job. Companies from IT, logistics, healthcare, and business sectors will be present.",
  },
  {
    id: 4,
    date: "26 January, 2026",
    title: "Seminar: Digital Transformation in Business",
    image: eventImg4,
    description:
      "Understand how digital technologies are reshaping business operations and career prospects.",
    time: "11:00 am - 1:00 pm",
    location: "Online",
    fullDescription:
      "Digital transformation is no longer optional—it's essential for business success. This seminar explores how organizations are leveraging cloud computing, AI, big data, and automation to improve operations and create new revenue streams. Learn how these technologies are creating new career opportunities.",
  },
  {
    id: 5,
    date: "30 January, 2026",
    title: "Alumni Success Talk: Real-World Career Insights",
    image: eventImg5,
    description:
      "Hear from VCMS alumni about their journey and success stories in various industries.",
    time: "4:00 pm - 5:30 pm",
    location: "VCMS, Kochi",
    fullDescription:
      "Our successful alumni will share their career journeys, challenges they overcame, and lessons they learned. This interactive session provides real-world insights and practical advice for students and professionals. Learn directly from those who have achieved success in their respective fields.",
  },
  {
    id: 6,
    date: "03 February, 2026",
    title: "Skill Enhancement Session: Interview Preparation",
    image: eventImg6,
    description:
      "Master interview techniques and learn how to showcase your skills effectively to employers.",
    time: "2:30 pm - 4:00 pm",
    location: "VCMS, Kochi",
    fullDescription:
      "Interviews can be nerve-wracking, but with the right preparation, you can ace them. This session covers interview strategies, common questions, body language, and techniques to handle difficult questions. Learn how to present yourself confidently and leave a lasting impression on recruiters.",
  },
];

function First() {
  const { eventId } = useParams();
  const [event, setEvent] = useState(eventsData[0]);

  useEffect(() => {
    const selectedEvent = eventsData.find(
      (e) => e.id === parseInt(eventId) || e.id === 1,
    );
    if (selectedEvent) {
      setEvent(selectedEvent);
    }

    // Parse event date and set countdown time to 10:00 AM on that date
    const eventDate = selectedEvent ? selectedEvent.date : "15 January, 2026";
    const countDownDate = new Date(eventDate + " 10:00:00").getTime();

    let x = setInterval(function () {
      let now = new Date().getTime();
      let distance = countDownDate - now;

      let days = Math.floor(distance / (1000 * 60 * 60 * 24));
      let hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60),
      );
      let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      let seconds = Math.floor((distance % (1000 * 60)) / 1000);

      const dayElement = document.getElementById("day");
      const hoursElement = document.getElementById("hours");
      const minutesElement = document.getElementById("minutes");
      const secondsElement = document.getElementById("seconds");

      if (dayElement) dayElement.innerHTML = days;
      if (hoursElement) hoursElement.innerHTML = hours;
      if (minutesElement) minutesElement.innerHTML = minutes;
      if (secondsElement) secondsElement.innerHTML = seconds;

      if (distance < 0) {
        clearInterval(x);
        if (dayElement) dayElement.innerHTML = "0";
        if (hoursElement) hoursElement.innerHTML = "0";
        if (minutesElement) minutesElement.innerHTML = "0";
        if (secondsElement) secondsElement.innerHTML = "0";
      }
    }, 1000);

    return () => clearInterval(x);
  }, [eventId]);

  return (
    <>
      <section className="project-detail">
        <div className="container">
          <div className="upper-box">
            <div className="single-item-carousel owl-carousel owl-theme">
              <figure className="image">
                <img
                  src={event.image}
                  alt={event.title}
                  style={{ borderRadius: "12px" }}
                />
              </figure>
            </div>
          </div>

          <div className="lower-content2">
            <div className="row">
              <div className="text-column col-lg-9 col-md-12 col-sm-12">
                <div
                  className="s-about-content wow fadeInRight"
                  data-animation="fadeInRight"
                  data-delay=".2s"
                >
                  <h2>{event.title}</h2>
                  <p>{event.fullDescription}</p>
                  <div
                    countdown=""
                    className="conterdown wow fadeInDown animated"
                    data-animation="fadeInDown animated"
                    data-delay=".2s"
                    data-date="Jan 1 2024 00:00:00"
                  >
                    <div className="timer">
                      <div className="timer-outer bdr1">
                        <span className="days" data-days="" id="day">
                          {" "}
                          0{" "}
                        </span>
                        <div className="smalltext">Days</div>
                        <div className="value-bar" />
                      </div>
                      <div className="timer-outer bdr2">
                        <span className="hours" data-hours="" id="hours">
                          {" "}
                          0{" "}
                        </span>
                        <div className="smalltext">Hours</div>
                      </div>
                      <div className="timer-outer bdr3">
                        <span className="minutes" data-minutes="" id="minutes">
                          {" "}
                          0{" "}
                        </span>
                        <div className="smalltext">Minutes</div>
                      </div>
                      <div className="timer-outer bdr4">
                        <span className="seconds" data-seconds="" id="seconds">
                          {" "}
                          0{" "}
                        </span>
                        <div className="smalltext">Seconds</div>
                      </div>
                      <p id="time-up" />
                    </div>
                  </div>
                  <p>
                    Fusce eleifend donec sapien sed phase lusa pellentesque
                    lacus.Vivamus lorem arcu semper duiac. Cras ornare arcu
                    avamus nda leo Etiam ind arcu. Morbi justo mauris tempus
                    pharetra interdum at congue semper purus. Lorem ipsum dolor
                    sit.The world of search engine optimization is complex and
                    ever-changing, but you can easily understand the basics.
                  </p>
                  <p>
                    Lorem ipsum is simply free text used by copytyping
                    refreshing. Neque porro est qui dolorem ipsum quia quaed
                    inventore veritatis et quasi architecto beatae vitae dicta
                    sunt explicabo. Aelltes port lacus quis enim var sed
                    efficitur turpis gilla sed sit amet finibus eros. Lorem
                    Ipsum is simply dummy text of the printing.
                  </p>
                  <div className="two-column mt-30">
                    <div className="row aling-items-center">
                      <div className="image-column col-xl-6 col-lg-12 col-md-12">
                        <div className="footer-social mt-10">
                          <a href="#">
                            <i className="fab fa-facebook-f" />
                          </a>
                          <a href="#">
                            <i className="fab fa-instagram" />
                          </a>
                          <a href="#">
                            <i className="fab fa-twitter" />
                          </a>
                        </div>
                      </div>
                      <div className="text-column col-xl-6 col-lg-12 col-md-12 text-right"></div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="info-column col-lg-3 col-md-12 col-sm-12">
                <div className="inner-column2">
                  <h3>Event Details</h3>
                  <ul className="project-info clearfix">
                    <li>
                      <span className="icon fal fa-clock" />
                      <strong>{event.time}</strong>
                    </li>
                    <li>
                      <span className="icon fal fa-calendar-alt" />
                      <strong>{event.date}</strong>
                    </li>
                    <li>
                      <span className="icon fal fa-map-marker-check" />
                      <strong>{event.location}</strong>
                    </li>
                    <li>
                      <span className="icon fal fa-envelope" />
                      <strong>events@vcms.com</strong>
                    </li>
                    <li>
                      <span className="icon fal fa-phone" />
                      <strong>+91 705 2101 786</strong>
                    </li>
                    <li>
                      <div className="slider-btn">
                        <Link to="/contact" className="btn ss-btn smoth-scroll">
                          Book A Seat <i className="fal fa-long-arrow-right" />
                        </Link>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default First;
