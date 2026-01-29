import React, { useState } from "react";

function Search() {
  const [formData, setFormData] = useState({
    firstn: "",
    email: "",
    instructor: "",
    department: "",
    campus: "",
    level: "",
  });

  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});

  const validateForm = () => {
    const newErrors = {};

    if (!formData.firstn.trim()) {
      newErrors.firstn = "Name is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is invalid";
    }

    return newErrors;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    if (touched[name]) {
      const newErrors = { ...errors };
      if (name === "firstn" && !value.trim()) {
        newErrors.firstn = "Name is required";
      } else if (name === "firstn") {
        delete newErrors.firstn;
      }
      if (name === "email" && !value.trim()) {
        newErrors.email = "Email is required";
      } else if (name === "email" && !/\S+@\S+\.\S+/.test(value)) {
        newErrors.email = "Email is invalid";
      } else if (name === "email") {
        delete newErrors.email;
      }
      setErrors(newErrors);
    }
  };

  const handleBlur = (e) => {
    const { name } = e.target;
    setTouched((prev) => ({
      ...prev,
      [name]: true,
    }));

    const newErrors = { ...errors };
    if (name === "firstn" && !formData.firstn.trim()) {
      newErrors.firstn = "Name is required";
    }
    if (name === "email") {
      if (!formData.email.trim()) {
        newErrors.email = "Email is required";
      } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
        newErrors.email = "Email is invalid";
      }
    }
    setErrors(newErrors);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = validateForm();

    if (Object.keys(newErrors).length === 0) {
      alert("Search submitted successfully!");
      setFormData({
        firstn: "",
        email: "",
        instructor: "",
        department: "",
        campus: "",
        level: "",
      });
      setTouched({});
    } else {
      setErrors(newErrors);
      setTouched({
        firstn: true,
        email: true,
      });
    }
  };
  return (
    <>
      <section
        className="search-area pt-120 pb-120 p-relative fix"
        style={{
          backgroundImage: "url(assets/img/bg/search_bg.png)",
          backgroundPosition: "center center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <div className="container">
          <div className="row justify-content-center  align-items-center">
            <div className="col-lg-8">
              <div className="contact-bg">
                <div className="section-title">
                  <h2>Search For Courses</h2>
                  <p>
                    Our community is being called to reimagine the future. As
                    the only university where a renowned design school comes
                    together with premier colleges, we are making learning more
                    relevant and transformational.
                  </p>
                </div>
                <form
                  action="mail.php"
                  method="post"
                  className="contact-form mt-30"
                  onSubmit={handleSubmit}
                >
                  <div className="row">
                    <div className="col-lg-6">
                      <div className="contact-field p-relative c-name mb-20">
                        <input
                          type="text"
                          id="firstn2"
                          name="firstn"
                          placeholder="First Name"
                          value={formData.firstn}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          style={{
                            borderColor:
                              errors.firstn && touched.firstn
                                ? "#dc2626"
                                : "#ccc",
                          }}
                        />
                        {errors.firstn && touched.firstn && (
                          <div
                            style={{
                              color: "#dc2626",
                              fontSize: "0.8rem",
                              marginTop: "5px",
                              display: "flex",
                              alignItems: "center",
                              gap: "4px",
                            }}
                          >
                            <i
                              className="fas fa-exclamation-circle"
                              style={{ fontSize: "0.75rem" }}
                            />
                            {errors.firstn}
                          </div>
                        )}
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="contact-field p-relative c-subject mb-20">
                        <input
                          type="email"
                          id="email3"
                          name="email"
                          placeholder="Email"
                          value={formData.email}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          style={{
                            borderColor:
                              errors.email && touched.email
                                ? "#dc2626"
                                : "#ccc",
                          }}
                        />
                        {errors.email && touched.email && (
                          <div
                            style={{
                              color: "#dc2626",
                              fontSize: "0.8rem",
                              marginTop: "5px",
                              display: "flex",
                              alignItems: "center",
                              gap: "4px",
                            }}
                          >
                            <i
                              className="fas fa-exclamation-circle"
                              style={{ fontSize: "0.75rem" }}
                            />
                            {errors.email}
                          </div>
                        )}
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="contact-field p-relative c-option mb-20">
                        <select
                          name="instructor"
                          id="instructor"
                          value={formData.instructor}
                          onChange={handleChange}
                        >
                          <option value="">Instructor</option>
                          <option value="hot-stone-message">
                            Hot Stone Message
                          </option>
                          <option value="facil-therophy">
                            Facil &amp; Therophy
                          </option>
                        </select>
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="contact-field p-relative c-option mb-20">
                        <select
                          name="department"
                          id="department"
                          value={formData.department}
                          onChange={handleChange}
                        >
                          <option value="">Department</option>
                          <option value="hot-stone-message">
                            Hot Stone Message
                          </option>
                          <option value="facil-therophy">
                            Facil &amp; Therophy
                          </option>
                        </select>
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="contact-field p-relative c-option mb-20">
                        <select
                          name="campus"
                          id="campus"
                          value={formData.campus}
                          onChange={handleChange}
                        >
                          <option value="">Campus</option>
                          <option value="hot-stone-message">
                            Hot Stone Message
                          </option>
                          <option value="facil-therophy">
                            Facil &amp; Therophy
                          </option>
                        </select>
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="contact-field p-relative c-option mb-20">
                        <select
                          name="level"
                          id="level"
                          value={formData.level}
                          onChange={handleChange}
                        >
                          <option value="">Level</option>
                          <option value="hot-stone-message">
                            Hot Stone Message
                          </option>
                          <option value="facil-therophy">
                            Facil &amp; Therophy
                          </option>
                        </select>
                      </div>
                    </div>
                    <div className="col-lg-12">
                      <div className="slider-btn">
                        <button className="btn ss-btn" type="submit">
                          Search Courses Here{" "}
                          <i className="fal fa-long-arrow-right" />
                        </button>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
            <div className="col-lg-4"></div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Search;
