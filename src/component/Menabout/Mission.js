import React, { useState, useEffect, useRef } from "react";

function Mission() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);
  return (
    <>
      <style>{`
        @keyframes slideInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes pulse {
          0%, 100% {
            opacity: 1;
          }
          50% {
            opacity: 0.7;
          }
        }

        .mission-container {
          animation: slideInUp 0.8s ease-out forwards;
        }

        .mission-title {
          animation: slideInUp 0.8s ease-out 0.1s forwards;
          opacity: 0;
        }

        .mission-text {
          animation: slideInUp 0.8s ease-out 0.2s forwards;
          opacity: 0;
        }
      `}</style>
      <section
        ref={sectionRef}
        className="about-area about-p pt-30 pb-120 p-relative fix"
        style={{
          background: "#f8f9fa",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div
          className={isVisible ? "container mission-container" : "container"}
          style={{
            position: "relative",
            zIndex: 1,
            background:
              "linear-gradient(135deg, rgba(72, 153, 210, 0.7) 0%, rgba(53, 122, 168, 0.7) 100%)",
            borderRadius: "15px",
            padding: "50px 40px",
            backdropFilter: "blur(10px)",
            WebkitBackdropFilter: "blur(10px)",
            border: "1px solid rgba(255,255,255,0.2)",
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? "translateY(0)" : "translateY(30px)",
            transition: "all 0.8s ease-out",
          }}
        >
          <div className="row align-items-center">
            <div className="col-lg-12">
              <h2
                className={isVisible ? "mission-title" : ""}
                style={{
                  fontSize: "48px",
                  fontWeight: "700",
                  color: "white",
                  marginBottom: "20px",
                  lineHeight: "1.2",
                  textShadow: "0 2px 10px rgba(0,0,0,0.2)",
                  opacity: isVisible ? 1 : 0,
                  transform: isVisible ? "translateY(0)" : "translateY(30px)",
                  transition: "all 0.8s ease-out 0.1s",
                }}
              >
                Our Mission
              </h2>
              <p
                className={isVisible ? "mission-text" : ""}
                style={{
                  fontSize: "18px",
                  color: "rgba(255,255,255,0.95)",
                  lineHeight: "1.8",
                  marginBottom: "0",
                  textShadow: "0 1px 5px rgba(0,0,0,0.1)",
                  opacity: isVisible ? 1 : 0,
                  transform: isVisible ? "translateY(0)" : "translateY(30px)",
                  transition: "all 0.8s ease-out 0.2s",
                }}
              >
                At VCMS, we empower individuals with the knowledge, skills, and
                values they need to succeed in a rapidly changing world. We
                create a supportive and inclusive learning environment that
                encourages critical thinking, collaboration, and a lifelong
                passion for learning.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Mission;
