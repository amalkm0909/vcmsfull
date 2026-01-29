import React from "react";
import GoToTop from "../../GoToTop/GoToTop";

const TermsCondition = () => {
  return (
    <>
      <div
        className="breadcrumb"
        style={{
          background: "linear-gradient(135deg, #4899d2 0%, #003D7A 100%)",
          padding: "40px 0",
          color: "#fff",
          marginBottom: "40px",
        }}
      ></div>

      <div className="container" style={{ marginBottom: "60px" }}>
        <div style={{ maxWidth: "900px", margin: "0 auto" }}>
          <h1
            style={{
              color: "#003D7A",
              fontSize: "32px",
              fontWeight: "700",
              marginBottom: "30px",
              textAlign: "center",
            }}
          >
            Terms & Conditions
          </h1>
          <div style={{ lineHeight: "1.8", color: "#333", fontSize: "15px" }}>
            <section style={{ marginBottom: "30px" }}>
              <h2
                style={{
                  color: "#003D7A",
                  fontSize: "22px",
                  fontWeight: "700",
                  marginBottom: "15px",
                }}
              >
                Acceptance of Terms
              </h2>
              <p>
                By accessing and using the VCMS College https://vcmskerala.in/,
                you agree to comply with and be bound by these Terms and
                Conditions. If you do not agree with any of these terms, please
                refrain from using the Website.
              </p>
            </section>

            <section style={{ marginBottom: "30px" }}>
              <h2
                style={{
                  color: "#003D7A",
                  fontSize: "22px",
                  fontWeight: "700",
                  marginBottom: "15px",
                }}
              >
                Intellectual Property Rights
              </h2>
              <p>
                All content, trademarks, logos, graphics, and other intellectual
                property displayed on the Website are the property of VCMS
                College or its licensors. You may not use, reproduce,
                distribute, or modify any content from the Website without prior
                written consent.
              </p>
            </section>

            <section style={{ marginBottom: "30px" }}>
              <h2
                style={{
                  color: "#003D7A",
                  fontSize: "22px",
                  fontWeight: "700",
                  marginBottom: "15px",
                }}
              >
                Privacy Policy
              </h2>
              <p>
                Your use of the Website is also governed by our Privacy Policy.
                Please review the Privacy Policy to understand how we collect,
                use, and protect your personal information.
              </p>
            </section>

            <section style={{ marginBottom: "30px" }}>
              <h2
                style={{
                  color: "#003D7A",
                  fontSize: "22px",
                  fontWeight: "700",
                  marginBottom: "15px",
                }}
              >
                Links to Third-Party Websites
              </h2>
              <p>
                The Website may contain links to third-party websites for your
                convenience. VCMS College does not endorse or control the
                content of these websites and is not responsible for their
                accuracy, legality, or any issues that may arise from their use.
              </p>
            </section>

            <section style={{ marginBottom: "30px" }}>
              <h2
                style={{
                  color: "#003D7A",
                  fontSize: "22px",
                  fontWeight: "700",
                  marginBottom: "15px",
                }}
              >
                Termination
              </h2>
              <p>
                VCMS College reserves the right to terminate, suspend, or modify
                the Website or your access to it at any time without notice.
              </p>
            </section>

            <section style={{ marginBottom: "30px" }}>
              <h2
                style={{
                  color: "#003D7A",
                  fontSize: "22px",
                  fontWeight: "700",
                  marginBottom: "15px",
                }}
              >
                Changes to Terms and Conditions
              </h2>
              <p>
                We reserve the right to update or modify these Terms and
                Conditions at any time without prior notice. Your continued use
                of the Website after such changes indicates your acceptance of
                the updated terms.
              </p>
            </section>

            <section style={{ marginBottom: "30px" }}>
              <h2
                style={{
                  color: "#003D7A",
                  fontSize: "22px",
                  fontWeight: "700",
                  marginBottom: "15px",
                }}
              >
                Governing Law
              </h2>
              <p>
                These Terms and Conditions shall be governed by and construed in
                accordance with the Laws of India, without regard to its
                conflict of law principles.
              </p>
            </section>

            <section style={{ marginBottom: "30px" }}>
              <p
                style={{
                  fontSize: "13px",
                  color: "#999",
                  marginTop: "40px",
                  paddingTop: "20px",
                  borderTop: "1px solid #eee",
                }}
              >
                <strong>For more information, contact us at:</strong>
                <br />
                Email: info@vcmskerala.in
              </p>
            </section>
          </div>
        </div>
      </div>

      <GoToTop />
    </>
  );
};

export default TermsCondition;
