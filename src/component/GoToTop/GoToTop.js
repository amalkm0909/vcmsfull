import React, { useState, useEffect } from "react";

function GoToTop() {
  const [isVisible, setIsVisible] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 992);

  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const handleResize = () => {
    setIsMobile(window.innerWidth < 992);
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("scroll", toggleVisibility);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      {isVisible && !isMobile && (
        <button
          onClick={scrollToTop}
          style={{
            position: "fixed",
            bottom: "30px",
            left: "30px",
            backgroundColor: "#4899d2",
            color: "#fff",
            border: "none",
            borderRadius: "50%",
            width: "50px",
            height: "50px",
            fontSize: "24px",
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            zIndex: 999,
            boxShadow: "0 4px 12px rgba(72, 153, 210, 0.4)",
            transition: "all 0.3s ease",
          }}
          onMouseEnter={(e) => {
            e.target.style.backgroundColor = "#003D7A";
            e.target.style.boxShadow = "0 6px 20px rgba(0, 61, 122, 0.5)";
            e.target.style.transform = "translateY(-3px)";
          }}
          onMouseLeave={(e) => {
            e.target.style.backgroundColor = "#4899d2";
            e.target.style.boxShadow = "0 4px 12px rgba(72, 153, 210, 0.4)";
            e.target.style.transform = "translateY(0)";
          }}
          title="Go to top"
        >
          <i className="fas fa-arrow-up"></i>
        </button>
      )}
    </>
  );
}

export default GoToTop;
