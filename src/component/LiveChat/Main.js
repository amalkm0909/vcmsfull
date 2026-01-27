import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./livechat.css";
import coursesData from "../../data/coursesData";

function LiveChat() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      id: 1,
      sender: "bot",
      text: "Hello! How can we help you today? You can ask about our courses, admissions, or any other information.",
      isQuestionList: true,
    },
  ]);
  const [inputValue, setInputValue] = useState("");

  // Predefined questions/navigation options
  const predefinedQuestions = [
    { text: "View All Courses", action: "courses", icon: "fas fa-book" },
    { text: "About Us", action: "about", icon: "fas fa-info-circle" },
    { text: "Contact Us", action: "contact", icon: "fas fa-phone" },
    { text: "Events", action: "event", icon: "fas fa-calendar" },
    { text: "Gallery", action: "gallery", icon: "fas fa-images" },
    { text: "Faculty", action: "faculty", icon: "fas fa-users" },
    { text: "Blog", action: "blog", icon: "fas fa-newspaper" },
    { text: "Campus Life", action: "campus", icon: "fas fa-building" },
    { text: "FAQ", action: "faq", icon: "fas fa-question-circle" },
  ];

  // Navigation routes
  const navigationRoutes = {
    courses: "/courses",
    about: "/about",
    contact: "/contact",
    event: "/event",
    gallery: "/projects",
    faculty: "/team",
    blog: "/blog",
    campus: "/campus-life",
    faq: "/faq",
  };

  // Courses data - All 6 courses
  const courses = [
    {
      id: 1,
      name: "Ship Building And Repair Management",
      category: "Management",
      duration: "1 YEAR",
      link: "/course-details/1",
    },
    {
      id: 2,
      name: "Advanced Automotive Technology",
      category: "Technology",
      duration: "1 YEAR",
      link: "/course-details/2",
    },
    {
      id: 3,
      name: "HR And Office Administration",
      category: "Management",
      duration: "1 YEAR",
      link: "/course-details/3",
    },
    {
      id: 4,
      name: "Logistics and Shipping Management",
      category: "Logistics",
      duration: "1 YEAR",
      link: "/course-details/4",
    },
    {
      id: 5,
      name: "Hospital Administration & Accounting",
      category: "Healthcare",
      duration: "1 YEAR",
      link: "/course-details/5",
    },
    {
      id: 6,
      name: "Global Business Management",
      category: "Business",
      duration: "1 YEAR",
      link: "/course-details/6",
    },
  ];

  const handleSendMessage = () => {
    if (inputValue.trim()) {
      // Add user message
      const userMessage = {
        id: messages.length + 1,
        sender: "user",
        text: inputValue,
      };
      setMessages([...messages, userMessage]);
      setInputValue("");

      // Simulate bot response based on user input
      setTimeout(() => {
        let botResponse;
        const userInputLower = inputValue.toLowerCase();

        if (
          userInputLower.includes("course") ||
          userInputLower.includes("programs") ||
          userInputLower.includes("what") ||
          userInputLower.includes("available")
        ) {
          botResponse = {
            id: messages.length + 2,
            sender: "bot",
            text: "courses",
            isCoursesDisplay: true,
          };
        } else if (
          userInputLower.includes("navigation") ||
          userInputLower.includes("link") ||
          userInputLower.includes("explore")
        ) {
          botResponse = {
            id: messages.length + 2,
            sender: "bot",
            text: "navigation",
            isNavigationDisplay: true,
          };
        } else {
          botResponse = {
            id: messages.length + 2,
            sender: "bot",
            text: "Thank you for your message! We will get back to you soon. You can also ask about our courses or explore our website.",
          };
        }
        setMessages((prev) => [...prev, botResponse]);
      }, 500);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSendMessage();
    }
  };

  const handleWhatsAppRedirect = () => {
    // WhatsApp API URL - Replace with your actual WhatsApp number
    const phoneNumber = "918593977877"; // +91 8593977877
    const message = "Hello! I would like to know more about your courses.";
    const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      message
    )}`;
    window.open(whatsappURL, "_blank");
  };

  const handleContactRedirect = () => {
    // Navigate to contact page
    window.location.href = "/contact";
  };

  const handlePhoneCall = () => {
    // Direct phone call
    window.location.href = "tel:+918593977877";
  };

  const handleQuestionClick = (action, questionText) => {
    // Add user message showing which question was clicked
    const userMessage = {
      id: messages.length + 1,
      sender: "user",
      text: questionText,
    };
    setMessages((prev) => [...prev, userMessage]);

    // Navigate to the corresponding page
    if (navigationRoutes[action]) {
      setTimeout(() => {
        window.location.href = navigationRoutes[action];
      }, 300);
    }
  };

  return (
    <>
      {/* Live Chat Widget */}
      <div className={`live-chat-widget ${isOpen ? "open" : ""}`}>
        {/* Chat Header */}
        <div className="chat-header">
          <div className="chat-title">
            <h3>Live Chat</h3>
            <p>We're online!</p>
          </div>
          <div
            className="chat-header-buttons"
            style={{ display: "flex", gap: "8px" }}
          >
            <button
              className="chat-whatsapp-btn"
              onClick={handleWhatsAppRedirect}
              title="Chat on WhatsApp"
              style={{
                background: "#25D366",
                color: "white",
                border: "none",
                padding: "6px 10px",
                borderRadius: "4px",
                cursor: "pointer",
                fontSize: "14px",
                display: "flex",
                alignItems: "center",
                gap: "4px",
                transition: "all 0.3s ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "#1DA1F2";
                e.currentTarget.style.transform = "scale(1.05)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "#25D366";
                e.currentTarget.style.transform = "scale(1)";
              }}
            >
              <i className="fab fa-whatsapp"></i>
              <span>WhatsApp</span>
            </button>
            <button className="chat-close-btn" onClick={() => setIsOpen(false)}>
              <i className="fas fa-times"></i>
            </button>
          </div>
        </div>

        {/* Chat Messages */}
        <div className="chat-messages">
          {messages.map((msg) => (
            <div key={msg.id} className={`message ${msg.sender}`}>
              <div className="message-bubble">
                {msg.isCoursesDisplay ? (
                  <div className="courses-list">
                    <p style={{ marginBottom: "10px", fontWeight: "bold" }}>
                      Our Available Courses:
                    </p>
                    {courses.map((course) => (
                      <div
                        key={course.id}
                        className="course-item"
                        style={{
                          marginBottom: "8px",
                          paddingBottom: "8px",
                          borderBottom: "1px solid #e0e0e0",
                        }}
                      >
                        <div style={{ fontSize: "13px", fontWeight: "600" }}>
                          {course.name}
                        </div>
                        <div style={{ fontSize: "12px", color: "#666" }}>
                          Category: {course.category} | Duration:{" "}
                          {course.duration}
                        </div>
                        <Link
                          to={course.link}
                          style={{
                            fontSize: "12px",
                            color: "#007bff",
                            textDecoration: "none",
                            display: "inline-block",
                            marginTop: "4px",
                          }}
                        >
                          View Details →
                        </Link>
                      </div>
                    ))}
                  </div>
                ) : msg.isNavigationDisplay ? (
                  <div className="navigation-list">
                    <p style={{ marginBottom: "10px", fontWeight: "bold" }}>
                      Navigation Links:
                    </p>
                    <ul style={{ paddingLeft: "16px", margin: 0 }}>
                      <li style={{ marginBottom: "6px" }}>
                        <Link
                          to="/"
                          style={{
                            color: "#007bff",
                            textDecoration: "none",
                            fontSize: "13px",
                          }}
                        >
                          Home
                        </Link>
                      </li>
                      <li style={{ marginBottom: "6px" }}>
                        <Link
                          to="/courses"
                          style={{
                            color: "#007bff",
                            textDecoration: "none",
                            fontSize: "13px",
                          }}
                        >
                          Courses
                        </Link>
                      </li>
                      <li style={{ marginBottom: "6px" }}>
                        <Link
                          to="/about"
                          style={{
                            color: "#007bff",
                            textDecoration: "none",
                            fontSize: "13px",
                          }}
                        >
                          About Us
                        </Link>
                      </li>
                      <li style={{ marginBottom: "6px" }}>
                        <Link
                          to="/blog"
                          style={{
                            color: "#007bff",
                            textDecoration: "none",
                            fontSize: "13px",
                          }}
                        >
                          Blog
                        </Link>
                      </li>
                      <li style={{ marginBottom: "6px" }}>
                        <Link
                          to="/contact"
                          style={{
                            color: "#007bff",
                            textDecoration: "none",
                            fontSize: "13px",
                          }}
                        >
                          Contact Us
                        </Link>
                      </li>
                    </ul>
                  </div>
                ) : msg.isQuestionList ? (
                  <div className="question-list">
                    <p
                      style={{
                        marginBottom: "12px",
                        fontWeight: "bold",
                        fontSize: "14px",
                      }}
                    >
                      Quick Navigation:
                    </p>
                    <div
                      style={{
                        display: "grid",
                        gridTemplateColumns: "repeat(2, 1fr)",
                        gap: "8px",
                      }}
                    >
                      {predefinedQuestions.map((question, index) => (
                        <button
                          key={index}
                          onClick={() =>
                            handleQuestionClick(question.action, question.text)
                          }
                          style={{
                            padding: "10px 12px",
                            backgroundColor: "#e3f2fd",
                            border: "1px solid #90caf9",
                            borderRadius: "6px",
                            cursor: "pointer",
                            fontSize: "12px",
                            fontWeight: "500",
                            color: "#1976d2",
                            transition: "all 0.2s ease",
                            display: "flex",
                            alignItems: "center",
                            gap: "6px",
                            justifyContent: "center",
                          }}
                          onMouseEnter={(e) => {
                            e.currentTarget.style.backgroundColor = "#bbdefb";
                            e.currentTarget.style.transform =
                              "translateY(-2px)";
                          }}
                          onMouseLeave={(e) => {
                            e.currentTarget.style.backgroundColor = "#e3f2fd";
                            e.currentTarget.style.transform = "translateY(0)";
                          }}
                        >
                          <i
                            className={question.icon}
                            style={{ fontSize: "11px" }}
                          ></i>
                          {question.text}
                        </button>
                      ))}
                    </div>
                  </div>
                ) : (
                  msg.text
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Chat Input */}
        <div className="chat-input-area">
          <input
            type="text"
            placeholder="Type your message..."
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyPress={handleKeyPress}
            className="chat-input"
          />
          <button onClick={handleSendMessage} className="chat-send-btn">
            <i className="fas fa-paper-plane"></i>
          </button>
        </div>
      </div>

      {/* Floating Chat Button */}
      <div
        className="live-chat-buttons"
        style={{
          position: "fixed",
          bottom: "20px",
          right: "20px",
          display: "flex",
          flexDirection: "column",
          gap: "10px",
          zIndex: 999,
        }}
      >
        {/* WhatsApp Button */}
        <button
          className="live-whatsapp-floating-btn"
          onClick={handleWhatsAppRedirect}
          title="Chat on WhatsApp"
          style={{
            width: "56px",
            height: "56px",
            borderRadius: "50%",
            background: "#25D366",
            color: "white",
            border: "none",
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: "24px",
            boxShadow: "0 4px 12px rgba(37, 211, 102, 0.4)",
            transition: "all 0.3s ease",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = "scale(1.1)";
            e.currentTarget.style.boxShadow =
              "0 6px 16px rgba(37, 211, 102, 0.6)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = "scale(1)";
            e.currentTarget.style.boxShadow =
              "0 4px 12px rgba(37, 211, 102, 0.4)";
          }}
        >
          <i className="fab fa-whatsapp"></i>
        </button>

        {/* Phone Call Button */}
        <button
          className="live-phone-floating-btn"
          onClick={handlePhoneCall}
          title="Call Us"
          style={{
            width: "56px",
            height: "56px",
            borderRadius: "50%",
            background: "#4CAF50",
            color: "white",
            border: "none",
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: "24px",
            boxShadow: "0 4px 12px rgba(76, 175, 80, 0.4)",
            transition: "all 0.3s ease",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = "scale(1.1)";
            e.currentTarget.style.boxShadow =
              "0 6px 16px rgba(76, 175, 80, 0.6)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = "scale(1)";
            e.currentTarget.style.boxShadow =
              "0 4px 12px rgba(76, 175, 80, 0.4)";
          }}
        >
          <i className="fas fa-phone"></i>
        </button>

        {/* Live Chat Button */}
        <button
          className={`live-chat-btn ${isOpen ? "hide" : ""}`}
          onClick={() => setIsOpen(true)}
          title="Open Live Chat"
        >
          <i className="fas fa-comments"></i>
          <span className="chat-badge">1</span>
        </button>
      </div>
    </>
  );
}

export default LiveChat;
