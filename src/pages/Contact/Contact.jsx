import React from "react";
import { GoArrowRight } from "react-icons/go";
import {
  GoCommentDiscussion,
  GoPerson,
  GoMail,
  GoDeviceMobile,
} from "react-icons/go";
import styles from "./Contact.module.css";
import AnimatedLetterHeading from "../../components/AnimatedLetterHeading/AnimatedLetterHeading";
import AnimatedContent from "../../components/AnimatedContent/AnimatedContent.jsx";

const Contact = () => {
  const animProps = {
    distance: 150,
    direction: "vertical",
    reverse: false,
    duration: 1.2,
    ease: "power2.out",
    initialOpacity: 0.1,
    animateOpacity: true,
    threshold: 0.01,
    delay: 0.3,
  };

  return (
    <>
      {/* ===============================
          SECTION 0 – HERO
      =============================== */}
      <AnimatedContent {...animProps}>
        <section className={styles["wa-contact-hero-section"]}>
          <div className={styles["wa-contact-hero-bg"]} />
          <div className={styles["wa-contact-hero-overlay"]}>
            <div className={styles["wa-contact-hero-content"]}>
              <AnimatedLetterHeading
                text="Contact"
                tag="h1"
                className={styles["wa-contact-hero-title"]}
              />
            </div>
          </div>
        </section>
      </AnimatedContent>

      {/* ===============================
          SECTION 1 – CONTACT FORM
      =============================== */}
      <AnimatedContent {...animProps}>
        <section className={styles["wa-contact-hero"]}>
          <div
            className={`${styles["wa-contact-container"]} ${styles["wa-contact-grid"]}`}
          >
            {/* LEFT */}
            <div className={styles["wa-contact-left"]}>
              <AnimatedLetterHeading
                text="Tell Us What's on Your Mind?"
                tag="h1"
                className={styles["wa-contact-heading"]}
              />
              <p className={styles["wa-contact-subtext"]}>
                Shoot anything that pops up in your head. From artificial
                intelligence to fun memes, we are all ears!
              </p>
            </div>

            {/* RIGHT */}
            <div className={styles["wa-contact-form-wrap"]}>
              <form className={styles["wa-contact-form"]}>
                <div className={styles["wa-form-row"]}>
                  <div className={styles["wa-form-field"]}>
                    <label>First Name*</label>
                    <input type="text" placeholder="Enter first name" />
                  </div>
                  <div className={styles["wa-form-field"]}>
                    <label>Last Name</label>
                    <input type="text" placeholder="Enter last name" />
                  </div>
                </div>

                <div className={styles["wa-form-row"]}>
                  <div className={styles["wa-form-field"]}>
                    <label>Email*</label>
                    <input type="email" placeholder="Enter email" />
                  </div>
                  <div className={styles["wa-form-field"]}>
                    <label>Phone Number*</label>
                    <input type="tel" placeholder="Enter your number" />
                  </div>
                </div>

                <div className={styles["wa-form-field"]}>
                  <label>Company Name</label>
                  <input type="text" placeholder="Enter your company name" />
                </div>

                <div className={styles["wa-form-field"]}>
                  <label>Tell Us More</label>
                  <textarea placeholder="Brief about your project" />
                </div>

                <div className={styles["wa-form-consent"]}>
                  <input type="checkbox" id="wa-policy" />
                  <label htmlFor="wa-policy">
                    I have read the <a href="/privacy-policy">privacy policy</a>{" "}
                    and consent to the processing of my data
                  </label>
                </div>

                <button className={styles["wa-contact-submit"]}>
                  Send Enquiry <GoArrowRight className={styles["arrow-icon"]} />
                </button>
              </form>
            </div>
          </div>
        </section>
      </AnimatedContent>

      {/* ===============================
          SECTION 2 – CONTACT INFO
      =============================== */}
      <AnimatedContent {...animProps}>
        <section className={styles["wa-contact-info"]}>
          <div className={styles["wa-contact-container"]}>
            <h2 className={styles["wa-info-heading"]}>Contact Us</h2>
            <p className={styles["wa-info-subtext"]}>
              Shoot anything that pops up in your head. From artificial
              intelligence to fun memes, we are all ears!
            </p>

            <div className={styles["wa-info-grid"]}>
              {/* LEFT */}
              <div className={styles["wa-location-box"]}>
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/d/d1/Charminar-Pride_of_Hyderabad.jpg"
                  alt="India"
                />
                <div className={styles["wa-location-meta"]}>
                  <p>244 Brooks Street, Brooklyn, Pretoria</p>
                  {/* <a href="https://maps.google.com">Google Maps</a> */}
                </div>
              </div>

              {/* RIGHT */}
              <div>
                <div className={styles["wa-info-cards"]}>
                  <InfoCard
                    icon={<GoCommentDiscussion />}
                    title="General Enquiry"
                    value=" +27 073 335 6100"
                  />
                  <InfoCard
                    icon={<GoPerson />}
                    title="Sales Enquiry"
                    value="+27 073 335 6100"
                  />
                  <InfoCard
                    icon={<GoMail />}
                    title="Email"
                    value="info@webanatomy.in"
                  />
                  <InfoCard
                    icon={<GoDeviceMobile />}
                    title="HR Enquiry"
                    value="+27 073 335 6100"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      </AnimatedContent>
    </>
  );
};

const InfoCard = ({ icon, title, value }) => (
  <div className={styles["wa-info-card"]}>
    <div className={styles["wa-info-icon"]}>{icon}</div>
    <div>
      <span>{title}</span>
      <strong>{value}</strong>
    </div>
  </div>
);

export default Contact;
